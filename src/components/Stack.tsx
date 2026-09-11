import { HiMiniXMark } from "react-icons/hi2";
import type { TechnologyType } from "../type";

interface StackProp {
    item: TechnologyType
    handleDelete: (tech: TechnologyType) => void
}
function Stack({item, handleDelete}: StackProp) {
    return (
        <div className="grid grid-cols-12 items-center border border-gray-200 rounded-2xl p-2 my-2">
            <img className="w-10 col-span-2 mx-auto" src={item.iconUrl} alt="" />
            <div className="col-span-8">
                <p className="font-bold">{item.name}</p>
                <p className="text-sm text-gray-400">{item.category}</p>
            </div>
            <button onClick={() => handleDelete(item)} className="col-span-2 text-2xl mx-auto cursor-pointer hover:scale-115 hover:transform hover:duration-300 hover:text-red-600"><HiMiniXMark/></button>
        </div>
    )
}


export default Stack;