<?php
if (!defined('ABSPATH')) exit;

class FOCUS_About_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'focus_about';
    }

    public function get_title() {
        return esc_html__('FOCUS About', 'focus-elementor');
    }

    public function get_icon() {
        return 'eicon-info-circle';
    }

    public function get_categories() {
        return ['focus'];
    }

    protected function register_controls() {
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'focus-elementor'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'mandate_photo',
            [
                'label' => esc_html__('Mandate Photo', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::MEDIA,
                'default' => [
                    'url' => \Elementor\Utils::get_placeholder_image_src(),
                ],
            ]
        );

        $this->add_control(
            'title',
            [
                'label' => esc_html__('Title', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Qui sommes-nous ?', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'content',
            [
                'label' => esc_html__('Content', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::WYSIWYG,
                'default' => esc_html__('FOCUS est l\'association audiovisuelle d\'emlyon business school...', 'focus-elementor'),
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="focus-about">
            <div class="focus-about-bg">
                <div class="focus-orb focus-orb-1"></div>
                <div class="focus-orb focus-orb-2"></div>
            </div>
            
            <div class="focus-container">
                <div class="focus-about-grid">
                    <div class="focus-about-image">
                        <?php if ($settings['mandate_photo']['url']) : ?>
                            <img src="<?php echo esc_url($settings['mandate_photo']['url']); ?>" alt="Mandat FOCUS" />
                            <div class="focus-image-overlay"></div>
                        <?php endif; ?>
                    </div>
                    
                    <div class="focus-about-content">
                        <h2 class="focus-section-title">
                            <?php echo esc_html($settings['title']); ?>
                        </h2>
                        <div class="focus-title-underline"></div>
                        
                        <div class="focus-about-text">
                            <?php echo wp_kses_post($settings['content']); ?>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <?php
    }
}
