import React from 'react';
import PropTypes from 'prop-types';

 export default class Product extends React.Component {

   render() {
     return(
       <div>
         <ul>
           <li>{this.props.name}</li>
           <li>{this.props.producer}</li>
           <li>{this.props.hasWatermark ? 'true' : 'false' }</li>
           <li>{this.props.weight}</li>
         </ul>
       </div>
     );
   }
 }

 let weight_range = [];
  for (var i = 80; i <= 300; i++) {
    weight_range.push(i);
  };

 Product.propTypes = {
   name: PropTypes.string.isRequired,
   producer: PropTypes.string,
   hasWatermark: PropTypes.bool,
   color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
   weight: PropTypes.oneOf(weight_range).isRequired
 }

 Product.defaultProps ={
   hasWatermark: false
 }
