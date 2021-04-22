const App = (props) => {
  return (
    <div>
      <Tweet from="greg" to="ryan" date={4 / 21 / 21} message="you suck" />
      <Tweet
        from="ryan"
        to="greg"
        date={new Date().toDateString()}
        message="you rock"
      />
      <Tweet
        from="max"
        to="greg"
        date={new Date().toDateString()}
        message="you rock"
      />
    </div>
  );
};
