import { useAppState } from '../../overmind'
import { DishCard } from '../../components/MenuComponents/DishCard';




export const MenuComponent: React.FunctionComponent = () => {

    const state = useAppState().menu

    // Main menu component showing all dishes by category
    const MenuComponent = state.menu.categories.map(category => (
        <div key={category._id} id={category._id} className="grid grid-rows-2 pt-2 ">
            {/* Category banner */}
            <div className="row-span-1 grid grid-rows-2 gap-2 p-3 text-white h-4/5 bg-cover bg-gray-400 bg-blend-multiply bg-left" style={{ backgroundImage: "url(https://www.experto.de/wp-content/uploads/2013/10/AdobeStock_109489490-1024x683.jpg)" }}>
                <p className="text-lg font-semibold" >
                    {category.name}
                </p>
                {/* Description of category */}
                <p className="text-sm font-sofia text-description-grey ">
                    {category.description}
                </p>
            </div>
            {/* Dishes of current category */}
            {dishIndexMap(category)}
        </div>

    ))
    // Maps all dishes of a category under said category
    function dishIndexMap(category: any) {

        const dishes = category.dishesIndex.map((index: number) => (
            <div key={state.menu.dishes[index]._id} id={category._id} className="dis block pb-2 dish"  data-spy="scroll" data-target="#categories">
                <DishCard dish={state.menu.dishes[index]} />
            </div>
        ))
        return dishes
    }

    return (
        <div>{MenuComponent}</div>
    )

}