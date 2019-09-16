import React from "react";
import "../App.css";
import './Header.css'
import Hexagon from "../assets/fuck me up.png";
import { FaFacebookSquare, FaLinkedin, FaSketch, FaWindowRestore, FaDatabase, FaUserTie } from "react-icons/fa/";
import { DiSwift } from 'react-icons/di'
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import "react-bootstrap";

import Gallery from 'react-grid-gallery';
import Sample from '../assets/untappd-og.jpg'
import Flutter from '../assets/flutter.png'
import  StickyBox  from 'react-sticky-box'

function resizeHeaderOnScroll() {
  const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn1 = 130, //set to medium
    shrinkOn2 = 300 //set to small

  var headerEl = document.getElementById("header")
  var hexagon = document.getElementById("hexagon")

  //if smaller than shrinkOn1
  if (distanceY > shrinkOn2) {
    //Shrink a lot
    headerEl.classList.add('smaller')
    hexagon.classList.add('hexagonsmall')
  } else if (distanceY > shrinkOn1) {
    //Shrink a little
    headerEl.classList.add('medium')
    hexagon.classList.add('hexagonmedium')
    headerEl.classList.remove("smaller");
    hexagon.classList.remove('hexagonsmall')
  } else {
    //Big
    headerEl.classList.remove("medium");
    headerEl.classList.remove("smaller");
    hexagon.classList.remove('hexagonsmall')
    hexagon.classList.remove('hexagonmedium')
  }
}

function Header() {
  window.addEventListener("scroll", resizeHeaderOnScroll)
  return (
    <div className="header flex-center" id="header">
      <img src={Hexagon} className="hexagonbig flex-center" alt="Hexagon" id="hexagon" />
      <h1 className="centered-title title" id="title">Hazel Foerstner</h1>
      <p className="centered-p">Design, Development, Dumbass</p>
      <h4 className="centered-subtitle">
        <FaFacebookSquare />
        <FaLinkedin />
      </h4>
    </div>
  )
}
function About() {
  return (
    <div className="about">
      <Row><Col xs={6}>
        <h1 className='title'>About</h1><br />
        <div className='divider' /><br />

        <h3><FaSketch /></h3><h2> Design</h2><br />
        <h3><FaWindowRestore /></h3><h2> Development</h2><br />
        <h3><FaDatabase /></h3><h2> Database architecture</h2><br />
        <h3><FaUserTie /></h3><h2> Dumbass</h2><br />

      </Col>
        <Col xs={6}><p style={{ fontFamily: 'Arial', fontSize: "17px" }}>
          Here's some stuff about me, i manage and also code, not particularly good at either of them,
          but i love to try, also something something environment, yee haw. Not really sure what else to ut here butu know im gonna fill this shit up</p></Col>
      </Row>
    </div>
  )
}
const overlay = (<div>Hello</div>)
const projImages =
  [{
    src: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_n.jpg",
    thumbnailWidth: "100VW",
    thumbnailHeight: "100VH",
    customOverlay: overlay,
    caption: 'a'
  },
  {
    src: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
    thumbnail: "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_n.jpg",
    thumbnailWidth: 800,
    thumbnailHeight: 300,
    caption: "Boats (Jeshu John - designerspics.com)"
  },

  {
    src: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
    thumbnail: "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_n.jpg",
    thumbnailWidth: 600,
    thumbnailHeight: 300,
  }]


export default function Home() {
  return (
    <Container>
      <Header />
      <About />
      <h1 className='title'>Past Web & Mobile Projects</h1>
      <div className='divider' /><br />
      <body>

      <Row>
        <Col xs={2}>
          <div style={{position: 'absolute'}}>
          <div className="testing">
          Hello!</div></div>
        </Col>


        <Col xs={10} style={{height:800}}>
          <div className="hovercontainer">
            <img src={Sample} alt="Sample" className="banner flex-center img" />
            <div class="middle"> <div class="text">
              <img src={Flutter} alt="Flutter" style={{ height: '20px', width: "auto" }} />
              Cool Date Night</div>
            </div>
          </div>
          <div className="hovercontainer">
            <img src={Sample} alt="Sample" className="banner flex-center img" />
            <div class="middle"> <div class="text">
              <img src={Flutter} alt="Flutter" style={{ height: '20px', width: "auto" }} />
              <DiSwift style={{ height: '30px', width: "auto" }} />
              Edibly</div>
            </div>
          </div>
          <Gallery images={projImages} />
        </Col></Row>
    </body></Container>
  );
}