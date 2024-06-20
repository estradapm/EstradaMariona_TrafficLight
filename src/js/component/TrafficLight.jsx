import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

const TrafficLight = () => {
    const [color, setColor] = useState ("red");

    return (
      <div>
        <h1><strong>Traffic Light</strong></h1>

        <div id="container">
      <div
        onClick={() => setColor("red")}
        className={`light red ${color === "red" ? "active" : ""}`}></div>
      <div
        onClick={() => setColor("yellow")}
        className={`light yellow ${color === "yellow" ? "active" : ""}`}></div>
      <div
        onClick={() => setColor("green")}
        className={`light green ${color === "green" ? "active" : ""}`} ></div>
    </div>
    </div>
    )
}

export default TrafficLight;