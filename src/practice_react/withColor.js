// Define a Higher-Order Component (HOC)
 function withColor(Component) {
  return function (props) {
    return <Component {...props} color="red" />;
  };
}
export default withColor;