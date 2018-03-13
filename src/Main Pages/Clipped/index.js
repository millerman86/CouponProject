import React from 'react';
// import FilterLink from './FilterLink'
// import {VisibilityFilters} from '../../Redux/actions';
//
//
//
// const Header = () => (
//   <p>
//     Show:
//     {" "}
//     <FilterLink filter={VisibilityFilters.SORT_PRODUCTS}>
//       By Product
//     </FilterLink>
//     {" | "}
//     <FilterLink filter={VisibilityFilters.SORT_COMPANY}>
//       By Company
//     </FilterLink>
//     {" | "}
//     <FilterLink filter={VisibilityFilters.SORT_PRICE}>
//       By Price
//     </FilterLink>
//     {" | "}
//     <FilterLink filter={VisibilityFilters.SORT_SHIPPING}>
//       By Shipping
//     </FilterLink>
//   </p>
// );

// filter={ VisibilityFilters.SHOW_ALL }
// filter={ VisibilityFilters.SHOW_ACTIVE }
// filter={ VisibilityFilters.SHOW_COMPLETED }







class ClippedContainer extends React.Component {
  render() {
    return (


      <div>


        {/*<Header />*/}



      <table className="ui unstackable celled table">
        <thead>

        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Company</th>
          <th>Shipping</th>
        </tr>

        </thead>
        <tbody>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        </tbody>
        <tfoot>
        <tr><th colSpan="4">
          <div className="ui right floated pagination menu">
            <a className="icon item">
              <i className="left chevron icon"/>
            </a>
            <a className="item">1</a>
            <a className="item">2</a>
            <a className="item">3</a>
            <a className="item">4</a>
            <a className="icon item">
              <i className="right chevron icon"/>
            </a>
          </div>
        </th>
        </tr></tfoot>
      </table>

      </div>




    );
  }
}

export default ClippedContainer;
