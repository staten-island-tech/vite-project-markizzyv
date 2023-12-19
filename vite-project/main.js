import './style.css';

import {filipaneseMenu} from "./menu.js"
import { DOMSelectors } from './dom.js';
//create card

document.querySelector(".main").addEventListener("submit", (event) => 
event.preventDefault());

function Insert (arr){
  arr.forEach((fdish)=> document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
 


  //h1 class diff
  `
  <div class= "card">
  <h2 class ="fdishTitle">${fdish.itemName}</h1>  
  <h3 class ="fdishType">${fdish.itemType}</h2>
  <p class ="fdishDesc">${fdish.itemDesc}</p>
  <h3 class ="fdishPrice">${fdish.itemPrice}</h3>
  <img src = "${fdish.itemImg}" class ="fdishImg">
  </div>
  `

  //font for h3, and p 
  ));



}
Insert (filipaneseMenu)



function removeOther () {
  const removecard = document.querySelectorAll(".card");
  removecard.forEach((removing)=> removing.remove())
}


const appeOther = filipaneseMenu.filter((otherappe)=> otherappe.itemType.includes("Main Dish", "Dessert", "Drinks"))
const appe = filipaneseMenu.filter((allappe) => allappe.itemType.includes("Appetizer"));
DOMSelectors.appebtn.addEventListener("click", 
  function () {
 
   removeOther(appeOther);
   Insert(appe);
  
  
  });
  console.log(appe);

const maindOther = filipaneseMenu.filter((othermaind)=> othermaind.itemType.includes("Appetizer", "Dessert", "Drinks"));
const maind = filipaneseMenu.filter((allmainDish)=> allmainDish.itemType.includes("Main Dish", "Dessert", "Drinks"));
DOMSelectors.mainDishBTN.addEventListener("click", function () {
  removeOther(maindOther);
  Insert(maind);
});

console.log(maind)

const dessOther = filipaneseMenu.filter((otherdess)=> otherdess.itemType.includes("Appetizer", "Main Dish", "Drinks"));
const dess = filipaneseMenu.filter((alldess)=> alldess.itemType.includes("Dessert"));
DOMSelectors.desse.addEventListener("click", function () {
  removeOther(dessOther)
  Insert(dess);
});

console.log(dess)

const drinkOther = filipaneseMenu.filter((otherdrink)=> otherdrink.itemType.includes("Appetizer", "Dessert", "Main Dish"));
const drin = filipaneseMenu.filter((alldrin)=> alldrin.itemType.includes("Drink"));
DOMSelectors.drinkz.addEventListener("click", function () {
  removeOther(drinkOther)
  Insert(drin);
});


DOMSelectors.themebtn.addEventListener("click", function () {
  if(document.body.classList.contains("themefilo")) {
    document.body.classList.add("themebarney");
    document.body.classList.remove("themefilo");
  } else {
    document.body.classList.add("themefilo");
    document.body.classList.remove("themebarney");
  }
})



// let buttons = filipaneseMenu.filter((allbutts)=> allbutts.includes("Appetizer", "Main Dish", "Dessert", "Drinks"))

 

