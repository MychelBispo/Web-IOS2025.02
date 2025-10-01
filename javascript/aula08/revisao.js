let login = prompt("Insira o seu email")
let senha = prompt("Insira a sua senha")

let loginCerto = "mano@gmail.com"
let senhaCerta = "batatinha123"

//validar se o login é o certo e se a senha também é
if(login == loginCerto && senha == senhaCerta)
{
    alert("Credencial validada brow, usa ai")

    alert("Opção 1: Crédito \n Opção 2: Consignado \n Opção 3: Empréstimo \n Opção 4: Renegociar \n Opção 0: Falar com a atendente")

    let opcao = Number(prompt("Escolha a opção:"))

    switch (opcao) 
    {
        case 1:
            alert("Mas claro querido cliente!! ")           
            break;

        case 2:
            alert("consignado infinito") 
            break;

        case 3:
            alert("Isso se endivide, cada vez mais HAHAHAHA") 
            break;

        case 4:
            alert("Pode renegociar qualquer divida, você vai continuar pobre.") 
            break;

        case 0:
            alert("Não falo com pobre, tchau") 
            break;
    
        default:
            alert("Por favor, selecione uma das opções mostradas")
            break;
    }
}
// se o login e a senha que o usuario inserir não forem iguais a que temos , ele não pode fazer login no aplicativo
else
{
    alert("Login ou senha incorretos!")
}