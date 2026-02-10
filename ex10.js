var mensagem;
let exibirMensagem = function(msg) {
    console.log(msg)
}

if(true) {
    mensagem = 'olá mundo'
    exibirMensagem(mensagem)
}
exibirMensagem(mensagem)

//Dentro da função exibirMensagem: O parâmetro msg (local) é acessível e exibido

//Fora da função: Tentar acessar msg diretamente (console.log(msg)) causará um 
// erro de referência (ReferenceError), pois a variável local msg não existe fora de exibirMensagem

//Variável mensagem: Ela pode ser acessada e modificada tanto dentro quanto fora do bloco 
// if e da função, já que está no global. 