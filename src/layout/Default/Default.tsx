import { Outlet } from "react-router-dom";
import Aside from "../Aside/Aside";

import './Default.css'

function Default() {
  return (
    <div className="layout">
      <Aside />

      <div className="content">
        <Outlet />
      </div>
    </div>
  )
}

export default Default