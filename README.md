# Modern E-commerce Frontend

A modern, responsive e-commerce frontend built with React and Tailwind CSS. This project features a clean, category-based product browsing experience with dynamic search, pagination, and contact functionality.

## 🚀 Features

- **Category-Based Navigation**: Browse products by categories
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

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

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

### Home Page

- Category showcase with hover effects
- Mobile-responsive design
- Clean, modern interface

### Products Page

- Advanced filtering and search
- Dynamic pagination
- 5-column responsive grid

### Product Details

- Single image focus
- Contact integration
- Back navigation

## 📄 License

This project is open source and available under the MIT License.

## 🐛 Issues & Support

If you encounter any issues:

1. Check existing issues on GitHub
2. Create a new issue with detailed description
3. Include steps to reproduce the problem

## 🙏 Acknowledgments

- Built with Create React App
- Styled with Tailwind CSS
- Icons by Heroicons
- UI components by Headless UI

---

**Made with ❤️ using React and Tailwind CSS**
