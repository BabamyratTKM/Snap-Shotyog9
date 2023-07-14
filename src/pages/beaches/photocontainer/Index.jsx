import { useEffect, useState } from "react";

function Index() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=beaches&per_page=24&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.photos.photo));
  }, []);
  return (
    <div>
      <div className="Photo">
        <ul>
          {posts.map((post) => (
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
export default Index;
