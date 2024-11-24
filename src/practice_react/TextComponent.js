// Create a simple component
function TextComponent(props) {
    return (
      <div style={{ color: props.color }}>
        <p>This text is {props.color}</p>
      </div>
    );
  }
  export default TextComponent;