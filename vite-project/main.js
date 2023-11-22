import './style.css'
import javascriptLogo from './javascript.svg'
import viteLogo from '/vite.svg'
import { setupCounter } from './counter.js'




import { DOMSelectors } from './dom.js'


document.querySelector("#app").insertAdjacentHTML("afterbegin",


document.addEventListener('click', function(){ 
  DOMSelectors.appe.forEach((appe) = appe.innerHTML =
    `
    <div>
    <h1 class ="appeTitle">${appe.itemName}</h1>
    <h2 class ="appeType">${appe.itemType}</h2>
    <p class ="appeDisc">${appe.itemDesc}</p>
    <h3 class ="appePrice">${appe.itemPrice}</h3>
    <img src = "${appe.itemImg}" class ="appeImg">
    </div>
    `

  )

}));












































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