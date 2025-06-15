function ImgContainer(props){
    return(
        <div id="img_container" className="relative w-full pt-[75%]">
            <div id="img" className="absolute inset-0 bg-no-repeat bg-cover bg-center"
            style={{ backgroundImage: `url(./src/assets/images/${props.img})`}}></div>
        </div>
    )
}
export default ImgContainer;