/*OPCION LEONIDAS
/**funcion para que mantega dos digitos y no se mueva el diseño*/
// const leftPad = number => {
//   const pad = '00';
//   return pad.substring(0, pad.length - number.length) + number;
// }
// /*Formatear tiempo en minutos y segundos*/
//  function formattedTime(secs) {
//   const minutes = parseInt(secs / 60, 10);
//   const seconds = parseInt(secs % 60, 10);
//   return `${minutes} : ${leftPad(seconds.toString())}`
// }
/***********************************************/
/*OTRA OPCION */
const formattedTime= time => {
  let minutes = Math.floor(time / 60);
  let seconds = Math.floor(time % 60);
  return`${formatTime(minutes)}:${formatTime(seconds)}`;
}

const formatTime = time => {
  return time < 10  ? "0" + time : time;
  // if (time < 10) {
  //   return"0" + time;
  // } else {
  //   return time;
  // }
}
export default formattedTime;