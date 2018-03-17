/**
 * Created by amrenmiller on 4/12/17.
 */

import React from 'react';
import DataBaseEndPoint from '../../DataBaseEndPoint';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux';
import {addExcludedRoute, removeExcludedRoute} from '../../Redux/actions';


class CreateAccount extends React.Component {

  handleSubmit = (evt) => {
    evt.preventDefault();
    if (this.refs.password.value === this.refs.passwordverify.value) {
      let myInit = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          username: this.refs.username.value,
          password: this.refs.password.value
        })
      };

      fetch(`${DataBaseEndPoint}/v1/createuser`, myInit)
        .then(function (response) {
          return response.json()
        }).then((response) => {

        console.log('Here is your token', response.token);
        console.log('Here is your message', response.message);

        sessionStorage.setItem('token', response.token);
        sessionStorage.setItem('username', response.username); // I'M JUST GOING TO TAKE THE USERNAME FROM THE LOCAL VARIABLE INSTEAD OF FROM THE RESPONSE

        if (!response.token) return;

        // THIS WILL EXCLUDE THE LOGIN ROUTE, BECAUSE AFTER YOU LOGIN, YOU WON'T NEED TO HAVE THE LINK BEING DISPLAYED ANYMORE
        this.props.dispatch(addExcludedRoute('login'));
        this.props.dispatch(removeExcludedRoute('advertise'));

        this.props.history.push('/homepage');
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
        <h4 className='center-align'>YOU CAN CREATE YOUR VERY OWN ACCOUNT RIGHT HERE, AND RECEIVE A JSON WEB TOKEN</h4>
        <p className='center-align'>Your password will be encrypted using bcrypt, a popular NPM package</p>
        <p className='center-align'>After you are redirected back to the homepage, you will be able to CLIP COUPONS,
          which saves the id of the coupon to your account entry in the database</p>
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
              <label>Username or Email</label>
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
                <input type="password" name="Password" ref='passwordverify' placeholder="Verify Password"/>

                <br />
                <br />

                <button className={`ui button`} type="submit" >Submit</button>
              </div>
            </div>
          </div>

        </form>
      </div>

    )
  }
}


export default connect()(CreateAccount);


