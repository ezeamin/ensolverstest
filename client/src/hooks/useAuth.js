export const useAuth = () => {
  //simple yet unsecure implementation. Should be replaced with a more secure one
  const token = localStorage.getItem("token");

  return token ? true : false;
};
