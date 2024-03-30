import "./Card.css";

function Card(props) {
  return (
    <div className="bg-lime-300 p-6 m-4 inline-block rounded-3xl hover:scale-105 shadow-xl">
      <img
        className="mb-3"
        alt="robots"
        src="https://robohash.org/test?200x200"
      />
      <div className="text-center">
        <h2>{props.name}</h2>
        <p>{props.email}</p>
      </div>
    </div>
  );
}

export default Card;
