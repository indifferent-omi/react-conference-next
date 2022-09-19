
import ArrowIcon from "../../assets/svg/tab-button-icon.svg"
const ButtonTab = ({label, className,...rest}) =>{
    let classes = 'btn-tab ' + className;
    return  <span href="#" className={classes} {...rest}>
            <ArrowIcon/>
    {label && <span className='text-base'>{label}</span>}
  </span>
}

export default ButtonTab;