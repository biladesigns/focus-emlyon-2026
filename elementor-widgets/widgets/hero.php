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
            
            <!-- Cinematic Frame Lines -->
            <div class="focus-frame-lines">
                <div class="focus-frame-top"></div>
                <div class="focus-frame-bottom"></div>
                <div class="focus-frame-left"></div>
                <div class="focus-frame-right"></div>
            </div>
            
            <!-- Corner Accents -->
            <div class="focus-corner focus-corner-tl"></div>
            <div class="focus-corner focus-corner-tr"></div>
            <div class="focus-corner focus-corner-bl"></div>
            <div class="focus-corner focus-corner-br"></div>
            
            <div class="focus-hero-gradient-overlay"></div>
            
            <div class="focus-container">
                <div class="focus-hero-cinematic-grid">
                    <!-- Left Side - Logo -->
                    <div class="focus-hero-logo-side">
                        <div class="focus-logo-glow"></div>
                        <div class="focus-logo-frame">
                            <?php if ($settings['logo']['url']) : ?>
                                <img src="<?php echo esc_url($settings['logo']['url']); ?>" alt="FOCUS Logo" class="focus-hero-logo-large" />
                            <?php endif; ?>
                            
                            <!-- Decorative corners -->
                            <div class="focus-logo-corner focus-logo-corner-tl"></div>
                            <div class="focus-logo-corner focus-logo-corner-tr"></div>
                            <div class="focus-logo-corner focus-logo-corner-bl"></div>
                            <div class="focus-logo-corner focus-logo-corner-br"></div>
                        </div>
                    </div>
                    
                    <!-- Right Side - Text Content -->
                    <div class="focus-hero-text-side">
                        <div class="focus-hero-text-content">
                            <!-- Subtitle line -->
                            <div class="focus-hero-subline">
                                <div class="focus-subline-bar"></div>
                                <span class="focus-subline-text"><?php echo esc_html($settings['subtitle']); ?></span>
                            </div>
                            
                            <!-- Main Title -->
                            <h1 class="focus-hero-title-cinematic">
                                <span class="focus-gradient-text">FOCUS</span>
                            </h1>
                            
                            <p class="focus-hero-subtitle-cinematic"><?php echo esc_html($settings['title']); ?></p>
                            
                            <!-- Divider -->
                            <div class="focus-hero-divider"></div>
                            
                            <!-- Description -->
                            <p class="focus-hero-description-cinematic"><?php echo esc_html($settings['description']); ?></p>
                            
                            <!-- Buttons -->
                            <div class="focus-hero-buttons">
                                <a href="<?php echo esc_url($settings['button_secondary_link']); ?>" class="focus-btn focus-btn-primary">
                                    <?php echo esc_html($settings['button_secondary_text']); ?>
                                </a>
                                <a href="<?php echo esc_url($settings['button_primary_link']); ?>" class="focus-btn focus-btn-outline">
                                    <?php echo esc_html($settings['button_primary_text']); ?>
                                </a>
                            </div>
                            
                            <!-- Stats -->
                            <div class="focus-hero-stats">
                                <div class="focus-stat">
                                    <div class="focus-stat-number focus-gradient-text">687K+</div>
                                    <div class="focus-stat-label">Vues</div>
                                </div>
                                <div class="focus-stat">
                                    <div class="focus-stat-number focus-gradient-text">50+</div>
                                    <div class="focus-stat-label">Projets</div>
                                </div>
                                <div class="focus-stat">
                                    <div class="focus-stat-number focus-gradient-text">4K</div>
                                    <div class="focus-stat-label">Qualité</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="focus-hero-bottom-fade"></div>
        </section>
        <?php
    }
}
