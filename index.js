const Button = (props) => {
  const { className, buttonText } = props;

  return <button className={`button ${className}`}>{buttonText}</button>;
};
const element = (
  <div className="share-button-container">
    <div className="card-container">
      <h1>Social Buttons</h1>
      <div className="button-container">
        <Button buttonText="Like" className="like-btn" />
        <Button buttonText="Comment" className="comment-btn" />
        <Button buttonText="Share" className="share-btn" />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
