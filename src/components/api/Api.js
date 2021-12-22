import React, { useState, useEffect } from "react";
import "./api.css";
const Api = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  let coponentMounted = true;
  const fetchWeather = async () => {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=Irbid&appid=3695f82150c960d653ceb1f7e7a9bb65`
    );
    if (coponentMounted) {
      setData(await response.json());
      console.log(data);
    }
    return () => {
      coponentMounted = false;
    };
  };
  useEffect(() => {
    fetchWeather();
  }, []);
  let temp = (data.main.temp - 273.15).toFixed(2);
  return (
    <div className="api-container">
      <div className="row justify-content-center">
        <div className="col-md-4 ">
          <div className="card bg-dark text-white text-center">
            <img src="/winter.jpg" class="card-img" alt="..." />
            <div className="card-img-overlay   ">
              <h5 className="card-title">Weather</h5>
              <p className="card-text">
                <h1>{data.name}</h1>
                <h1>{temp} &#8451;</h1>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Api;
