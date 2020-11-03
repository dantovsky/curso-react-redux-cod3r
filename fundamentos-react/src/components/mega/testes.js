/*
function gerarNumerosDante(quant) {

    let nums = []
    for (i = 0; i < quant; i++) {
        let rand = parseInt(Math.random() * 61)
        while (nums.includes(rand)) {
            console.log(rand, ' repetido, gerou novo');
            rand = parseInt(Math.random() * 61)
        }
        nums.push(rand)
    }
    return nums
}
*/

function gerarNumeroNaoContido(min, max, array) {
    const aleatorio = parseInt(Math.random() * (max + 1 - min) + min)
    return array.includes(aleatorio) ?
        gerarNumeroNaoContido(min, max, array) :
        aleatorio
}

function gerarNumeros(quant) {
    const numeros = Array(quant)
        .fill(0)
        .reduce((nums) => {
            const novoNumero = gerarNumeroNaoContido(1, 60, nums)
            console.log([...nums, novoNumero])
            return [...nums, novoNumero]
        }, [])
        .sort((n1, n2) => n1 - n2)
    return numeros
}


console.log(gerarNumeros(7))

// const rand = Math.floor(Math.random() * (max - min)) + min
