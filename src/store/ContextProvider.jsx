import React, { createContext, useState, useEffect } from "react";

export const Store = createContext();

function ContextProvider({ children }) {
  const [responseData, setResponseData] = useState(null);

  useEffect(() => {
    // Retrieve localStorage values and set them in responseData
    const localUsername = localStorage.getItem("username");
    const localEmail = localStorage.getItem("email");
    const localPhoto = localStorage.getItem("photo");

    if (localUsername || localEmail || localPhoto) {
      setResponseData({ localUsername, localEmail, localPhoto });
    }
  }, []); // Run only once when the component mounts

  const handleLogin = async ({ email, password }, navigate) => {
    if (!email || !password) {
      console.error("Each field is required");
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("accessToken", data.data.accessToken);
        localStorage.setItem("username", data.data.user.username);
        localStorage.setItem("email", data.data.user.email);
        localStorage.setItem("photo", data.data.user.photo);


        // setResponseData({ localUsername, localEmail, localPhoto });
        navigate("/app/notes");
      } else {
        alert("Invalid Credential");
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    }
  };

  const hanldeLogout = async (navigate) => {
    const localStoreValue = localStorage.getItem("accessToken");
    await fetch("http://localhost:3000/user/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStoreValue,
      },
    });
    localStorage.removeItem("accessToken");
    localStorage.removeItem("username");
    localStorage.removeItem("email");
    localStorage.removeItem("photo");
    // localStorage.removeItem("userDetails");
    setResponseData(null); // Clear responseData on logout
    navigate("/login");
  };

  return (
    <Store.Provider value={{ handleLogin, responseData, hanldeLogout }}>
      {children}
    </Store.Provider>
  );
}

export default ContextProvider;
