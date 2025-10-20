const fs = require('fs');
const path = require('path');

// Fix absolute paths in HTML files
function fixPaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixPaths(filePath);
    } else if (file.endsWith('.html')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace absolute paths with relative paths
      content = content.replace(/\/_next\/static\//g, './_next/static/');
      content = content.replace(/\/images\//g, './images/');
      content = content.replace(/\/certifications\//g, './certifications/');
      content = content.replace(/\/curriculum_/g, './curriculum_');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed paths in: ${filePath}`);
    }
  });
}

// Run the fix
fixPaths('./docs');
console.log('Path fixing completed!');
