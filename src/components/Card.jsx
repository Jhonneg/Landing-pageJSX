
function Card({ name, email, id }) {
  return (
    <div className="bg-lime-300 p-2 m-3 inline-block rounded-3xl hover:scale-105 shadow-xl">
      <img
        className="mb-3"
        alt="robots"
        src={`https://robohash.org/${id}?200x200`}
      />
      <div className="text-center">
        <h2>{name}</h2>
        <p>{email}</p>
      </div>
    </div>
  );
}

export default Card;
