function ServiceCard({grid,data}) {

    return ( 
        <>
            {
                data.map((data)=>
                <div key={data.id} className={`service_wrapper ${grid} `} data-aos="flip-left" data-aos-easing="ease-out-cubic" data-aos-duration="2000">
                    <div className="service_cards text-center mx-auto">
                        <img className="mx-auto" src={data.image} alt=""/>
                        <div className="heading_4 text-black mb-2">{data.name}</div>
                        <p className="text-dark">{data.details}</p>
                    </div>
                </div>
                )
            }
        </>
     );
}

export default ServiceCard;