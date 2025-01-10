const addKeyToUrl = (url) => {
  const apiKey = import.meta.env.VITE_REACT_APP_API_KEY;

  return `${url}&key=${apiKey}`;
};

export default addKeyToUrl;
