import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import bg from "../assets/bg.svg";
import BGsmall from "../assets/BGsmall.svg";
import CTAimage from "../assets/CTAimage.png";
import { db } from "../firebaseConfig.js";

import { withRouter } from "react-router-dom";

const colors = {
  bg: "#ffffff",
  debug: "0px solid red",
};

const Styledlandingpage = styled.div`
  font-family: Helvetica;
  h1 {
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 40px;
    line-height: 152.34%;
    color: #444752;
  }
  h3 {
    font-family: Helvetica;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 152.34%;
    color: #656a72;
  }
  .background {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 100vh;
    width: 100%;
    background-image: url(${BGsmall});
    background-repeat: no-repeat;
    background-position: center;
  }
  .nav {
    width: 1000px;
    height: 80px;
    background: ${colors.bg};
    border-radius: 20px;
    border: ${colors.debug};
  }
  .bgCard {
    width: 1000px;
    max-width: 1000px;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    background: ${colors.bg};
    border-radius: 20px;
    border: 1px solid rgba(0, 0, 0, 0.002);
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.15);
    border: ${colors.debug};
  }
  .section {
    display: flex;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    border: ${colors.debug};
    box-sizing: border-box;
  }

  .cta {
    width: 100%;
    height: 600px;
    display: flex;
    flex-direction: row;
  }
  .divider {
    width: 100%;
    height: 100px;
  }
  .howItWorks {
    width: 100%;
    height: 750px;
  }
  .testi {
    width: 100%;
    height: 750px;
  }
  .longCta {
    width: 100%;
    height: 200px;
  }

  .ctaInput {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
  }
  .ctaImage {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .ctaImage img {
    width: 100%;
    height: 100%;
  }
  .emailForm {
    display: flex;
    flex-direction: row;
    margin-top: 1.67em;
  }
  .emailInput {
    height: 45px;
    width: 275px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid #00a2ff;
    box-sizing: border-box;
    border-radius: 25px 0px 0px 25px;
    font-size: 18px;
    padding: 20px;
    outline: none;
  }

  .emailInput:focus {
    border: 1px solid #00a2ff;
    border-radius: 25px 0px 0px 25px;
    box-shadow: 0px 15px 30px rgba(0, 162, 255, 0.15);
  }

  .emailSubmit {
    height: 45px;
    width: 175px;
    background: #00a2ff;
    border: 1px solid #00a2ff;
    outline: none;
    border-radius: 0px 25px 25px 0px;
    font-family: Helvetica;
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    text-align: center;
    color: #ffffff;
    box-shadow: 0px 10px 20px rgba(0, 162, 255, 0.15);
  }
  .emailSubmit:hover {
    box-shadow: 0px 15px 30px rgba(0, 162, 255, 0.15);
    cursor: pointer;
  }
  .emailSubmit:hover {
    box-shadow: 0px 15px 30px rgba(0, 162, 255, 0.15);
    cursor: pointer;
  }
`;

class Landing extends React.Component {
  constructor(props) {
    super(props);
    this.emailInput = React.createRef();
  }

  componentDidMount() {
    this.emailInput.current.focus();
    console.log(this.emailInput);
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.emailInput.current.value);
    db.collection("betaList")
      .add({ email: this.emailInput.current.value })
      .then(() => {
        this.props.history.push("/thanks");
      })
      .catch(function (error) {
        console.error("Error writing document: ", error);
      });
  };

  render() {
    return (
      <Styledlandingpage>
        <div className="background">
          {/* <div className="nav">nav</div> */}
          <div className="bgCard">
            <div className="section">
              <div className="cta">
                <div className="ctaInput">
                  {" "}
                  <h1>
                    You’re never paying $1000 for a networking event again.
                  </h1>
                  <h3>
                    We will send warm Introductions straight to your Inbox so
                    you are always in on the best kept secrets in tech.
                  </h3>
                  <form
                    className="emailForm"
                    onSubmit={(e) => this.handleSubmit(e)}
                  >
                    <input
                      ref={this.emailInput}
                      className="emailInput"
                      type="email"
                      name="email"
                      placeholder="Email Address"
                      autoFocus
                      required
                      autoComplete="email"
                    />
                    <button type="submit" className="emailSubmit">
                      Send Me Intros
                    </button>
                  </form>
                </div>
                <div className="ctaImage">
                  {" "}
                  <img src={CTAimage} alt="serendipiti woman"></img>
                </div>
              </div>
            </div>
            {/* <div className="section">
              <div className="divider">divider</div>
            </div>
            <div className="section">
              <div className="howItWorks">howItWorks</div>
            </div>
            <div className="section">
              <div className="divider">divider</div>
            </div>
            <div className="section">
              <div className="testi">testi</div>
            </div>
            <div className="section">
              <div className="longCta">longCta</div>
            </div> */}
          </div>
        </div>
      </Styledlandingpage>
    );
  }
}

export default withRouter(Landing);
