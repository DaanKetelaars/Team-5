console.log('hi');

// const section = document.querySelector(section.second)

const toggleCard = document.querySelector("section.second");


function cardToFront() {
  toggleCard.classList.toggle("front")
  toggleCard.classList.toggle("currentIndex")

}

console.log(cardToFront);

toggleCard.addEventListener("click", cardToFront);
