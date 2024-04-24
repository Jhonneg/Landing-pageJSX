import { useState, useEffect } from "react";
import CardList from "../components/Cardlist.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";
import Header from "../components/Header.jsx";
import { useSelector, useDispatch } from "react-redux";
import { setSearchField, requestRobots } from "../components/action.js";

function App({ store }) {
  const [robots, setRobots] = useState([]);
  const dispatch = useDispatch();
  const text = useSelector((state) => state.searchRobots.searchField);
  const robotUsers = useSelector((state) => state.getRobotsReducer.users);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setRobots(users));
  }, []);

  const onSearchChange = (event) => {
    dispatch(setSearchField(event.target.value));
  };
  useEffect(() => {
    dispatch(requestRobots());
  }, [dispatch]);

  useEffect(() => {
    const filteredRobots = robotUsers.filter((robots) => {
      return robots.name.toLowerCase().includes(text.toLowerCase());
    });
    setRobots(filteredRobots);
  }, [text, robotUsers]);

  const newRobot = robots;

  return (
    <main className="text-center">
      <Header />
      <SearchBox searchChange={onSearchChange} />
      <Scroll>
        {text === "" ? (
          <CardList robots={robotUsers} />
        ) : (
          <CardList robots={newRobot} />
        )}
      </Scroll>
    </main>
  );
}
export default App;
