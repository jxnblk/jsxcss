
import yo from 'yo-yo'
import App from './App'

const div = document.getElementById('app')

console.log(App())

const tree = App()

const update = () => {
  var newTree = App()
  yo.update(tree, newTree)
}

div.appendChild(tree)

