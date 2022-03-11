const React = require('react');
const DefaultLayout = require('./layout/Default.jsx')

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        const myStyle = {
            textTransform: 'capitalize'
        };     
        return (
            <DefaultLayout title="Pokemon Index">
            <div style={myStyle}>
                <link rel="stylesheet" href="/css/app.css"/>
                <h1>See All The Pokemon!</h1>
                <ul>
                    {
                        this.props.pokemon.map((pokemon, i) => {
                        return <li key={i}>
                            <a href={`/pokemon/${pokemon.id}`}> { pokemon.name } </a>
                            </li>
                        })
                    }
                </ul>
                <nav>
                    <a href="/pokemon/new">Add another Pokemon</a>
                </nav>
            </div>
            </DefaultLayout>
          )  
     }
}


module.exports = Index;