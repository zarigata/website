# CatchyCompany Website

[![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-Deployed-brightgreen)](https://catchycompany.sa)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

A professional bilingual (Arabic/English) marketing and digital consultancy website for the Saudi market. This project is built with React and is deployed to GitHub Pages with a custom domain.

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

## 🚀 Getting Started

### Prerequisites

Make sure you have Node.js (v14 or later) and npm installed on your machine.

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

## 🚀 Deployment to GitHub Pages

### Prerequisites
- GitHub account
- Repository set up on GitHub
- Custom domain (optional but recommended)

### Steps to Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to GitHub Pages**:
   ```bash
   npm run deploy
   ```
   This will create a `gh-pages` branch and push the built files to it.

3. **Set up GitHub Pages**:
   - Go to your repository on GitHub
   - Click on "Settings" > "Pages"
   - Under "Source", select "gh-pages" branch and "/ (root)" folder
   - Click "Save"

4. **Set up Custom Domain (Optional)**:
   - In the same GitHub Pages settings, enter your custom domain (e.g., `catchycompany.sa`)
   - Add a CNAME file to your `public` folder with your domain:
     ```
     catchycompany.sa
     ```
   - Update DNS settings with your domain provider to point to GitHub Pages IPs:
     ```
     185.199.108.153
     185.199.109.153
     185.199.110.153
     185.199.111.153
     ```
   - Wait for DNS propagation (may take up to 48 hours)

5. **Enable HTTPS (Recommended)**:
   - In GitHub Pages settings, check "Enforce HTTPS" once the domain is properly configured

## 🔒 Security Considerations

- Keep your dependencies updated
- Use environment variables for sensitive information
- Regularly backup your content
- Monitor for security vulnerabilities using `npm audit`

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

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
