let login 
let senha

let loginCerto = "mano@gmail.com"
let senhaCerta = "batatinha123"


//Enquanto a senha que o usuário inserir for diferente da senha certa continuaremos para que ele insira novamente
// Do = Faça e While = enquanto. O que dá nome a estrutura dowhile, ou seja, faça enquanto
//Dowhile executa o código uma vez antes de fazer a comparação
do
{
     login = prompt("Insira o seu email")
    senha = prompt("Insira a sua senha")
} while (login != loginCerto || senha != senhaCerta );

// Peça a senha pelo menos uma vez, e caso o usuario não coloque a senha certa, repita o pedido























