import React from "react";
import images from "./../../assets/images/ground1.png";
import Images from "./../../assets/images/dom1.jfif";
import image from "./../../assets/images/dom2.jfif";
import imagese from "./../../assets/images/class1.jfif";
import mages from "./../../assets/images/class2.jfif";
import mage from "./../../assets/images/class3.jfif";

const Shower = () => {
  return (
    <div className="App1">
      <form>
        <div className="select">
          <label>Search:</label>
          <select name="images">
            <option>recent</option>
            <option>domitory1</option>
            <option>domitory2</option>
            <option>classA</option>
            <option>classB</option>
            <option>classC</option>
          </select>
        </div>
        <div className="showed1">
          <label>Show:</label>
          <select name="images">
            <option>6</option>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
          Images
        </div>
      </form>
      <div className="images">
        <div className="image--item">
          <img src={images} />
          <p id="p">
            place: Play ground <br />
            taken:22/02/2023 16:00 PM
          </p>
        </div>
        <div className="image--item">
          <img src={Images} />
          <p id="p">
            place: Domitory
            <br />
            taken:22/02/2023 16:00 PM
          </p>
        </div>
        <div className="image--item">
          <img src={image} />
          <p id="p">
            place: Domitory <br />
            taken:22/02/2023 16:00 PM
          </p>
        </div>
        <div className="image--item">
          <img src={imagese} />
          <p id="p">
            place: Class A <br />
            taken:22/02/2023 17:00 PM
          </p>
        </div>
        <div className="image--item">
          <img src={mages} />
          <p id="p">
            place: Class B<br />
            taken:22/02/2023 17:00 PM
          </p>
        </div>
        <div className="image--item">
          <img src={mage} />
          <p id="p">
            place: Class C <br />
            taken:22/02/2023 17:00 PM
          </p>
        </div>
      </div>
      <a href="#" className="a1">
        load more...
      </a>
    </div>
  );
};

export default Shower;
