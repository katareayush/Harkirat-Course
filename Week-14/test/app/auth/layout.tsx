import React, { Children } from "react"

export default function ({children}:{
    children: React.ReactNode}){

    return (
    <div>
        <div className="border-b flex justify-center font-bold p-4  text-lg">
            20% discount on all products        
        </div>
        {children}
    </div>
    )
}