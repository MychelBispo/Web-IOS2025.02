let querSorvete = true
let queSabor = true
let saborChocolate = false
let saborBaunilha = true
let saborMorango = false
let calda = true
let caldaCaramelo = false
let caldaChocolate = true
let caldaMorango = false
let casca = true
let formaDePagamentoDebito = true
let formaDePagamentoCredito = false

if (querSorvete == true)
{
  console.log("Qual sabor você vai querer?");
  console.log("Temos de chocolate, baunilha e morango.");

  if (queSabor == true && saborBaunilha == true || saborChocolate == true || saborMorango == true)
  {
    console.log("ótima escolha!!");
    console.log("Vai querer calda?");
    console.log("Temos calda de caramelo, chocolate e morango");
     if (calda == true && caldaCaramelo == true || caldaChocolate == true || caldaMorango == true) 
    {
        console.log("Vai ser com casca ou sem casca?");
         
        if (casca == true)
        {
            console.log("O seu pedido logo será feito!");
            console.log("Vai ser no débito ou no crédito?");
            if (formaDePagamentoDebito || formaDePagamentoCredito)
            {
              console.log("Espero que aproveite o nosso sorvete!");   
            }

            
        }
    }
  }
  else
  {
    console.log("vai ser com casca");
  }
}
else
{

}


