import React, { useContext, useEffect } from "react";
import AddButton from "./AddButton";
import Items from "./items";
import { Store } from "../store/contextProvider";

function ItemContainer() {
  const {
     notesData,
    fetchNotes,
  } = useContext(Store);

  useEffect(() => {
    fetchNotes();
  }, []);
  
  return (
    <>
      <div className="border absolute inset-0 z-10 mt-9 ">
        <AddButton />
      </div>
      <div className="absolute inset-0 z-10 mt-22 pt-9 flex justify-center items-center flex-wrap overflow-auto gap-3 ">
        {(notesData || []).map((i) => {
          return <Items key={i._id} data={i} />;
        })}
      </div>
    </>
  );
}

export default ItemContainer;
