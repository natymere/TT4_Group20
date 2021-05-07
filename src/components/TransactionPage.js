import React, { Component } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import axios from 'axios';

class TransactionPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      custID: 20,
      payeeID: '',
      amount: 0.0,
      eGift: false,
      message: '',
      error: '',
      balanceAmount: 0,
      payees: []
    };
  }

  componentDidMount() {
    console.log(this.state.custID)

    this.getListOfPayeeIds();

    // this.setState({ custID: sessionStorage.getItem('CustID') }, () => {
    //   // get all payees
    //   this.getListOfPayeeIds();
    //   // check amount
    //   // check payee id

    // });
  }

  getAmountBalance() {
    let data = JSON.stringify({
      custID: this.state.custID,
      accountKey: "g173jb87-loda-ztz1-3xed-6r051kzozte",
      // accountKey: sessionStorage.getItem('accountKey')
    });
    axios({
      method: 'post',
      url: 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/accounts',
      headers: {
        'x-api-key': 'jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5',
        'Content-Type': 'application/json'
      },
      data: data
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err.response));
  }

  getListOfPayeeIds() {
    console.log(this.state.custID)
    let data = JSON.stringify({
      custID: this.state.custID,
      accountKey: "g173jb87-loda-ztz1-3xed-6r051kzozte",
      // accountKey: sessionStorage.getItem('accountKey')
    });
    axios({
      method: 'post',
      url: 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/view',
      headers: {
        'x-api-key': 'jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5',
        'Content-Type': 'application/json'
      },
      data: data
    })
      .then(res => {
        if (res.status === 200) {
          console.log(res.data);
          let transactionHistory = res.data;

          let custIdList = [];
          transactionHistory.forEach(x => {
            custIdList.push(parseInt(x.custID));
            custIdList.push(parseInt(x.payeeID));
          })

          const uniqueSet = new Set(custIdList);
          custIdList = [...uniqueSet];
          console.log(custIdList)
          custIdList = custIdList.filter(x => x !== this.state.custID);
          custIdList.sort(function (a, b) {
            return a - b;
          });

          console.log(custIdList)

          this.setState({ payees: custIdList })

        }
      })
      .catch(err => console.log(err));
  }

  handleCheckBox = (e) => {
    if (e.target.checked) {
      this.setState({ eGift: true });
    } else {
      this.setState({ eGift: false });
    }
  }

  handleAmount = (e) => {
    let amount = parseFloat(e.target.value);
    this.setState({ amount: amount });
  }

  handleMesage = (e) => {
    this.setState({ message: e.target.value })
  }

  handlePayeeID = (e) => {
    this.setState({ payeeID: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    // check for error
    console.log(this.state.custID)
    console.log(this.state.payeeID)
    console.log(this.state.amount)
    if (!this.state.custID || !this.state.payeeID || !this.state.amount) {
      alert('fail')
      return;
    }

    let data = JSON.stringify({
      accountKey: 'g173jb87-loda-ztz1-3xed-6r051kzozte',
      custID: this.state.custID,
      payeeID: parseInt(this.state.payeeID),
      amount: this.state.amount,
      eGift: this.state.eGift,
      message: this.state.message,
    });

    axios({
      method: 'post',
      url: 'https://ipllrj2mq8.execute-api.ap-southeast-1.amazonaws.com/techtrek/transactions/add',
      headers: {
        'x-api-key': 'jWw6Vw4WxKaVmy5YPAvz2fAEraoq9Ds6IiqRxXd5',
        'Content-Type': 'application/json'
      },
      data: data,
    })
      .then((response) => response)
      .catch((error) => error.response.data)
      .then((response) => {
        if (response.status === 200) {
          alert('success')
        } else {
          this.setState({ error: "There is an error sending money. Please try again." });
        }
      });

  }

  render() {
    return (
      <div style={{ "margin": "50px" }}>
        <h1>Transaction Page</h1>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group>
            <Form.Label>PayeeID</Form.Label>
            <Form.Control as="select" defaultValue=""
              onChange={this.handlePayeeID}
            >
              <option>...</option>
              {this.state.payees.map(x => (
                <option key={x}>{x}</option>
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Amount</Form.Label>
            <Form.Control
              type="amount"
              placeholder="Amount"
              onChange={this.handleAmount}
            />
          </Form.Group>

          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              type="message"
              placeholder="Message"
              onChange={this.handleMesage}
              defaultValue={this.state.messasge}
            />
          </Form.Group>

          <Form.Group>
            <Form.Check type="checkbox" label="Send as eGift"
              onClick={this.handleCheckBox}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    )
  }
}

export default TransactionPage;