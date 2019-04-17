const APIS = {
  "login" : "signin",
  "logout": "signout",
};

const getApiEndPoint = (name) => {
  if(name && APIS[name]) return APIS[name];
  return '';
}

export default getApiEndPoint;
