import React from 'react'

const TextBox = () => {
    return (
        <div className="flex flex-col justify-center items-center gap-1 md:gap-2 md:pt-24 p-6 pt-14">
                    <div className="flex text-center">
                        <span className="text-3xl md:text-4xl text-custom-gray-400 font-popins-medium"> 
                            Reliable, efficient delivery
                        </span>
                    </div>
                    <div className="flex text-center">
                        <span className="text-2xl md:text-3xl text-custom-gray-400 font-bold"> 
                            Powered by Technology
                        </span>
                    </div>
                    <div className="flex md:w-6/10 text-center">
                        <span className="text-md text-custom-gray-500 md:text-custom-gray-400 font-popins-medium md:font-bold"> 
                            Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful
                        </span>
                    </div>
        </div>
    )
}

export default TextBox
