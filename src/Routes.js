import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import B3O2 from "./pages/B3O2";

import LoginSuhyun from "./pages/suhyunLim/Login/Login";
import MainSuhyun from "./pages/suhyunLim/Main/Main";

import LoginHyonjeong from "./pages/hyojeongHong/Login/Login";
import MainHyonjeong from "./pages/hyojeongHong/Main/Main";

import LoginYeonjeong from "./pages/yeonjeongCho/Login/Login";
import MainYeonjeong from "./pages/yeonjeongCho/Main/Main";

import LoginEunjin from "./pages/eunjinBaek/Login/Login";
import MainEunjin from "./pages/eunjinBaek/Main/Main";

import LoginBogyeong from "./pages/bogyeongKim/Login/Login";
import MainBogyeong from "./pages/bogyeongKim/Main/Main";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={B3O2} />

          <Route exact path="/login-suhyun" component={LoginSuhyun} />
          <Route exact path="/main-suhyun" component={MainSuhyun} />

          <Route exact path="/login-hyojeong" component={LoginHyonjeong} />
          <Route exact path="/main-hyojeong" component={MainHyonjeong} />

          <Route exact path="/login-yeonjeong" component={LoginYeonjeong} />
          <Route exact path="/main-yeonjeong" component={MainYeonjeong} />

          <Route exact path="/login-eunjin" component={LoginEunjin} />
          <Route exact path="/main-eunjin" component={MainEunjin} />

          <Route exact path="/login-bogyeong" component={LoginBogyeong} />
          <Route exact path="/main-bogyeong" component={MainBogyeong} />
        </Switch>
      </Router>
    );
  }
}

export default Routes;
