import ItemList from "../item-list/Item-list"

const Body = ({data, onToglePriority, onTogleFinish, onDelete}) => {
    return(
        <div className="body"> 
            <ItemList data={data}  onToglePriority={onToglePriority} onTogleFinish={onTogleFinish} onDelete={onDelete}/> 
        </div>
    )
} 
 export default Body