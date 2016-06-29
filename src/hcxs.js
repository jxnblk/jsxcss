
import h from 'hyperscript'
import cxs from 'cxs'
import { StyleSheet, css } from 'aphrodite'
import createWrappedPragma from './create-wrapped-pragma'

export const config = {
  pragma: h.context(),
  propName: 'style',
  cssTransform: (originalProps) => {
    const props = { ...originalProps }
    const p = config.propName
    if (props && props[p]) {
      props.className = cxs(props[p])
      delete props[p]
    }
    if (props && props._style) {
      props.style = props._style
      delete props._style
    }
    return props
  }
}

const hcxs = createWrappedPragma(config)

export default hcxs

