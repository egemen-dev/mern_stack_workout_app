export const checkLogin = ({ setUser }) => {
  const loggedInUser = localStorage.getItem("user");

  // Set user if logged in
  if (loggedInUser) {
    const foundUser = JSON.parse(loggedInUser);
    setUser(foundUser);
    console.log("User is logged in.", foundUser);
  }

  // Redirect user to login page if not logged in
  if (
    !loggedInUser &&
    window.location.pathname !== "/register" &&
    window.location.pathname !== "/login"
  ) {
    console.log("User is directed to login page.");
    window.location.href = "/login";
  }
};

export default checkLogin;
