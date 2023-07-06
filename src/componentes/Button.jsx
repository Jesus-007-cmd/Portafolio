import '../css/botton.css'
function Button({text, event}) {
    return (
        <button className="btn_ver" onClick={() => event()}>{text}</button>
    )
}

export default Button;