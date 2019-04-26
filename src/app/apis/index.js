const APIS = {
  login: "signin",
  logout: "signout",
  blogs: "stories/filter",
  categories: "categories"
};

const getApiEndPoint = name => {
  if (name && APIS[name]) return APIS[name];
  return "";
};

export default getApiEndPoint;
