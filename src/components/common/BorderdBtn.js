
function BorderedBtn({btnText,link}) {
    return ( 
            <a role={"button"} href={link} className="bordered_btn">{btnText}</a>
     );
}

export default BorderedBtn;