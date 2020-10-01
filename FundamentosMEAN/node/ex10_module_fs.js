// Módulo FS :: File System
// Módulo para acessar dados em arquivor, ler e modicar arquivos, criar pastas.

// Listar todos os arquivos nesta pasta
const fs = require('fs')
const files = fs.readdirSync(__dirname)
// readdirSync :: lẽ os arquivos de uma pasta, de forma síncrona
// __dirname :: constante que o Node dá por padrão

files.forEach(f => console.log(f));
console.log('\n:: Nº de arquivos: ', files.length, '::')
