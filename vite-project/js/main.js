import '../css/style.css'
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js' */





//imports
import { DOMSelectors } from '../dom.js'
import { filipaneseMenu } from './menu.js'
//create card
function Insert (arr){
  arr.forEach((fdish)=> fdish.document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
 


  //h1 class diff
  `
  <div>
  <h1 class ="fdishTitle">${fdish.itemName}</h1>  
  <h2 class ="fdishType">${fdish.itemType}</h2>
  <p class ="fdishDesc">${fdish.itemDesc}</p>
  <h3 class ="fdishPrice">${fdish.itemPrice}</h3>
  <img src = "${fdish.itemImg}" class ="fdishImg">
  </div>
  `
  ));
}
Insert (filipaneseMenu)




//filter appe
const appe = function appeFilter () {
  filipaneseMenu.filter((filipaneseMenu) => filipaneseMenu.itemType.includes("Appetizer"));


  DOMSelectors.appebtn.addEventListener("click", (event) =>
  event.preventDefault(),


  Insert(appe)
)};
