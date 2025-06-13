    import React from 'react'
    import Challenge from "../components/Challenge"
    import CardContainer from '../components/CardContainer'

    export const Home = () => {
    return (
        <div className="w-full flex flex-wrap justify-center items-center">
            <CardContainer/>
            <Challenge/>
        </div>
    )
    }
