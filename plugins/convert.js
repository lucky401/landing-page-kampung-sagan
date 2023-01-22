import Vue from 'vue';
import moment from 'moment';

moment.locale('id');

Vue.filter('date', function (value) {
  if (!value) return '';
  return moment(value).format('dddd, D MMMM YYYY', 'id');
});

Vue.filter('time', function (value) {
  if (!value) return '';
  return moment(value).format('HH:mm', 'id');
});

Vue.filter('datetime', function (value) {
  if (!value) return '';
  return moment(value).format('D MMM, YYYY HH:mm', 'id');
});

Vue.filter('day', function (value) {
  if (!value) return '';
  return moment(value).format('DD', 'id');
});

Vue.filter('month', function (value) {
  if (!value) return '';
  return moment(value).format('MMMM', 'id');
});

Vue.filter('year', function (value) {
  if (!value) return '';
  return moment(value).format('YYYY', 'id');
});

Vue.filter('millis', function (value) {
  let sec = Math.floor(value / 1000);
  const hrs = Math.floor(sec / 3600);
  sec -= hrs * 3600;
  let min = Math.floor(sec / 60);
  sec -= min * 60;

  sec = '' + sec;
  sec = ('00' + sec).substring(sec.length);

  if (hrs > 0) {
    min = '' + min;
    min = ('00' + min).substring(min.length);
    return hrs + ' jam ' + min + ' menit ' + sec + ' detik ';
  } else if (min > 0) {
    return min + ' menit ' + sec + ' detik ';
  } else {
    return sec + ' detik ';
  }
});

Vue.filter('phone', function (value) {
  if (!value) return '';
  return value.substring(0, 4) + ' - XXXX - XXXX';
});

Vue.filter('email', function (value) {
  if (!value) return '';
  return value.substring(0, 5) + '@XXXXX';
});

Vue.filter('address', function (value) {
  if (!value) return '';
  return value.substring(0, 10) + ' ...';
});

Vue.filter('title', function (value) {
  if (!value) return '';
  if (value.length > 55) {
    return value.substring(0, 55) + ' ...';
  } else {
    return value;
  }
});
Vue.filter('subtitle', function (value) {
  if (!value) return '';
  if (value.length > 60) {
    return value.substring(0, 60) + ' ...';
  } else {
    return value;
  }
});

export default {
  moment,
};
