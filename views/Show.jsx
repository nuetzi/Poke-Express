const React = require('react')

class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon
        const myStyle = {
            color: '#ffffff',
            backgroundColor: '#000000',
            textTransform: 'capitalize'
        };
        return (
            <div style={myStyle}>
                <link rel="stylesheet" href="/css/app.css"/>
                <h1>Gotta Catch 'Em All!</h1>
                <h2> {pokemon.name} </h2>
                <img src={pokemon.img + '.jpg'}></img>
                <br/>
                <br/>
                <form action={`/pokemon/${pokemon._id}/edit`} method="GET">
                <input type="submit" value="EDIT"/>
                </form>
                <br/>
                <form action={`/pokemon/${pokemon._id}?_method=DELETE`} method="POST">
                <input type="submit" value="DELETE"/>
                </form>
                <br/>
                <br/>
                <a href='/pokemon'>Back</a>
            </div>
        );
    }
};

module.exports  = Show;