import { Component } from "react";
/* eslint-disable react/prop-types */
import "./style.css";
class PhotoContainer extends Component {
  render() {
    return (
      <div>
        <h2>{this.props.title} Pictures</h2>
        <div className="photo">
          <ul>
            {this.props?.posts?.map((post) => (
              <li key={post.id}>
                <img
                  src={`https://farm66.staticflickr.com/65535/${post.id}_${post.secret}_m.jpg`}
                  alt=""
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  }
}
export default PhotoContainer;
