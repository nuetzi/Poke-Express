const React = require('react');
const DefaultLayout = require('./layout/Default.jsx')

class Edit extends React.Component{
  render() {
    return (
      <DefaultLayout title="Edit Pokemon Info">
        <link rel="stylesheet" href="/css/app.css"/>      
        {/* The Layout takes in a prop called Title and we pass the Edit Page to it */}
        <form action={`/pokemon/${this.props.pokemon._id}?_method=PUT`} method="POST">
        Name: <input type="text" name="name" defaultValue={this.props.pokemon.name}/><br/>
        Image: <input type="text" name="img"  defaultValue={this.props.pokemon.img}/><br/>
        <br/>
        <br/>
        <input type="submit" value="Submit Changes"/>
      </form>
      </DefaultLayout>
    )
  }
}
module.exports = Edit;