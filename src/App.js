import axios from 'axios';
import React, { useState } from 'react';
import './App.css';

function App() {
  const [photo, setPhoto] = useState(0);
  const [clientId, setClientId] = useState("");

   const [result, setResult] = useState([]);

  function handleChnage(event) {
     setPhoto(event.target.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
    console.log(photo);

const url = "https://api.unsplash.com/search/photos?query=" + photo + "&client_id=" + clientId;

    axios.get(url)
    .then(res => {
      console.log(res.data);
      setResult(res.data.results);
    }
    )


  }
  return (
    <div className="App">
      <input type="text" placeholder="search image" onChange={handleChnage}/>
      <button type='submit' onClick={handleSubmit}>search</button>
      <div className="image-container">
        {result.map(item => (
          <img src={item.urls.small} alt=""/>

        ))}
        </div>
    </div>
  );
}

export default App;
