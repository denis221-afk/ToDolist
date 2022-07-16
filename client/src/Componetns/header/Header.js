const Header = (props) => {
    const priorityIndex = props.priorityIndex.length
    const finishIndex = props.finishIndex.length




    return(
        <div className="uk-background-primary header">
            <h1 className="title">Всіх задач на согодні {props.indexAll}</h1>
            <span>Виконано завдань {finishIndex}</span>
            <span>Пріорітитні завданя {priorityIndex}</span>
        </div>
    )
}

 export default Header