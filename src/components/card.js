import UserIcon from "./userIcon"

const Card = (props) => {
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
    console.log(props.online)
    return (
        <div className="card">
            <div className="id-line">
                <div className="task-id">{props.id}</div>
                <div className="user-profile">{
                    !user?
                        <UserIcon online={props.online}/>
                    : <div></div>
                }</div>
            </div>
            <div className="task-desc-line">
                <div className="task-icon"></div>
                <div className="task-desc">{props.title}</div>
            </div>
            <div className="tag-line">
                <div className="tag-icon"></div>
                <div className="tag-text">{props.tag}</div>
            </div>
        </div>
    )
}

export default Card