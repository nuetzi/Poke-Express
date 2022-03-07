const req = require('express/lib/request');
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
                <h1>Gotta Catch 'Em All!</h1>
                <h2> {pokemon.name} </h2>
                <img src={pokemon.img + '.jpg'}></img>
                <br></br>
                <br></br>
                <a href='/pokemon'>Back</a>
            </div>
        );
    }
};

module.exports  = Show;