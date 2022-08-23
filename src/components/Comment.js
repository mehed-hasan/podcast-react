function Comment({data}) {

    return ( 

  
             <div className='d-flex flex-column gap-5'>
                    <h1 className="fw-bold">
                      {data.comment}
                    </h1>
  
                    <div className="commenter d-flex justify-content-center align-items-center gap-2">
                      <img src={data.avatar} alt=""/>
                      <h6 className="text-black ">{data.user}</h6>
                      <img src={data.userRank.companyLogo} alt=""/>
                      <h6 className="text-black fw-bold">{data.userRank.rankName}</h6>  
                    </div>
                  </div>
    
     );
}

export default Comment;