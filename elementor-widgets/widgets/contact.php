<?php
if (!defined('ABSPATH')) exit;

class FOCUS_Contact_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'focus_contact';
    }

    public function get_title() {
        return esc_html__('FOCUS Contact', 'focus-elementor');
    }

    public function get_icon() {
        return 'eicon-mail';
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
            'title',
            [
                'label' => esc_html__('Title', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Contactez-nous', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label' => esc_html__('Subtitle', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Une question ? Un projet ?', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'email',
            [
                'label' => esc_html__('Email', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'contact@focus-emlyon.fr',
            ]
        );

        $this->add_control(
            'instagram',
            [
                'label' => esc_html__('Instagram URL', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'https://www.instagram.com/focus_emlyon/',
            ]
        );

        $this->add_control(
            'linkedin',
            [
                'label' => esc_html__('LinkedIn URL', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'https://www.linkedin.com/company/focus-emlyon/',
            ]
        );

        $this->add_control(
            'form_shortcode',
            [
                'label' => esc_html__('Contact Form Shortcode', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'description' => esc_html__('Enter Contact Form 7 or other form shortcode', 'focus-elementor'),
                'placeholder' => '[contact-form-7 id="123"]',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section id="contact" class="focus-contact">
            <div class="focus-contact-bg">
                <div class="focus-orb focus-orb-1"></div>
                <div class="focus-orb focus-orb-2"></div>
            </div>
            
            <div class="focus-container">
                <div class="focus-section-header">
                    <h2 class="focus-section-title">
                        <?php echo esc_html($settings['title']); ?>
                    </h2>
                    <p class="focus-section-subtitle"><?php echo esc_html($settings['subtitle']); ?></p>
                    <div class="focus-title-underline"></div>
                </div>
                
                <div class="focus-contact-content">
                    <div class="focus-contact-info">
                        <div class="focus-contact-item">
                            <span class="dashicons dashicons-email"></span>
                            <a href="mailto:<?php echo esc_attr($settings['email']); ?>">
                                <?php echo esc_html($settings['email']); ?>
                            </a>
                        </div>
                        
                        <div class="focus-social-links">
                            <?php if ($settings['instagram']) : ?>
                                <a href="<?php echo esc_url($settings['instagram']); ?>" target="_blank" class="focus-social-link">
                                    <span class="dashicons dashicons-instagram"></span>
                                </a>
                            <?php endif; ?>
                            
                            <?php if ($settings['linkedin']) : ?>
                                <a href="<?php echo esc_url($settings['linkedin']); ?>" target="_blank" class="focus-social-link">
                                    <span class="dashicons dashicons-linkedin"></span>
                                </a>
                            <?php endif; ?>
                        </div>
                    </div>
                    
                    <div class="focus-contact-form">
                        <?php 
                        if ($settings['form_shortcode']) {
                            echo do_shortcode($settings['form_shortcode']);
                        } else {
                            echo '<p>' . esc_html__('Veuillez configurer votre formulaire de contact.', 'focus-elementor') . '</p>';
                        }
                        ?>
                    </div>
                </div>
            </div>
        </section>
        <?php
    }
}
