const htmlDocument = window.document;
let isOpenBurgerMenu = false;
let loading = false;

const handleBurgerMenu = () => {
  isOpenBurgerMenu = !isOpenBurgerMenu;

  const navContainer = htmlDocument.querySelector("#nav-container");
  const navList = htmlDocument.querySelector("#nav-list");

  if (isOpenBurgerMenu === true) {
    navList.classList.remove("nav-list");
    navList.classList.add("nav-list-mobile");
    navContainer.classList.add("nav-container-after");
  } else {
    navList.classList.remove("nav-list-mobile");
    navContainer.classList.remove("nav-container-after");
    navList.classList.add("nav-list");
  }
};
