import React from 'react'

const FeatureCard = ({imgSrc, desc, title}) => {
    return (
        <div className="bg-white p-5 max-w-80 max-h-160 border-t-2 border-l-2 shadow-[8px_8px_0px_1px_black] rounded-xl 
        hover:transition hover:duration-400 hover:scale-105 hover:shadow-[1px_1px_0px_1px_black]">
            
      
                {imgSrc && 
                    <div className="flex pb-3">
                        <img className="rounded-xl" src={imgSrc} alt="Card Image"></img>
                    </div>
                }

                
                {title &&
                    <div className="flex pt-3">
                        <span className="text-gray-950 text-xl font-black"> 
                        {title}
                        </span>
                    </div>
                }
                {desc && 
                <div className="flex pt-3">
                    <h4 className="text-gray-400 text-sm font-semibold pr-2"> 
                    {desc}
                    </h4>
                </div>
                }
        </div>
    )
}

export default FeatureCard
