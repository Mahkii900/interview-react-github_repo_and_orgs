import React, {Component} from 'react'
import {connect} from 'react-redux'
import {setUsername} from '../../ducks/reducer'
import axios from 'axios'

class User extends Component {
    state = {
        username: ''
    }

    handleUsernameChange(e) {
        this.setState({username: e.target.value});
    }
    
    handleSubmit() {
        const BASE_URL = 'https://api.github.com'
        const {username} = this.state

        axios.all([
            axios.get(`${BASE_URL}/users/${username}/repos?per_page=250`),
            axios.get(`${BASE_URL}/users/${username}/orgs`)
        ])
        .then(([user, orgs]) => {
            console.log(user.data, orgs.data)
        })
        // this.props.setUsername(this.state.username)
    }

    render() {
        return (
            <div>
                <input placeholder='username' onChange={(e) => this.handleUsernameChange(e)}/>
                <button onClick={() => this.handleSubmit()}>Submit</button>
            </div>
        );
    }
}

export default connect(null, {setUsername})(User)