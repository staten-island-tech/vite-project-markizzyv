import '../css/style.css'
/* import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js' */


<<<<<<< HEAD
//imports
import { DOMSelectors } from './dom.js'
=======



//imports
import { DOMSelectors } from '../dom.js'
>>>>>>> 1725b23b1665685d7e6d506cfadcf42bd20ff4e9
import { filipaneseMenu } from './menu.js'
//create card
function Insert (arr){
  arr.forEach((fdish)=> fdish.document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
<<<<<<< HEAD
  

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

















































/* document.querySelector('#app').innerHTML = `
=======
 


  //h1 class diff
  `
>>>>>>> 1725b23b1665685d7e6d506cfadcf42bd20ff4e9
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

<<<<<<< HEAD
setupCounter(document.querySelector('#counter'))
 */
=======



//filter appe
const appe = function appeFilter () {
  filipaneseMenu.filter((filipaneseMenu) => filipaneseMenu.itemType.includes("Appetizer"));


  DOMSelectors.appebtn.addEventListener("click", (event) =>
  event.preventDefault(),


  Insert(appe)
)};
>>>>>>> 1725b23b1665685d7e6d506cfadcf42bd20ff4e9
