import React from 'react'
import Car from "./images/rolls.webp"


function CarBg() {
    return (
        <>
        <div className='z-1'>

            <div className="bg-black h-[70vh] text-center flex justify-center items-center ">
                <h1 className="text-[2rem] font-thin w-[70%] text-white">Imagined for those who reject conformity and live on their own terms. Black Badge beckons the rule-breakers, innovators, trailblazers — and above all — those who dare.</h1>
            </div>

            <div>
                <img src={Car} alt="" />
            </div>
            </div>
        </>
    )
}

export default CarBg
