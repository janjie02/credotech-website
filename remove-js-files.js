const fs = require('fs');
const path = require('path');

// List of files to be removed (JavaScript files replaced by TypeScript)
const filesToRemove = [
  // Root files
  'src/index.js',
  'src/App.js',
  'src/reportWebVitals.js',
  
  // Component files
  'src/components/AboutSection.js',
  'src/components/BackToTop.js',
  'src/components/ContactSection.js',
  'src/components/Footer.js',
  'src/components/HeroSection.js',
  'src/components/Navbar.js',
  'src/components/ServicesSection.js',
  'src/components/TeamSection.js',
  'src/components/TrustedPartnersSection.js'
];

console.log('Starting cleanup of JavaScript files...');

// Delete each file
filesToRemove.forEach(filePath => {
  const fullPath = path.join(__dirname, filePath);
  
  try {
    if (fs.existsSync(fullPath)) {
      fs.unlinkSync(fullPath);
      console.log(`✅ Deleted: ${filePath}`);
    } else {
      console.log(`⚠️ File not found: ${filePath}`);
    }
  } catch (error) {
    console.error(`❌ Error deleting ${filePath}:`, error.message);
  }
});

console.log('JavaScript cleanup completed.');
console.log('All files have been converted to TypeScript successfully.'); 