/**
 * Created by amrenmiller on 4/6/17.
 */

import React from 'react';
import DataBaseEndPoint from '../../DataBaseEndPoint';
import { addExcludedRoute, removeExcludedRoute } from '../../Redux/actions';
import { connect } from 'react-redux';
import {NavLink} from 'react-router-dom'



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
            sessionStorage.setItem('token', reply.token);
            sessionStorage.setItem('username', username);

            if (reply.message === 'User not found!!!!') {
                console.log(reply.message);
                return
            }
            if (reply.message === 'Password incorrect') {
                console.log(reply.message);
                return
            }

            if (reply.type) {
                sessionStorage.setItem('usertype', reply.type);
            }

            // THIS WILL EXCLUDE THE LOGIN ROUTE, BECAUSE AFTER YOU LOGIN, YOU WON'T NEED TO HAVE THE LINK BEING DISPLAYED ANYMORE
            this.props.dispatch(addExcludedRoute('login'));
            this.props.dispatch(removeExcludedRoute('advertise'));


            this.props.history.push('/homepage');
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
                                <NavLink to='/createaccount'><p>Not a member? Create a user account!</p></NavLink>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

        )
    }
}


// IN THE NEXT COMMIT, USE THE BIND ACTION CREATORS FUNCTION
//
// const mapDispatchToProps = (dispatch) => ({
//   addExcludedRoute: addExcludedRoute,
//   handleRemovingAdvertiseExclusion: removeExcludedRoute
// });


const EnhancedLoginComponent = connect(
  // mapDispatchToProps
)(Login);


export default EnhancedLoginComponent;
