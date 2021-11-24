export const getAuthToken = () => {
  const token = localStorage.getItem("todo_token");
  return token ? "Bearer " + token : null;
};
export const isLoggedIn = () => {
  const token = localStorage.getItem("todo_token");
  return token ? true : false;
}
