const React = require('react')
const DynWidget1 = require('./dynwidget1.js')
const DynWidget2 = require('./dynwidget2.js')
const DynWidget3 = require('./dynwidget3.js')

const {
Link
} = require('react-router-dom')

const components = {
    bargraph :   DynWidget1,
    piegraph :   DynWidget2,
    tabledata :  DynWidget3
}

class DynWidgets extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentTime: (new Date()).toLocaleString()
    }
  }

  componentDidMount() {
  }

  getWidgetView(widg){
      const DynWidg = components[widg.widgetType]
      return (<div>
                  <table className='table table-striped'><tr><td>
                      <DynWidg id={widg.id} title={widg.title} widgetName={widg.widgetName} widgetType={widg.widgetName} /> </td>
                  <td>
                      <Link to={`/widgetdetails`}>About This Widget</Link>
                  </td>
                  </tr>
                  </table><br/>
             </div>)
  }

  render() {
    console.log('Rendering...')
    console.log('widgetlist from props'+this.props.widgetlist)
    
    return (
            <div>
              {this.props.widgetlist.map(widg=>this.getWidgetView(widg))}
            </div>
        )  
    }
}
module.exports = DynWidgets