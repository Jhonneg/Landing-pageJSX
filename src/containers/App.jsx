import { Component } from "react";
import CardList from "../components/Cardlist.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      robots: [],
      searchfield: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value });
  };
  render() {
    const { robots, searchfield } = this.state;
    const filteredRobots = robots.filter((robots) => {
      return robots.name.toLowerCase().includes(searchfield.toLowerCase());
    });
    return !robots.length ? (
      <h1>Loading</h1>
    ) : (
      <main className="text-center">
        <h1 className="text-8xl mt-3 font-w font-bold">Robo Friends</h1>
        <SearchBox searchChange={this.onSearchChange} />
        <Scroll>
          <CardList robots={filteredRobots} />
        </Scroll>
      </main>
    );
  }
}

export default App;
