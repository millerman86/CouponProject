/**
 * Created by amrenmiller on 4/12/17.
 */

import React from 'react';
import {Link} from 'react-router-dom';
import DataBaseEndPoint from '../../DataBaseEndPoint';

class CreateAccount extends React.Component {


    handleSubmit = (evt) => {
        if (this.refs.password.value === this.refs.passwordverify.value) {
            evt.preventDefault();
            let myInit = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    usertype: 'user',
                    username: this.refs.username.value,
                    password: this.refs.password.value,
                })
            };

            fetch(`${DataBaseEndPoint}/v1/createuser`, myInit)
                .then(function (response) {
                    return response.json()
                }).then((token) => {
                console.log('Here is your token', token);

                sessionStorage.setItem('token', token.token);
                sessionStorage.setItem('username', token.username);
                sessionStorage.setItem('usertype', token.type);
                console.log(token);
                this.props.history.push('/HomePage');
            }).catch(function (ex) {
                console.log('parsing failed', ex)
            });

        } else {
            return alert('Password matching failed');
        }
    };

    render() {
        return (
            <div>
                <form className='ui form' onSubmit={this.handleSubmit}>
                    <div className='col-xs-12'>
                        <div className='col-xs-2'>
                        </div>
                        <div className='col-xs-2'>
                        </div>
                        <div className='col-xs-1'>
                        </div>
                        <div className='col-xs-2'>
                            <h3>Create a User Account</h3>
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
                                <input type="password" name="Password" ref='password' placeholder="Password"/>
                                <input type="password" name="Password" ref='passwordverify'
                                       placeholder="Verify Password"/>
                                <br />
                                <br />
                                <button className="ui button" type="submit">Submit</button>
                                <Link to='/createaccount'><p>Not a member? Create a user account!</p></Link>
                            </div>
                        </div>
                    </div>

                </form>
            </div>

        )
    }

}


export default CreateAccount;


