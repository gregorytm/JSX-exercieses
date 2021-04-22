const App = (props) => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name={props.name} />
    </div>
  );
};
