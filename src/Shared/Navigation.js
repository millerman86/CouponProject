import React from 'react';




// SINCE THIS COMPONENT PROBABLY SHOULDN'T NEED TO HOLD STATE, I'LL JUST LEAVE IT AS STC FOR NOW, AND LISTEN FOR STATE FROM THE REDUX STORE USING THE OBSERVER PATTERN
const Navigation = ({excludedRoutes}) => {
   console.log("EXCLUDED ROUTES ARE: ", excludedRoutes);
   return (
    <div className="ui seven buttons">
      {excludedRoutes.includes('homepage') ? null : (<button className='ui button'><a href='/homepage'><span className='black-letters'><i className='home icon' />Home</span></a></button>)}
      {excludedRoutes.includes('redirects') ? null : (<button className="ui button"><a href='/redirects'><span className='black-letters'><i className='location arrow icon' />Local</span></a></button>)}
      {excludedRoutes.includes('clearance') ? null : (<button className='ui button'><a href='/clearance'><span className='black-letters'><i className="dollar icon" />Clearance</span></a></button>)}
      {excludedRoutes.includes('search') ? null : (<button className='ui button'><a href='/search'><span className='black-letters'><i className='find icon' />Search Coupons</span></a></button>)}
      {excludedRoutes.includes('login') ? null : (<button className='ui button'><a href='/login'><span className='black-letters'><i className='empty star icon' />Login</span></a></button>)}
      {excludedRoutes.includes('advertise') ? null : (<button className='ui button'><a href='/advertise'><span className='black-letters'><i className='announcement icon' />ADVERTISE</span></a></button>)}
    </div>
)};

export default Navigation;



