// import { Component } from "react";
import "./card.styles.css";

// class component
// class Card extends Component {
//   render() {
//     const { id, name, email } = this.props.monster; // destructuring

//     return (
//       <div className="card-container" key={id}>
//         <img
//           alt={`monster ${name}`}
//           src={`https://robohash.org/${id}?set=set2&size=180x180`}
//         ></img>
//         <h2>{name}</h2>
//         <p>{email}</p>
//       </div>
//     );
//   }
// }

// functional component
const Card = ({ monster }) => {
  const { id, name, email } = monster;

  return (
    <div className="card-container" key={id}>
      <img
        src={`https://robohash.org/${id}?set=set3&size=180x180`}
        alt={`monster ${name}`}
      />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;
