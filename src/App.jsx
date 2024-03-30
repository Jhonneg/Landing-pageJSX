import { Component } from "react";
import CardList from "./Cardlist";
import SearchBox from "./SearchBox.jsx";
import { robots } from "./robots.js";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: robots,
      searchfield: "",
    };
  }
  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    return (
      <main className="text-center">
        <h1 className="text-xl mt-3">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <CardList robots={filteredRobots} />
      </main>
    );
  }
}

export default App;
