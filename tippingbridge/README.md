# Tipping Bridge Website

A modern, responsive website for Tipping Bridge built with React, TypeScript, and Tailwind CSS.

## Features

- 🚀 Built with React 18 and TypeScript
- 🎨 Styled with Tailwind CSS
- 📱 Fully responsive design
- 🎯 React Router for navigation
- 🖼️ Image sliders for services
- 📋 Contact form with WhatsApp integration

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
src/
├── components/          # Reusable React components
│   ├── Header.tsx      # Site header with navigation
│   ├── Footer.tsx      # Site footer
│   ├── HeroSlider.tsx  # Hero section slider
│   └── ServiceCard.tsx # Service display card
├── pages/              # Page components
│   ├── Home.tsx        # Home page
│   ├── Services.tsx    # Services page
│   ├── About.tsx       # About Educational
│   ├── Contact.tsx     # Contact page
│   ├── Terms.tsx       # Terms & Conditions
│   └── Privacy.tsx     # Privacy Policy
├── App.tsx             # Main app component with routing
├── main.tsx            # Entry point
└── index.css           # Global styles with Tailwind
```

## Technologies Used

- **React** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme, particularly the `primary` color palette.

### Content

All content is located in the respective page components in `src/pages/`. Update the text, images, and links as needed.

### Contact Information

Update contact details in:
- `src/components/Footer.tsx` - Footer contact info
- `src/pages/Contact.tsx` - Contact page

## License

All rights reserved © Tipping Bridge

