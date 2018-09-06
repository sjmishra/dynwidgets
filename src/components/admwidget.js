const React = require('react')
const request = require('axios')
const _ = require('lodash')

class AdminWidget extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      widgetName:'',
      widgetType:'bargraph',
      title:'',
      widgetlist: []
    }
    this.addwidget = this.addwidget.bind(this)
    this.editwidget = this.editwidget.bind(this)
    this.getwidgetinfo = this.getwidgetinfo.bind(this)
    this.handleWidgetNameChange = this.handleWidgetNameChange.bind(this)
    this.handleWidgetTitleChange = this.handleWidgetTitleChange.bind(this)
    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleSelectChange = this.handleSelectChange.bind(this)
  }

  componentDidMount() {
    request({url: '/api/widgets'})
    .then(response=>{
    console.log('response object content:'+JSON.stringify(response))
    let listwidgets=[]
    if (response && response.data){
      _.each(response.data,function(item){
        let widprop={}
         widprop.id = item.id
         widprop.widgetType = item.type
         widprop.widgetName = item.name
         widprop.title = item.title
         listwidgets.push(widprop)
      })
      console.log(' listwidgets:'+JSON.stringify(listwidgets))
      this.setState({widgetlist: listwidgets})
      
    }
  })
  .catch(console.error)
  }

  handleWidgetNameChange(event) {
    console.log('onChange event: ', event.target.value, event.target.checked)
    this.setState({widgetName: event.target.value})
  }

  handleWidgetTitleChange(event) {
    console.log('onChange event: ', event.target.value)
    this.setState({title: event.target.value})
  }

  handleInput(event){
    console.log('onInput event: ', event.target.value, event.target.checked)
  }

  handleSelectChange(event) {
    this.setState({widgetType: event.target.value})
    console.log(event.target.value)
  }
  
  addwidget() {
  }

  editwidget() {
  }

  getwidgetinfo() {
    this.setState({
      widget: {}
    })
  }

  getNewSquence(){

  }

  handleSubmit(event){
    console.log(event.target.value)

    let dataSubmit = {
      id: this.state.widgetlist.length+1,
      name: this.state.widgetName,
      title: this.state.title,
      type: this.state.widgetType
    }

    request({url: '/api/widgets/add', method: 'post', data: dataSubmit}) 
      .then((data)=>{ 
              console.log('Submitted succes received data:'+JSON.stringify(dataSubmit))
          })
      .catch(console.error)
  }

  render() {
    return (
      <div>
        <h3> Current Widgets</h3>
        <table><tr><th> Name</th><th>Widget Type</th></tr> 
          {this.state.widgetlist.map((v,i) => <tr><td>{v.widgetName}</td><td>{v.widgetType}</td></tr>)}
        </table>
        <h3> Add Widget</h3>
        <div className="form-group">
        <table><tr><td> Widget Name</td>
                <td><input type="text" name="widget-name" onChange={this.handleWidgetNameChange} placeholder="Widget Name"></input></td></tr>
                <tr><td> Widget Title</td>
                <td><input type="text" name="widget-title" onChange={this.handleWidgetTitleChange} placeholder="Widget Title"></input></td></tr>
                <tr><td>Widget Type</td>
                    <td> 
                      <select value={this.state.widgetType} onChange={this.handleSelectChange}>
                         <option value="bargraph">bargraph</option>
                         <option value="piegraph">piegraph</option>
                         <option value="tabledata">tabledata</option>
                      </select>
                    </td>
                </tr>
                <tr><td>Click To Add New Widget</td><td> <input type="button" defaultValue="Add" onClick={this.handleSubmit}/> </td> </tr>      
          </table>
        </div>
      </div>
    )
  }
}

module.exports = AdminWidget