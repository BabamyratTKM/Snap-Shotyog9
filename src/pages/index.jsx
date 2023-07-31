import { Component } from "react";
import { Navigate } from "react-router-dom";
class MainPage extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return <Navigate to="/mountain" />;
  }
}
export default MainPage;
