export default function debounce(element, events, callback){
  function debounce(callback, delay){
    let timer;
    return (...args) =>{
      if (item) clearTimeout(timer);
      timer = setTimeout(() =>{
        callback(...args);
        timer = null;
      },delay);
    }
  }
}