#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

/**
 * Herramienta para renombrar _next a next y actualizar referencias en archivos HTML
 * Soluciona el problema de GitHub Pages que no detecta rutas que empiezan con _
 */

const OUT_DIR = './docs';
const NEXT_DIR = path.join(OUT_DIR, '_next');
const NEW_NEXT_DIR = path.join(OUT_DIR, 'next');

console.log('🔧 Iniciando corrección de rutas _next a next...\n');

// Función para renombrar directorio
function renameDirectory() {
    try {
        if (fs.existsSync(NEXT_DIR)) {
            if (fs.existsSync(NEW_NEXT_DIR)) {
                console.log('⚠️  El directorio "next" ya existe. Eliminando...');
                fs.rmSync(NEW_NEXT_DIR, { recursive: true, force: true });
            }
            
            fs.renameSync(NEXT_DIR, NEW_NEXT_DIR);
            console.log('✅ Directorio _next renombrado a next');
            return true;
        } else {
            console.log('❌ No se encontró el directorio _next');
            return false;
        }
    } catch (error) {
        console.error('❌ Error al renombrar directorio:', error.message);
        return false;
    }
}

// Función para buscar y reemplazar en archivos HTML
function updateHtmlFiles() {
    const htmlFiles = [];
    
    // Buscar todos los archivos HTML recursivamente
    function findHtmlFiles(dir) {
        const items = fs.readdirSync(dir);
        
        for (const item of items) {
            const fullPath = path.join(dir, item);
            const stat = fs.statSync(fullPath);
            
            if (stat.isDirectory()) {
                findHtmlFiles(fullPath);
            } else if (item.endsWith('.html')) {
                htmlFiles.push(fullPath);
            }
        }
    }
    
    findHtmlFiles(OUT_DIR);
    
    console.log(`📄 Encontrados ${htmlFiles.length} archivos HTML`);
    
    let updatedFiles = 0;
    
    for (const htmlFile of htmlFiles) {
        try {
            let content = fs.readFileSync(htmlFile, 'utf8');
            const originalContent = content;
            
            // Reemplazar todas las ocurrencias de _next con next
            content = content.replace(/_next/g, 'next');
            
            if (content !== originalContent) {
                fs.writeFileSync(htmlFile, content, 'utf8');
                console.log(`✅ Actualizado: ${path.relative(OUT_DIR, htmlFile)}`);
                updatedFiles++;
            }
        } catch (error) {
            console.error(`❌ Error al procesar ${htmlFile}:`, error.message);
        }
    }
    
    console.log(`\n📊 Resumen:`);
    console.log(`   - Archivos HTML procesados: ${htmlFiles.length}`);
    console.log(`   - Archivos actualizados: ${updatedFiles}`);
    
    return updatedFiles > 0;
}

// Función principal
function main() {
    console.log('🚀 Iniciando proceso de corrección...\n');
    
    // Verificar que existe el directorio docs
    if (!fs.existsSync(OUT_DIR)) {
        console.error('❌ No se encontró el directorio "docs". Ejecuta "npm run build" primero.');
        process.exit(1);
    }
    
    // Paso 1: Renombrar directorio
    console.log('📁 Paso 1: Renombrando directorio _next a next...');
    const dirRenamed = renameDirectory();
    
    if (!dirRenamed) {
        console.log('⚠️  No se pudo renombrar el directorio. Continuando con actualización de archivos...');
    }
    
    console.log('');
    
    // Paso 2: Actualizar archivos HTML
    console.log('📝 Paso 2: Actualizando referencias en archivos HTML...');
    const filesUpdated = updateHtmlFiles();
    
    console.log('');
    
    if (dirRenamed || filesUpdated) {
        console.log('🎉 ¡Proceso completado exitosamente!');
        console.log('   - Las rutas _next han sido cambiadas a next');
        console.log('   - GitHub Pages ahora debería detectar correctamente los archivos');
    } else {
        console.log('ℹ️  No se encontraron cambios necesarios');
    }
    
    console.log('\n💡 Tip: Ejecuta este script después de cada "npm run build"');
}

// Ejecutar si es llamado directamente
if (require.main === module) {
    main();
}

module.exports = { renameDirectory, updateHtmlFiles };
