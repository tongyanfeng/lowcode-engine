import { ResultFile } from '@alilc/lowcode-types';
import { createResultFile } from '../../../../../../../../utils/resultHelper';

export default function getFile(): [string[], ResultFile] {
  const file = createResultFile(
      'DateUtil',
      'js',
      `
import moment from 'moment';

export function fixedZero(val) {
  return val * 1 < 10 ? \`0\${val}\` : val;
}

export const dateFormatTime = 'YYYY-MM-DD HH:mm:ss';
export const dateFormat = 'YYYY-MM-DD';
const hhmmss = 'HHmmss';
export const timeFormat = 'HHmm';
export const hhmmssD = 'HH:mm:ss';
const YYYYMMDDHHmmss = 'YYYYMMDDHHmmss';

export function formatterTime (val) {
    return val ? moment(new Date(val)).format(dateFormatTime) : '';
}

export function formatterDate (val) {
  return val ? moment(new Date(val)).format(dateFormat) : '';
}

export function formatterHHmmss (val) {
  return val ? moment(new Date(val)).format(hhmmss) : '';
}

export function dateTimeByTime (val) {
  if(!val){
    return moment(new Date(), dateFormatTime);
  }
  let dateTime = moment(new Date()).format(dateFormat) + ' ' + val;
  return moment(new Date(dateTime), dateFormatTime);
}

export function formatterTimeByDate (val) {
  return moment(val ? val : new Date(), dateFormatTime);
}

export function getMomentStartTime (val) {
  if(!val){
    return;
  }
  return val + ' 00:00:00';
}

export function getMomentEndTime (val) {
  if(!val){
    return;
  }
  return val + ' 23:59:59';
}

export function getYYYYMMDDHHmmss (val) {
  return val ? moment(new Date(val)).format(YYYYMMDDHHmmss) : '';
}

export function formatterDateStr (val) {
  return val ? moment(val, dateFormat) : '';
}

export function YYYYMMDDHHmm (date) {
  if(!date){
    return "";
  }
  let year = date.getFullYear();
  let months = (date.getMonth()+1) + "";
  if(parseInt(months) < 10){
      months = "0" + months;
  }
  let days = date.getDate() + "";
  if(parseInt(days) < 10){
      days = "0" + days;
  }
  let hour = date.getHours() + "";
  if(parseInt(hour) < 10){
      hour = "0" + hour;
  }
  let minute = date.getMinutes() + "";
  if(parseInt(minute) < 10){
      minute = "0" + minute;
  }
  return year + "-" + months + "-" + days + " " + hour + ":" + minute;
}
    `,
  );

  return [['src', 'utils'], file];
}
