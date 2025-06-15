function Btn(props){
    return(
        <div id="btn">
            <a href="#!">
                <button className="text-[16px] text-btnColor bg-none border border-btnColor px-5 py-3 rounded-[3px] hover:bg-btnColor hover:text-white transition duration-300 cursor-pointer">{props.text}</button>
            </a>
        </div>
    )
}
export default Btn;