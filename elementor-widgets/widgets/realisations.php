<?php
if (!defined('ABSPATH')) exit;

class FOCUS_Realisations_Widget extends \Elementor\Widget_Base {

    public function get_name() {
        return 'focus_realisations';
    }

    public function get_title() {
        return esc_html__('FOCUS Réalisations', 'focus-elementor');
    }

    public function get_icon() {
        return 'eicon-gallery-justified';
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
                'default' => esc_html__('Nos Réalisations', 'focus-elementor'),
            ]
        );

        $this->add_control(
            'subtitle',
            [
                'label' => esc_html__('Subtitle', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
                'default' => esc_html__('Découvrez nos projets', 'focus-elementor'),
            ]
        );

        $repeater = new \Elementor\Repeater();

        $repeater->add_control(
            'video_thumbnail',
            [
                'label' => esc_html__('Video Thumbnail', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::MEDIA,
            ]
        );

        $repeater->add_control(
            'video_title',
            [
                'label' => esc_html__('Title', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
            ]
        );

        $repeater->add_control(
            'video_url',
            [
                'label' => esc_html__('Video URL', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::TEXT,
            ]
        );

        $this->add_control(
            'realisations',
            [
                'label' => esc_html__('Réalisations', 'focus-elementor'),
                'type' => \Elementor\Controls_Manager::REPEATER,
                'fields' => $repeater->get_controls(),
                'title_field' => '{{{ video_title }}}',
            ]
        );

        $this->end_controls_section();
    }

    protected function render() {
        $settings = $this->get_settings_for_display();
        ?>
        <section id="realisations" class="focus-realisations">
            <div class="focus-container">
                <div class="focus-section-header">
                    <h2 class="focus-section-title">
                        <?php echo esc_html($settings['title']); ?>
                    </h2>
                    <p class="focus-section-subtitle"><?php echo esc_html($settings['subtitle']); ?></p>
                    <div class="focus-title-underline"></div>
                </div>
                
                <div class="focus-realisations-grid">
                    <?php foreach ($settings['realisations'] as $index => $realisation) : ?>
                        <div class="focus-realisation-card" style="animation-delay: <?php echo ($index * 0.1); ?>s;">
                            <?php if ($realisation['video_thumbnail']['url']) : ?>
                                <div class="focus-realisation-image">
                                    <img src="<?php echo esc_url($realisation['video_thumbnail']['url']); ?>" alt="<?php echo esc_attr($realisation['video_title']); ?>" />
                                    <div class="focus-realisation-overlay">
                                        <div class="focus-play-icon">▶</div>
                                    </div>
                                </div>
                            <?php endif; ?>
                            <h3 class="focus-realisation-title"><?php echo esc_html($realisation['video_title']); ?></h3>
                        </div>
                    <?php endforeach; ?>
                </div>
            </div>
        </section>
        <?php
    }
}
