
import { createElement } from 'react'
import cxs from 'cxs'
import createWrappedPragma from './create-wrapped-pragma'

cxs.options.autoAttach = true

export const config = {
  pragma: createElement,
  cssTransform: (originalProps) => {
    const props = {...originalProps}
    if (props && props.className && typeof props.className === 'object') {
      props.className = cxs(props.className)
    }
    return props
  }
}

const rcxs = createWrappedPragma(config)

export default rcxs

