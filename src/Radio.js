import "./Radio.css";

const Radio = (props) => {
  return (
    <form>
      {props.list.map((name, index) => {
        return (
          <div>
            <input
              className="radio"
              key={index}
              type="radio"
              name="game"
              value={name}
              onClick={props.sendVal}
            />{" "}
            {name.toUpperCase()}
          </div>
        );
      })}
    </form>
  );
};

export default Radio;
