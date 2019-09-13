import React from "react";
import "../App.css";
import Hexagon from "../assets/fuck me up.png";
import { FaFacebookSquare, FaLinkedin, FaSketch } from "react-icons/fa/";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

export default class Home extends React.Component {
  componentDidMount() {
    window.addEventListener("scroll", this.resizeHeaderOnScroll);
  }
  resizeHeaderOnScroll() {
    const distanceY = window.pageYOffset || document.documentElement.scrollTop,
    shrinkOn1 = 90, //set to medium
    shrinkOn2 = 300 //set to small
      
      var headerEl = document.getElementById("header")
      var hexagon = document.getElementById("hexagon")

      //if smaller than shrinkOn1
    if (distanceY > shrinkOn2) {
      //Shrink a lot
      headerEl.classList.add('smaller')
      hexagon.classList.add('hexagonsmall')
    } else if ( distanceY > shrinkOn1){
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

  render() {
    return (
      <Container>
        <div className="header flex-center" id="header">
            <img src={Hexagon} className="hexagonbig flex-center" alt="Hexagon" id="hexagon" />
            <h1 className="centered-title title" id="title">Hazel Foerstner</h1>
            <p className="centered-p">Design, Development, Sustainability</p>
              <h4 className="centered-subtitle">
              <FaFacebookSquare />
              <FaLinkedin />
            </h4>
          </div>
        <div className="body">
          <Row><Col xs={6}>
        <h1>About</h1><br /><br />
        <h3><FaSketch /></h3><h2> UI Design</h2><br />
        <h3><FaSketch /></h3><h2> Some other shit</h2><br />
        <h3><FaSketch /></h3><h2> Bad at coding, big tryhard</h2><br />
        <h3><FaSketch /></h3><h2> Thats about it</h2><br />

        </Col>
        <Col xs={6}><p>
          Here's some stuff about me, i manage and also code, not particularly good at either of them, 
          but i love to try, also something something environment, yee haw. Not really sure what else to ut here butu know im gonna fill this shit up</p></Col>
        </Row>
        </div>
      </Container>
    );
  }
}
