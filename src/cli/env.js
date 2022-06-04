export const parseEnv = () => {
  let msg = '';
  let isFirst = true;
  Object.entries(process.env).forEach(([key, value]) => {
    if (key.substring(0, 4) === 'RSS_') {
      const str = `${key}=${value};`;
      if (isFirst) {
        msg += str;
        isFirst = false;
      } else msg += ` ${str}`;
    } 
  });  
  if (msg) console.log(msg.slice(0, -1)); 
};

parseEnv();
