import { MyJSXDOM } from './index'

function onClick(e: Event) {
  if (e.target) {
    const elem = e.target as Element
    alert(elem.textContent)
  }
}

const element = <div id={'myid'} click={onClick}>Hello <b>JSX!</b></div>
document.body.appendChild(element)