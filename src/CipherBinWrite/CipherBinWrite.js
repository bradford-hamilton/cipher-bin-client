import React, { Component } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { AES } from 'crypto-js';
import uuidv4 from 'uuid/v4';
import axios from 'axios';

class CipherBinWrite extends Component {
  state = {
    message: '',
    oneTimeUrl: null,
    error: null,
  };

  handleSubmit = async (e) => {
    e.preventDefault();

    const encryptionKey = Math.random().toString(36).slice(-10);
    const uuid = uuidv4();
    const cipherText = AES.encrypt(this.state.message, encryptionKey).toString();
    const payload = { uuid, message: cipherText };

    try {
      await axios.post('/msg', payload);
    } catch (err) {
      // TODO: airbrake and support email message
      this.setState({ error: 'Sorry something went wrong!' });
      return;
    }

    this.setState({
      oneTimeUrl: `${process.env.REACT_APP_BASE_URL}/msg?bin=${uuid};${encryptionKey}`,
    });
  }

  handleChange = (e) => {
    this.setState({ message: e.target.value });
  }

  render() {
    return (
      <Container>
        <div style={{ marginTop: '100px' }}>
          <h2>New Encrypted Message</h2>
          <Form onSubmit={this.handleSubmit}>
            <Form.Group controlId="cipherbin.textarea">
              <Form.Control
                as="textarea"
                rows="10"
                placeholder="Type your message here..."
                onChange={this.handleChange}
              />
            </Form.Group>
            <Button variant="warning" type="submit">
              Encrypt
            </Button>
            {this.state.oneTimeUrl && (
              <div>
                <p>
                  This message will self destruct after reading it.
                </p>
                <div>
                  {this.state.oneTimeUrl}
                </div>
              </div>
            )}
          </Form>
        </div>
      </Container>
    );
  }
}

export default CipherBinWrite;