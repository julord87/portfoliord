import WorkAreaTitleCard from "./WorkAreaTitleCard"
import { areaDb } from "../data/db"
import ResponsiveSlider from "./Slider"

const WorkAreaInfo = areaDb[2]

const TechnicalProducerSection = () => {
  return (
    <div className="max-w-6xl mx-auto mt-16">
        <WorkAreaTitleCard 
            title={WorkAreaInfo.title}
            description={WorkAreaInfo.description}
        />

        <div className="tech-prod-img">
          <ResponsiveSlider />
        </div>

        
    </div>
  )
}

export default TechnicalProducerSection