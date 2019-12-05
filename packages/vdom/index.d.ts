declare namespace MyJSXVDOM.JSX {
  type Element = VirtualDOM.VNode

  interface IntrinsicElements {
    [name: string]: any
  }
}

interface ComponentConstructor {
  new(props: VirtualDOM.createProperties, children: string | VirtualDOM.VChild[]): Component
}

interface Component {
  render(): VirtualDOM.VNode
}
