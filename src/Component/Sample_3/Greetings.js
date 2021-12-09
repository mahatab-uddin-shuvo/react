import React from "react";
import PropTypes from "prop-types";

//functional base component
const Greetings = (props) => {
  return (
    <div>
      <h1>Hello {props.Name}</h1>
    </div>
  )
}

//Class Base Component
// class Greetings extends Component {
//   constructor() {
//     super();
//   }
//   render() {
//     return <h1>Hello {this.props.name}</h1>;
//   }
// }


Greetings.defaultProps = {
  Name: 'Samim'
}

Greetings.propTypes={
  Name: PropTypes.string.isRequired
}
export default Greetings;
