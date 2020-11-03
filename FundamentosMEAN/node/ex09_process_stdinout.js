// Process (STDIN / STDOUT) :: Stardard In/Out

// Imprimir e receber (entrada do user) algo no console através do process
process.stdout.write('Está gostando do curso? ')
process.stdin.on('data', function(data) {
  process.stdout.write(`Sua resposta foi ${data.toString()}Obrigado!\n`)
  process.exit()
})
