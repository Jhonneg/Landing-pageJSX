import { useState, useEffect } from "react";
import CardList from "../components/Cardlist.jsx";
import SearchBox from "../components/SearchBox.jsx";
import Scroll from "../components/Scroll.jsx";
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

  return !robots.length ? (
    <h1>Loading</h1>
  ) : (
    <main className="text-center">
      <h1 className="text-8xl mt-3 font-w font-bold">Robo Friends</h1>
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
