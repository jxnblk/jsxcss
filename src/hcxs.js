
import h from 'hyperscript'
import cxs from 'cxs'
import createWrappedPragma from './create-wrapped-pragma'

cxs.options.autoAttach = true

export const config = {
  pragma: h.context(),
  propName: 'className',
  propTransform: props => props,
  cssTransform: (originalProps) => {
    const props = { ...originalProps }
    const p = config.propName
    if (props && props[p] && typeof props[p] === 'object') {
      props.className = cxs(props[p])
    }
    return props
  }
}

const hcxs = createWrappedPragma(config)

export default hcxs

