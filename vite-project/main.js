import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'




import { DOMSelectors } from './dom.js'
import { filipaneseMenu } from './menu.js'

function Insert (arr){
  arr.forEach((fdish)=> fdish.document.querySelector(".flex-container").insertAdjacentHTML("afterbegin",
  
  `
  <div>
  <h1 class ="fdishTitle">${fdish.itemName}</h1>
  <h2 class ="fdishType">${fdish.itemType}</h2>
  <p class ="fdishDisc">${fdish.itemDesc}</p>
  <h3 class ="fdishPrice">${fdish.itemPrice}</h3>
  <img src = "${fdish.itemImg}" class ="fdishImg">
  </div>
  `
  ));
}
Insert (filipaneseMenu)


const appe = function appeFilter () {
  filipaneseMenu.filter((filipaneseMenu) => filipaneseMenu.itemType.includes("Appetizer"));
Insert (appe)
console.log(appe)
}














































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