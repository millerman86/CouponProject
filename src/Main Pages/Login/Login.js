import {Link} from 'react-router-dom';
/**
 * Created by amrenmiller on 4/6/17.
 */

import React from 'react';
import DataBaseEndPoint from '../../DataBaseEndPoint';


class Login extends React.Component {


    handleLogin = (evt) => {
        evt.preventDefault();
        let username = this.refs.username.value;
        let myInit = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.refs.username.value,
                password: this.refs.password.value,
            })
        };

        fetch(`${DataBaseEndPoint}/v1/login`, myInit)
            .then(function (response) {
                return response.json()
            }).then((reply) => {
            console.log('Here is your token', reply.token);
            sessionStorage.setItem('token', reply.token);
            sessionStorage.setItem('username', username);
            console.log('this is your reply', reply); // {token: <token>}
            if (reply.type) {
                sessionStorage.setItem('usertype', reply.type);
            }
            console.log('reply type', reply.type);
            this.props.history.push('/HomePage');
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        });

    };

    render() {
        return (
            <div className='login-margin'>
                <form className='ui form' onSubmit={this.handleLogin}>
                    <div className='col-xs-12'>
                        <div className='col-xs-2'>
                        </div>
                        <div className='col-xs-2'>
                        </div>
                        <div className='col-xs-1'>
                        </div>
                        <div className='col-xs-2'>
                            <h3 className='align-center'>LOGIN</h3>
                            <label >Username or Email</label>
                            <input type="text" ref='username' name="username" placeholder="Username"/>
                        </div>
                    </div>
                    <div className="field">
                        <div className='col-xs-12'>
                            <div className='col-xs-5'>
                            </div>
                            <div className='col-xs-2'>
                                <label>Password</label>
                                <input type="text" name="Password" ref='password' placeholder="Password"/>
                                <br />
                                <br />
                                <button className={`ui button`} type="submit">Submit</button>
                                <Link to='/createaccount'><p>Not a member? Create a user account!</p></Link>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}

export default Login;