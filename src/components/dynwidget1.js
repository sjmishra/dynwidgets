const React = require('react')

class DynWidget1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
  }
  render() {
    console.log('Rendering...')
    return <table><tr><td>{this.props.widgetName} Home</td><td>{this.props.widgetType}</td></tr></table>
  }
}
module.exports = DynWidget1