# Modern E-commerce Frontend

A modern, responsive e-commerce frontend built with React and Tailwind CSS. This project features a clean, category-based product browsing experience with dynamic search, pagination, and contact functionality.

## 🚀 Features

- **Category-Based Navigation**: Browse products by Mobile, Laptop, and Speakers categories
- **Responsive Design**: Optimized for mobile, tablet, and desktop devices
- **Dynamic Search**: Real-time product search functionality
- **Smart Pagination**: Dynamic pagination with page numbers and navigation controls
- **Product Details**: Detailed product view with contact functionality
- **Modern UI**: Clean, professional design with hover effects and animations
- **Frontend-Only**: No backend required - uses local JSON data

## 🛠️ Tech Stack

- **React 18** - Modern React with hooks
- **React Router DOM** - Client-side routing
- **Tailwind CSS** - Utility-first CSS framework
- **Headless UI** - Unstyled, accessible UI components
- **Heroicons** - Beautiful hand-crafted SVG icons

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-ecommerce-frontend.git
cd modern-ecommerce-frontend
```

2. Navigate to the frontend directory:
```bash
cd frontend
```

3. Install dependencies:
```bash
npm install
```

4. Start the development server:
```bash
npm start
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.

## 🏗️ Build for Production

```bash
npm run build
```

## 🎯 Key Components

### CategoryShowcase
- Displays three main product categories with hover effects
- Responsive grid layout with popup animations

### Product Grid
- 5-column responsive grid with hover animations
- Category-based filtering and search functionality

### Pagination
- Dynamic page numbers with smart navigation
- Shows current results count dynamically
- Prev/Next buttons with proper state management

### Product Details
- Single image display with zoom effect
- Contact functionality and back navigation
- Responsive layout for all devices

## 🌟 Project Structure

```
frontend/
├── src/
│   ├── components/
│   │   ├── home/CategoryShowcase.jsx
│   │   ├── product/
│   │   │   ├── Product.jsx
│   │   │   ├── ProductDetails.jsx
│   │   │   ├── CategoryFilters.jsx
│   │   │   └── Pagination.jsx
│   │   ├── navbar/Navbar.jsx
│   │   └── footer/Footer.jsx
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductPage.jsx
│   │   └── ContactUsPage.jsx
│   ├── data/products.json
│   └── routes/AllRoutes.jsx
└── package.json
```

## 🔧 Features in Detail

- **Home Page**: Category showcase with 3 responsive cards
- **Products Page**: Filtering, search, sorting, and pagination
- **Product Details**: Single image view with contact integration
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Animations**: Hover effects and smooth transitions

## 🚀 Deployment

This project can be deployed to:
- **Vercel**: Connect GitHub repo for automatic deployments
- **Netlify**: Deploy from GitHub or upload build folder
- **GitHub Pages**: Use GitHub Actions for deployment

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

**Built with React & Tailwind CSS**

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
