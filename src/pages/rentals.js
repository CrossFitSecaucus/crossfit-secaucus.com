import React from 'react'
import { Helmet } from "react-helmet"

import Contact from '../components/Contact';

const RentalItemRow = ({selected, label, quantity, cost, multiple, onQuantityChange, onSelectChange}) =>(
  <tr>
    <td className="text-center" style={{width: '3%'}}>
      <div className="form-check">
        <label className="form-check-label">
          <input className="form-check-input" type="checkbox" value="" checked={selected} onClick={onSelectChange} />
          <span className="form-check-sign">
            <span className="check"></span>
          </span>
        </label>
      </div>
    </td>
    <td><strong>{label}</strong></td>
    <td className="text-center">
      {selected && multiple && (
        <button type="button" className="btn btn-info btn-round btn-just-icon btn-sm" onClick={() => onQuantityChange(parseInt(quantity) - 1)}>
          <i className="material-icons">remove</i>
          <div className="ripple-container"></div>
        </button>
      )}
      <span style={{padding: '0 10px'}}>{quantity}</span>
      {selected && multiple && (
        <button type="button" className="btn btn-info btn-round btn-just-icon btn-sm" onClick={() => onQuantityChange(parseInt(quantity) + 1)}>
          <i className="material-icons">add</i>
          <div className="ripple-container"></div>
        </button>
      )}
    </td>
    <td className="text-right">$ {cost}</td>
  </tr>
);

class RentalsPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rentalItems: [
        {label: '18 lbs kettlebell', cost: 5},
        {label: '26 lbs kettlebell', cost: 5},
        {label: '35 lbs kettlebell', cost: 5},
        {label: '53 lbs kettlebell', cost: 5},
        {label: '15 lbs plates (set)', cost: 5},
        {label: '25 lbs plates (set)', cost: 10},
        {label: '45 lbs plates (set)', cost: 15, multiple: true},
        {label: 'barbell with clips', cost: 20},
        {label: 'squat rack', cost: 15},
        {label: 'Concept2 Rower', cost: 100},
        {label: 'Rogue Echo Bike', cost: 100},
      ],
    }
    this._handleSelectChange = this._handleSelectChange.bind(this);
    this._handleQuantityChange = this._handleQuantityChange.bind(this);
  }

  componentDidMount() {
    window.fetch(this.props.wodUrl)
      .then(res => {
        const {status} = res;
        return status >= 200 && status < 400 ?
          res.text() : null;
      })
      .then(content => this.setState({content}))
      .catch(err => this.setState({failedFetch: true}))
  }

  _handleSelectChange(idx) {
    return e => {
      const rentalItems = this.state.rentalItems.map((r, i) => (
         Object.assign({}, r, i === idx ? {selected: e.target.checked, quantity: e.target.checked ? 1 : 0} : {})
      ))
      this.setState({rentalItems});
    }
  }

  _handleQuantityChange(idx) {
    return quantity => {
      const rentalItems = this.state.rentalItems.map((r, i) => (
         Object.assign({}, r, i === idx ? {quantity, selected: quantity ? r.selected : false} : {})
      ))
      this.setState({rentalItems});
    }
  }

  render() {
    const {rentalItems} = this.state;
    let total = 0;
    rentalItems.forEach(r => {
      if (r.selected) {
        total += r.cost * r.quantity;
      }
    })

    return (
      <main>
      <Helmet>
        <meta charSet="utf-8" />
        <title>WOD - Workout of the Day</title>
        <meta name="description" content="View a basic summary of today's workout, so you can come to class prepared." />
        <link rel="canonical" href="https://crossfit-secaucus.com/wod" />
      </Helmet>
        <section className="section section-basic">
          <div className="container">
            <div className="row">
              <div className="col-md-8 offset-md-2 col-lg-6 offset-lg-3">
                <h2>Equipment Rental Request</h2>
                <p>
                  During the mandatory shutdown, we are making our training
                  equipment available for rent. Complete this form as a first
                  step to get your hands on what you need.
                </p>
                <hr/>
                <h3>
                  Rental Overview
                </h3>
                <ul>
                  <li>Free delivery and pick-up within local area</li>
                  <li>Rentals are week-to-week</li>
                  <li>Minimum rental period is 3 weeks</li>
                  <li>Equipment subject to availability. First come, first serve.</li>
                </ul>
                <hr/>
                <div className="table-responsive">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Selected</th>
                                <th>Item Name</th>
                                <th className="text-center">Quantity</th>
                                <th className="text-right">Weekly Cost</th>
                            </tr>
                        </thead>
                        <tbody>
                        {
                          rentalItems.map(({label, cost, selected, quantity, multiple}, idx) => (
                            <RentalItemRow
                              key={idx}
                              label={label}
                              cost={cost}
                              quantity={quantity || ''}
                              selected={!!selected}
                              multiple={multiple}
                              onQuantityChange={this._handleQuantityChange(idx)}
                              onSelectChange={this._handleSelectChange(idx)}
                            />
                          ))
                        }
                        </tbody>
                    </table>
                    {total > 0 && (
                      <h3 className="text-right">
                        ${total}/week
                      </h3>
                    )}

                    <Contact
                      noCard
                      submitLabel="Send Rental Request"
                      messageAddition={rentalItems.filter(r => r.selected).map(r => `${r.quantity || 1}x ${r.label}`).join("\n")}
                    />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    );
  }
}

export default RentalsPage
