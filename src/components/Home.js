import React, { useState, useRef, useEffect } from "react";
import "../App.css";
import "./Header.css";
import Hexagon from "../assets/fuck me up.png";
import {
  FaSketch,
  FaWindowRestore,
  FaDatabase,
} from "react-icons/fa/";
import { DiSwift, DiReact, DiPython } from "react-icons/di";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "react-bootstrap";
import Flutter from "../assets/flutter.png";
import Me from "../assets/cry.jpg";
import Popup from "reactjs-popup";
import Contact from "./Contact";
import Hello from "../assets/hello.png";
import blue from "../assets/blue.png";
import green from "../assets/green.png";
import yellow from "../assets/yellow.png";
import Color from "color";
import Edibly from "../assets/edibly.png";
import Dj from "../assets/dj.png";
import DateNight from "../assets/cooldatenight.png";
import Calculator from "../assets/calc1.png";
import PetHp from "../assets/peth.png";
import Scraper from "../assets/scraper.png";
import { Textfit } from 'react-textfit';


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
      {props.remixButton}
      <img
        src={Hexagon}
        className="hexagonbig flex-center"
        alt="Hexagon"
        id="hexagon"
      />
      <img className="me" src={Me} alt="me" />
      <p className="centered-p"><i>Hi, I'm </i></p>
      {/* <ScaleText > */}
      <Textfit className="centered-title" mode="single">
      <h1 >Hazel Foerstner</h1>
      </Textfit>
      {/* </ScaleText> */}
      <h6 className="centered-subtitle">
      </h6>
    </div>
  );
}
function About(props) {
  return (
    <div className="about flex-center">
      <Row style={{ width: "80VW", display: "flex", flexWrap: "wrap" }}>
        <Col sm={4} xs={12}>
          <div
            className="card flex-center"
            style={{ backgroundColor: props.color + "30" }}
          >
            <FaSketch
              className="icon"
              style={{ padding: "5%", color: Color(props.color).darken(0.7) }}
            />
            <h2> Design</h2>
            <p style={{ textAlign: "center" }}>
              I use AdobeXd to create UI prototypes of web and mobile apps, so you can make sure
              your app is exactly as beautiful as you pictured it, before I write one line of code.
              {/* Using AdobeXd, I'll create a UI prototype of your app, so that you
              can make sure your app is exactly as beautiful and intuitive as
              you'd pictured it, before I write one line of code. */}
            </p>
          </div>
        </Col>
        <Col sm={4} xs={12}>
          <div
            className="card flex-center"
            style={{ backgroundColor: props.color + "30" }}
          >
            <FaWindowRestore
              className="icon"
              style={{ color: Color(props.color).darken(0.7) }}
            />
            <h2> Development</h2>
            <p style={{ textAlign: "center" }}>
              Cross-platform or native, let's make your app simple, responsive,
              and future-proofed with modern and readable code. <br />
            </p>
            <p style={{ color: "transparent" }}> </p>
          </div>
        </Col>
        <Col sm={4} xs={12}>
          <div
            className="card flex-center"
            style={{ backgroundColor: props.color + "30" }}
          >
            <FaDatabase
              className="icon"
              style={{ color: Color(props.color).darken(0.7) }}
            />
            <h2> Database</h2>
            <p style={{ textAlign: "center" }}>
              Whether you need a custom backend for easy querying, or want to
              take advantage of the latest cloud databases, I will ensure
              seamless integration of your data.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}
export default function Home() {
  //Hooks stuff
  const [style, setStyle] = useState("green");
  const [isShowing, setIsShowing] = useState(false);
  const [clicked, setClicked] = useState(false);

  const styles = {
    green: {
      backgroundImage: green,
      color: "#1D8038"
    },
    blue: {
      backgroundImage: blue,
      color: "#83B8BE"
    },
    yellow: {
      backgroundImage: yellow,
      color: "#F4DA4A"
    }
  };
  const timeout = useRef(null); // to store a handle to timeout so that it can be cleared

  // Timer stuff
  const timeRemixButton = () => {
    console.log("🔎 thanks for inspecting 🕵️");
    timeout.current = setTimeout(() => setIsShowing(true), 15000); // schedule to hide tooltip
  };

  const ContactButton = (
    <button
      className="contactButton"
      style={{ backgroundColor: styles[style]["color"] }}
    >
      <img src={Hello} alt="Say hi!" style={{ height: "40px" }} />
    </button>
  );
  function popUp() {
    var remixButton = document.getElementById("remixbg");
    remixButton.classList.add("popup");
  }
  function popDown() {
    var remixButton = document.getElementById("remixbg");
    remixButton.classList.remove("popup");
  }
  function Portfolio() {
    return (
      <React.Fragment>
        <h1 className="title">Portfolio</h1>
        <div className="divider" style={{ backgroundColor: styles[style]['color'] }} />
        <br />
        <body>
          <Row>
          <Col md={2} xs={4}>
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
            <Col md={2} xs={4}>
              <h3 className="subtitle">Other Projects</h3>
            </Col>
            <Col xs={10}>
              <Gallery />
            </Col>
          </Row>
        </body>
      </React.Fragment>
    );
  }
  function Gallery() {
    let imageList = [Calculator, PetHp, Scraper];
    let text = [
      "An intuitive, simple calculator designed to show the environmental impact of the way you eat, based on several peer-reviewed sources and meta-analyses.",
      "A fun, hooks-based React app using gaming website Polygon's algorithm to calculate the HP (hitpoints) of your pet.",
      "An application that can be easily adapted to scrape the menus of any Javascript-based restaurant app, then intelligently filter for vegan and vegetarian dishes."
    ];
    let icons = [<DiReact style={{fontSize:"21px"}} />, <DiReact style={{fontSize:"21px"}} />, <DiPython />]
    return (
      <Row>
        {imageList.map(image => {
          return (
            <Col md={4} xs={12}>
            <div className="hovercontainer" style={{height: "30VW"}}>
              <img
                src={image}
                alt="Testing"
                style={{
                  display: "inline",
                  objectFit: "cover",
                  height: "100%",
                  maxWidth: '120%',
                }}
              />
              <div
                class="middle"
                style={{ 
                  top: 0,
                  left: 0
                }}
              >
                <div class="text">{icons[imageList.indexOf(image)]} {text[imageList.indexOf(image)]}</div>
              </div>
            </div>
            </Col>
          );
        })}
      </Row>
    );
  }
  if (!clicked && !isShowing) {
    timeRemixButton();
  }
  return (
    <Container style={{ maxWidth: "100VW" }}>
      <Header
        imageUrl={styles[style]["backgroundImage"]}
        remixButton={
          <React.Fragment>
            <button
              id="remixbg"
              data-tip
              data-for="remixTooltip"
              onMouseOver={() => popUp()}
              onMouseOut={() => popDown()}
              className="remixBg"
              onClick={() => {
                setClicked(true);
                if (style === "green") {
                  setStyle("blue");
                } else if (style === "blue") {
                  setStyle("yellow");
                } else if (style === "yellow") {
                  setStyle("green");
                }
              }}
            >
              {!clicked && isShowing && 
              <span
                className="remixtooltip">
                  <h6>Try me!</h6>  
              </span> }
              <img src={Dj} alt="Remix" className="remix" />{" "}
            </button>
          </React.Fragment>
        }
      />
      <About color={styles[style]["color"]} />
      <Popup trigger={ContactButton} modal closeOnDocumentClick>
        <Contact color ={styles[style]['color']}/>
      </Popup>
      <Portfolio />
      <br />
      <div className="flex-center">
        <button
          style={{
            width: "30VW",
            height: '5VW',
            backgroundColor: styles[style]["color"]+'CC' ,
            color:  "white",
            border:
              style === "yellow" ? "2px solid" + styles[style]["color"] : "none",
              boxShadow:" 2px 4px 5px 0px rgba(156, 156, 156, 0.75)",
          }}
        ><b>
          Let's chat!</b>   
        </button>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Container>
  );
}
