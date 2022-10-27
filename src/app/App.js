import React, { useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  useLocation,
  withRouter,
} from "react-router-dom";
import AppRoutes from "./routes";
import Headermain from "../header";
// import AnimatedCursor from "react-animated-cursor";
import "./App.css";

function _ScrollToTop(props) {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  console.log(props.children)
  return props.children;
}

const ScrollToTop = withRouter(_ScrollToTop);




// basename={process.env.PUBLIC_URL}

export default function App({staticContext}) {
  return (
    <Router >
      {/* <div className="cursor__dot">
        <AnimatedCursor
          innerSize={15}
          outerSize={15}
          color="255, 255 ,255"
          outerAlpha={0.4}
          innerScale={0.7}
          outerScale={5}
        />
      </div> */}
      <ScrollToTop >
        <Headermain />
        <AppRoutes />
      </ScrollToTop>
    </Router>
  );
}
