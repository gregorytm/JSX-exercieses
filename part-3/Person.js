const Person = (props) => {
  let reply = props.age >= 18 ? "Go vote!" : "You must be 18!";

  let hobbies = props.hobbies.map((h) => <li>{h}</li>);

  return (
    <div>
      <p>
        Learn some info about this person! Name: {props.name.slice(0, 6)} Age:{" "}
        {props.age}
      </p>
      <p>hobbies</p>
      <ul>
        <li>{hobbies}</li>
      </ul>
      <h3>{reply}</h3>
    </div>
  );
};
