import Item from "../item/item"

const ItemList = ({data, onToglePriority, onTogleFinish, onDelete}) => {


    const elements = data.map((item, i) => {
        const {nameItem, priority, finsh, id} = item;

        return(
            <Item  
            name={nameItem} 
            key={id} id={i} 
            priority={priority} 
            finsh={finsh} 
            onToglePriority={() => onToglePriority(id)} 
            onTogleFinish={() => onTogleFinish(id)}  
            onDelete={() => onDelete(id)}
            />
        )
    })
    return(
        <ul className="ItemList uk-list uk-list-divider">
            {elements}
        </ul>
    )
}

 export default ItemList