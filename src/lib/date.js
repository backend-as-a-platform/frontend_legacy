import moment from 'moment';

const dateWithTime = (date) => moment(date).format('MMMM Do YYYY, h:mm A');

export { dateWithTime };
