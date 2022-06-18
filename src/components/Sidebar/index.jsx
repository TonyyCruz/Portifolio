import { Link, NavLink } from 'react-router-dom';

import './index.scss';
import Mylogo from '../../assets/images/logo-no-name.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faEnvelope, faFire } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

export default function Sidebar() {
  return (
  <aside className="nav-bar">
    <Link className="logo" to="/" >
      <img src={ Mylogo } alt="anthony logo" />
    </Link>

    <nav>
    <NavLink exact="true" activeclassname="active" to="/">
      <FontAwesomeIcon icon={ faHome } color="#4d4d4e"/>
    </NavLink>
    <NavLink exact="true" activeclassname="active" to="/about" className="about-link">
      <FontAwesomeIcon icon={ faUser } color="#4d4d4e"/>
    </NavLink>
    <NavLink exact="true" activeclassname="active" to="/projects" className="projects-link">
      <FontAwesomeIcon icon={ faFire } color="#4d4d4e"/>
    </NavLink>
    <NavLink exact="true" activeclassname="active" to="/contact" className="contact-link">
      <FontAwesomeIcon icon={ faEnvelope } color="#4d4d4e"/>
    </NavLink>
    </nav>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/anthony-cruz-3bb96622b/"
        >
          <FontAwesomeIcon icon={ faLinkedinIn } color="#4d4d4e" />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/TonyyCruz/"
        >
          <FontAwesomeIcon icon={ faGithub } color="#4d4d4e" />
        </a>
      </li>
    </ul>

  </aside>
  )
}