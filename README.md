# dynwidgets

The web application demonstrating usage of

1. UI components using Reactjs, backend server using expressjs and mustache as template engine.
2. It connects to mongodb instance for storage, which demos the usage of query/find and insert to db collections ( db name: dynwidgets and collection: widgets)
3. It also demonstrate how dynmically we can render react components, based on content of array holding component types as below

DynWidegets.js:

const components = {
    bargraph :   DynWidget1,
    piegraph :   DynWidget2,
    tabledata :  DynWidget3
}

Rendering as 
<DynWidg id={widg.id} title={widg.title} widgetName={widg.widgetName} widgetType={widg.widgetName} /> </td> which is called from main


component router as below

 <Route exact path="/" component={()=><DynWidgets widgetlist = {listwidgets} />} />


listwidgets is a list holding attributes of widget objects like title, name, type of widget.