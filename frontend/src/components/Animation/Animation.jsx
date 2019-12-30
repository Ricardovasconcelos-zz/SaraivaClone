import React from "react";
import Lottie from "react-lottie";
import animationData from "./cart.json";

export default class LottieControl extends React.Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(29, 190, 50)" }}>
        <Lottie
          width={400}
          height={400}
          options={{
            loop: true,
            autoplay: true,
            animationData,
            rendererSettings: {
              preserveAspectRatio: "xMidYMid slice"
            }
          }}
        />
      </div>
    );
  }
}
