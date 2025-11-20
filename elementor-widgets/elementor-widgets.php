<?php
/**
 * Plugin Name: FOCUS Elementor Widgets
 * Description: Custom Elementor widgets for FOCUS website
 * Version: 1.0.0
 * Author: FOCUS
 */

if (!defined('ABSPATH')) exit;

final class FOCUS_Elementor_Widgets {
    const VERSION = '1.0.0';
    const MINIMUM_ELEMENTOR_VERSION = '3.0.0';
    const MINIMUM_PHP_VERSION = '7.4';

    private static $_instance = null;

    public static function instance() {
        if (is_null(self::$_instance)) {
            self::$_instance = new self();
        }
        return self::$_instance;
    }

    public function __construct() {
        add_action('plugins_loaded', [$this, 'init']);
    }

    public function init() {
        // Check if Elementor installed and activated
        if (!did_action('elementor/loaded')) {
            add_action('admin_notices', [$this, 'admin_notice_missing_main_plugin']);
            return;
        }

        // Check for required Elementor version
        if (!version_compare(ELEMENTOR_VERSION, self::MINIMUM_ELEMENTOR_VERSION, '>=')) {
            add_action('admin_notices', [$this, 'admin_notice_minimum_elementor_version']);
            return;
        }

        // Check for required PHP version
        if (version_compare(PHP_VERSION, self::MINIMUM_PHP_VERSION, '<')) {
            add_action('admin_notices', [$this, 'admin_notice_minimum_php_version']);
            return;
        }

        // Register widgets
        add_action('elementor/widgets/register', [$this, 'register_widgets']);

        // Register widget styles
        add_action('elementor/frontend/after_enqueue_styles', [$this, 'widget_styles']);
        
        // Register widget scripts
        add_action('elementor/frontend/after_register_scripts', [$this, 'widget_scripts']);

        // Register widget category
        add_action('elementor/elements/categories_registered', [$this, 'add_widget_category']);
    }

    public function admin_notice_missing_main_plugin() {
        $message = sprintf(
            esc_html__('"%1$s" requires "%2$s" to be installed and activated.', 'focus-elementor'),
            '<strong>' . esc_html__('FOCUS Elementor Widgets', 'focus-elementor') . '</strong>',
            '<strong>' . esc_html__('Elementor', 'focus-elementor') . '</strong>'
        );
        printf('<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message);
    }

    public function admin_notice_minimum_elementor_version() {
        $message = sprintf(
            esc_html__('"%1$s" requires "%2$s" version %3$s or greater.', 'focus-elementor'),
            '<strong>' . esc_html__('FOCUS Elementor Widgets', 'focus-elementor') . '</strong>',
            '<strong>' . esc_html__('Elementor', 'focus-elementor') . '</strong>',
            self::MINIMUM_ELEMENTOR_VERSION
        );
        printf('<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message);
    }

    public function admin_notice_minimum_php_version() {
        $message = sprintf(
            esc_html__('"%1$s" requires "%2$s" version %3$s or greater.', 'focus-elementor'),
            '<strong>' . esc_html__('FOCUS Elementor Widgets', 'focus-elementor') . '</strong>',
            '<strong>' . esc_html__('PHP', 'focus-elementor') . '</strong>',
            self::MINIMUM_PHP_VERSION
        );
        printf('<div class="notice notice-warning is-dismissible"><p>%1$s</p></div>', $message);
    }

    public function register_widgets($widgets_manager) {
        require_once(__DIR__ . '/widgets/hero.php');
        require_once(__DIR__ . '/widgets/about.php');
        require_once(__DIR__ . '/widgets/services.php');
        require_once(__DIR__ . '/widgets/realisations.php');
        require_once(__DIR__ . '/widgets/benefits.php');
        require_once(__DIR__ . '/widgets/contact.php');

        $widgets_manager->register(new \FOCUS_Hero_Widget());
        $widgets_manager->register(new \FOCUS_About_Widget());
        $widgets_manager->register(new \FOCUS_Services_Widget());
        $widgets_manager->register(new \FOCUS_Realisations_Widget());
        $widgets_manager->register(new \FOCUS_Benefits_Widget());
        $widgets_manager->register(new \FOCUS_Contact_Widget());
    }

    public function widget_styles() {
        wp_enqueue_style('focus-widgets', plugins_url('assets/style.css', __FILE__), [], self::VERSION);
    }

    public function widget_scripts() {
        wp_register_script('focus-widgets', plugins_url('assets/script.js', __FILE__), ['jquery'], self::VERSION, true);
    }

    public function add_widget_category($elements_manager) {
        $elements_manager->add_category(
            'focus',
            [
                'title' => esc_html__('FOCUS', 'focus-elementor'),
                'icon' => 'fa fa-video',
            ]
        );
    }
}

FOCUS_Elementor_Widgets::instance();
