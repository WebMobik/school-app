const url = process.env.BASE_URL || "http://localhost:8080/api";

const signin = async (user) => {
  try {
    const response = await fetch(`${url}/users/signin`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      credentials: "include",
      body: JSON.stringify(user)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const signout = async () => {
  try {
    const response = await fetch(`${url}/users/signout`, { method: "GET" });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

const getUser = async (id) => {
  try {
    const res = await fetch(`${url}/users/${id}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    });
    return await res.json();
  } catch (err) {
    console.log(err);
  }
};

const testResult = async (result, credentials) => {
  try {
    const response = await fetch("/api/test/html", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorized: "Bearer " + credentials.t
      },
      body: JSON.stringify(result)
    });
    return await response.json();
  } catch (err) {
    console.log(err);
  }
};

export { signin, signout, getUser, testResult };
