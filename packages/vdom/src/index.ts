import { h } from 'virtual-dom'

export const MyJSXVDOM = (tag: string, props: VirtualDOM.createProperties, ...children: (string | VirtualDOM.VChild)[]): VirtualDOM.VNode => {
  console.log('tag', tag)
  console.log('children', children)
  return h(tag, props, children)
}
