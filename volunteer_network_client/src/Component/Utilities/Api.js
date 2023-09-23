export const setAuthToken = (user) => {
  const currentUser = {
    email: user.email,
  };
  console.log(
    "🚀 ~ file: LogIn.jsx:28 ~ .then ~ currentUser:",
    currentUser
  );
  //get jwt token
  fetch("https://volunteer-network-server-ratul-44.vercel.app/jwt", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(currentUser),
  })
    .then((res) => res.json())
    .then((data) => {
      localStorage.setItem("volunteerNetworkToken", data.token);
    });
}