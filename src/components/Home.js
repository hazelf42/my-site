import React, { useState, useRef } from "react";
import "../App.css";
import "./Header.css";
import Hexagon from "../assets/whitehexagon.png";
import { FaSketch, FaWindowRestore, FaDatabase } from "react-icons/fa/";
import { DiSwift, DiReact, DiPython } from "react-icons/di";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Flutter from "../assets/flutter.png";
import Popup from "reactjs-popup";
import Contact from "./Contact";
import Hello from "../assets/hello.png";
import Color from "color";
import Edibly from "../assets/edibly.png";
import Dj from "../assets/dj.png";
import DateNight from "../assets/cooldatenight.png";
import Calculator from "../assets/calc1.png";
import Tarakwai from "../assets/tarakwai.png";
import SOC from "../assets/soc.jpg";
import SC from "../assets/sc.png";

import GraphCalc from "../assets/calc2.png";

import Sociables from "../assets/sociablesbanner.png";
import Scraper from "../assets/scraper.png";
import { Textfit } from "react-textfit";
import { isMobile } from "react-device-detect";
import { ImageContainer } from "./ImageLazyLoading.js";

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn1 = 130, //set to medium
    shrinkOn2 = 300; //set to small

  var headerEl = document.getElementById("header");
  var headerImg = document.getElementById("headerImg");
  var hexagon = document.getElementById("hexagon");
  //if smaller than shrinkOn1
  if (distanceY > shrinkOn2) {
    //Shrink a lot
    headerEl.classList.add("smaller");
    headerEl.classList.remove("medium");

    headerImg.classList.add("smaller");
    headerImg.classList.remove("medium");

    hexagon.classList.add("hexagonsmall");
  } else if (distanceY > shrinkOn1) {
    //Shrink a little
    headerEl.classList.add("medium");
    headerEl.classList.remove("smaller");

    headerImg.classList.add("medium");
    headerImg.classList.remove("smaller");

    hexagon.classList.add("hexagonmedium");
    hexagon.classList.remove("hexagonsmall");
  } else {
    //Big
    headerEl.classList.remove("medium");
    headerEl.classList.remove("smaller");

    headerImg.classList.remove("medium");
    headerImg.classList.remove("smaller");

    hexagon.classList.remove("hexagonsmall");
    hexagon.classList.remove("hexagonmedium");
  }
}
function blurChangeHeaders() {
  var blurable = document.getElementById("headerImg");
  blurable.classList.add("header-image-blur");
  setTimeout(() => {
    blurable.classList.remove("header-image-blur");
  }, 300); // schedule to hide tooltip
}
function Header(props) {
  window.addEventListener("scroll", resizeHeaderOnScroll);
  return (
    <React.Fragment>
      <div id="headerImg" className="header flex-center">
        <ImageContainer
          src={props.imageUrl}
          thumb={props.imageThumb}
          className=""
        />
      </div>
      <div className="header flex-center" id="header">
        {props.remixButton}
        <img
          src={Hexagon}
          className="hexagonbig flex-center"
          alt="Hexagon"
          id="hexagon"
        />
        <div className="me">
          <ImageContainer
            src={require("../assets/headshot.png")}
            thumb={require("../assets/headshot_thumb.png")}
            alt="me"
            style={{ height: "100%", width: "100%" }}
          />
        </div>
        <p className="centered-p">
          <i>Hi, I'm </i>
        </p>
        {/* <ScaleText > */}
        <Textfit className="centered-title" mode="single">
          <h1>Hazel Foerstner</h1>
        </Textfit>
        {/* </ScaleText> */}
        <h6 className="centered-subtitle"> </h6>
      </div>
    </React.Fragment>
  );
}
// function Header(props) {
//   window.addEventListener("scroll", resizeHeaderOnScroll);
//   return (
//     <React.Fragment>
//       <ImageContainer
//         className="header flex-center"
//         src={props.imageUrl}
//         thumb={props.thumbUrl}
//         // id="header"
//       />
//       <div className="header flex-center" id="header">
//         {props.remixButton}
//         <img
//           src={Hexagon}
//           className="hexagonbig flex-center"
//           alt="Hexagon"
//           id="hexagon"
//         />
//         <img
//           className="me"
//           src={require("../assets/headshot.png")}
//           alt="me"
//           style={{ borderRadius: "50%" }}
//         />
//         <p className="centered-p">
//           <i>Hi, I'm </i>
//         </p>
//         {/* <ScaleText > */}
//         <Textfit className="centered-title" mode="single">
//           <h1>Hazel Foerstner</h1>
//         </Textfit>
//         {/* </ScaleText> */}
//         <h6 className="centered-subtitle"> </h6>
//       </div>
//     </React.Fragment>
//   );
// }
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
              I use AdobeXd to create UI prototypes of web and mobile apps, so
              you can make sure your app is exactly as beautiful as you pictured
              it, before I write one line of code.
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
  const [openContact, setOpenContact] = useState(false);

  const styles = {
    green: {
      backgroundImage: require("../assets/green.png"),
      imageThumb: require("../assets/green_thumb.png"),
      color: "#1D8038",
    },
    blue: {
      backgroundImage: require("../assets/blue.png"),
      imageThumb: require("../assets/blue_thumb.png"),
      color: "#83B8BE",
    },
    yellow: {
      backgroundImage: require("../assets/yellow.png"),
      imageThumb: require("../assets/yellow_thumb.png"),
      color: "#F4DA4A",
    },
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
        <div
          className="divider"
          style={{ backgroundColor: styles[style]["color"] }}
        />
        <br />
        <div>
          <Row>
            <Col md={2} xs={12}>
              <h3 className="subtitle">Production-Ready Mobile Apps</h3>
            </Col>
            <Col md={9} xs={12}>
              <a href="https://apps.apple.com/in/app/cool-date-night/id1402648300#:~:text=Cool%20Date%20Night%20is%20a,tailored%20to%20your%20relationship%20status.">
                <div className="hovercontainer">
                  <ImageContainer
                    src={DateNight}
                    thumb={require("../assets/cooldatenight_thumb.png")}
                    alt="Cool Date Night"
                    className={
                      isMobile
                        ? "banner-mobile flex-center img"
                        : "banner flex-center img"
                    }
                  />
                  <div className="middle">
                    {" "}
                    <div className="text">
                      <img
                        src={Flutter}
                        alt="Flutter"
                        style={{ height: "20px", width: "auto" }}
                      />
                      Cool Date Night
                    </div>
                  </div>
                </div>
              </a>
              <a href="https://sociables.hazelis.online/#/">
                <div className="hovercontainer">
                  <ImageContainer
                    src={Sociables}
                    thumb={require("../assets/sociablesbanner.png")}
                    alt="Sociables"
                    className={
                      isMobile
                        ? "banner-mobile flex-center img"
                        : "banner flex-center img"
                    }
                  />
                  <div className="middle">
                    {" "}
                    <div className="text">
                      <DiReact style={{ fontSize: "21px" }} /> Sociables
                    </div>
                  </div>
                </div>
              </a>

              <button className="hovercontainer">
                <ImageContainer
                  src={Edibly}
                  thumb={require("../assets/edibly_thumb.png")}
                  alt="Edibly"
                  className={
                    isMobile
                      ? "banner-mobile flex-center img"
                      : "banner flex-center img"
                  }
                />
                <div className="middle">
                  <div className="text">
                    <img
                      src={Flutter}
                      alt="Flutter"
                      style={{ height: "20px", width: "auto" }}
                    />
                    <DiSwift style={{ height: "30px", width: "auto" }} />
                    Edibly
                  </div>
                </div>
              </button>
            </Col>
          </Row>
          <Row>
            <Col md={2} xs={12}>
              <h3 className="subtitle">Other Projects</h3>
            </Col>
            <Col md={10} xs={12}>
              <Gallery />
            </Col>
          </Row>
        </div>
      </React.Fragment>
    );
  }
  function Gallery() {
    let imageList = [Tarakwai, Calculator, GraphCalc, Scraper, SOC, SC];
    let text = [
      "UI/UX and creating funnels for an eco-conscious and community-supporting Tanzanian safari company.",
      "An intuitive, simple calculator designed to show the environmental impact of the way you eat, based on several peer-reviewed sources and meta-analyses.",
      "A robust graphing app designed to allow engineering faculty to share customizable equations with their classes.",
      "An application that can be easily adapted to scrape the menus of any Javascript-based restaurant app, then intelligently filter for vegan and vegetarian dishes.",
      "Ongoing work pro-bono for Shades of Colour, a QTBIPOC collective in Edmonton, AB.",
      "Story City: Ongoing UI/UX and front-end programming for a locative storytelling app. Message me for the beta! :)"
    ];
    let urls = [
      "https://www.tarakwaisafaris.com/",
      "http://calculator.hazelis.online",
      "https://graphingcalchf.netlify.app/",
      "https://github.com/hazelf42/menu-scraper",
      "https://shadesofcoloryeg.wixsite.com/shadesofcolour",
      "https://storycity.com.au",
    ];
    let icons = [
      <></>,
      <DiReact style={{ fontSize: "21px" }} />,
      <DiReact style={{ fontSize: "21px" }} />,
      <DiPython />,
      <></>,
      <DiReact style={{ fontSize: "21px" }} />,
    ];
    return (
      <Row>
        {imageList.map((image) => {
          return (
            <Col md={4} xs={3}>
              <a href={urls[imageList.indexOf(image)]}>
                <div className="hovercontainer" style={{ height: "30VW" }}>
                  <img
                    src={image}
                    alt="Testing"
                    style={{
                      display: "inline",
                      objectFit: "cover",
                      height: "100%",
                      maxWidth: "100%",
                    }}
                  />
                  <div
                    className="middle"
                    style={{
                      top: 0,
                      left: 0,
                    }}
                  >
                    <div className="text">
                      {icons[imageList.indexOf(image)]}{" "}
                      {text[imageList.indexOf(image)]}
                    </div>
                  </div>
                </div>
              </a>
            </Col>
          );
        })}
      </Row>
    );
  }
  if (!clicked && !isShowing) {
    timeRemixButton();
  }

  var closeContactWindow = (count) => {
    console.log("Hello");
    setOpenContact(!openContact);
    setOpenContact(!openContact);
  };
  Object.keys(styles).map((style) => {
    const img = new Image();

    img.src = styles[style].backgroundImage;
    return img;
  });
  return (
    <Container style={{ maxWidth: "100VW" }}>
      <Header
        color={styles[style]["color"]}
        imageUrl={styles[style]["backgroundImage"]}
        imageThumb={styles[style]["imageThumb"]}
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
                blurChangeHeaders();
                timeout.current = setTimeout(() => {
                  if (style === "green") {
                    setStyle("blue");
                  } else if (style === "blue") {
                    setStyle("yellow");
                  } else if (style === "yellow") {
                    setStyle("green");
                  }
                }, 150); // schedule to hide tooltip
              }}
            >
              <img src={Dj} alt="Remix" className="remix" />{" "}
            </button>
          </React.Fragment>
        }
      />
      <About color={styles[style]["color"]} />
      <Popup
        trigger={(openContact) => ContactButton}
        modal
        closeOnDocumentClick
        disabled={openContact}
      >
        <Contact
          color={styles[style]["color"]}
          parentCallback={closeContactWindow}
        />
      </Popup>

      <Portfolio />
      <br />
      <br />
      <br />
      <br />
      <div className="flex-center">
        <Popup
          trigger={
            <button
              style={{
                width: "200px",
                marginbottom: "100px",
                backgroundColor: styles[style]["color"] + "CC",
                color: "white",
                border:
                  style === "yellow"
                    ? "2px solid" + styles[style]["color"]
                    : "none",
                boxShadow: " 2px 4px 5px 0px rgba(156, 156, 156, 0.75)",
              }}
            >
              <b>Let's chat!</b>
            </button>
          }
          modal
          closeOnDocumentClick
          disabled={openContact}
        >
          <Contact
            color={styles[style]["color"]}
            parentCallback={closeContactWindow}
          />
        </Popup>
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
    </Container>
  );
}
