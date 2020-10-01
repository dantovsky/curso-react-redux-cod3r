// No Node, cada arquivo representa um módulo
function upper(text) {
  return text.toUpperCase()
}

// Expor a função publicamente para outros arquivos
module.exports = { upper }
