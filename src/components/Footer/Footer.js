// import React, { Component } from "react";
import "./Footer.css";


const Footer = () => {
    const year = new Date().getFullYear();
  
    return <footer>{`Copyright © Dani Code ${year}`}</footer>;
  };
  
  export default Footer;