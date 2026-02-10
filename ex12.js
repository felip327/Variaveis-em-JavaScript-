let idade = 25;

if (true) {
    let idade = 30;
    console.log("Dentro do bloco:", idade); // exibe 30
}

console.log("Fora do bloco:", idade); // exibe 25

// ao trocar "let idade = 30;" para "var idade = 30;" o JavaScript entende que você está 
// redefinindo a mesma variável idade do escopo superior, não criando uma nova para aquele bloco. 