import React, {useState} from "react";
import Header from "./header";
import Meme from "./meme";
import AddIcon from '@material-ui/icons/Add';

function App() {

  let [url, setUrl] = useState("");
  let [urlArray, SetArray] = useState([]);

  function HandleClick() {
    setUrl(url);
    SetArray((prevItems) => {
      return [...prevItems, url];
    });
    setUrl("");
  }

  function deleteMeme(id){
    SetArray(prevItems => {
      return prevItems.filter((noteItem,index)=>{
        return index !== id;
      })
    })
  }

  function HandleChange(event) {
    setUrl(event.target.value);
  }

  return (
    <div>
      <Header />
      <div className="input-group mb-3 form">
      <input
        onChange={HandleChange}
        value={url}
        type="text"
        className="form-control"
        placeholder="Enter Url of meme image"
        aria-label="URL"
        aria-describedby="basic-addon2"
      />
      <span className="input-group-btn">
        <button
          className="btn btn-outline-warning"
          type="button"
          onClick={HandleClick}
        >
          <AddIcon />
        </button>
      </span>
    </div>
{urlArray.map((img,index) =>(
<Meme
key = {index}
id = {index}
src = {img}
onDel = {deleteMeme}
/>
))}
    </div>
  );
}

export default App;
