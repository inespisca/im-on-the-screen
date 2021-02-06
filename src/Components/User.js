import React, { Component } from 'react';

class User extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: ''
        }
    }

    render() {
        return (
            <div className='Menu-profile'>
                <div className='Menu-area'>
                    <p className='Menu-text'>{'' + this.props.user.name}'s Profile</p>
                </div>
                <div className='Profile'>
                    <img className='Picture' src={'' + this.props.user.avatar_url} alt="" />
                    <h4 className='Username'>Github username: {this.props.user.login}</h4>
                    <h3 className='Name'>Name: {this.props.user.name}</h3>
                    <a className="Url" href={this.props.user.html_url}>Visit {this.props.user.name}'s Profile</a>
                    <p className='About'><b>About {this.props.user.name}:</b> {this.props.user.bio}</p>
                    <p className='Engagement'><b>Engagement on Github:</b> {this.props.user.name} has {this.props.user.public_repos} public repos, follows {this.props.user.following} developers and is followed by {this.props.user.followers} developers.</p>
                </div>
            </div>

        )
    }
}

export default User