import React, { Fragment } from "react";
import Boton from "../utils/Buton";
import Navbar from "../Navbar";
import menucocina from "../assets/img/01-menu-cocina.svg";
import styles from "./style.module.css";
import ButtonNext from "../utils/ButtonNext"

const Chef = function ({ date }) {
  return (
    <Fragment>
      <Navbar />
        <div className={styles.containerPrincipal}>
        
          <div>
            <Boton 
              image={menucocina} 
              adress="/chef" />
          </div>
          
          <div className={styles.containerEmployee}>
              <div>
                <p>Nombre</p>
                <input type="text" name="" id=""/>
              </div>
              <div>
                <ButtonNext />
            {/*  <Boton image={next} adress="/Menu" className={styles.arrow} /> */}
              </div>
              <p>Fecha: {date}</p>
            </div>
        </div>    
    </Fragment>
  );
};

export default Chef;
