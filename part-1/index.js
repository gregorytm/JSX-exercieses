const Index = () => {
  return (
    <div>
      <FirstComponent />
      <NamedComponent name="Greg" />
      <App name="greg" />
    </div>
  );
};

ReactDOM.render(<Index />, document.getElementById("root"));
