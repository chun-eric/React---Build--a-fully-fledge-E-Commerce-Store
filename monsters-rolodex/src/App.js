// import { Component } from "react";
import { useState, useEffect } from "react";

import "./App.css";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

// functional based app - mainly uses arrow functions. Runs functions top to bottom
// function components takes props as arguments and returns something
const App = () => {
  // useState gives us back 2 values. [value,setValue] 1st value is the current value and 2nd is a setter function or function that updates the state.
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters); //the inital monsters value

  //useEffect has 2 values, 1st is a callback function and 2nd is an array of dependencies. Its like the componentDidMount without any dependencies. Grabbing outside data
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);

  // only filtering the monsters based on the monsters list and searchfield
  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField); //.includes(searchField) is the value of the search item you inputted in the search box
    });
    setFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onsearchChange = (event) => {
    const searchFieldString = event.target.value.toLocaleLowerCase();
    // we use hooks instead of setState
    setSearchField(searchFieldString);
  };

  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="search-box"
        onChangeHandler={onsearchChange}
        placeholder="search monsters"
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

/*
class based components below. 
-initialize the App with extends Component
-add constructor() with super() and this.state = {}
-add componentDidMount() then fetching the API then returning it as JSON then setState
-adding any event handlers
-adding render()
-inside render() add return()
-export default "the app name"
*/

// class App extends Component {
//   constructor() {
//     super();

//     this.state = {
//       monsters: [],
//       searchField: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((response) => response.json())
//       .then((users) =>
//         this.setState(
//           () => {
//             return { monsters: users };
//           },
//           () => {
//             console.log(this.state);
//           }
//         )
//       );
//   }

//   onsearchChange = (event) => {
//     console.log(event.target.value);
//     const searchField = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return { searchField };
//     });
//   };

//   render() {
//     const { monsters, searchField } = this.state;
//     const { onsearchChange } = this;
//     const filteredMonsters = monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchField); //.includes(searchField) is the value of the search item you inputted in the search box
//     });

//     return (
//       <div className="App">
//         <h1 className="app-title">Monsters Rolodex</h1>
//         <SearchBox
//           className="search-box"
//           onChangeHandler={onsearchChange}
//           placeholder="search monsters"
//         />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );
//   }
// }

export default App;
