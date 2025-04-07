import React from "react";
import { MdDelete } from "react-icons/md";
import { FiEdit } from "react-icons/fi";
import AddButton from "./AddButton";
function ItemContainer() {
  return (
    <>
    <div className="border absolute inset-0 z-10 mt-9 "><AddButton /></div>
    <div className="absolute inset-0 z-10 mt-22 pt-9 flex justify-center items-center flex-wrap overflow-auto gap-3 ">
      <div className=" border h-[14rem] flex items-center max-w-md space-y-2 rounded-2xl  flex-col px-4 justify-center border-white">
        <div className="w-full flex justify-between items-center">
          <div className="title self-start text-2xl font-semibold text-white ">
            Title
          </div>
          <div className="cursor-pointer w-[8rem] flex justify-center items-center h-auto text-3xl text-white space-x-7">
            <div>
              <MdDelete />
            </div>
            <div>
              <FiEdit />
            </div>
          </div>
        </div>
        <div className="overflow-auto">
          <div className="desc text-white ">
            Lorem ipsum dolor sit amet con Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Odit esse, qui officia eveniet, iste
            atque alias aperiam nostrum non adipisci ut explicabo magni,
            repudiandae vel accusantium? Corrupti praesentium nulla ut?
          </div>
        </div>
        <div className="tags text-white  self-start text-xl md:text-2xl pb-2">
          tags tags tags tags
        </div>
      </div>
    </div>
    </>
  );
}

export default ItemContainer;
