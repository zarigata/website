# CatchyCompany Website

> **Important:** This is the source code for the CatchyCompany website. The live website is available at:  
> 🔗 [https://zarigata.github.io/website](https://zarigata.github.io/website)

A bilingual (Arabic/English) marketing and digital consultancy website for the Saudi market. This project is built with React and deployed to GitHub Pages.

## 🌟 Features

- Bilingual support (Arabic and English)
- Responsive design with a boxy style and pastel colors
- Dynamic and interactive UI
- Ready for GitHub Pages deployment
- Cross-platform compatibility (Windows and Linux)

## 🛠️ Technologies Used

- React 18
- React Router for navigation
- i18next for internationalization
- TailwindCSS for styling
- GitHub Actions for automated deployment

## 🚀 Deployment

This website is automatically deployed to GitHub Pages when changes are pushed to the `main` branch. The deployment is handled by GitHub Actions.

### Manual Deployment

If you need to deploy manually:

1. Make sure all your changes are committed and pushed to the `main` branch
2. Run the following commands:
   ```bash
   npm run build
   npm run deploy
   ```

### Custom Domain

To set up a custom domain:

1. Create a `CNAME` file in the root directory with your domain (e.g., `www.yourdomain.com`)
2. Configure your DNS settings to point to your GitHub Pages URL

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js (v16 or later) and npm installed on your machine.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/zarigata/website.git
   cd website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

## 🌐 Virtual Environment Setup

For Python components or scripts, a virtual environment is automatically established:

```bash
# Create a virtual environment
python -m venv venv

# Activate the virtual environment
# On Windows
venv\Scripts\activate
# On Linux/Mac
source venv/bin/activate

# Install Python dependencies
pip install -r requirements.txt
```

## 📦 Building for Production

```bash
npm run build
```

This builds the app for production to the `build` folder.

## 📤 Deployment

The project is set up for automatic deployment to GitHub Pages using GitHub Actions. Simply push to the main branch, and the website will be automatically deployed.

Manual deployment can be done with:

```bash
npm run deploy
```

## 🌍 Internationalization

The website supports both Arabic (RTL) and English (LTR) languages. Language files are located in:

- `src/locales/en/translation.json` (English)
- `src/locales/ar/translation.json` (Arabic)

## 📂 Project Structure

```
website/
├── public/                  # Static files
├── src/                     # Source files
│   ├── assets/              # Images and other assets
│   ├── components/          # Reusable components
│   ├── locales/             # Translation files
│   │   ├── ar/              # Arabic translations
│   │   └── en/              # English translations
│   ├── pages/               # Page components
│   ├── styles/              # CSS files
│   ├── App.js               # Main App component
│   ├── i18n.js              # i18next configuration
│   └── index.js             # Entry point
├── .github/                 # GitHub configuration
│   └── workflows/           # GitHub Actions workflows
├── package.json             # Dependencies and scripts
└── README.md                # Project documentation
```

## 🎨 Customization

The website uses a color palette derived from the images in the `images` folder. The main colors are defined as CSS variables in `src/styles/index.css`.

## 📄 License

This project is licensed under the ISC License.

## 🙏 Acknowledgements

- Images used in this project are from the `images` folder
- Font Awesome for icons
- Google Fonts for typography
