import React from 'react'

function Wrapper(){
    return <div>
    <CardWrapper>
        <TextComponent/>
        <div>
            hi there
        </div>
    </CardWrapper>
    <CardWrapper>
        <div>
            hi there 
        </div>
    </CardWrapper>
    </div>

}

function TextComponent(){
    return <div>
    <h1>
        Hello World
    </h1>
    <h5>
        This is a text component
    </h5>
    </div>
}
    
function CardWrapper({children}){
    return <div style = {{border: "2px solid black" , padding:"8px" , margin:"4px" , width:"188px"}}>
    {children}
    </div>
}



export default Wrapper