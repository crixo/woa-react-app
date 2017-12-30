//https://github.com/facebookincubator/create-react-app/issues/871
//brew install watchman
import moment from 'moment';
import 'moment/locale/it';
// var itLocale = require('moment/locale/it');
// moment.updateLocale('it', itLocale);

it('handles dates in iso', () => {
  const dateAsIsoString = '2017-12-10T00:00:00.000Z'
  var dateAsMoment = moment(dateAsIsoString);
  console.log(dateAsMoment);
  var momentAsString = dateAsMoment.toISOString();

  console.log(momentAsString);
  expect(dateAsIsoString).toEqual(momentAsString);
});

it('should convert local to iso', () => {
  const dateAsitString= '10/12/2017'
  const dateParts = dateAsitString.split('/');
  const dateAsIsoString = `${dateParts[2]}-${dateParts[1]}-${dateParts[0]}T00:00:00.000Z`;
  var dateAsMoment = moment(dateAsIsoString);
  var momentAsIsoString = dateAsMoment.toISOString();
  var momentAsString = dateAsMoment.format();
  console.log(momentAsString);
  console.log(momentAsIsoString);
  expect(momentAsIsoString).toEqual('2017-12-10T00:00:00.000Z');
});

it('should convert iso to local', () => {
  const dateAsIsoString = '2017-12-10T00:00:00.000Z';
  const dateAsMoment = moment(dateAsIsoString);
  const dateAsLocalString = dateAsMoment.format('DD/MM/YYYY');

  expect(dateAsLocalString).toEqual('10/12/2017');
});

it('should convert to iso string date only', () => {
  //const dateAsIsoString = '2017-12-10T00:00:00.000Z';
  //const localString = 'Tue Jan 07 1936 00:00:00 GMT+0100 (CET)';
  const localString = '1936-01-07T00:00:00+03:00';
  const dateAsMoment = moment(localString);
  const expected = dateAsMoment.format('YYYY-MM-DD') + 'T00:00:00.000Z';//Tue Jan 07 1936 00:00:00 GMT+0100 (CET)
  console.log(dateAsMoment.toISOString());
  console.log(expected);
  expect(expected).toEqual('1936-01-06T00:00:00.000Z');
});

