import React from "react";
import { render } from "react-dom";
import { Slider } from "./lib/main";
const App = () => {
  const option = {
    height: "100%",
    infinity: true,
    borderRadius: "30px",
  };
  return (
    <div style={{ height: "1000px" }}>
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
        <div style={{ backgroundColor: "white" }}>
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
        {/* <div style={{ backgroundColor: "orange" }}>
          <img src="https://picsum.photos/200/300?random=101" alt="" />
        </div>
        <div style={{ backgroundColor: "gray" }}>
          <img src="https://picsum.photos/200/300?random=11" alt="" />
        </div>
        <div style={{ backgroundColor: "white" }}>
          <img src="https://picsum.photos/200/300?random=3" alt="" />
        </div>
        <div style={{ backgroundColor: "black" }}>
          <img src="https://picsum.photos/200/300?random=5" alt="" />
        </div>
        <div style={{ backgroundColor: "red" }}>
          <img src="https://picsum.photos/200/300?random=10" alt="" />
        </div>
        <div style={{ backgroundColor: "pink" }}>
          <img src="https://picsum.photos/200/300?random=101" alt="" />
        </div>
        <div style={{ backgroundColor: "yellow" }}>
          <img src="https://picsum.photos/200/300?random=4" alt="" />
        </div>
        <div style={{ backgroundColor: "yellowgreen" }}>
          <img src="https://picsum.photos/200/300?random=4" alt="" />
        </div> */}
      </Slider>
    </div>
  );
};
render(React.createElement(App), document.getElementById("root"));
