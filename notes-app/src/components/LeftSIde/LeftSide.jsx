import React from 'react'
import StylesLeftSide from "./StylesLeftSide.module.css";
import Plus from "../../assets/plus.svg"

const LeftSide = () => {
  return (
    <>
        <div className={StylesLeftSide}>
        <h1>Pocket Notes</h1>
        <div className={StylesLeftSide.imageplus}>
            <button onClick={() => handleClick(true)}>
                <img src={Plus} alt="+ icon" /> +
            </button>
        </div>
        </div>
    </>
  )
}

export default LeftSide
