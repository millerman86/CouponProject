import React from 'react';
// import { Link } from 'react-router-dom';
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux';


// SINCE THIS COMPONENT PROBABLY SHOULDN'T NEED TO HOLD STATE, I'LL JUST LEAVE IT AS STC FOR NOW, AND LISTEN FOR STATE FROM THE REDUX STORE USING THE OBSERVER PATTERN

let Navigation = ({excludedRoutes}) => {
  return (
    <div className="ui seven buttons">
      {excludedRoutes.includes('homepage') ? null : (<button className='ui button'><NavLink to='/homepage'><span className='black-letters'><i className='home icon' />Home</span></NavLink></button>)}
      {excludedRoutes.includes('redirects') ? null : (<button className="ui button"><NavLink to='/local'><span className='black-letters'><i className='location arrow icon' />Local</span></NavLink></button>)}
      {excludedRoutes.includes('clipped') ? null : (<button className='ui button'><NavLink to='/clipped'><span className='black-letters'><i className="cut icon" />Clipped</span></NavLink></button>)}
      {excludedRoutes.includes('search') ? null : (<button className='ui button'><NavLink to='/search'><span className='black-letters'><i className='find icon' />Search Coupons</span></NavLink></button>)}
      {excludedRoutes.includes('login') ? null : (<button className='ui button'><NavLink to='/login'><span className='black-letters'><i className='empty star icon' />Login</span></NavLink></button>)}
      {excludedRoutes.includes('advertise') ? null : (<button className='ui button'><NavLink to='/advertise'><span className='black-letters'><i className='announcement icon' />ADVERTISE</span></NavLink></button>)}
    </div>
  )};



const mapStateToProps = (state) => ({
  excludedRoutes: state.excludedRoutes
});



Navigation = connect(
  mapStateToProps
)(Navigation);



export default Navigation;



