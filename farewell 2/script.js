const btnStart = document.querySelector(".start");
const home = document.querySelector(".main1");
const loginPage = document.querySelector(".main2");
const MessagePage = document.querySelector(".main3");
const btnStart2 = document.querySelector(".login");
const LastPage = document.querySelector(".main4");
const btnStart3 = document.querySelector(".Send");
const logo = document.querySelector(".NCSLogo");
const openModal = function () {
  home.style.display = "none";
  loginPage.style.display = "block";
  logo.style.display = "block";
};
btnStart.addEventListener("click", openModal);
const openModal2 = function () {
  loginPage.style.display = "none";
  MessagePage.style.display = "block";
};
btnStart2.addEventListener("click", openModal2);
const openModal3 = function () {
  MessagePage.style.display = "none";
  LastPage.style.display = "block";
};
btnStart3.addEventListener("click", openModal3);

// DROPDOWN 1
const dropdowns = document.querySelectorAll(".dropdown");
dropdowns.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  console.log(options);
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
//DROPDOWN 2
const dropdowns2 = document.querySelectorAll(".dropdown2");
dropdowns2.forEach((dropdown) => {
  const select = dropdown.querySelector(".select");
  const caret = dropdown.querySelector(".caret");
  const menu = dropdown.querySelector(".menu");
  const options = dropdown.querySelectorAll(".menu li");
  const selected = dropdown.querySelector(".selected");

  select.addEventListener("click", () => {
    select.classList.toggle("select-clicked");
    caret.classList.toggle("caret-rotate");
    menu.classList.toggle("menu-open");
  });
  console.log(options);
  options.forEach((option) => {
    option.addEventListener("click", () => {
      selected.innerText = option.innerText;
      select.classList.remove("select-clicked");
      caret.classList.remove("caret-rotate");
      menu.classList.remove("menu-open");
      options.forEach((option) => {
        option.classList.remove("active");
      });
      option.classList.add("active");
    });
  });
});
