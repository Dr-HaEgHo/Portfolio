import React from "react";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";

import { Home } from "../pages/home";
import { Portfolio } from "../pages/portfolio";
import { ContactUs } from "../pages/contact";
import { About } from "../pages/about";
import { Socialicons } from "../components/socialicons";
import { CSSTransition, TransitionGroup } from "react-transition-group";

// const AnimatedSwitch = withRouter(({ location }) => ());
 
function AppRoutes() {

  const params = useParams()

  console.log(params)

  const navigate = useNavigate();

  return (
    <div className="s_c">

      <TransitionGroup>
        <CSSTransition
          // key={}
          timeout={{ enter: 400, exit: 400,
          }} 
          classNames="page"
          unmountOnExit
        >
          <Routes>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/portfolio" component={Portfolio} />
            <Route path="/contact" component={ContactUs} />
            <Route path="*" component={Home} />
          </Routes>
        </CSSTransition>
      </TransitionGroup>
      {/* <AnimatedSwitch /> */}
      <Socialicons />
    </div>
  );
}

export default AppRoutes;