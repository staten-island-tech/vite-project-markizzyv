import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from '../counter.js'




import { DOMSelectors } from './dom.js'
import { filipaneseMenu } from './menu.js'
//create card
function Insert (arr){
  arr.forEach((fdish)=> fdish.document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
  

  //h1 class diff
  `
  <div>
  <h1 class ="fdishTitle">${filipaneseMenu.itemName.value}</h1>   
  <h2 class ="fdishType">${filipaneseMenu.itemType.value}</h2>
  <p class ="fdishDesc">${filipaneseMenu.itemDesc.value}</p>
  <h3 class ="fdishPrice">${filipaneseMenu.itemPrice.value}</h3>
  <img src = "${filipaneseMenu.itemImg.value}" class ="fdishImg">
  </div>
  `
  ));
}
Insert (filipaneseMenu)

//filter appe
const appe = function appeFilter (filipaneseMenu) {
  filipaneseMenu.filter((filipaneseMenu) => filipaneseMenu.itemType.includes("Appetizer"));

  DOMSelectors.appebtn.addEventListener("click", (event) => 
  event.preventDefault(),


  Insert(appe)
)
};

















































/* document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Hello Vite!</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>
    <p class="read-the-docs">
      Click on the Vite logo to learn more
    </p>
  </div>
`

setupCounter(document.querySelector('#counter'))
 */