export const parseArgs = () => {
  let msg = '';
  let isFirst = true;
  process.argv.forEach( (el, index) => {
    if (index > 1) {
      if (isFirst) {
        msg += el;
        isFirst = false;
      } else {
        if (index % 2 === 0) msg += `, ${el}`;
        else msg += ` is ${el}`;
      }
    } 
  });  
  if (msg) console.log(msg); 
};

parseArgs();
