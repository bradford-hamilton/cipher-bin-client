import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios';
import App from './App';
import NavigationBar from './components/NavigationBar/NavigationBar';
import CipherBinRead from './components/CipherBinRead/CipherBinRead';
import Cli from './components/Cli/Cli';
import FourOhFour from './components/FourOhFour/FourOhFour';
import Integrations from './components/Integrations/Integrations';
import HowItWorks from './components/HowItWorks/HowItWorks';
import Footer from './components/Footer/Footer';
import FAQs from './components/FAQs/FAQs';
import Coffee from './components/Coffee/Coffee';
import * as serviceWorker from './serviceWorker';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';

axios.defaults.baseURL = process.env.REACT_APP_CIPHER_BIN_API_BASE_URL;

ReactDOM.render(
  <Router>
    <div className="content-wrapper">
      <NavigationBar />
      <Switch>
        <Route path="/" component={App} exact />
        <Route path="/msg" component={CipherBinRead} exact />
        <Route path="/cli" component={Cli} exact />
        <Route path="/how-it-works" component={HowItWorks} exact />
        <Route path="/integrations" component={Integrations} exact />
        <Route path="/faqs" component={FAQs} exact />
        <Route path="/coffee" component={Coffee} exact />
        <Route component={FourOhFour} />
      </Switch>
    </div>
    <Footer />
  </Router>,
  document.getElementById('root'),
);

serviceWorker.unregister();
