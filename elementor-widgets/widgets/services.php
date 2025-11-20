<?php
if (!defined('ABSPATH')) exit;

class FOCUS_Services_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'focus_services';
    }

    public function get_title() {
        return esc_html__('FOCUS Services', 'focus-elementor');
    }

    public function get_icon() {
        return 'eicon-gallery-grid';
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
                'default' => esc_html__('Nos Prestations', 'focus-elementor'),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'icon',
            [
                'label' => esc_html__('Icon Class', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'dashicons-video-alt3',
            ]
        );

        $repeater->add_control(
            'service_title',
            [
                'label' => esc_html__('Title', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Service', 'focus-elementor'),
            ]
        );

        $repeater->add_control(
            'description',
            [
                'label' => esc_html__('Description', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
            ]
        );

        $repeater->add_control(
            'details',
            [
                'label' => esc_html__('Details', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
            ]
        );

        $this->add_control(
            'services',
            [
                'label' => esc_html__('Services', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'service_title' => esc_html__('Inside', 'focus-elementor'),
                    ],
                    [
                        'service_title' => esc_html__('Créations originales', 'focus-elementor'),
                    ],
                    [
                        'service_title' => esc_html__('Prestations professionnelles', 'focus-elementor'),
                    ],
                ],
                'title_field' => '{{{ service_title }}}',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="focus-services">
            <div class="focus-services-bg">
                <div class="focus-orb focus-orb-left"></div>
                <div class="focus-orb focus-orb-right"></div>
            </div>
            
            <div class="focus-container">
                <div class="focus-section-header">
                    <h2 class="focus-section-title">
                        Nos <span class="focus-text-primary focus-glitch" data-text="<?php echo esc_attr($settings['title']); ?>"><?php echo esc_html($settings['title']); ?></span>
                    </h2>
                    <div class="focus-title-underline"></div>
                </div>
                
                <div class="focus-services-grid">
                    <?php foreach ($settings['services'] as $index => $service) : ?>
                        <div class="focus-service-card focus-glitch-hover" style="animation-delay: <?php echo ($index * 0.2); ?>s;">
                            <div class="focus-card-accent"></div>
                            
                            <div class="focus-service-icon">
                                <span class="dashicons <?php echo esc_attr($service['icon']); ?>"></span>
                            </div>
                            
                            <h3 class="focus-service-title"><?php echo esc_html($service['service_title']); ?></h3>
                            
                            <p class="focus-service-description"><?php echo esc_html($service['description']); ?></p>
                            
                            <p class="focus-service-details"><?php echo esc_html($service['details']); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
        <?php
    }
}
