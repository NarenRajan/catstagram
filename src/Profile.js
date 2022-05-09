import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
const axios = require("axios");

function Profile() {
  const { id } = useParams();
  const [image, setImage] = useState([]);

  const FetchImage = () => {
    axios
      .get(`https://api.thecatapi.com/v1/images/search?breed_id=${id}&limit=5`)
      .then((response) => {
        // handle success
        setImage(response.data);
        console.log("image response is", response);
      })
      .catch((error) => {
        // handle error
        console.log(error);
        alert("error", error);
      });
  };

  return (
    <div>
      {useEffect(FetchImage, [])}
      <h1>Profile of {id} </h1>

      <div>
        {image.map((img, index) => {
          return (
            <div key={index}>
              <img
                class="rounded  w-100 h-100"
                src={img.url}
                alt="cat"
                style={{ width: "400px", height: "400px" }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Profile;
