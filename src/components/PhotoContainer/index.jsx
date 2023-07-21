/* eslint-disable react/prop-types */
import "./style.css";
const PhotoContainer = (props) => (
  <div>
    <h2>{props.title} Pictures</h2>
    <div className="photo">
      <ul>
        {props?.posts?.map((post) => (
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

export default PhotoContainer;
