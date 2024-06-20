import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Container } from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import { slide as Menu } from 'react-burger-menu';
import MediaQuery from 'react-responsive';
import Coffee from '../shared/Icons/Coffee/Coffee';
import githubLogo from '../../github_logo_white.png';
import cipherBinLogo from '../../cipher_bin_logo.png';
import './NavigationBar.css';

class NavigationBar extends Component {
  state = { hamburgerOpen: false };

  handleClick = (route) => {
    this.closeHamburger();
    this.props.history.push(route);
  }

  toggleHamburger = () => {
    this.setState((prevState) => ({
      hamburgerOpen: !prevState.hamburgerOpen,
    }));
  }

  closeHamburger = () => {
    this.setState({ hamburgerOpen: false });
  }

  // From the react-burger-menu docs:
  // This keeps the state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange = ({ hamburgerOpen }) => {
    this.setState({ hamburgerOpen });
  }

  render() {
    return (
      <div className="nav-bar-wrapper">
        <Container className="nav-bar-container">
          <div
            tabIndex="0"
            onClick={() => this.handleClick('/')}
            onKeyPress={() => this.handleClick('/')}
            role="button"
            className="brand"
          >
            <img
              className="cipher-bin-logo"
              src={cipherBinLogo}
              alt="Link to source code on Github"
            />
            <span className="cipher-bin-brand-name">
              cipherb.in
            </span>
          </div>
          <div className="nav-right-side">
            <MediaQuery minDeviceWidth={1224}>
              <div
                tabIndex="-1"
                onClick={() => this.handleClick('/cli')}
                onKeyPress={() => this.handleClick('/cli')}
                role="button"
                className="links"
              >
                CLI
              </div>
              <div
                tabIndex="-1"
                onClick={() => this.handleClick('/how-it-works')}
                onKeyPress={() => this.handleClick('/how-it-works')}
                role="button"
                className="links"
              >
                How it Works
              </div>
	          <div
		          tabIndex="-1"
		          onClick={() => this.handleClick('/integrations')}
		          onKeyPress={() => this.handleClick('/integrations')}
		          role="button"
		          className="links"
	          >
		        Integrations
	          </div>
              <div
                tabIndex="-1"
                onClick={() => this.handleClick('/faqs')}
                onKeyPress={() => this.handleClick('/faqs')}
                role="button"
                className="links"
              >
                FAQs
              </div>
              <div
                tabIndex="-1"
                onClick={() => this.handleClick('/coffee')}
                onKeyPress={() => this.handleClick('/coffee')}
                role="button"
                className="links"
              >
                <Coffee />
              </div>
              <div className="github-wrapper">
                <a
                  href="https://github.com/cipherbin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    className="github-logo"
                    src={githubLogo}
                    alt="Link to source code on Github"
                  />
                </a>
              </div>
            </MediaQuery>
            <MediaQuery maxDeviceWidth={1224}>
              <Menu
                right
                isOpen={this.state.hamburgerOpen}
                onStateChange={(state) => this.handleStateChange(state)}
              >
                <div
                  tabIndex="-1"
                  onClick={() => this.handleClick('/')}
                  onKeyPress={() => this.handleClick('/')}
                  role="button"
                  className="hamburger-links"
                >
                  New message
                </div>
                <div
                  tabIndex="-1"
                  onClick={() => this.handleClick('/cli')}
                  onKeyPress={() => this.handleClick('/cli')}
                  role="button"
                  className="hamburger-links"
                >
                  CLI
                </div>
                <div
                  tabIndex="-1"
                  onClick={() => this.handleClick('/how-it-works')}
                  onKeyPress={() => this.handleClick('/how-it-works')}
                  role="button"
                  className="hamburger-links"
                >
                  How it works
                </div>
                <div
	                tabIndex="-1"
	                onClick={() => this.handleClick('/integrations')}
	                onKeyPress={() => this.handleClick('/integrations')}
	                role="button"
	                className="hamburger-links"
                >
	              Integrations
                </div>
                <div
                  tabIndex="-1"
                  onClick={() => this.handleClick('/faqs')}
                  onKeyPress={() => this.handleClick('/faqs')}
                  role="button"
                  className="hamburger-links"
                >
                  FAQs
                </div>
                <div
                  tabIndex="-1"
                  onClick={() => this.handleClick('/coffee')}
                  onKeyPress={() => this.handleClick('/coffee')}
                  role="button"
                  className="hamburger-links"
                >
                  Buy me a coffee
                </div>
                <a
                  role="button"
                  className="hamburger-links"
                  href="https://github.com/cipherbin"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Github
                </a>
              </Menu>
            </MediaQuery>
          </div>
        </Container>
      </div>
    );
  }
}

export default withRouter(NavigationBar);

NavigationBar.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};
