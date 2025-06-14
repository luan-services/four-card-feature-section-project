import React from 'react'

const FeatureCard = ({imgSrc, desc, title, color}) => {
    return (
        <div className={`bg-white p-6 sm:w-80 border-t-4 rounded-lg shadow-lg ${color}`}>

                {title &&
                    <div className="flex pb-2">
                        <span className="text-lg text-custom-gray-500 font-bold"> 
                            {title}
                        </span>
                    </div>
                }

                {desc &&
                    <div className="flex pb-6">
                        <span className="text-sm text-custom-gray-400"> 
                            {desc}
                        </span>
                    </div>
                }
      
                {imgSrc && 
                    <div className="flex justify-end pb-4">
                        <img className="w-14" src={imgSrc} alt="Card Image"></img>
                    </div>
                }

                
        </div>
    )
}

export default FeatureCard
