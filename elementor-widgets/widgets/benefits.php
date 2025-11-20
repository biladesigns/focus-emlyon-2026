<?php
if (!defined('ABSPATH')) exit;

class FOCUS_Benefits_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'focus_benefits';
    }

    public function get_title() {
        return esc_html__('FOCUS Benefits', 'focus-elementor');
    }

    public function get_icon() {
        return 'eicon-star';
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
                'default' => esc_html__('Nos Atouts', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label' => esc_html__('Subtitle', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('L\'audiovisuel au service de votre image', 'focus-elementor'),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'icon',
            [
                'label' => esc_html__('Icon Class', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => 'dashicons-lightbulb',
            ]
        );

        $repeater->add_control(
            'benefit_title',
            [
                'label' => esc_html__('Title', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
            ]
        );

        $repeater->add_control(
            'description',
            [
                'label' => esc_html__('Description', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXTAREA,
            ]
        );

        $this->add_control(
            'benefits',
            [
                'label' => esc_html__('Benefits', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'default' => [
                    [
                        'benefit_title' => esc_html__('Créer, innover, communiquer', 'focus-elementor'),
                    ],
                    [
                        'benefit_title' => esc_html__('Une visibilité unique', 'focus-elementor'),
                    ],
                    [
                        'benefit_title' => esc_html__('Qualité premium', 'focus-elementor'),
                    ],
                ],
                'title_field' => '{{{ benefit_title }}}',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section class="focus-benefits">
            <div class="focus-container">
                <div class="focus-section-header">
                    <h2 class="focus-section-title">
                        Nos <span class="focus-text-primary"><?php echo esc_html($settings['title']); ?></span>
                    </h2>
                    <p class="focus-section-subtitle"><?php echo esc_html($settings['subtitle']); ?></p>
                    <div class="focus-title-underline"></div>
                </div>
                
                <div class="focus-benefits-grid">
                    <?php foreach ($settings['benefits'] as $index => $benefit) : ?>
                        <div class="focus-benefit-card" style="animation-delay: <?php echo ($index * 0.2); ?>s;">
                            <div class="focus-benefit-icon">
                                <span class="dashicons <?php echo esc_attr($benefit['icon']); ?>"></span>
                            </div>
                            
                            <h3 class="focus-benefit-title"><?php echo esc_html($benefit['benefit_title']); ?></h3>
                            
                            <p class="focus-benefit-description"><?php echo esc_html($benefit['description']); ?></p>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
        <?php
    }
}
