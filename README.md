# Liepaja City Website

A modern, responsive React website clone of the Liepaja city official website, built with React Router and fully responsive design for both desktop and mobile devices.

## Features

- 🏠 **Home Page** - Hero section, quick services, about preview, and latest news
- 📖 **About Page** - City information, history, culture, and statistics
- 🛠️ **Services Page** - Comprehensive list of city services
- 📰 **News Page** - Latest news and updates from the city
- 📞 **Contact Page** - Contact information and contact form
- 📱 **Fully Responsive** - Works perfectly on desktop, tablet, and mobile devices
- 🎨 **Modern Design** - Clean, professional design with smooth animations

## Prerequisites

Before you begin, ensure you have the following installed on your computer:

- **Node.js** (version 14 or higher) - [Download Node.js](https://nodejs.org/)
- **npm** (comes with Node.js) or **yarn**

To check if you have Node.js installed, open your terminal/command prompt and run:
```bash
node --version
npm --version
```

## Step-by-Step Installation Guide

### Step 1: Navigate to the Project Directory

Open your terminal (Command Prompt on Windows, Terminal on Mac/Linux) and navigate to the project directory:

```bash
cd "E:\practice projects\Greece\liepaja-website"
```

### Step 2: Install Dependencies

Install all the required packages and dependencies:

```bash
npm install
```

This command will:
- Read the `package.json` file
- Download and install all required packages (React, React Router, etc.)
- Create a `node_modules` folder with all dependencies

**Note:** This may take a few minutes depending on your internet connection.

### Step 3: Start the Development Server

Once the installation is complete, start the development server:

```bash
npm start
```

This command will:
- Start the React development server
- Automatically open your browser to `http://localhost:3000`
- Enable hot-reloading (changes you make will automatically refresh in the browser)

### Step 4: View the Website

The website should automatically open in your default browser at:
```
http://localhost:3000
```

If it doesn't open automatically, you can manually navigate to this address in your browser.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits. You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

### `npm test`

Launches the test runner in interactive watch mode.

## Project Structure

```
liepaja-website/
├── public/
│   └── index.html          # Main HTML file
├── src/
│   ├── components/         # Reusable components
│   │   ├── Header.js      # Navigation header
│   │   ├── Header.css
│   │   ├── Footer.js      # Footer component
│   │   └── Footer.css
│   ├── pages/              # Page components
│   │   ├── Home.js         # Home page
│   │   ├── Home.css
│   │   ├── About.js        # About page
│   │   ├── About.css
│   │   ├── Services.js     # Services page
│   │   ├── Services.css
│   │   ├── News.js         # News page
│   │   ├── News.css
│   │   ├── Contact.js      # Contact page
│   │   └── Contact.css
│   ├── App.js              # Main app component with routing
│   ├── App.css             # Global app styles
│   ├── index.js            # Entry point
│   └── index.css           # Global styles
├── package.json            # Project dependencies
└── README.md              # This file
```

## Pages Overview

### Home Page (`/`)
- Hero section with welcome message
- Quick services overview
- About city preview
- Latest news preview

### About Page (`/about`)
- Detailed city information
- History and culture
- City statistics
- Image gallery

### Services Page (`/services`)
- Comprehensive list of city services
- Document services
- Housing services
- Social services
- Education services
- Health services
- Business services

### News Page (`/news`)
- Latest news and updates
- News articles with images
- Categories and dates
- Full article content

### Contact Page (`/contact`)
- Contact information
- Office hours
- Contact form
- Map location placeholder

## Customization

### Changing Content

All content is static and can be easily modified in the respective page components:
- Edit text content directly in the `.js` files in the `src/pages/` directory
- Modify service lists, news items, and other data in the component files

### Changing Colors

The main color scheme uses `#1a5490` (blue). To change colors:
1. Open `src/App.css` for global color changes
2. Open individual component CSS files for specific styling
3. Search and replace color codes throughout the files

### Adding New Pages

1. Create a new component in `src/pages/` (e.g., `NewPage.js` and `NewPage.css`)
2. Add a route in `src/App.js`:
   ```jsx
   <Route path="/newpage" element={<NewPage />} />
   ```
3. Add a navigation link in `src/components/Header.js`

## Troubleshooting

### Port 3000 is already in use

If you get an error that port 3000 is already in use:
1. Close any other applications using port 3000
2. Or, set a different port by creating a `.env` file in the root directory with:
   ```
   PORT=3001
   ```

### npm install fails

- Make sure you have a stable internet connection
- Try deleting `node_modules` folder and `package-lock.json`, then run `npm install` again
- Check that you have the latest version of Node.js installed

### The page doesn't load

- Make sure the development server is running (`npm start`)
- Check the terminal for any error messages
- Try clearing your browser cache
- Make sure you're accessing `http://localhost:3000`

## Technologies Used

- **React** - JavaScript library for building user interfaces
- **React Router DOM** - Routing library for React
- **CSS3** - Styling with modern CSS features
- **HTML5** - Semantic HTML structure

## Browser Support

This website works on all modern browsers:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Notes

- All images are currently using placeholder URLs from Unsplash. In production, you would replace these with actual images.
- The contact form is for demonstration purposes and doesn't actually send emails. You would need to implement a backend service for that.
- All data is static and stored in the component files. For a production site, you would typically fetch data from an API or database.

## License

This project is created for educational purposes.

## Support

If you encounter any issues or have questions, please check the troubleshooting section above or refer to the React documentation.

---

**Enjoy exploring the Liepaja City Website!** 🎉


