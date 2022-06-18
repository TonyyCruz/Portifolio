import './index.scss';
import Html from '../../assets/images/logo1.png';
import Css from '../../assets/images/logo2.png';
import Js from '../../assets/images/logo3.png';
import Reac from '../../assets/images/logo4.png';
import Node from '../../assets/images/logo5.png';
import Git from '../../assets/images/logo6.png';



export default function AnimatedIcons() {
  return (
    <div className="icon-container">

      <div className="image-card">
        <img src={ Html } alt="html icon" />
      </div>
      <div className="image-card">
        <img src={ Css } alt="css icon" />
      </div>
      <div className="image-card">
        <img src={ Js } alt="javascript icon" />
      </div>
      <div className="image-card">
        <img src={ Reac } alt="react icon" />
      </div>
      <div className="image-card">
        <img src={ Node } alt="node icon" />
      </div>
      <div className="image-card">
        <img src={ Git } alt="git icon" />
      </div>

    </div>
  )
}