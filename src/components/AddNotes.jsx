import React, { useContext, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { IoMdAddCircle } from "react-icons/io";
import { Store } from "../store/contextProvider";

function AddNotes() {
  let navigate = useNavigate();
  const { addNotes } = useContext(Store);
  const [inputData, setInputData] = useState({ title: "", tags: "", desc: "" });

  const handleAddToGetInput = async (e) => {
    e.preventDefault(); // Fixed typo
    addNotes(inputData, navigate); // Log input values

    // Add logic to send data to the backend or handle it as needed
  };

  const onChange = (e) => {
    setInputData({ ...inputData, [e.target.name]: e.target.value });
  };

  return (
    <div className="relative h-screen bg-[url(/wallhaven-x13lxo_1920x1080.png)] bg-center bg-cover bg-no-repeat">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-66"></div>

      <div className="border border-white min-h-screen w-full">
        <form onSubmit={handleAddToGetInput} className="">
          <div className="relative flex">
            <Link
              to="/app/notes"
              className="text-white absolute z-20 rounded-2xl sm:px-6 sm:py-2 sm:bottom-6 sm:left-10 hover:bg-gray-600 cursor-pointer top-6 left-5 border px-3 py-2"
            >
              <FaArrowLeft />
            </Link>
            <input
              onChange={onChange}
              name="title"
              value={inputData.title}
              type="text"
              required
              placeholder="Enter Your title"
              className="border-b-4 relative z-10 w-full min-h-20 border-white sm:placeholder:text-4xl sm:pl-40 text-white sm:text-2xl pl-20 text-xl"
            />
            <button
              type="submit"
              className="absolute sm:right-12 sm:top-5 sm:py-1 sm:text-4xl text-white sm:rounded sm:px-2 right-5 top-6 text-2xl border py-1 px-3 z-30 cursor-pointer hover:bg-gray-600"
            >
              <IoMdAddCircle />
            </button>
          </div>
          <div className="absolute z-10 my-8 mx-auto  border-white w-full border-t-2 border-b-2">
            <input
              onChange={onChange}
              name="tags"
              value={inputData.tags}
              type="text"
              placeholder="Enter your tags"
              className="sm:py-5 sm:px-18 py-4 px-8 text-xl w-full text-white sm:text-4xl bg-transparent focus:outline-none"
            />
          </div>
          <div>
            <textarea
              onChange={onChange}
              name="desc"
              required
              value={inputData.desc}
              placeholder="Enter description here"
              className="absolute z-10 w-full mt-33 sm:mt-40 sm:px-20 sm:py-4 sm:placeholder:text-2xl sm:placeholder:text-white sm:text-2xl min-h-[20rem] border-white text-white border-t-2 border-b-2 text-xl px-6 py-3"
            ></textarea>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddNotes;
