import FeatureCard from "./FeatureCard"
import { cards } from "../objects/FeatureCards"

const CardContainer = () => {
    return (
        <div className="container w-full min-h-screen flex flex-wrap justify-center items-center gap-6 py-6 md:py-10 px-4 md:px-10">

            <FeatureCard></FeatureCard>

        </div>
    )
}

export default CardContainer
