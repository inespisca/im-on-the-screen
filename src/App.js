import React, { Component } from 'react';
import User from './Components/User'
import './App.css';
import Header from './Components/Header'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: ''
        }
    }

    getUser = () => {
        const name = this.refs.name.value;
        fetch(`http://api.github.com/users/${name}`)
            .then(response => response.json())
            .then(data => {
                this.setState({
                    user: data
                });
            })
    }

    render() {   
        const name = this.state.user.name 
        let userProfile;
        if(name)  {
            userProfile = <User user={this.state.user} />
        }
        return (
            <div className="wrapper">
                <Header />
                <div className='search'>
                    <input type="text" placeholder='Enter a github username' ref="name" />
                    <button className='search-button' onClick={this.getUser}>
                        Search
                    </button>
                </div>
                {userProfile}
            </div>
        );
    }
}

export default App;
