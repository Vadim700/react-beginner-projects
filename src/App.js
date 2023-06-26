import React from 'react';
import { Block } from './Block';
import './index.scss';

function App() {
  const [fromCarrency, setFromCarrency] = React.useState('RUB');
  const [toCarrency, setToCarrency] = React.useState('USD');
  const [fromPrice, setFromPrice] = React.useState(0);
  const [toPrice, setToPrice] = React.useState(0);

  const [rates, setRates] = React.useState({});

  React.useEffect(() => {
    fetch('https://www.cbr-xml-daily.ru/latest.js')
      .then((res) => res.json())
      .then((json) => {
        setRates(json.rates);
        console.log(json.rates)
      })
      .catch((error) => console.log(error))
  }, [])

  const onChengeFromPrice = (value) => {
    const price = value / rates[fromCarrency];
    const result = price * rates[toCarrency];

    console.log(price)
    console.log(result)

    setToPrice(result);
    setFromPrice(value);
  }
  const onChengeToPrice = (value) => {
    setToPrice(value);
  }

  return (
    <div className="App">
      <Block
        value={fromPrice}
        currency={fromCarrency}
        onChangeCurrency={setFromCarrency}
        onChangeValue={onChengeFromPrice} />
      <Block
        value={toPrice}
        currency={toCarrency}
        onChangeCurrency={setToCarrency}
        onChangeValue={onChengeToPrice} />

    </div>
  );
}

export default App;
