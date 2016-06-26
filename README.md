
# jsxcss

Function to transform JSX style prop into CSS with support for pseudo classes and media queries

## Getting Started

### Use with Hyperscript

```sh
npm i -D jsxcss babel-transform-react-jsx
```

#### .babelrc

```json
{
  "presets": [
    "es2015",
    "stage-0"
  ],
  "plugins": [
    [
      "transform-react-jsx", {
        "pragma": "hcss"
      }
    ]
  ]
}
```

```js
import { hcss } from 'jsxcss'

const MyComponent = (props) => {
  const sx = {
    root: {
      color: 'tomato',
      ':hover': {
        color: 'blue'
      }
    }
  }

  return (
    <div style={sx.root}>
      Hello!
    </div>
  )
}

export default MyComponent
```

### Use with React
**Coming soon**


## How it Works

Jsxcss exports functions for use with React or Hyperscript.

It then takes the `style` prop and passes it to Aphrodite's
`StyleSheet.create` function and applies appropriate classNames to the function.


MIT License

---

To do

- [ ] Plain hyperscript version
- [ ] Nestable hyperscript jsx (use preact's function)
- [ ] `_style` prop for style attribute
- [ ] Make configuration work
- [ ] Fix babel preset

