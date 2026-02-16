# <img src="./src/public/en-favicon.svg" width="32" height="32"> English Excellence

**English Excellence** is a modern, fluid-adaptive single-page landing site for
an English language school. This is a **team project** developed focusing on
semantic HTML5 markup, advanced CSS techniques, and a mobile-first approach.

## 🔗 Live Demo

Check out the live project here:
[English Excellence Live Page](https://volodymyrkh.github.io/goit-markup-fp/)

---

## 🛠 Tech Stack

- **HTML5**: Semantic and valid markup according to W3C standards.
- **CSS3 (SCSS)**: Modern styling using variables, mixins, and BEM methodology.
- **JavaScript**: Implemented for the mobile menu functionality (open/close).
- **Vite**: Project bundling and asset optimization.
- **SVG Sprites**: All icons are handled via a single sprite for better
  performance.

---

## 📋 Project Requirements & Features

### 📱 Responsiveness & Breakpoints

The layout is fluid and adaptive across various devices:

- **Mobile**: Fluid layout starting from 320px, becoming fully adaptive at
  375px.
- **Tablet**: Breakpoint at 768px.
- **Desktop**: Breakpoint at 1280px.
- **Retina Support**: Optimized high-resolution images are implemented to ensure
  crystal-clear display on **Retina and HiDPI screens** across all devices.

### 🧱 Layout & Components

The project follows a logical section flow:

- **Header**: Features the logo, navigation, and social media links. On
  mobile/tablet, it transforms into a fixed **slide-out side panel**.
- **Hero**: Contains the main H1 heading: _"Discover the joy of learning English
  with us!"_.
- **About Us**: Lists company advantages using ordered lists (`<ol>`).
- **Our Lessons**: Displays course packages using unordered lists (`<ul>`).
- **Proposal Section**: Includes a hidden H2 for SEO/Crawlers and a list of
  English language benefits.
- **Our Teachers**: Showcases the teaching staff with content-driven images.
- **Leave an Application**: A client-side integrated form featuring: fields
  validation, seamless course selection, styled and ready for future backend
  integration.
- **Reviews**: Student testimonials organized in a list format.
- **Footer**: Includes social links, anchor navigation, and contact info
  (phone/address) using proper protocols (`tel:`, `google maps`).

### ⚙️ Technical Highlights

- **Navigation**: Smooth anchor links connecting the Header/Footer to specific
  sections.
- **Social Media**: Integrated links to GoIT's Facebook, Instagram, and YouTube
  (opening in new tabs).
- **Optimization**: Images are optimized for size; Favicons are implemented for
  all browsers.

---

## 🚀 Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/volodymyrkh/goit-markup-fp.git
   ```
2. **Navigate to project folder:**
   ```bash
   cd goit-markup-fp
   ```
3. **Install dependencies:**
   ```bash
   npm install
   ```
4. **Start the development server:**
   ```bash
   npm run dev
   ```
5. **Build for production (optional):**
   ```bash
   npm run build
   ```

## 👥 Our Team

This project was a collaborative effort. Each member focused on ensuring
high-quality code, pixel-perfect styling, and cross-browser compatibility to
meet the project requirements.

_Developed as part of the Neoversity HTML & CSS program._
