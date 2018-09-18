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

Steps for deploy and run: This uses webpack.prod.config.js which is resolved from webpack.config.js passing env = prod as param.
1. npm run build:prod
2. npm start

Steps for dev: this starts webpack-dev-server on port 9000, rendering testapp.js for testing individual component dynmically using webpack.dev.config.js. This speeds up dev, without restart of server and changes are loaded immediately.

1. npm run dev