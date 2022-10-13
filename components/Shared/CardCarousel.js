import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";

export default function MyCarousel() {
  const CONTAINER_STYLE = () => {
    return {
      position: "relative",
      height: "100vh",
      width: "100%",
      display: "flex",
      flex: 1,
      justifyContent: "center",
      alignItems: "middle",
    };
  };

  const CARD_STYLE = () => {
    return {
      height: "400px",
      width: "300px",
      paddingTop: "80px",
      textAlign: "center",
      background: "#52C0F5",
      color: "#FFF",
      fontFamily: "sans-serif",
      fontSize: "12px",
      textTransform: "uppercase",
      borderRadius: "10px",
      boxSizing: "border-box",
    };
  };
  return (
    <div style={CONTAINER_STYLE()}>
      <ReactCardCarousel autoplay={true} autoplay_speed={2500}>
        <div style={CARD_STYLE()}>First Card</div>
        <div style={CARD_STYLE()}>Second Card</div>
        <div style={CARD_STYLE()}>Third Card</div>
        <div style={CARD_STYLE()}>Fourth Card</div>
        <div style={CARD_STYLE()}>Fifth Card</div>
      </ReactCardCarousel>
    </div>
  );
}
