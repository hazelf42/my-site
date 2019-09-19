import React, { useState } from "react";
import "../App.css";
import "./Header.css";
import Hexagon from "../assets/fuck me up.png";
import {
  FaFacebookSquare,
  FaLinkedin,
  FaSketch,
  FaWindowRestore,
  FaDatabase
} from "react-icons/fa/";
import { DiSwift } from "react-icons/di";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "react-bootstrap";
import Flutter from "../assets/flutter.png";
import Me from "../assets/cry.png";
import Popup from "reactjs-popup";
import Contact from "./Contact";
import Hello from "../assets/hello.png";
import blue from "../assets/yellow.png";
import green from "../assets/green.png";
import yellow from "../assets/blue.png";
import Color from "color";
import Edibly from "../assets/edibly.png";
import Dj from "../assets/dj.png";
import DateNight from "../assets/cooldatenight.png";
import Calculator from "../assets/calc1.png";
import PetHp from "../assets/peth.png";
import Scraper from "../assets/scraper.png";
import ReactTooltip from "react-tooltip";

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn1 = 130, //set to medium
    shrinkOn2 = 300; //set to small

  var headerEl = document.getElementById("header");
  var hexagon = document.getElementById("hexagon");

  //if smaller than shrinkOn1
  if (distanceY > shrinkOn2) {
    //Shrink a lot
    headerEl.classList.add("smaller");
    headerEl.classList.remove("medium");
    hexagon.classList.add("hexagonsmall");
  } else if (distanceY > shrinkOn1) {
    //Shrink a little
    headerEl.classList.add("medium");
    hexagon.classList.add("hexagonmedium");
    headerEl.classList.remove("smaller");
    hexagon.classList.remove("hexagonsmall");
  } else {
    //Big
    headerEl.classList.remove("medium");
    headerEl.classList.remove("smaller");
    hexagon.classList.remove("hexagonsmall");
    hexagon.classList.remove("hexagonmedium");
  }
}

