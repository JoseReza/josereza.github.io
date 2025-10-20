const fs = require('fs');
const path = require('path');

// Copy directories recursively
function copyDir(src, dest) {
  if (!fs.existsSync(dest)) {
    fs.mkdirSync(dest, { recursive: true });
  }
  
  const entries = fs.readdirSync(src, { withFileTypes: true });
  
  for (let entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    
    if (entry.isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

// Fix absolute paths in HTML files
function fixPaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixPaths(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.js')) {
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Replace absolute paths with relative paths
      content = content.replace(/\/_next\/static\//g, './_next/static/');
      content = content.replace(/\/images\//g, './images/');
      content = content.replace(/\/certifications\//g, './certifications/');
      content = content.replace(/\/curriculum_/g, './curriculum_');
      content = content.replace(/\/favicon\.ico/g, './favicon.ico');
      
      // Fix any remaining absolute paths that start with /
      content = content.replace(/src="\//g, 'src="./');
      content = content.replace(/href="\//g, 'href="./');
      
      fs.writeFileSync(filePath, content);
      console.log(`Fixed paths in: ${filePath}`);
    }
  });
}

// Copy necessary directories to docs
console.log('Copying public assets...');
if (fs.existsSync('./public')) {
  copyDir('./public', './docs');
}

// Copy _next directory if it exists
if (fs.existsSync('./.next/static')) {
  copyDir('./.next/static', './docs/_next/static');
}

// Run the fix
fixPaths('./docs');
console.log('Path fixing completed!');
