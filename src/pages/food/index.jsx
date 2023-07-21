import { useState, useEffect } from "react";

// component
import PhotoContainer from "../../components/PhotoContainer";

const TITLE = "Food";
function Beaches() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=food&per_page=24&format=json&nojsoncallback=1"
    )
      .then((response) => response.json())
      .then((data) => setPosts(data.photos.photo));
  }, []);
  return <PhotoContainer title={TITLE} posts={posts} />;
}
export default Beaches;
