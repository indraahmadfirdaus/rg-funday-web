import React, { Component } from "react";
import ReactDOM from "react-dom";
import ReactCardCarousel from "react-card-carousel";
import { Image, Text } from "@chakra-ui/react";
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
      // paddingTop: "80px",
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
        <div style={CARD_STYLE()}>
          <Image
            // maxWidth={"100%"}
            // maxHeight="100%"
            objectFit={"cover"}
            height="90%"
            width={"100%"}
            src="https://w0.peakpx.com/wallpaper/223/397/HD-wallpaper-captain-america-avengers-endgame-captain-america-marvel-marvel-comics-marvel-superheroes-superheroes.jpg"
          />
          <Text
            textAlign={{ lg: "center" }}
            fontSize={{ lg: "md", base: "md" }}
            fontWeight="bold"
            color="white"
            marginTop="2"
            zIndex={"10"}
          >
            Dekan - Pahlevi Aulia
          </Text>
        </div>
        <div style={CARD_STYLE()}>
          <Image
            objectFit={"cover"}
            // maxWidth={"100%"}
            // maxHeight="100%"
            height="90%"
            width={"100%"}
            src="https://w0.peakpx.com/wallpaper/602/994/HD-wallpaper-iron-man-marvel-comics.jpg"
          />
          <Text
            textAlign={{ lg: "center" }}
            fontSize={{ lg: "md", base: "md" }}
            fontWeight="bold"
            color="white"
            marginTop="2"
            zIndex={"10"}
          >
            Wakil Dekan - Enrinal Zulhimar
          </Text>
        </div>
        <div style={CARD_STYLE()}>
          <Image
            objectFit={"cover"}
            // maxWidth={"100%"}
            // maxHeight="100%"
            height="90%"
            width={"100%"}
            src="https://wallpaperaccess.com/full/893015.jpg"
          />
          <Text
            textAlign={{ lg: "center" }}
            fontSize={{ lg: "md", base: "md" }}
            fontWeight="bold"
            color="white"
            marginTop="2"
            zIndex={"10"}
          >
            Kepala Prodi - Anisa Tahira
          </Text>
        </div>
        <div style={CARD_STYLE()}>
          <Image
            objectFit={"cover"}
            // maxWidth={"100%"}
            // maxHeight="100%"
            height="90%"
            width={"100%"}
            src="https://w0.peakpx.com/wallpaper/245/353/HD-wallpaper-doctor-strange-marvel.jpg"
          />
          <Text
            textAlign={{ lg: "center" }}
            fontSize={{ lg: "md", base: "md" }}
            fontWeight="bold"
            color="white"
            marginTop="2"
            zIndex={"10"}
          >
            Kepala Lab - Tandry Syawaludin
          </Text>
        </div>
        <div style={CARD_STYLE()}>
          {" "}
          <Image
            objectFit={"cover"}
            // maxWidth={"100%"}
            // maxHeight="100%"
            height="90%"
            width={"100%"}
            src="https://w0.peakpx.com/wallpaper/1013/119/HD-wallpaper-marvel-shang-chi.jpg"
          />
          <Text
            textAlign={{ lg: "center" }}
            fontSize={{ lg: "md", base: "md" }}
            fontWeight="bold"
            color="white"
            marginTop="2"
            zIndex={"10"}
          >
            Security - Indra Ahmad
          </Text>
        </div>
      </ReactCardCarousel>
    </div>
  );
}
