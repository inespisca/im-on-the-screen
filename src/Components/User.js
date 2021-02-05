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
            <div className='profile'>
                <img className='picture' src={'' + this.props.user.avatar_url} alt="" />
                <h4 className='username'>Github username: {this.props.user.login}</h4>
                <h3 className='name'>Name: {this.props.user.name}</h3>
                <a className="url" href={this.props.user.html_url}>Visit {this.props.user.name}'s Profile</a>
                <p className='about'><b>About {this.props.user.name}:</b> {this.props.user.bio}</p>
                <p className='engagement'><b>Engagement on Github:</b> {this.props.user.name} has {this.props.user.public_repos} public repos, follows {this.props.user.following} developers and is followed by {this.props.user.followers} developers.</p>
            </div>
        )
    }
}

export default User