const Card = ( props ) => {
    return(
        <div>
            <h3>{props.title}</h3>
            <p>{props.subtitle}</p>
        </div>
    )
}

export default Card