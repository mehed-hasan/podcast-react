function BorderedBtn({btnText,link}) {
    return ( 
        <>
            <a href={link} className="bordered_btn">{btnText}</a>
        </>
     );
}

export default BorderedBtn;