export function chunk(arr, size) {
  return arr.reduce((ar, it, i) => { 
    const ix = Math.floor(i/size); 
    if(!ar[ix]) {
      ar[ix] = [];
    }

    ar[ix].push(it);
    return ar;
  }, []);
}
