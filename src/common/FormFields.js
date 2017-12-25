import React from 'react';
import { Form } from 'semantic-ui-react';
import classnames from 'classnames';
import moment from 'moment';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import 'moment/locale/it';

//var itLocale = require('moment/locale/it');//required to force including the locale settings
//moment.updateLocale('it', itLocale);

//https://github.com/ckshekhar73/react-semantic-redux-form
//export default function InputField(x){
//  const { input, width, label, type, meta: { touched, error } } = x;
export const MyInput = ({ input, width, label, type, meta: { touched, error } }) => {
  return(
  <Form.Field className={classnames({[`${width}`]:width!==undefined}, {wide:width!==undefined}, {error:touched && error})}>
    <label>{label}</label>
    <input {...input} placeholder={label} type={type}/>
    {touched && error && <span className="error">{error.message}</span>}
  </Form.Field>
  );
}

export const MyTextarea = ({ input, width, label, type, meta: { touched, error } }) => {
  return(
  <Form.Field className={classnames({[`${width}`]:width!==undefined}, {wide:width!==undefined}, {error:touched && error})}>
    <label>{label}</label>
    <textarea {...input} placeholder={label} type={type}></textarea>
    {touched && error && <span className="error">{error.message}</span>}
  </Form.Field>
  );
}

const converToIsoStringFromLocalString = x => {
  const dateParts = x.split('/');
  const dateAsIsoString = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T00:00:00.000Z`;
  return dateAsIsoString;
} 

export function MyDatePicker (x){
  const { input, width, label, meta: { touched, error } } = x

  let inputDate = null;
  if(input.value){
    if(typeof(input.value)==='string'){
      console.log('input.value === string: ' + input.value);
      const sDate = input.value.indexOf('-')>0? input.value : converToIsoStringFromLocalString(input.value);
      inputDate = moment(sDate);
      input.value = inputDate.format('DD/MM/YYYY'); //dateFormat="DD/MM/YYYY" in DataPicker not required...
    }else{
      console.log('input.value is '+ typeof(input.value) +':' + input.value);
      inputDate = input.value;
    }
  }

  return(
  <Form.Field className={classnames({[`${width}`]:width!==undefined}, {wide:width!==undefined}, {error:touched && error})}>
      <label>{label}</label>
      <div>
        <DatePicker {...input}
          selected={inputDate}
          locale="it"
          placeholder={label}
          peekNextMonth
          showMonthDropdown
          showYearDropdown
          dropdownMode="select"
        />
        </div>
        {touched && error && <span className="error">{error.message}</span>}
      </Form.Field>
  );
}


export function MySelect(x){
  const { input, width, options, selectionMessage, label, meta: { touched, error } } = x;
  return(
  <Form.Field className={classnames({[`${width}`]:width!==undefined}, {wide:width!==undefined}, {error:touched && error})}>
    <label>{label}</label>
    <div>
    <select {...input}>
      <option value="">{selectionMessage}</option>
      {options.map(x =>
        <option value={x.value} key={x.value}>{x.text}</option>)}
    </select>
    </div>
    {touched && error && <span className="error">{error.message}</span>}
  </Form.Field>
  );
}

//https://medium.com/wolox-driving-innovation/https-medium-com-wolox-driving-innovation-easy-forms-in-react-native-with-redux-form-1cdc16a9a889
export const dateFromPickerParser = (value) => {
  console.log(value);
  return converDateToIso(value);
}

function converDateToIso(inputValue) {

  if(inputValue && inputValue !== undefined){
    let dateAsIsoString = '';
    if(typeof(inputValue) === 'string' && inputValue.indexOf('/')>0){
      const dateParts = inputValue.split('/');
      dateAsIsoString = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T00:00:00`;
    }else if(inputValue.toISOString !== undefined){
      //dateAsIsoString = inputDateField.toISOString();
      dateAsIsoString = inputValue.format('YYYY-MM-DD') + 'T00:00:00';
      console.warn('inputValue contains Moment');
    }else{
      dateAsIsoString = inputValue;
    }
    return dateAsIsoString;
  }

  return inputValue;
}

