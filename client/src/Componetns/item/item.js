const Item = ({name, id, priority, finsh, onToglePriority, onTogleFinish, onDelete}) => {
   
   
    let classNames = 'info';
   
    if(priority) {
        classNames += " acrivePriority"
    }  
    if(finsh) {
        classNames += " activeFinish";
    } 
    return(
        <li className="item">
            <div className={classNames}>
                 {id + 1} {name}
            </div>

            <div className="panel">
                <span uk-icon="icon: check" onClick={onTogleFinish}></span>
                <span uk-icon="icon: warning" onClick={onToglePriority}></span>
                <span uk-icon="icon: trash" onClick={onDelete}></span>
            </div>
        </li>
    )
}

 export default Item