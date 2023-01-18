function ExpenseItem(props) {
    const month = props.date.toLocaleString('pl-Pl',{month:"long"});
    const day = props.date.toLocaleString('pl-Pl',{day:"2-digit"})
    const year = props.date.getFullYear();
    const title = props.title;
    const amount = props.amount
    return (
        <div className="expense-item">
            <div className="expense-item__date">
                <div>{month}</div>
                <div>{day}</div>
                <div>{year}</div>
            </div>

            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">{amount}</div>
            </div>
        </div>
    )
}


export default ExpenseItem;