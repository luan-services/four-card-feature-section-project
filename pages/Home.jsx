    import React from 'react'
    import Challenge from "../components/Challenge"
    import CardContainer from '../components/CardContainer'
import TextBox from '../components/TextBox'

    export const Home = () => {
    return (
        <div className="w-full flex flex-wrap justify-center items-center">
            <TextBox></TextBox>
            <CardContainer/>
            <Challenge/>
        </div>
    )
    }
