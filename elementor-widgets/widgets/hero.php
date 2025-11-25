<?php
if (!defined('ABSPATH')) exit;

class FOCUS_Hero_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'focus_hero';
    }

    public function get_title() {
        return esc_html__('FOCUS Hero', 'focus-elementor');
    }

    public function get_icon() {
        return 'eicon-header';
    }

    public function get_categories() {
        return ['focus'];
    }

    public function get_keywords() {
        return ['focus', 'hero', 'header'];
    }

    protected function register_controls() {
        // Content Section
        $this->start_controls_section(
            'content_section',
            [
                'label' => esc_html__('Content', 'focus-elementor'),
                'tab' => \Elementor\Controls_Manager::TAB_CONTENT,
            ]
        );

        $this->add_control(
            'logo',
            [
                'label' => esc_html__('Logo', 'focus-elementor'),
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
                'default' => esc_html__('Association Audiovisuelle', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label' => esc_html__('Subtitle', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('d\'emlyon business school', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'description',
            [
                'label' => esc_html__('Description', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
                'default' => esc_html__('Créativité • Innovation • Professionnalisme', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'button_primary_text',
            [
                'label' => esc_html__('Primary Button Text', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Nous contacter', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'button_primary_link',
            [
                'label' => esc_html__('Primary Button Link', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => '#contact',
            ]
        );

        $this->add_control(
            'button_secondary_text',
            [
                'label' => esc_html__('Secondary Button Text', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Voir nos réalisations', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'button_secondary_link',
            [
                'label' => esc_html__('Secondary Button Link', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => '#realisations',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="focus-hero">
            <canvas id="focus-particle-canvas" class="focus-particle-canvas"></canvas>
            
            <div class="focus-hero-gradient-overlay"></div>
            <div class="focus-scanlines"></div>
            
            <div class="focus-container">
                <div class="focus-hero-content">
                    <?php if ($settings['logo']['url']) : ?>
                        <div class="focus-hero-logo-wrapper">
                            <img src="<?php echo esc_url($settings['logo']['url']); ?>" alt="FOCUS Logo" class="focus-hero-logo" />
                        </div>
                    <?php endif; ?>
                    
                    <div class="focus-hero-text-center">
                        <h1 class="focus-hero-title focus-glitch" data-text="FOCUS">
                            FOCUS
                        </h1>
                        
                        <p class="focus-hero-subtitle"><?php echo esc_html($settings['title']); ?></p>
                        <p class="focus-hero-school"><?php echo esc_html($settings['subtitle']); ?></p>
                    </div>
                    
                    <p class="focus-hero-tagline"><?php echo esc_html($settings['description']); ?></p>
                    
                    <div class="focus-hero-buttons">
                        <a href="<?php echo esc_url($settings['button_primary_link']); ?>" class="focus-btn focus-btn-primary">
                            <?php echo esc_html($settings['button_primary_text']); ?>
                        </a>
                        <a href="<?php echo esc_url($settings['button_secondary_link']); ?>" class="focus-btn focus-btn-outline">
                            <?php echo esc_html($settings['button_secondary_text']); ?>
                        </a>
                    </div>
                </div>
            </div>
            
            <div class="focus-hero-bottom-fade"></div>
        </section>
        <?php
    }
}
