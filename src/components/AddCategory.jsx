import { useState } from "react";

export const AddCategory = ({ onNewCategory }) => {
    const [inputValue, setInputValue] = useState('');

    const onInputChange = (onChangeEvent) => {
        setInputValue(onChangeEvent.target.value);
    }

    const onSubmit = (onSubmitEvent) => {
        onSubmitEvent.preventDefault();

        if (!inputValue.trim().length) return

        onNewCategory(inputValue);
        setInputValue('');
    }

    return (
        <form onSubmit={(event) => onSubmit(event)}>
            <input type="text" placeholder="Buscar gifs" value={inputValue} onChange={(event) => onInputChange(event)} />
        </form>
    )
}
