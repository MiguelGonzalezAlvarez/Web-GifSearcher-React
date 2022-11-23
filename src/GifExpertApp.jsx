import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['Pokemon']);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return

        setCategories((categories) => [newCategory, ...categories]);
    }

    return (
        <>
            {/* Titulo */}
            <h1>Gif Expert App</h1>

            {/* Input de busqueda */}
            <AddCategory onNewCategory={(newCategory) => onAddCategory(newCategory)}></AddCategory>

            {/* Listado de gifs */}
            <div>
                {
                    categories.map(category => <GifGrid key={category} category={category} />)
                }
            </div>
        </>
    )
}