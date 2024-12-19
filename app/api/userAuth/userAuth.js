// https://climat-backend.onrender.com/users/...

export const registerUser = async function (params) {
  const options = {
    method: "POST",
    body: JSON.stringify(params),
    headers: {
      "Content-Type": "application/json; charset=UTF-8",
    },
  };
  const userAuth = await fetch(
    "https://climat-backend.onrender.com/users/register",
    options
  )
    .then((response) => response.json())
    .catch((error) => console.log(error));
  return userAuth;
};
