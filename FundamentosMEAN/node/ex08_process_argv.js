// Process (ARGV)

// Podemos ter acesso a todos os argumentos que foram passados na chamada do
// arquivo ex08_process_argv.js
console.log(process.argv)

// Comando: node ex08_process_argv.js --producao outro param 1995
/*
[
  '/usr/bin/node',
  '/home/dantiii/Desktop/curso-react/git-dantovsky-curso-react-redux-cod3r/FundamentosMEAN/node/ex08_process_argv.js',
  '--producao',
  'outro',
  'param',
  '1995'
]
*/

// Função para verif se foi passado um determinado param
function temParam(param) {
  return process.argv.indexOf(param) !== -1 // se for diferente de -1 significa que foi passado o param
}

if (temParam('--producao')) {
  console.log('Atenção total!')
} else {
  console.log('Tranquilo!')
}
