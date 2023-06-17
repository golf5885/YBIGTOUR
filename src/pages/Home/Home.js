import React from "react";
import { Link } from 'react-router-dom';
import '../../css/Home.css';
import logoImage from '../../icons/home-image.png';

export default function Home() {
  return (
    <div className="home-container">
      <div className="background-color"></div>
      <img src={logoImage} alt="Logo" className="logo-image" />
      <div className="content">
        <h1>YBIGTOUR</h1>
        <Link to="./Character">
          <button>START</button>
        </Link>
      </div>
    </div>
  );
}
