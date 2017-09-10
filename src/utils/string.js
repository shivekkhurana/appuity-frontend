export function getParam(str, variable) {
  const query = str.split('?')[1];
  const vars = query.split('&');
  for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (decodeURIComponent(pair[0]) === variable) {
          return decodeURIComponent(pair[1]);
      }
  }
  console.log('Query variable %s not found', variable);
}
