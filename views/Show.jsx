const React = require('react');
const DefaultLayout = require('./layout/Default.jsx')

class Show extends React.Component {
    render () {
        const pokemon = this.props.pokemon
        const myStyle = {
            textTransform: 'capitalize',
            textAlign: 'center'
        };
        return (
            <DefaultLayout title="Gotta Catch 'Em All!">
            <div style={myStyle}>
                <link rel="stylesheet" href="/css/app.css"/>
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
            </DefaultLayout>
        );
    };
};

module.exports  = Show;