// Functions
const animalSpotted = event => {
    // Console Log waar je op klikt
    console.log("Spotted", event.target.innerHTML);
    // Variabele waarmee je tekst vastzet waar je op klikt
    const spottedAnimal = event.target.textContent;
    // CREATE LI
    const listItem = document.createElement("li");
    // Voeg spottedAnimal in de listItem toe
    listItem.appendChild(document.createTextNode(spottedAnimal));
    // Target de UL tag om de LI in te zetten
    const list = document.getElementById("spotted-animals-list");
    // Voeg de onderstaande class toe
    listItem.classList.add("big-five-list-item");
    // Zet listItem in list
    list.appendChild(listItem);
}
const removeFirstItem = () => {
    // Target de eerste child van spotted-animals-list
    const firstItem = document.getElementById("spotted-animals-list").firstChild;
    // Remove daadwerkelijk
    firstItem.remove();
};

const removeAll = () => {
    // Target de spotted-animal-list
    const spottedAnimalsList = document.getElementById("spotted-animals-list");
    // Remove de hele lijst
    spottedAnimalsList.innerHTML = "";
};


document.addEventListener("DOMContentLoaded", function () {
    // selecteer alle classes met big-five-list(dus de knoppen)
    const animalButtons = document.querySelectorAll(".big-five-list");
    // Voor elke knop waar op geclickt wordt maak een functie aan. (wordt boven uitgevoerd)
    animalButtons.forEach(function (animalButton) {
        animalButton.addEventListener('click', animalSpotted)
    })
    const removeFirstItemButton = document.getElementById(
        "remove-first-item-button"
    );
    removeFirstItemButton.addEventListener("click", removeFirstItem);

    const removeAllButton = document.getElementById("remove-all-button");
    removeAllButton.addEventListener("click", removeAll);

});


// // Selectors
// const bigFiveList = document.querySelectorAll(".big-five-list");
// const ullist = document.querySelector('big-five-list');
// const list = document.querySelector("ul");

// // Event Listeners
// // buttonEventListener.addEventListener('click', addEvent);
// bigFiveList.forEach(function (currentBtn) {
//     currentBtn.addEventListener('click', addEvent)
// })