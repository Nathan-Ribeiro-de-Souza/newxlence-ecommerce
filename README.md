# NewXLence E-commerce

NewXLence is a front-end e-commerce project built with React and TypeScript, created as part of my learning journey in Front-end development.

The project simulates an online T-shirt store with product filtering, product details, cart management, localStorage persistence, WhatsApp checkout, and dark/light mode.

This is not a real store. It is a portfolio and learning project focused on practicing React, TypeScript, component structure, state management, routing, UI organization, and front-end logic.

## View Project

👉 [Live Demo](https://newxlence-ecommerce.vercel.app/)

## Features

* Product catalog
* Product search
* Filter products by category
* Filter products by gender
* Product details page
* Product image gallery
* Product variations by color, print and size
* Add products to cart
* Increase and decrease product quantity
* Remove products from cart
* Restore deleted products from cart history
* Cart total calculation
* Cart persistence with localStorage
* WhatsApp checkout
* Dark mode and light mode
* Responsive layout

## Technologies

* React
* TypeScript
* React Router
* CSS
* localStorage
* useState
* useEffect
* Vite

## What I Learned

While building this project, I practiced important Front-end concepts such as:

* Creating reusable components
* Working with props and TypeScript types
* Managing state between pages and components
* Filtering products using multiple conditions
* Handling product variations
* Building cart logic
* Saving data with localStorage
* Creating a responsive layout
* Organizing a React project structure
* Improving UI with dark and light themes

## Future Improvements

In the future, I plan to improve this project by adding Back-end features, such as:

* User authentication
* Product database
* Real checkout flow
* Admin product management
* Order history
* API integration

My goal is to keep improving this project as I learn Back-end development and turn it into a more complete Full Stack application.

## Installation

Clone the repository:

```bash
git clone https://github.com/Nathan-Ribeiro-de-Souza/newxlence-ecommerce.git
```

Navigate to the project folder:

```bash
cd newxlence-ecommerce
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

## Project Structure

```text
src/
├── components/
│   ├── About.tsx
│   ├── CartHistory.tsx
│   ├── ProductCard.tsx
│   ├── ProductGallery.tsx
│   ├── Search.tsx
│   ├── SelectCategory.tsx
│   ├── SelectedGender.tsx
│   └── ToggleMode.tsx
├── data/
│   └── products.ts
├── pages/
│   ├── Cart.tsx
│   ├── Contact.tsx
│   ├── Home.tsx
│   ├── Navbar.tsx
│   ├── NotFound.tsx
│   ├── ProductDetails.tsx
│   └── Products.tsx
├── types/
│   ├── CartType.ts
│   └── ProductType.ts
├── App.tsx
├── App.css
├── index.css
└── main.tsx
```

## About the Project

Before I started programming, I used to think about selling clothes online and maybe having my own store someday. When I started learning Front-end development, I decided to turn that old idea into a real project.

The brand name I imagined at the time was NewXLence. This project combines creativity, personal style, and my skills as a developer.

The shirt arts were created with help from my wife at the time, and I added the images inside the public/images folder. Since this project was built mainly for learning purposes, the prints were chosen randomly to help me build a more realistic e-commerce structure.

## Author

Nathan Ribeiro de Souza
