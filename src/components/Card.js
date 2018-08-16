import React from 'react';

const Card =  ({name,username,id})=>{
    return(
<div className="tc bg-light-green dib br3 ma2 grow bw2 shadow-5">
        <div>
            <img src={`https://robohash.org/${id}`}/>
            <div>
                <h2>{name}</h2>
                <p>{username}</p>
            </div>
        </div>
</div>
    );
}
export default Card;