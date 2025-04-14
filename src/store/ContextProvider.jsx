import React, { useState, useEffect, useRef } from "react";
import LoadingBar from "react-top-loading-bar"; // Import react-top-loading-bar
import { Store } from "./Context";


const BACKEND_URL = import.meta.env.VITE_API_URL;


function ContextProvider({ children }) {
  const [errorData, setErrorData] = useState("");
  const [responseData, setResponseData] = useState(null);
  const [notesData, setNotesData] = useState(null); // State to store fetched notes
  const localStoreValue = localStorage.getItem("accessToken");
  const [inputData1, setInputData] = useState({
    id: "",
    title: "",
    tags: "",
    description: "",
  });
  const loadingBarRef = useRef(null); // Ref for the loading bar
  
  useEffect(() => {
    // Retrieve localStorage values and set them in responseData
    const localUsername = localStorage.getItem("username");
    const localEmail = localStorage.getItem("email");
    const localPhoto = localStorage.getItem("photo");

    if (localUsername || localEmail || localPhoto) {
      setResponseData({ localUsername, localEmail, localPhoto });
    }
  }, []); // Run only once when the component mounts

  useEffect(() => {
    // Log whenever inputData1 changes
  }, [inputData1]);

  const handleLogin = async ({ email, password }, navigate) => {
    if (!email || !password) {
      console.error("Each field is required");
      return;
    }
    loadingBarRef.current.continuousStart();
    try {
      const response = await fetch(`${BACKEND_URL}/login`, {
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

        navigate("/app/notes");
      } else {
        setErrorData(data.user);
      }
    } catch (error) {
      console.error("Error during login:", error.message);
    } finally {
      loadingBarRef.current.complete();
    }
  };

  const hanldeLogout = async (navigate) => {
    loadingBarRef.current.continuousStart();
    await fetch(`${BACKEND_URL}/logout`, {
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
    setResponseData(null); // Clear responseData on logout
    loadingBarRef.current.complete();
    navigate("/login");
  };

  const addNotes = async ({ title, tags, desc }, navigate) => {
    loadingBarRef.current.continuousStart();
    try {
      const response = await fetch(`${BACKEND_URL}/addNotes`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStoreValue,
        },
        body: JSON.stringify({ title, tags, description: desc }),
      });

      const data = await response.json();

      if (response.ok) {
        navigate("/app/notes"); // Navigate to /app/notes on success
      } else {
        console.error("Failed to add note:", data.message || "Unknown error");
      }
    } catch (error) {
      console.error("Error while adding note:", error.message);
    } finally {
      loadingBarRef.current.complete();
    }
  };

  const fetchNotes = async () => {
    loadingBarRef.current.continuousStart();
    try {
      const response = await fetch(`${BACKEND_URL}/fetchNotes`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStoreValue,
        },
      });
      let data = await response.json();
      if (response.ok) {
        setNotesData((notesData) => data); // Update notesData with fetched notes
      } else {
        console.error(
          "Failed to fetch notes:",
          data.message || "Unknown error"
        );
      }
    } catch (error) {
      console.log("Error while Fetching notes: ", error.message);
    } finally {
      loadingBarRef.current.complete();
    }
  };

  const deleteNotes = async (id) => {
    loadingBarRef.current.continuousStart();
    try {
      const response = await fetch(`${BACKEND_URL}/deleteNotes/${id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStoreValue,
        },
      });

      if (response.ok) {
        setNotesData((prevNotes) =>
          prevNotes.filter((item) => item._id !== id)
        ); // Remove the item with the specified id
      } else {
        const data = await response.json();
        console.error(
          "Failed to delete note:",
          data.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error while deleting note:", error.message);
    } finally {
      loadingBarRef.current.continuousStart();
    }
  };

  const updateNote = async (item, navigate) => {
    setInputData({
      id: item._id,
      title: item.title,
      description: item.description,
      tags: item.tags,
    });
    navigate("/update");
  };

  const handleAddToGetInput = async (e, navigate) => {
    e.preventDefault(); // Prevent default form submission behavior
    setInputData({
      title: inputData1.title,
      description: inputData1.description,
      tags: inputData1.tags,
    });

    loadingBarRef.current.continuousStart(); // Start the loading bar

    try {
      const response = await fetch(
        `${BACKEND_URL}/updateNotes/${inputData1.id}`,
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
            Authorization: localStoreValue,
          },
          body: JSON.stringify({
            title: inputData1.title,
            description: inputData1.description,
            tags: inputData1.tags,
          }),
        }
      );
      let data = await response.json();

      if (response.ok) {
        navigate("/app/notes");
      } else {
        console.error(
          "Failed to update note:",
          data.message || "Unknown error"
        );
      }
    } catch (error) {
      console.error("Error while updating note:", error.message);
    } finally {
      loadingBarRef.current.complete(); // Complete the loading bar
    }
  };

  return (
    <>
      <LoadingBar color="#f11946" height="3px" ref={loadingBarRef} />{" "}
      {/* Add LoadingBar component */}
      <Store.Provider
        value={{
          handleLogin,
          responseData,
          hanldeLogout,
          addNotes,
          notesData, // Pass notesData into context
          fetchNotes,
          deleteNotes,
          inputData1,
          setInputData,
          updateNote,
          handleAddToGetInput,
          loadingBarRef,
          errorData,
          setErrorData,
        }}
      >
        {children}
      </Store.Provider>
    </>
  );
}

export default ContextProvider;
