
import { createElement } from 'react'
import { StyleSheet, css } from 'aphrodite'
import createWrappedPragma from './create-wrapped-pragma'

export const config = {
  pragma: createElement,
  propName: 'className',
  cssTransform: (originalProps) => {
    const props = { ...originalProps }
    const p = config.propName
    if (props && props[p] && typeof props[p] === 'object') {
      const cx = StyleSheet.create({
        c: props[p]
      })
      props.className = css(cx.c)
    }
    return props
  }
}

const rcss = createWrappedPragma(config)

export default rcss

