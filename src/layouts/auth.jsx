const Auth = () => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    return true;
  }
  return false;
};

export default Auth;
