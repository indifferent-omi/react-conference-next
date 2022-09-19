// An implementation where items from the bottom list can be dragged into the top,
// but items from the top can't be dragged to the bottom.

import React, { useState, useRef } from "react";
import { render } from "react-dom";
import {
  SortableContainer,
  SortableElement,
} from "react-sortable-hoc";
 
import  arrayMove from "array-move"
import DragListContainer from "./Container";



const DragableNav = (props) => {
  const [list, setList] = useState([
    "Item 1",
    "Item 2",
    "Item 3",
    "Item 4",
    "Item 5",
    "Item 6"
  ]);
  const [isDragging, setIsDragging] = useState(false);

  const onSortEnd = ({ oldIndex, newIndex }) => {
    // const currentItem = allItems[oldIndex];

    setList(arrayMove(list, oldIndex, newIndex));
    // if (isHoveringlist) {
    //   if (list.includes(currentItem)) {
    //   } else {
    //     list.splice(newIndex, 0, currentItem);
    //     letters.splice(letters.indexOf(currentItem), 1);
    //     setList([...list]);
    //     setLetters([...letters]);
    //   }
    // }
    setIsDragging(false);
  };

  const updateBeforeSortStart = () => {
    setIsDragging(true);
  };

  return (
    <div style={{ display: "flex", flexDirection: "row" }}>
        {/* {list.map((value, index) => (
            <DragListContainer key={`list-${index}`} index={index} >
                {value}
            </DragListContainer>
        ))} */}
        <DragListContainer
            list={list}
            updateBeforeSortStart={updateBeforeSortStart}
            isDragging={isDragging}
            onSortEnd={onSortEnd}
        />
    </div>
  );
};

export default DragableNav