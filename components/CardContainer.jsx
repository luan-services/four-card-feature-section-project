import FeatureCard from "./FeatureCard"
import { cards } from "../objects/FeatureCards"

const CardContainer = () => {
    return (
        <div className="w-full flex flex-wrap justify-center items-center py-6 md:py-10 px-4 md:px-10">
            <div class="grid md:grid-flow-col md:grid-rows-2 gap-6 md:p-6 items-center">
                <div class="md:row-span-2">
                    <FeatureCard imgSrc={cards[0].imgSrc} title={cards[0].title} desc={cards[0].desc} color={"border-custom-cyan"} />
                </div>
                
                <div class="md:row-span-1">
                    <FeatureCard imgSrc={cards[1].imgSrc} title={cards[1].title} desc={cards[1].desc} color={"border-custom-red"} />
                </div>

                <div class="md:row-span-1">
                    <FeatureCard imgSrc={cards[3].imgSrc} title={cards[3].title} desc={cards[3].desc} color={"border-custom-orange"} />
                </div>

                
                <div class="md:row-span-2">
                    <FeatureCard imgSrc={cards[2].imgSrc} title={cards[2].title} desc={cards[2].desc} color={"border-custom-blue"} />
                </div>

                
 
            </div>
        </div>
    )
}

export default CardContainer
