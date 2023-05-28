import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { dispatch } = useContext(AppContext);

  const changeLocation = (val) => {
    dispatch({
      type: 'CHG_CURRENCY',
      payload: val,
    })
  }


  return (
    <div className='alert alert-secondary'>
      <div style={{backgroundColor:"lightgreen"}}> Currency
      <select name="Currency" id="Currency" defaultValue="£" style={{backgroundColor:"lightgreen"}} onChange={event => changeLocation(event.target.value)}>
        <option value="$">$ Dollar</option>
        <option value="£" >£ Pound</option>
        <option value="€">€ Euro</option>
        <option value="₹">₹ Ruppee</option>
      </select>
      </div>
    </div>
  );
};

export default Currency;