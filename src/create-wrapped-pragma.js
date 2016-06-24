
const createWrappedPragma = (config) => (el, originalProps, ...children) => {
  const { pragma, cssTransform } = config
  const props = cssTransform(originalProps)

  return pragma(el, props, ...children)
}

export default createWrappedPragma

