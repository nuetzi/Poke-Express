const React = require('react');


class Index extends React.Component {
    render() {
        const { pokemon } = this.props;
        const myStyle = {
        color: '#ffffff',
        backgroundColor: '#000000',
        textTransform: 'capitalize'
         };     
        return (
          <div style={myStyle}>
              <h1>See All The Pokemon!</h1>
              <ul>
                    {pokemon.map((pokemon, i) => {
                        return (
                            <li>
                            <a href={`/pokemon/${i}`}>
                            {pokemon.name}
                            </a>
                            </li>
                        );
                    })}
                </ul>
            </div>
          )  
     }
}


module.exports = Index;