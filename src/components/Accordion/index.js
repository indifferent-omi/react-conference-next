import { useRef, useState } from "react";
import ButtonTab from "../Button/ButtonTab";

const Accordion = ({label,children,...props})=>{
    const [open,setOpen] = useState(false);
    const toggle = () => {
      setOpen(!open);
    };
    const contentRef = useRef();
    return(
    <div className={`${open ? "accordion-open" : "accordion"}`} {...props}>
      <ButtonTab label={label} className={`mb-5 ${open ? "active" : ""}`} onClick={toggle}/>
      <div ref={contentRef} className="overflow-hidden duration-300" style={open ? { height: contentRef.current.scrollHeight +
            "px" } : { height: "0px" }}>
        {children}
      </div>
    </div>
    )
}

export default Accordion;