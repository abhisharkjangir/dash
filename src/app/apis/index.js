const APIS = {
  login: "signin",
  logout: "signout",
  blogs: "stories/filter",
  deleteBlog: "story/delete",
  addBlog: "story/add",
  updateBlog:"story/update",
  categories: "categories",
  addCategory:"category/add",
  deleteCategory:"/category/delete",
  blogDetails: "story"
};

const getApiEndPoint = name => {
  if (name && APIS[name]) return APIS[name];
  return "";
};

export default getApiEndPoint;
