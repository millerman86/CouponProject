/**
 * Created by amrenmiller on 4/7/17.
 */
import {Link} from 'react-router-dom';

/**
 * Created by amrenmiller on 4/6/17.
 */

import React from 'react';


class SubmitCoupons extends React.Component {

    handleLogin = (evt) => {
        let myInit = {
            method: 'post',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                username: this.refs.username.value,
                password: this.refs.password.value,
            })
        };
        evt.preventDefault();
        fetch(`http://localhost:4000/v1/login`, myInit)
            .then(function (response) {
                return response.json()
            }).then((coupons) => {
            console.log('parsed coupons', coupons);
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        });
    };


    render() {
        return (
            <div>
                <form className='ui form' onSubmit={this.handleLogin}>
                    <div className='col-xs-12'>
                        <div className='col-xs-2'>
                        </div>
                        <div className='col-xs-2'>
                        </div>
                        <div className='col-xs-1'>
                        </div>
                        <div className='col-xs-2'>
                            <h3>LOGIN</h3>
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
                                <button className="ui button" type="submit">Submit</button>
                                <Link to='/advertise'><p>Not a member? Create an account!</p></Link>
                            </div>
                        </div>
                    </div>

                </form>
            </div>
        )
    }
}

export default SubmitCoupons;
