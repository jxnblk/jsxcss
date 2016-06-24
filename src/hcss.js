
import h from 'hyperscript'
import { StyleSheet, css } from 'aphrodite'
import createWrappedPragma from './create-wrapped-pragma'

export const config = {
  pragma: h,
  propName: 'style',
  cssTransform: (originalProps) => {
    const props = { ...originalProps }
    const p = config.propName
    if (props && props[p]) {
      const cx = StyleSheet.create({
        c: props[p]
      })
      delete props[p]
      props.className = css(cx.c)
      return props
    }
  }
}

const hcss = createWrappedPragma(config)

export default hcss

