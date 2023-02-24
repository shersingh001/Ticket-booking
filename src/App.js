import { BrowserRouter, Route, Switch } from "react-router-dom";
import EnglishMoviePage from "./Pages/EnglishMoviePage/EnglishMoviePage";
import HindiMoviePage from "./Pages/HindiMoviePage/HindiMoviePage";
import HomePage from "./Pages/HomePage/HomePage";
import OutputPage from "./Pages/OutputPage/OutputPage";
import SeatPage from "./Pages/SeatPage/SeatPage";
import TamilMoviePage from "./Pages/TamilMoviePage/TamilMoviePage";

const App = () => {
  return(
    <BrowserRouter>
      <Switch>
        <Route path={"/"} exact>
          <HomePage />
        </Route>
        <Route path={"/hindi-movies"} exact>
          <HindiMoviePage />
        </Route>
        <Route path={"/english-movies"}>
          <EnglishMoviePage />
        </Route>
        <Route path={"/tamil-movies"}>
          <TamilMoviePage />
        </Route>
        <Route path={"/seating"} exact>
          <SeatPage />
        </Route>
        <Route path={"/ticket-confirm"} exact>
          <OutputPage />
        </Route>
        </Switch>
    </BrowserRouter>
  )
};

export default App;