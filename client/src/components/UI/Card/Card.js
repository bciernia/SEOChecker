import "./Card.css"

function Card(props) {
    return <div className={'card ' + props.additionalClasses}  >{props.children}</div>
}

export default Card;