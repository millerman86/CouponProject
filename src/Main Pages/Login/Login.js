/**
 * Created by amrenmiller on 4/6/17.
 */

import React from 'react';
import DataBaseEndPoint from '../../DataBaseEndPoint';
import {addExcludedRoute, removeExcludedRoute} from '../../Redux/actions';
import {connect} from 'react-redux';
import {NavLink} from 'react-router-dom'


class Login extends React.Component {


  // THIS LOGIN FUNCTION IS THE SIMPLEST POSSIBLE WAY TO DO LOGIN LOGIC THAT YOU CAN POSSIBLY DO
  handleLogin = (evt) => {
    evt.preventDefault();
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


      if (reply.type) {
        sessionStorage.setItem('usertype', reply.type);
      }


      console.log(reply.token);

      if (reply.statusCode === 404) {
        console.log(404);
        return; // NOT FOUND STATUS CODE
      }



      if (reply.error === 'Not Found') {
        console.log(reply.error);
        return
      }

      // ALTHOUGH THIS CAN BE WRITTEN USING REPLY.MESSAGE, IT WOULD BE BETTER TO STICK TO THE PRE-DEFINED ERRORS USING THE BOOM NPM PACKAGE, WHICH WOULD BE Not Found
      // THE ACTUAL OBJECT WOULD BE {statusCode: 404, error: "Not Found", message: "User not found!!!!"}
      if (reply.message === 'User not found!!!!') {
        console.log(reply.message);
        return
      }

      if (reply.message === 'Password incorrect') {
        console.log(reply.message);
        return
      }

      sessionStorage.setItem('token', reply.token);
      sessionStorage.setItem('username', reply.username);


      // THIS WILL EXCLUDE THE LOGIN ROUTE, BECAUSE AFTER YOU LOGIN, YOU WON'T NEED TO HAVE THE LINK BEING DISPLAYED ANYMORE
      this.props.dispatch(addExcludedRoute('login'));
      this.props.dispatch(removeExcludedRoute('advertise'));


      this.props.history.push('/homepage');
    }).catch(function (ex) {
      console.log('parsing failed', ex)
    });
  };


  // Progressive enhancement (start off with tiny boxes everywhere)
  //
  // A strategy for web design that emphasizes core webpage content
  // first. This strategy then progressively adds more nuanced and
  // technically rigorous layers of presentation and features on top
  // of the content as the end-user's browser/internet connection allows.
  //
  // E-mail and password are the simplest level, which is the CORE


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


                {/*TYPE MUST BE PASSWORD, THIS PREVENTS ONLOOKERS FROM SEEING THE PASSWORD FROM BEHIND YOU AS YOU LOG IN */}
                <input type="password" name="Password" ref='password' placeholder="Password"/>
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
