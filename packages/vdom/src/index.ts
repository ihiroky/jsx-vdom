import { h } from 'virtual-dom'

function isComponentConstructor(c: any): c is ComponentConstructor {
  return c !== null
    && typeof c === 'function'
    && typeof c.prototype.render === 'function'
}

export const MyJSXVDOM = (
    tagOrCompOrFunc: string | ((props: VirtualDOM.createProperties, children: string | VirtualDOM.VChild[]) => VirtualDOM.VNode) | ComponentConstructor,
    props: VirtualDOM.createProperties,
    ...children: (string | VirtualDOM.VChild)[]): VirtualDOM.VNode => {

  if (typeof tagOrCompOrFunc === 'string') {
    return h(tagOrCompOrFunc, props, children)
  } else if (isComponentConstructor(tagOrCompOrFunc)) {
    const c = new tagOrCompOrFunc(props, children)
    return c.render()
  } else {
    return tagOrCompOrFunc(props, children)
  }
}
