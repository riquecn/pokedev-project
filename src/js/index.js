/*
   OBJETIVO - quando clicar no pokedev da listagem temos que esconder o cartão do pokedev aberto 
   e mostrar o cartão correspondente ao que foi selecionado na listagem
       PASSO 1 - precisamos criar uma variável no JS pra trabalhar com a listagem de pokedevs
       PASSO 2 - Identificar o evento de clique no elemento da listagem
       PASSO 3 - remover a classe aberto só do cartão que tá aberto
       PASSO 4 - ao clicar em um pokedev da lista pegamos o id desse pokedev pra saber qual 
    cartão abrir
       PASSO 5 - remover a classe ativo que marca o pokedev selecionado na listagem
       PASSO 6 - adicinar a classe ativo no pokedev selecionado na listagem
*/

const selectionListPokedevs = document.querySelectorAll('.pokedev');

selectionListPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click",() => {
        const cartaoPokedevaberto = document.querySelector(".aberto");
        cartaoPokedevaberto.classList.remove("aberto");

        const idPokedevSelected = pokedev.attributes.id.value;
        
        const idPodedevCardToOpen = "cartao-" + idPokedevSelected;

        const pokedevCardToOpen = document.getElementById(idPodedevCardToOpen);
        pokedevCardToOpen.classList.add("aberto");

        const activePokedevOnList = document.querySelector(".ativo");
        activePokedevOnList.classList.remove("ativo")

        const selectedPokedevOnList = document.getElementById(idPokedevSelected);
        selectedPokedevOnList.classList.add("ativo")
    })
})