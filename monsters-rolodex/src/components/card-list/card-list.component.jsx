import "./card-list.styles.css";
import Card from "../card/card.component";

// class components
// class CardList extends Component {
//   render() {
//     const { monsters } = this.props;

//     return (
//       <div className="card-list">
//         {monsters.map((monster) => {
//           return <Card key={monster.id} monster={monster} />;
//         })}
//       </div>
//     );
//   }
// }

// functional components
// passes in a parameter
const CardList = ({ monsters }) => {
  <div className="card-list">
    {monsters.map((monster) => {
      return <Card monster={monster} />;
    })}
  </div>;
};

export default CardList;
