import { h, create, diff, patch } from 'virtual-dom'

function render(count: number)  {
    return h('div', {
        style: {
            textAlign: 'center',
            lineHeight: '100px', 
            border: '1px solid red',
            width: '100px',
            height: '100px'
        }
    }, [String(count)])
}

var count = 0
var tree = render(count)
var actualDOM = create(tree)
document.body.appendChild(actualDOM)

setInterval(() => {
      count++
      var newTree = render(count)
      var patches = diff(tree, newTree)
      console.log(patches)
      actualDOM = patch(actualDOM, patches)
      tree = newTree
}, 1000);
