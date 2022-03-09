const React = require('react');

class New extends React.Component {
    render() {
        return (
            <div>
                <h1>Add a New Pokemon</h1>
                <form action='/pokemon' method='POST'>
                    Name: <input type='text' name='name' />
                    <br></br>
                    Image: <input type='text' name='img' />
                    <br></br>
                    <br></br>
                    <input type='submit' name='' value='Create Pokemon' />
                </form>
            </div>
        );
    };
};

module.exports = New;