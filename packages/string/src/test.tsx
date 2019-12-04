import { MyJSXString } from './index'

function hello(id: string, name: string): string {
  return <div id={id}>Hello <b>{name}!</b></div>
}
function foo(hoge: string, fuga: number): string {
  return <foo hoge={hoge} fuga={fuga}></foo>
}

const e0 = hello('myid', 'JSX')
console.log('hello', e0)
const e1 = foo('abc', 123)
console.log('foo', e1)

document.body.insertAdjacentHTML('afterbegin', e0)
document.body.insertAdjacentHTML('afterbegin', e1)
