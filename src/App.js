import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component";
import { Test } from "./components/card-list/test-component";
import { Searchbox } from "./components/search-box/searchbox.component";
import "./App.css";
import { render } from "@testing-library/react";

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  //no binding
  handleChange = (e) => {
    this.setState({ searchField: e.target.value });
  };

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((usrs) => this.setState({ monsters: usrs }));
  }

  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1>monsters rolodex</h1>
        <Searchbox
          placeholderText="search monsters"
          handleChange={this.handleChange}
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

//let url = "https://jsonplaceholder.typicode.com/users";

export default App;
