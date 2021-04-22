const Tweet = (props) => {
  return (
    <p>
      sent from: {props.from}, sent to: {props.to}, date sent: {props.date},
      message: {props.message}
    </p>
  );
};
