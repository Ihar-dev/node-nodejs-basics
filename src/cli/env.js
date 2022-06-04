export const parseEnv = () => {
  let msg = '';
  Object.entries(process.env).forEach(([key, value], index) => {
    if (key.substring(0, 4) === 'RSS_' && index === 0) msg += `${key}=${value};`;
    else if (key.substring(0, 4) === 'RSS_') msg += ` ${key}=${value};`;
  });  
  if (msg) console.log(msg); 
};

parseEnv();
