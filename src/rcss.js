
import { createElement } from 'react'
import { StyleSheet, css } from 'aphrodite'
import createWrappedPragma from './create-wrapped-pragma'

export const config = {
  pragma: createElement,
  propName: 'style',
  cssTransform: (originalProps) => {
    const props = { ...originalProps }
    const p = config.propName
    if (props && props[p]) {
      const cx = StyleSheet.create({
        c: props[p]
      })
      props.className = css(cx.c)
      delete props[p]
    }
    if (props && props._style) {
      props.style = props._style
      delete props._style
    }
    return props
  }
}

const rcss = createWrappedPragma(config)

export default rcss

