const React = require('react')
const ReactDOM = require('react-dom')
const request = require('axios')
const _ = require('lodash')
const {
  BrowserRouter,
  Route
} = require('react-router-dom')

const DynWidgets = require('./components/dynwidgets.js')
const WidgetDetails = require('./components/widgetdetails.js')

let listwidgets=[]

function populateWidgetData(value){
  let widgetprop={}
  widgetprop.id = value.id
  widgetprop.widgetType = value.type
  widgetprop.widgetName = value.name
  widgetprop.title = value.title

  listwidgets.push(widgetprop)
  console.log(' widgetprop pushed:'+JSON.stringify(widgetprop))
}

request({url: '/api/widgets'})
.then(response=>{
  console.log('response object content:'+JSON.stringify(response))
  if (response && response.data){
    _.each(response.data,function(item){
      let widgetProp = _.partial(populateWidgetData,item)
      widgetProp()
    })

    console.log(' listwidgets:'+JSON.stringify(listwidgets))
    
  //const widgets = (<div>{listwidgets}</div>)
  //ReactDOM.render(<div><DynWidgets widgetlist = {listwidgets}/></div>,

  const widgets = (
    <div>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={()=><DynWidgets widgetlist = {listwidgets} />} />
        <Route path="/widgetdetails" component={WidgetDetails} />
      </div>
    </BrowserRouter>
    </div>
      )

      // Uncomment when test with server side template code
    ReactDOM.render(widgets,
      document.getElementById('app')
    ) 
  }
})
.catch(console.error)
