const burguer = () => {
  const toggle = document.querySelector(".toggle");
  const ul = document.querySelector("ul");
  toggle.addEventListener("Click", () => {
    ul.classList.toggle("shownav");
  });
};
export default burguer;
