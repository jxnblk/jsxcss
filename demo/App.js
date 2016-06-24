
import { hcss } from '..'

const breakpoints = {
  sm: '@media screen and (min-width: 52em)',
  lg: '@media screen and (min-width: 64em)'
}

const App = () => {
  // This style object will be converted to CSS
  // and injected into a style tag in the document head.
  const sx = {
    root: {
      fontFamily: '-apple-system,sans-serif',
      padding: 32,
      [breakpoints.sm]: {
        padding: 48
      }
    },
    heading: {
      fontSize: 48,
      marginTop: 0,
      marginBottom: 16,
      [breakpoints.sm]: {
        fontSize: 64
      },
      [breakpoints.lg]: {
        fontSize: 96
      }
    },
    link: {
      color: '#07c',
      ':hover': {
        color: '#06b'
      }
    }
  }

  return (
    <div style={sx.root}>
      <h1 style={sx.heading}>Hello jsxcss</h1>
      <p>Using hyperscript and yo-yo</p>
      <a href='//github.com/jxnblk/jsxcss'
        style={sx.link}>
        GitHub
      </a>
    </div>
  )
}

export default App

