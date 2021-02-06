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
            <div className="App">
                <div className="Navbar">
                    <Header />
                    <div className='Search'>
                        <input type='text' className='Search-input' placeholder='Enter a github username' ref='name' />
                        <button className='Search-button' onClick={this.getUser}>
                            Search
                        </button>
                    </div>
                </div>
                {userProfile}
            </div>
        );
    }
}

export default App;
