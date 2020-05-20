import React, { useState } from "react";
import styled from "styled-components";
import bg from "../assets/bg.svg";

const colors = {
  bg: "#ffffff",
};

const Styledlandingpage = styled.div`
  .background {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    height: 2900px;
    width: 100%;
    background-image: url(${bg});
    background-repeat: no-repeat;
    background-position: center;
  }
  .nav {
    width: 1000px;
    height: 80px;
    background: ${colors.bg};
    border-radius: 20px;
    border: 1px solid red;
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
    border: 1px solid red;
  }
  .section {
    display: flex;
    width: 100%;
    padding-right: 20px;
    padding-left: 20px;
    border: 1px solid red;
    box-sizing: border-box;
  }
  .fillin600 {
    width: 100%;
    height: 600px;
  }
  .fillin120 {
    width: 100%;
    height: 100px;
  }
  .fillin750 {
    width: 100%;
    height: 750px;
  }
  .fillin200 {
    width: 100%;
    height: 200px;
  }
`;

const Landing = () => {
  const [count, setCount] = useState(0);

  return (
    <Styledlandingpage>
      <div className="background">
        <div className="nav">nav</div>
        <div className="bgCard">
          <div className="section">
            <div className="fillin600">600height</div>
          </div>
          <div className="section">
            <div className="fillin120">100</div>
          </div>
          <div className="section">
            <div className="fillin750">fillin750</div>
          </div>
          <div className="section">
            <div className="fillin120">100</div>
          </div>
          <div className="section">
            <div className="fillin750">fillin750</div>
          </div>
          <div className="section">
            <div className="fillin200">fillin200</div>
          </div>
        </div>
      </div>
    </Styledlandingpage>
  );
};

export default Landing;
