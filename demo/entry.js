
import React from 'react'
import ReactDOM from 'react-dom'
import yo from 'yo-yo'
import App from './App'
import cxs from 'cxs'

const div = document.getElementById('app')

ReactDOM.render(<App />, div)

/*
const tree = App()
div.appendChild(tree)

const update = () => {
  var newTree = App()
  yo.update(tree, newTree)
}
*/


