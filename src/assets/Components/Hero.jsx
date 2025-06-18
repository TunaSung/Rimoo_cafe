function Hero(props){

    return(
        <div id={props.id} className="py-50" style={{backgroundColor:`${props.color}`}}>
           {props.children}
        </div>
    )
}
export default Hero;