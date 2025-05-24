// CODEX: Sitemap Updater
// This script updates the lastmod date in sitemap.xml to the current date

const fs = require('fs');
const path = require('path');
const { format } = require('date-fns');

// Get current date in YYYY-MM-DD format
const currentDate = format(new Date(), 'yyyy-MM-dd');

// Path to sitemap.xml
const sitemapPath = path.join(__dirname, '..', 'public', 'sitemap.xml');

// Read the sitemap
fs.readFile(sitemapPath, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading sitemap:', err);
    process.exit(1);
  }

  // Update all lastmod dates
  const updatedSitemap = data.replace(
    /<lastmod>.*<\/lastmod>/g, 
    `<lastmod>${currentDate}</lastmod>`
  );

  // Write the updated sitemap
  fs.writeFile(sitemapPath, updatedSitemap, (err) => {
    if (err) {
      console.error('Error writing sitemap:', err);
      process.exit(1);
    }
    console.log('Sitemap updated with current date:', currentDate);
  });
});
