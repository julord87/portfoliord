import { useEffect } from "react";
import ToolIcon from "./ToolIcon"
import { useModal } from "../hooks/useModal";
import { handleScroll } from "../helpers/handle-scroll-fn";

const Card = ({title, img, description, tools, videolink, link, repolink, subtitle, fullDescription}) => {
    
    const { dispatch } = useModal();

    const handleClick = () => {
        dispatch({ type: 'OPEN_MODAL', payload: { title, img, description, videolink, fullDescription, subtitle, repolink, link } })
    }

    useEffect(() => {
        handleScroll('.card-2');
    }, []);

    return (
        <div className="card-2 mb-3 px-2 pb-6 mx-2 to-fade-in">
            <div>
                <h2 className="Subtitle-9999">{title}</h2>
                {subtitle && <p className="Subtitle-9998">{subtitle}</p>}

                {repolink && 
                    <div className="w-full p-5 mb-6">
                        <img 
                            src={img} 
                            className="border-slate-500 shadow-lg border-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer" 
                            alt={title}
                            onClick={handleClick}
                        />
                    </div>
                }

                {videolink &&
                    <div className="w-full p-5 mb-6">
                        <img 
                        src={img} 
                        className="border-slate-500 shadow-lg border-2 rounded-xl transition duration-300 ease-in-out transform hover:scale-105 hover:cursor-pointer" 
                        alt={title} 
                        onClick={handleClick}
                        />
                    </div>
                }



                <div className={`w-full ${repolink ? 'mb-6 border-b border-slate-400' : ''}`}>
                    <p className="Description-9999 ml-4 pb-4 px-6 text-slate-600">{description}</p>
                </div>

                <div className="grid grid-cols-3">
                    <div className="col-span-2">
                        {tools.map((tool) => (
                            <ToolIcon 
                                name={tool} 
                                key={tool} 
                            />
                        ))}
                    </div>

                    {repolink &&
                        <div className="flex items-end justify-center h-full">
                            <a href={repolink} target="_blank" rel="noopener noreferrer">
                                <img src="/svg/github.svg" className="h-7 w-7 mr-2" alt={`${title} repository`} />
                            </a>
                            <a href={link} target="_blank" rel="noopener noreferrer">
                                <img src="/svg/link.svg" className="h-6 w-6" alt={`${title} link`} />
                            </a>
                        </div>
                    }
                </div>

                {videolink &&
                    <div className="md:flex md:justify-center items-center w-full mb-4 grid grid-cols-3">
                        <span className="cols-span-1 Description-9999 text-slate-400 lg:hidden italic text-base mr-7">{`<`} slide</span>
                        <a href={videolink} target="_blank" rel="noopener noreferrer" className="flex items-center col-span-1">
                            <span className="Description-9999 text-slate-500">watch video :{' '}</span>
                            <img src="/svg/youtube.svg" className="h-7 w-7 Description-9999 ml-2" alt={`${title} video link`} />
                        </a>
                        <span className="Description-9999 text-slate-400 lg:hidden italic text-base ml-7">slide {`>`}</span>
                    </div>
                }
                
            </div>
        </div>
      )
}

export default Card