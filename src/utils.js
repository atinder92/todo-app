export const getAuthToken = () => {
  const token = localStorage.getItem("todo_token");
  return token ? "Bearer " + token : '';
};
