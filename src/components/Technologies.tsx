import { use, useState } from "react";
import type { TechnologyType } from "../type";
import Technology from "./Technology";
import Stack from "./Stack";
import { toast } from "react-toastify";

interface TechnologiesProp {
    technologyData: Promise<TechnologyType[]>
}

function Technologies({technologyData}: TechnologiesProp){
    const data: TechnologyType[] = use(technologyData)
    
    const [selectedItems, setSelectedItems] = useState<TechnologyType[]>([])
    const handleStack = (item: TechnologyType): void => {
        setSelectedItems([...selectedItems, item])
        toast.success(`${item.name} Added to Stack`)
        
    }
    const handleDelete = (technology: TechnologyType) => {
        const exist: TechnologyType | undefined = selectedItems.find(f=>f.id === technology.id)
        if(exist){
            const remaining: TechnologyType[] = selectedItems.filter(tech => tech.id !== technology.id)
            setSelectedItems(remaining)
            toast.warn(`${technology.name} Removed from the Stack!`)
        }
    }

    const removeAll = () => {
        setSelectedItems([])
        toast.warn('All technologies has been removed')
    }

    return (
        <section className="container mx-auto mt-10 text-center md:text-left space-y-2 px-4">
            <h1 className="text-3xl md:text-4xl font-bold">Explore the <span className="text-pink-500 ">Technologies</span></h1>
            <p className="text-gray-500">Pick one technology per category to build your ideal stack.</p>
            <div className="grid gap-3 grid-cols-1 md:grid-cols-4 mt-10">
                <div className="md:col-span-3">
                    <div className="grid-cols-1 grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {
                            data.map(tech => {
                                const isSelected: boolean = selectedItems.some(item => item.id === tech.id)
                                return <Technology key={tech.id} tech={tech} handleStack={handleStack} isSelected={isSelected}/>
                            })
                        }
                    </div>
                    
                </div>
                <div className="md:col-span-1 h-fit">
                    <div className="border border-gray-200 rounded-2xl p-4 space-y-2">
                        <h1 className="text-2xl font-bold">Your Stack</h1>
                        <p className="text-gray-400">
                            {
                                (selectedItems.length <= 0)? 'No technologies selected yet.' : `${selectedItems.length} Technology Selected`
                            }
                        </p>
                        {
                            (selectedItems.length <= 0)? (
                                <div className="flex justify-center items-center border border-dashed border-gray-400 h-20 rounded-2xl">
                                    <p className=" text-gray-400 text-sm">Your stack is empty.</p>
                                </div>
                            ) : (
                                <div>
                                    {
                                        selectedItems.map(item => <Stack key={item.id} item={item} handleDelete={handleDelete}/>)
                                    }
                                    <button onClick={removeAll} className="border border-red-500 rounded-xl w-full py-2 font-bold text-red-500 cursor-pointer hover:bg-red-500 hover:text-white hover:transform hover:duration-300 hover:scale-105">Remove all</button>
                                </div>
                            )
                        }
                        
                    </div>
                </div>
                
            </div>
            
        </section>
    )
}


export default Technologies;