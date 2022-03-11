const React = require('react');
const DefaultLayout = require('./layout/Default.jsx')

class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Add a Pokemon">
            <div>
            <link rel="stylesheet" href="/css/app.css"/>
                <form action='/pokemon' method='POST'>
                    Name: <input type='text' name='name' />
                    <br/>
                    Image: <input type='text' name='img' />
                    <br/>
                    <br/>
                    <input type='submit' name='' value='Create Pokemon' />
                </form>
            </div>
            </DefaultLayout>
        );
    };
};

module.exports = New;