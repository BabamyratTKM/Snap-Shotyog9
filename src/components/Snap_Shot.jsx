import { FaSearch } from "react-icons/fa";

function Snap_Shop() {
   fetch(`https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=636e1481b4f3c446d26b8eb6ebfe7127&tags=mountain&per_page=24&format=json&nojsoncallback=1`)
   .then((response) => console.log(response));
    return(
        <div className='container'>
        <div>
          <h1>SnapShot</h1>
          <div className='div'>
              <input className='input' placeholder='Search...' /> 
              <button className='Search'><FaSearch className="icon" /></button>
          </div>
          <nav className='nav'>
              <ul>
                  <li><a href='#'>Mountain</a></li>
                  <li><a href='#'>Beaches</a></li>
                  <li><a href='#' >Brids</a></li>
                  <li><a href='#'>Food</a></li>
              </ul>
          </nav>
        </div>
       
        <div>
          <h2>Mountain Pictures</h2>
          <div className='Photo'>
          <ul>
              <li><img src='https://avatars.mds.yandex.net/i?id=b535e75978d6a4fb74a695b93d76e03492ac8291-9181118-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=75c7ab778d2b35e49e96aabdecc35faf48871df4-9265564-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=2abc764759f787060fac81ec1a287af57517bc6e-8564995-images-thumbs&n=13'></img></li>
              <li><img src='https://avatars.mds.yandex.net/i?id=b535e75978d6a4fb74a695b93d76e03492ac8291-9181118-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=72682c46b021bbca59407e4cdc2fb766d655cec0-8081694-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=2abc764759f787060fac81ec1a287af57517bc6e-8564995-images-thumbs&n=13'></img></li>
              <li><img src='https://avatars.mds.yandex.net/i?id=5b153b65cd35787dd22a2462273daab5f6654263-9094675-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=2abc764759f787060fac81ec1a287af57517bc6e-8564995-images-thumbs&n=13'></img></li>
              <li><img src='https://avatars.mds.yandex.net/i?id=b535e75978d6a4fb74a695b93d76e03492ac8291-9181118-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=3bd27c4cf1d16ebada76bffe4e8ee45e034be9b7-9198030-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=2abc764759f787060fac81ec1a287af57517bc6e-8564995-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=5d42ce2915df95899f15eb79e7b60c5194b9b90f-8497133-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=8b4fff697b6225e421e52a1268b4dc9ccf956021-9229193-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=c51c1bd4aee99ff3bb538d7520c03d20b4fd9e02-5271071-images-thumbs&n=13'></img></li>
              <li><img src='https://avatars.mds.yandex.net/i?id=b535e75978d6a4fb74a695b93d76e03492ac8291-9181118-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=2abc764759f787060fac81ec1a287af57517bc6e-8564995-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=2abc764759f787060fac81ec1a287af57517bc6e-8564995-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=9a32ef86db37b2c89b549e5563331ab83577b566-9181326-images-thumbs&n=13'></img></li>
              <li><img src='https://avatars.mds.yandex.net/i?id=98280ba9f4bcbef58ee269ab7aee0c16-2451231-images-thumbs&n=13'></img></li>
              <li><img src=' https://avatars.mds.yandex.net/i?id=9abfad558dff6f430f1a7475973f34e888444c69-8901624-images-thumbs&n=13'></img></li>
          
          </ul>
          </div>
        </div>
  
  
        </div>
        
    )

}

export default Snap_Shop;