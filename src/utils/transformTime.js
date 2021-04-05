const convertFormat = (time) => time.toString().length === 1 ? `0${time.toString()}` : time; 

export const transformTime = (time)  => {
  let hours = new Date(time).getUTCHours();
  let minutes = new Date(time).getUTCMinutes();
  return `${convertFormat(hours)}:${convertFormat(minutes)}` 
}