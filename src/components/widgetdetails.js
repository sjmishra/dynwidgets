const React = require('react')
const WidgetDetails = () => (
  <div>
  <h2>Widget Details</h2>
    <table className='table table-striped table-dark'>
      <thead>
       <tr>
          <th scope="col">Name</th>
          <th scope="col">Descriptions</th>
      </tr>
    </thead>
    <tbody>
           <tr><td> BarWidget</td><td>Tests</td></tr>
           <tr><td> TableData</td><td>Tests</td></tr>
           <tr><td> PieData</td><td>Tests</td></tr>
    </tbody>
    </table>
  </div>
)
module.exports = WidgetDetails