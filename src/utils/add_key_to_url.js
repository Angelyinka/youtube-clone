const addKeyToUrl = (url)=>{

  const apiKey = process.env.REACT_APP_API_KEY;

  return `${url}&key=${apiKey}`;
};

export default addKeyToUrl;