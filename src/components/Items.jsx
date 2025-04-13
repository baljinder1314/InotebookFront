import React, { useContext } from "react";
import { FiEdit } from "react-icons/fi";
import { MdDelete } from "react-icons/md";
import { Store } from "../store/contextProvider";
import { useNavigate } from "react-router-dom";

function Items({ data }) {
  let navigate = useNavigate()
  const { deleteNotes,updateNote } = useContext(Store);
  return (
    <div className=" border h-auto py-3 flex items-center max-w-md space-y-2 rounded-2xl  flex-col px-4 justify-center border-white">
      <div className="w-full flex justify-between items-center">
        <div className="title self-start text-2xl font-semibold text-white ">
          {data.title}
        </div>
        <div className="cursor-pointer w-[8rem] flex justify-center items-center h-auto text-3xl text-white space-x-6">
          <div onClick={()=>deleteNotes(data._id)} className="rounded hover:bg-indigo-400">
            <MdDelete />
          </div>
          <div onClick={()=>updateNote(data,navigate)}  className="rounded hover:bg-indigo-400">
            <FiEdit />
          </div>
        </div>
      </div>
      <div className="overflow-auto max-h-44 ">
        <div className="desc text-white ">{data.description}</div>
      </div>
      <div className="tags text-white  self-start text-xl md:text-2xl pb-2">
        {data.tags}
      </div>
    </div>
  );
}

export default Items;
