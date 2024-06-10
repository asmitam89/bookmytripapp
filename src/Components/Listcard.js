import { React, useState, useEffect } from "react";
import axios from "axios";
function Listcard() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios.get(
          "https://dummyjson.com/recipes"
        );
        setData(response.recipes);
        console.error(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(false);
    };

    fetchData();
  }, []);

  return (
    <>
      <div class="container-fluid border-dark row-cols-6 row  mt-5 d-flex justify-content-center">
        {data.map((data1, key) => {
          return (
            <div class="card row-cols-1 m-1">
              <img
                src={data1.image}
                style={{ minHeight: "30%", width: "100%" }}></img>
              <h5 class="card-title">{data1.name}</h5>
              <h6 class="card-subtitle mb-2 text-muted">{data1.difficulty}</h6>
              <p class="card-text">
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </p>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Listcard;
