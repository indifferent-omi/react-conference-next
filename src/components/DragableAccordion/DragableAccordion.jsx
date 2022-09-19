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
import Accordion from "../Accordion";
import ButtonTab from "../Button/ButtonTab";

const SortableItem = SortableElement(({ value,active,children ,...props}) => {
 return(
  <Accordion label={value}>
    {children}
  </Accordion>
 )
});

const SortableList = SortableContainer(({ list,navKey }) => (
  <div>
    {/* {console.log(list)} */}
    {list.map(({value,content}, index) => (
      <SortableItem key={`list-${index}`} index={index} value={value}>
        {content}
      </SortableItem>
    ))}
  </div>
));

const DragableAccordion = ({tabAccordionItems}) => {
    const nodeRef = useRef(null);
  const [list, setList] = useState([...tabAccordionItems]);
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
        lockAxis="Y"
      />
    </div>
  );
};
export default DragableAccordion


// const [open,setOpen] = useState(false);
//   const toggle = () => {
//     setOpen(!open);
//   };
//   const contentRef = useRef();
//   if (contentRef.current) console.log(contentRef.current.scrollHeight);
//   return(
//     )