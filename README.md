# CredoTech React Website

This is a React version of the CredoTech website, maintaining all the functionality and design of the original HTML/CSS version.

## Features

- Modern React implementation using functional components and hooks
- Responsive design that works on all device sizes
- Interactive UI with smooth scrolling and animations
- Contact form with validation
- Bootstrap for layout and components
- FontAwesome for icons
- AOS (Animate On Scroll) for scroll animations

## Prerequisites

- Node.js >= 14.x
- npm >= 6.x

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd credotech-react
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## Build for Production

To create a production build:

```bash
npm run build
```

This will create a `build` directory with all the optimized assets for deployment.

## Project Structure

```
credotech-react/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── assets/
│   │   └── images/
│   ├── components/
│   │   ├── AboutSection.js
│   │   ├── BackToTop.js
│   │   ├── ContactSection.js
│   │   ├── Footer.js
│   │   ├── HeroSection.js
│   │   ├── Navbar.js
│   │   ├── ServicesSection.js
│   │   ├── TeamSection.js
│   │   └── TrustedPartnersSection.js
│   ├── styles/
│   │   └── style.css
│   ├── App.js
│   ├── index.js
│   └── reportWebVitals.js
└── package.json
```

## Additional Information

- The React version has the same design and functionality as the original HTML version
- All components are modular and reusable
- State management is handled using React hooks
- The contact form includes validation and submission handling
- The site includes smooth scrolling navigation and scroll animations

## License

This project is proprietary and confidential. 