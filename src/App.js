import React from "react"; 
// import {Slider} from 'card-picker'
import {Slider} from './lib/index'
const App = () => {
  const option = {
    height: "100%",
    infinity: true,
    borderRadius: "30px",
  };
  return (
    <div style={{ height: "500px" }}> 
      <Slider {...option}>
        <div style={{ backgroundColor: "orange" }}>
          <h1>1</h1>
        </div>
        <div style={{ backgroundColor: "gray" }}>
          <h1>2</h1>
        </div>
        <div style={{ backgroundColor: "pink" }}>
          <h1>3</h1>
        </div>
        <div style={{ backgroundColor: "blueviolet" }}>
          <h1>4</h1>
        </div>
        <div style={{ backgroundColor: "red" }}>
          <h1>5</h1>
        </div>
        <div style={{ backgroundColor: "black" }}>
          <h1>6</h1>
        </div>
        <div style={{ backgroundColor: "yellow" }}>
          <h1>7</h1>
        </div>
        <div style={{ backgroundColor: "yellowgreen" }}>
          <h1>8</h1>
        </div>
      </Slider>
    </div>
  );
};

export default App
