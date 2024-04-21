import Card from "./Card"
import WorkAreaTitleCard from "./WorkAreaTitleCard"
import { areaDb, devWorksDb } from "../data/db"

const WorkAreaInfo = areaDb[0]

const DevSection = () => {
  return (
    <div className="max-w-6xl mx-auto mt-28">
        <WorkAreaTitleCard 
            title={WorkAreaInfo.title}
            description={WorkAreaInfo.description}
        />

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {devWorksDb.map((work) => (
                <Card 
                    key={work.id} 
                    title={work.title}
                    img={work.img}
                    description={work.description}
                    tools={work.tools}
                    link={work.link}
                    repolink={work.repolink}
                    subtitle={work.subtitle}
                    fullDescription={work.fullDescription}
                    />
            ))}
        </div>
        
    </div>
  )
}

export default DevSection