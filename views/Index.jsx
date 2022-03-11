const React = require('react');

class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        const myStyle = {
            textTransform: 'capitalize'
        };     
        return (
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
          )  
     }
}


module.exports = Index;