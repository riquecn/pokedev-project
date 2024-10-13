
const selectionListPokedevs = document.querySelectorAll('.pokedev');

selectionListPokedevs.forEach(pokedev =>{
    pokedev.addEventListener("click",() => {
        hidePokedevCard();

        const idPokedevSelected = showPokedevCard(pokedev);

        deactivatePokedevOnList();

        activatePokedevOnList(idPokedevSelected);
    })
})
function activatePokedevOnList(idPokedevSelected) {
    const selectedPokedevOnList = document.getElementById(idPokedevSelected);
    selectedPokedevOnList.classList.add("active");
}

function deactivatePokedevOnList() {
    const activePokedevOnList = document.querySelector(".active");
    activePokedevOnList.classList.remove("active");
}

function showPokedevCard(pokedev) {
    const idPokedevSelected = pokedev.attributes.id.value;
    const idPodedevCardToOpen = "card-" + idPokedevSelected;
    const pokedevCardToOpen = document.getElementById(idPodedevCardToOpen);
    pokedevCardToOpen.classList.add("open");
    return idPokedevSelected;
}

function hidePokedevCard() {
    const pokedevOpenCard = document.querySelector(".open");
    pokedevOpenCard.classList.remove("open");
}

