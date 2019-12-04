export const MyJSXString = (tagName: string, props: {[key: string]: string}, ...children: string[]) => {
  let attrs = ''
  for (const key in props) {
    attrs += ` ${key}="${props[key]}"`
  }
  return `<${tagName}${attrs}>${children.join('')}</${tagName}>`
}
