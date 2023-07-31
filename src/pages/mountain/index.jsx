import { Component } from "react";
// component
import Snapshot from "../../components/SnapshotContainer/index";
const TITLE = "Mountain";
class Mountain extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
    };
  }
  componentDidMount() {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=mountain&per_page=24&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((data) => this.setState({ posts: data.photos.photo }));
  }
  render() {
    return <Snapshot title={TITLE} posts={this.state.posts} />;
  }
}

export default Mountain;
