const docCardsType = document.querySelectorAll('.format-type');
const filterItems = document.querySelectorAll('.filter-item')

docCardsType.forEach((block) => {
  block.addEventListener("click", () => {
    docCardsType.forEach((elem) => {
      elem.classList.remove("format-type__bgColor");
    })
    block.classList.add("format-type__bgColor")
  })
})

filterItems.forEach((block) => {
  block.addEventListener("click", () => {
    filterItems.forEach((elem) => {
      elem.classList.remove("filter-item__checked");
    })
    block.classList.add("filter-item__checked")
  })
})
