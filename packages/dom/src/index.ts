export const MyJSXDOM = (tagName: string, props: {[key: string]: (string | ((e: any) => any))}, ...children: (Element | string)[]) => {
  const element = document.createElement(tagName)

  for (const attr in props) {
    const p = props[attr]
    if (typeof p === 'function') {
      element.addEventListener(attr, p, false)
    } else {
      element.setAttribute(attr, p)
    }
  }

  for (const c of children) {
    const node = (typeof c === 'string') ? document.createTextNode(c) : c
    element.appendChild(node)
  }

  return element
}
