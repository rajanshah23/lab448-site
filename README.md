# LAB448 - Enterprise Engineering Solutions

Welcome to the **LAB448** static website repository. This site serves as the digital front-end for our advanced Industrial Engineering and Home Electronics repair services.

## Overview

LAB448 provides expert-level diagnostics, repairs, and installations for:
*   **Industrial Automation & PLC Systems**
*   **Large Home Electronics & Smart TVs**
*   **EV Charger Home Installations**
*   **General Tech & Equipment Maintenance**

## Technology Stack

The site is built entirely with lightweight, vanilla web technologies to prioritize maximum load speed and simplicity for easy static hosting (like GitHub Pages).
*   **HTML5:** Semantic structure and accessible forms.
*   **CSS3:** Custom Hostinger-inspired premium design system featuring CSS grid/flexbox, native variables, and glassmorphism UI elements (no external frameworks).
*   **Vanilla JS:** Handles smooth scrolling, sticky navigation states, and the mobile hamburger menu toggle.

## Project Structure

```bash
.
├── index.html        # Main landing page
├── style.css         # Global styles and component styling
├── script.js         # Interactivity and UI behaviors
└── assets/           # Directory containing logos and generated 3D iconography
    ├── lab448.png
    ├── hero_industrial_electronics_image.png
    └── ... (service icons)
```

## Setup & Local Development

Because this is a static site with relative asset paths, it requires no complex build tools or dependencies.

1.  Clone the repository down to your local machine:
    ```bash
    git clone <your-repository-url>
    cd lab448-site
    ```
2.  Open `index.html` directly in any modern web browser.
3.  *(Optional)* For the best experience, run a local web server (like `npx serve` or the VS Code Live Server extension) to avoid CORS issues and enable hot-reloading during development.

## Deployment (GitHub Pages)

This project is fully optimized to be hosted directly from a GitHub repository for free using GitHub Pages.

1.  Push the code to your GitHub repository.
2.  Navigate to the repository **Settings** -> **Pages**.
3.  Under **Build and deployment**, select **Deploy from a branch**.
4.  Select the `main` branch and the `/ (root)` folder, then click **Save**.
5.  Your site will be live at `https://<your-username>.github.io/<repository-name>/` in a few minutes!

---
&copy; 2026 LAB448. All rights reserved.
