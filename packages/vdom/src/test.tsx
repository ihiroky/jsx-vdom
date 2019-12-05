import { create, diff, patch } from 'virtual-dom'
import { MyJSXVDOM } from './index'

namespace MyVDOM {
  let virtualDOM: VirtualDOM.VNode
  let actualDOM: Element
  let renderVDOM: () => VirtualDOM.VNode

  export function render(render: (() => VirtualDOM.VNode), container: HTMLElement) {
    renderVDOM = render
    virtualDOM = renderVDOM()
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

var countGlobal = 0

function onClickGlobal(e: Event) {
  countGlobal++
  MyVDOM.update()
}

function HelloGlobal() {
  return <div id={'myidglobal'} onclick={onClickGlobal}>Hello <b>JSX!</b> <b>VDOM!</b> {countGlobal}</div>
}

class HelloLocal {
  private count: number

  constructor() {
    this.count = 0
    this.getCount = this.getCount.bind(this)
    this.onClick = this.onClick.bind(this)
  }

  getCount() {
    return this.count
  }

  onClick(e: Event) {
    this.count++
    MyVDOM.update()
  }

  render() {
    return <div id={'myidlocal'} onclick={this.onClick}>Hello <b>JSX!</b> <b>VDOM!</b> {this.getCount()}</div>
  }
}

// MyVDOM.render(HelloGlobal, document.body)
// MyVDOM.render(() => <HelloGlobal/>, document.body)
MyVDOM.render(() => <HelloLocal/>, document.body)

