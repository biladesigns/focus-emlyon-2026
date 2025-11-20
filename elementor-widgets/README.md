# FOCUS Elementor Widgets

Custom Elementor widgets for the FOCUS website with all visual effects and animations preserved.

## Installation

### Step 1: Upload the Plugin

1. Download/copy the entire `elementor-widgets` folder
2. Upload it to your WordPress installation at: `/wp-content/plugins/elementor-widgets/`
3. The folder structure should be:
```
wp-content/
  plugins/
    elementor-widgets/
      assets/
        style.css
        script.js
      widgets/
        hero.php
        about.php
        services.php
        realisations.php
        benefits.php
        contact.php
      elementor-widgets.php
      README.md
```

### Step 2: Activate the Plugin

1. Go to WordPress Admin → Plugins
2. Find "FOCUS Elementor Widgets"
3. Click "Activate"

### Step 3: Use the Widgets

1. Edit any page with Elementor
2. Look for the "FOCUS" category in the widgets panel
3. Drag and drop the widgets:
   - FOCUS Hero
   - FOCUS About
   - FOCUS Services
   - FOCUS Réalisations
   - FOCUS Benefits
   - FOCUS Contact

## Widget Configuration

### FOCUS Hero
- **Logo**: Upload your FOCUS logo
- **Title & Subtitle**: Main heading text
- **Description**: Tagline
- **Buttons**: Configure text and links for CTA buttons

### FOCUS About
- **Mandate Photo**: Upload team photo (landscape 4:3 ratio recommended)
- **Title**: Section heading
- **Content**: About text with WYSIWYG editor

### FOCUS Services
- **Title**: Section heading
- **Services**: Add multiple services with:
  - Icon (Dashicons class name, e.g., `dashicons-video-alt3`)
  - Title
  - Description
  - Details

### FOCUS Réalisations
- **Title & Subtitle**: Section headings
- **Réalisations**: Add multiple videos with:
  - Video thumbnail image
  - Video title
  - Video URL (YouTube, Vimeo, etc.)

### FOCUS Benefits
- **Title & Subtitle**: Section headings
- **Benefits**: Add multiple benefits with:
  - Icon (Dashicons class)
  - Title
  - Description

### FOCUS Contact
- **Title & Subtitle**: Section headings
- **Email**: Contact email address
- **Social Links**: Instagram and LinkedIn URLs
- **Form Shortcode**: Enter your Contact Form 7 or other form plugin shortcode

## Required Plugins

- **Elementor** (minimum version 3.0.0)
- **Contact Form 7** (optional, for contact form)

## Customization

### Colors
All colors are defined as CSS variables in `assets/style.css`:
```css
--focus-primary: hsl(349, 100%, 48%);
--focus-magenta: hsl(330, 100%, 50%);
--focus-orange: hsl(28, 100%, 50%);
--focus-blue: hsl(207, 89%, 86%);
```

Modify these values to match your brand.

### Icons
Widgets use WordPress Dashicons by default. To use other icons:
1. Install an icon library (Font Awesome, etc.)
2. Update the icon controls in widget PHP files
3. Update CSS classes accordingly

### Animations
All animations are CSS-based and defined in `assets/style.css`:
- Fade in effects
- Slide up effects
- Float effects for orbs
- Glitch effects
- Hover transitions

## Effects Included

✅ Animated background orbs  
✅ Gradient effects  
✅ Glassmorphism  
✅ Scanline effect  
✅ Hover animations  
✅ Glitch effect  
✅ Smooth scrolling  
✅ Parallax orbs  
✅ Card hover effects  
✅ Play button overlays  

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Troubleshooting

### Widgets don't appear
- Check that Elementor is installed and activated
- Clear WordPress and browser cache
- Check PHP version (minimum 7.4 required)

### Styles not loading
- Clear cache
- Check that `assets/style.css` exists
- Verify file permissions

### Icons not showing
- Dashicons are included with WordPress
- If using other icon libraries, ensure they're enqueued

## Support

For issues or questions about these widgets, contact FOCUS at contact@focus-emlyon.fr

## Credits

Created for FOCUS - Association audiovisuelle d'emlyon business school  
Version: 1.0.0
