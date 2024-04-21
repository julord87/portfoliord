import { useEffect } from "react"
import WorkAreaTitleCard from "./WorkAreaTitleCard"
import { areaDb } from "../data/db"
import { handleScroll } from "../helpers/handle-scroll-fn"

const WorkAreaInfo = areaDb[1]

const MusicProducerSection = () => {

    useEffect(() => {
        handleScroll('.spotify-card')
    }, [])

  return (
    <div className="max-w-6xl mx-auto mt-16">
        <WorkAreaTitleCard 
            title={WorkAreaInfo.title}
            description={WorkAreaInfo.description}
        />
        <div className="spotify-card to-fade-in">
            <div className="grid grid-cols-1 gap-x-24 mt-4 space-y-2 md:grid-cols-2 lg:grid-cols-3 mx-3 items-baseline">
                <div className="col-span-1">
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/track/5ajWEGISBzNXiGex3cAcBu?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
                <div className="col-span-1">
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/track/4lXoQ82vvJzOVxVnDUdUaJ?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                    />
                </div>
                <div className="col-span-1">
                    <iframe
                        style={{ borderRadius: '12px' }}
                        src="https://open.spotify.com/embed/track/3YBfHM5P2r0WVReEGE0f4Q?utm_source=generator&theme=0"
                        width="100%"
                        height="352"
                        allowFullScreen=""
                        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                        loading="lazy"
                        
                    />
                </div>  
            </div>
        </div>
    </div>
  )
}

export default MusicProducerSection