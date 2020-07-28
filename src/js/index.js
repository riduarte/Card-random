/* eslint-disable */

import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

window.onload = () => {
  let cart = ["A", "J", "Q", "K", "2", "3", "4", "5", "6", "7", "8", "9", "10"];
  let icono = ["&spades;", "&clubs;", "&hearts;", "&diams;"];
  document.querySelector("#letra").innerHTML = getRandom(cart);
  let simbol = getRandom(icono);
  document.querySelectorAll("#picas")[0].innerHTML = simbol;
  document.querySelectorAll("#picas")[1].innerHTML = simbol;
  document.querySelectorAll("#picas")[0].classList.add(getColor(simbol));
  document.querySelectorAll("#picas")[1].classList.add(getColor(simbol));
};
function getRandom(a) {
  let numeroRandom = Math.floor(Math.random() * a.length);
  return a[numeroRandom];
}
function getColor(simbol) {
  if (simbol == "&diams;" || simbol == "&hearts;") {
    return "picas";
  }
}
