// Framework-agnostic functional UI component demo
// Notice: no import React, etc.

const breakpoints = {
  sm: '@media screen and (min-width: 52em)',
  lg: '@media screen and (min-width: 64em)'
}

const App = () => {
  // This style object will be converted to CSS
  // and injected into a style tag in the document head.
  const cx = {
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
      ':hover': {
        color: 'magenta'
      },
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
    <div className={cx.root}>
      <h1 className={cx.heading}>Hello jsxcss</h1>
      <p>Using hyperscript and yo-yo</p>
      <a href='//github.com/jxnblk/jsxcss'
        className={cx.link}>
        GitHub
      </a>
    </div>
  )
}

export default App

