import { create, diff, patch } from 'virtual-dom'
import { MyJSXVDOM } from './index'

namespace MyVDOM {
  let virtualDOM: VirtualDOM.VNode
  let actualDOM: Element
  let renderVDOM: () => VirtualDOM.VNode

  export function render(render: () => VirtualDOM.VNode, container: HTMLElement) {
    renderVDOM =  render
    virtualDOM = render()
    console.log(virtualDOM)
    actualDOM = create(virtualDOM)
    container.appendChild(actualDOM)
  }

  export function update() {
    var newVirtualDOM = renderVDOM()
    var patches = diff(virtualDOM, newVirtualDOM)
    actualDOM = patch(actualDOM, patches)
    virtualDOM = newVirtualDOM
  }
}

var count = 0

function onClick(e: Event) {
  count++
  MyVDOM.update()
}

function Hello() {
  return <div id={'myid'} onclick={onClick}>Hello <b>JSX!</b> <b>VDOM!</b> {count}</div>
}

MyVDOM.render(Hello, document.body)
