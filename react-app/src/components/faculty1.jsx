import React from "react";

const Subject = () =>{
    return(
        <div className="subject">
            <h1>this is subject  </h1>
        </div>
    )
}

const Books = () => {
    return(
        <div className="Books">
        <Subject/>
        <Subject/>
        <Subject/>
        </div>
    )
}

export default Books;