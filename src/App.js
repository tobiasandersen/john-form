import React, { Component } from 'react'
import './App.css'

const Input = ({ label, ...props }) => (
  <div>
    <label>{label}</label>
    <input {...props} />
  </div>
)

const Select = ({ label, name, options, style, value, onChange }) => (
  <div style={style}>
    <label>{label}</label>
    <select name={name} onChange={onChange} value={value}>
      {options.map(option => (
        <option
          value={option.value}
          key={option.value}
        >
          {option.label}
        </option>
      ))}
    </select>
  </div>
)

class App extends Component {
  state = { data: {} }

  onSubmit = evt => {
    evt.preventDefault()
    console.log('submit', this.state.data)
  }

  onChange = evt => {
    const target = evt.target
    const value = target.type === 'checkbox' ? target.checked : target.value
    const name = target.name
    this.setState(state => ({
      data: { ...state.data, [name]: value }
    }))
  }

  render() {
    const { data } = this.state

    return (
      <div className="App">
        <h2>Intresseanmälan</h2>
        <form onSubmit={this.onSubmit}>
          <label>Kontaktuppgifter</label>
          <Input label="Förnamn" name="firstName" onChange={this.onChange} />
          <Input label="Efternamn" name="lastName" onChange={this.onChange} />
          <Input
            label="Telefonnummer"
            name="phone"
            type="tel"
            value={data.phone}
            onChange={this.onChange}
          />
          <Input
            label="E-postadress"
            name="email"
            type="email"
            data={data}
            value={data.email}
            onChange={this.onChange}
          />
          <label>Önskemål om resa</label>
          <Select
            label="Resmål"
            style={{ flex: '0 0 100%' }}
            name="destination"
            value={data.destination}
            onChange={this.onChange}
            data={data}
            options={[
              { value: '', label: '' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]}
          />
          <Input
            label="Utresa"
            name="outbound"
            type="date"
            value={data.outbound}
            onChange={this.onChange}
          />
          <Input
            label="Hemresa"
            name="inbound"
            type="date"
            value={data.inbound}
            onChange={this.onChange}
          />
          <div>
            <label>Jag är intresserad av:</label>
            <div className="checkbox">
              <input
                type="checkbox"
                name="dance-interest"
                id="dance-interest"
                value={data['dance-interest']}
                onChange={this.onChange}
              />{' '}
              <label htmlFor="dance-interest">Dans</label>
            </div>
            <div className="checkbox">
              <input
                type="checkbox"
                name="culture-interest"
                id="culture-interest"
                value={data['culture-interest']}
                onChange={this.onChange}
              />{' '}
              <label htmlFor="culture-interest">Kultur</label>
            </div>
          </div>
          <Select
            label="Svårighetsgrad på dans"
            name="dance-level"
            value={data['dance-level']}
            onChange={this.onChange}
            options={[
              { value: '', label: '' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]}
          />
          <label>Boende</label>
          <Select
            label="Antal Stjärnor"
            name="stars"
            value={data.stars}
            onChange={this.onChange}
            options={[
              { value: '', label: '' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]}
          />
          <Select
            label="Antal Personer"
            name="persons"
            value={data.persons}
            onChange={this.onChange}
            options={[
              { value: '', label: '' },
              { value: 'option1', label: 'Option 1' },
              { value: 'option2', label: 'Option 2' },
              { value: 'option3', label: 'Option 3' }
            ]}
          />
          <div>
            <label>Övriga önskemål</label>
            <textarea rows={5} name="requests" />
          </div>
          <div style={{ flex: '0 0 100%' }}>
            <div className="checkbox">
              <input
                type="checkbox"
                name="newsletter"
                value={data.newsletter}
                onChange={this.onChange}
              />{' '}
              <label htmlFor="newsletter">Jag vill ha nyhetsbrev</label>
            </div>
          </div>
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'flex-end'
            }}
          >
            <button type="submit">Skicka</button>
          </div>
        </form>
      </div>
    )
  }
}

export default App
