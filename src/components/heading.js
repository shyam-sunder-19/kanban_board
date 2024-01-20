import UserIcon from "./userIcon"
import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosMore } from 'react-icons/io';
import { MdRadioButtonUnchecked, MdPieChart, MdDone, MdClear } from 'react-icons/md';

const Heading = (props) => {
    let status = false
    let user = false
    let priority = false    

    if (props.groupedby === 'status') {
        status = true
    } else if (props.groupedby === 'user') {
        user = true 
    } else {
        priority = true
    }
    return (
        <div className="heading">
            <div className="leftHeading">
                {
                    user?
                       <UserIcon online={props.online} />
                            :
                        <div></div>
                }
                <div className="headingName">{props.headingName}</div>
                <div>{props.count}</div>
            </div>
            <div className="heading-icons">
                <AiOutlinePlus />
                <IoIosMore />
            </div>
        </div>
    )
}

export default Heading