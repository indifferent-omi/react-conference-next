// An implementation where items from the bottom list can be dragged into the top,
// but items from the top can't be dragged to the bottom.

import { arrayMoveImmutable } from "array-move";
import React, { useState, useRef } from "react";
import { render } from "react-dom";
import {
  SortableContainer,
  SortableElement,
  arrayMove
} from "react-sortable-hoc";
import ButtonTab from "../Button/ButtonTab";

const SortableItem = SortableElement(({ value,active ,...props}) => (<div {...props}><ButtonTab label={value} className={`mb-5 ${active ? "active" : ""}`}/></div>));

const SortableList = SortableContainer(({ list, letters, isDragging,onKeyClick,navKey }) => (
  <div>
    {list.map((value, index) => (
      <SortableItem key={`list-${index}`} index={index} value={value} onClick={()=> onKeyClick(index)} active={navKey===index}  />
    ))}
  </div>
));

const DragableNav = (props) => {
    const nodeRef = useRef(null);
  const [list, setList] = useState(props.tabNavItems);
  const [isDragging, setIsDragging] = useState(false);

  const onSortEnd = ({ oldIndex, newIndex }) => {

    setList(arrayMoveImmutable(list, oldIndex, newIndex));
    setIsDragging(false);
  };

  const updateBeforeSortStart = () => {
    setIsDragging(true);
  };

  return (
    <div>
      <SortableList
        list={list}
        updateBeforeSortStart={updateBeforeSortStart}
        isDragging={isDragging}
        onSortEnd={onSortEnd}
        onKeyClick={props.onKeyClick}
        navKey={props.activeItem}
        lockAxis="Y"
      />
    </div>
  );
};
export default DragableNav