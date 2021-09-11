const FrontFace = (props) => {
  return (
    <div className="front-face">
      <img src={props.image} alt="" />
      <p>{props.text}</p>
    </div>
  );
};

export default FrontFace;
