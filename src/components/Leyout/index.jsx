import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';

import './index.scss'

export default function Leyout() {
  return (
    <div className="App">
      <Sidebar />
      <div className="page">
        <span className="tags top-tag">
          const MyPortfolio = (yourVisit) =&gt; &#10100;
        </span>

        <Outlet />

        <span className="tags bottom-tag">
          return 'Contact me';
        </span>
        <span className="tags end-tag">&#10101;;
        </span>

      </div>
    </div>
  )
}