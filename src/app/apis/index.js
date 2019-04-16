const APIS = {
  "login" : "signin",
};

const getApiEndPoint = (name) => {
  if(name && APIS[name]) return APIS[name];
  return '';
}

export default getApiEndPoint;
