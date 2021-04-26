import React, { useEffect, useState } from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./Home/Home.jsx";
import SingleNews from "./SingleNews/SingleNews.jsx";
import { isEmpty } from "lodash";
import Header from "./Header/Header.jsx";
import Event from "./Event/Event.jsx";
import Footer from "./Footer/Footer.jsx";
import Form from "./Form/Form.jsx";
import Error from "./Error/Error.jsx";
import SubscribeBox from "./SideBar/SubscribeBox.jsx";
import Pandemic from "./Topic/Pandemic.jsx";
import Biotech from "./Topic/BioTech.jsx";
import Fintech from "./Topic/FinTech.jsx";
import bgimage from "./BackgroundAll.jpeg";
import StickyBox from "react-sticky-box";



var sectionStyle={
    width:"100%",
    height:"100%",
    backgroundImage:`url(${bgimage})`
}


function App() {
  const [fetchedData, setFetchedData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      // performs a GET request
      const response = await fetch("https://demo4365171.mockable.io/techArticle");
      const responseJson = await response.json();
      setFetchedData(responseJson);
    };

    if (isEmpty(fetchedData)) {
      fetchData();
    }
  }, [fetchedData]);

  return isEmpty(fetchedData) ? null : (
    <div className="App" style={sectionStyle}>
      <header>
      <StickyBox offsetLeft={20} offsetTop={20}>

        <Header />
        </StickyBox>
      </header>
      


      <Switch>
        <Route exact path="/">
        <SubscribeBox/>
          <Home techArticle={Object.values(fetchedData)} />
          
        </Route>
        <Route exact path="/pandemic">
          <Pandemic techArticle={Object.values(fetchedData)} />
          <SubscribeBox/>
        </Route>

        <Route exact path="/fintech">
          <Fintech techArticle={Object.values(fetchedData)} />
          <SubscribeBox/>
        </Route>
        <Route exact path="/biotech">
          <Biotech techArticle={Object.values(fetchedData)} />
          <SubscribeBox/>
        </Route>

        <Route path="/event" component={Event} />
        <Route path="/registerForEvent" component={Form} />

        <Route
          exact
          path={`/articlelist/:id`}
          render={({ match }) => {
            // getting the parameters from the url and passing
            // down to the component as props
            return fetchedData ? <SingleNews
              article={fetchedData[match.params.id]}
            /> : null
          }}
        />
        <Route component={Error} />
      </Switch>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
