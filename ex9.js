function testeEscopo() {
    var a = 10;
    if (true) {
        let b = 20;
        console.log(a); // 10
        console.log(b); // 20
    }
    console.log(a); // 10
    console.log(b); // Gera um erro (ReferenceError). Como b foi declarado com let dentro do bloco if, ele não é acessível fora dele.
}
testeEscopo();

