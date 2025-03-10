const fs = require('fs');
const path = require('path');

// List of files that have been converted from JS to TS/TSX
const convertedFiles = [
  'src/index.js',
  'src/App.js',
  'src/reportWebVitals.js',
  'src/components/AboutSection.js',
  'src/components/TrustedPartnersSection.js',
  'src/components/HeroSection.js',
  'src/components/ContactSection.js',
  'src/components/BackToTop.js',
];

// Delete the JS files
convertedFiles.forEach(file => {
  const filePath = path.join(__dirname, file);
  try {
    if (fs.existsSync(filePath)) {
      fs.unlinkSync(filePath);
      console.log(`Deleted: ${file}`);
    } else {
      console.log(`File not found: ${file}`);
    }
  } catch (err) {
    console.error(`Error deleting ${file}:`, err);
  }
});

console.log('Cleanup complete. JS files have been removed.'); 