function Header(props) {
  window.addEventListener("scroll", resizeHeaderOnScroll);
  console.log(props.imageUrl);
  return (
    <div
      style={{ backgroundImage: `url(${props.imageUrl})` }}
      className="header flex-center"
      id="header"
    >
      {props.onPress}
      <img
        src={Hexagon}
        className="hexagonbig flex-center"
        alt="Hexagon"
        id="hexagon"
      />
      <img className="me" src={Me} alt="me" />
      <p className="centered-p">Hi, I'm </p>
      <h1 className="centered-title title" id="title">
        Hazel Foerstner
      </h1>
      <h4 className="centered-subtitle">
        <FaFacebookSquare />
        <FaLinkedin />
      </h4>
    </div>
  );
}
function About(props) {
  return (
    <div className="about flex-center">
      <Row style={{ width: "80VW"  
    ,display: "flex",
    flexWrap: "wrap"}}>
        <Col xs={4}>
          <div
            className="card flex-center"
            style={{ backgroundColor: props.color + "30" }}
          >
            <FaSketch
              className="icon"
              style={{ padding: "5%", color: Color(props.color).darken(0.7) }}
            />
            <h2> Design</h2>
            <p style={{textAlign:'center'}}> 
              Using AdobeXd, I'll create a UI prototype of your app, so that you can make sure your app is exactly as beautiful and intuitive as you'd pictured it,
              before I write one line of code. 
            </p>
          </div>
        </Col>
        <Col xs={4}>
          <div
            className="card flex-center"
            style={{ backgroundColor: props.color + "30" }}
          >
            <FaWindowRestore
              className="icon"
              style={{ color: Color(props.color).darken(0.7) }}
            />
            <h2> Development</h2>
            <p style={{textAlign:'center'}}> 
              Cross-platform or native, let's make your app simple, responsive, and future-proofed with modern and 
              readable code. <br />
            </p>
            <p style={{color:"transparent"}}> </p>
          </div>
        </Col>
        <Col xs={4}>
          <div
            className="card flex-center"
            style={{ backgroundColor: props.color + "30" }}
          >
            <FaDatabase
              className="icon"
              style={{ color: Color(props.color).darken(0.7) }}
            />
            <h2> Database</h2>
            <p style={{textAlign:'center'}}> 
            Whether you need a custom backend for easy querying, or want to take advantage of the latest cloud databases, 
            we'll ensure seamless integration of your data with the frontend.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
const overlay = <div>Hello</div>;
const projImages = [
  {
    src: Calculator,
    thumbnail: Calculator,
    width: "300px",
    height: "300px",
    customOverlay: overlay,
    caption: "a"
  },
  {
    src: PetHp,

    width: "300px",
    height: "300px",
    thumbnail: PetHp,
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: Scraper,

    width: "300px",
    height: "300px",
    thumbnail: Scraper
  }
];

export default function Home() {
  //Hooks 4 ~style~
  const [style, setStyle] = useState("green");
  const styles = {
    green: {
      backgroundImage: green,
      color: "#1D8038"
    },
    blue: {
      backgroundImage: blue,
      color: "#F4DA4A"
    },
    yellow: {
      backgroundImage: yellow,
      color: "#83B8BE"
    }
  };

  const TriggerButton = (
    <button
      style={{
        position: "fixed",
        backgroundColor: styles[style]["color"], //////////
        color: "white",
        float: "left",
        bottom: "10%",
        left: "3%",
        height: "75px",
        padding: "0 0 5px 0",
        width: "75px",
        border: "none",
        borderRadius: "50%",
        fontSize: "px",
        fontWeight: 600
      }}
    >
      <img src={Hello} alt="Say hi!" style={{ height: "40px" }} />
    </button>
  );
  function popUp() {
    var popup = document.getElementById("popup");
    popup.classList.add("popup");
  }
  function popDown() {
    var popup = document.getElementById("popup");
    popup.classList.remove("popup");
  }
  function Gallery() {
    let imageList = [Calculator, PetHp, Scraper];
    let text = [
      "An intuitive, simple calculator designed to show the environmental impact of the way you eat, based on several peer-reviewed sources and meta-analyses.",
      "A fun, hooks-based React app using gaming website Polygon's algorithm to calculate the HP (hitpoints) of your pet.",
      "An application that can be easily adapted to scrape the menus of any Javascript-based restaurant app, then intelligently filter for vegan and vegetarian dishes."
    ];
    return (
      <div style={{ display: "inline" }}>
        {imageList.map(image => {
          return (
            <div className="hovercontainer" style={{ display: "inline" }}>
              <img
                src={image}
                alt="Testing"
                style={{
                  display: "inline",
                  width: "25VW",
                  height: "20VW",
                  padding: "1%",
                  objectFit: "cover"
                }}/>
              <div class="middle" style={{
                  width: "25VW",
                  height: "20VW",
                  top: 0,
                  left: 0,
                  }}>
                {" "}
                <div class="text">{text[imageList.indexOf(image)]}</div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
  return (
    <Container style={{ maxWidth: "100VW" }}>
      <Header
        imageUrl={styles[style]["backgroundImage"]}
        onPress={
          <button
            id="popup"
            onMouseOver={() => popUp()}
            onMouseOut={() => popDown()}
            className="clickMeBg"
            onClick={() => {
              if (style === "green") {
                setStyle("blue");
              } else if (style === "blue") {
                setStyle("yellow");
              } else if (style === "yellow") {
                setStyle("green");
              }
            }}
          >
            {" "}
            <img src={Dj} alt="Remix" className="clickMe" />{" "}
          </button>
        }
      />
      <About color={styles[style]["color"]} />
      <Popup trigger={TriggerButton} modal closeOnDocumentClick>
        <Contact />
      </Popup>
      <h1 className="title">Portfolio</h1>
      <div className="divider" style={{ backgroundColor: "red" }} />
      <br />
      <body>
        <Row>
          <Col xs={2}>
            <h3 className="subtitle">Production-Ready Mobile Apps</h3>
          </Col>
          <Col xs={10}>
            <div className="hovercontainer">
              <img
                src={DateNight}
                alt="Cool Date Night"
                className="banner flex-center img"
              />
              <div class="middle">
                {" "}
                <div class="text">
                  <img
                    src={Flutter}
                    alt="Flutter"
                    style={{ height: "20px", width: "auto" }}
                  />
                  Cool Date Night
                </div>
              </div>
            </div>
            <div className="hovercontainer">
              <img
                src={Edibly}
                alt="Edibly"
                className="banner flex-center img"
              />
              <div class="middle">
                <div class="text">
                  <img
                    src={Flutter}
                    alt="Flutter"
                    style={{ height: "20px", width: "auto" }}
                  />
                  <DiSwift style={{ height: "30px", width: "auto" }} />
                  Edibly
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs={2}>
            <h3 className="subtitle">Web Projects</h3>
          </Col>
          <Col xs={10}>
            <Gallery />
          </Col>
        </Row>
      </body>
    </Container>
  );
}
