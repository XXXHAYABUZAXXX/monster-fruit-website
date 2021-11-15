const getElement = (selector) => {
  const element = document.querySelector(selector);

  if (element) return element;
  throw Error(
    `Please double check your class names, there is no ${selector} class`
  );
};

const links = getElement(".nav__list");
const navBtnDOM = getElement(".nav__header--btn");

navBtnDOM.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const date = getElement("#date");
const currentYear = new Date().getFullYear();
date.textContent = currentYear;
