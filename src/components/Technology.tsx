import { TiStarFullOutline } from "react-icons/ti";
import type { TechnologyType } from "../type";

interface TechnologyProp {
    tech: TechnologyType
    handleStack: (tech: TechnologyType) => void
    isSelected: boolean
}

function Technology({tech, handleStack, isSelected}: TechnologyProp){
    const handleClick = (tech: TechnologyType) => {
        handleStack(tech)
    }

    return (
        <div className={`flex flex-col border border-gray-200 rounded-2xl p-4 relative space-y-4 hover:scale-105 hover:transform hover:duration-300 ${isSelected && 'border-3 border-pink-300'}`}>
            <p className={`absolute top-3 right-3 p-2 border rounded-2xl ${tech.badgeColors}`}>{tech.badgeText}</p>
            <div className="space-y-4 flex gap-2 items-center md:flex-col md:items-start">
                <img className="h-10 flex m" src={tech.iconUrl} alt="" />
                <h2 className="text-2xl font-semibold">{tech.name}</h2>
            </div>
            
            <p className="text-left">{tech.description}</p>
            <div className="flex justify-between items-center border-t border-gray-200 py-2 mt-auto">
                <p className="p-2 bg-gray-100 rounded-xl">{tech.category}</p>
                <p>{tech.complexity}</p>
                <div className="flex justify-center items-center">
                    <span className="text-yellow-500 text-xl"><TiStarFullOutline/></span><p>{tech.rating}</p>
                </div>
            </div>
            <button onClick={() => handleClick(tech)} disabled={isSelected} className="w-full py-2 rounded-xl bg-gray-900 hover:bg-gray-800 text-white bottom-0 cursor-pointer disabled:bg-gray-400 disabled:cursor-not-allowed">{(isSelected)? 'Added': 'Add to Stack'}</button>
        </div>
    )
}


export default Technology;