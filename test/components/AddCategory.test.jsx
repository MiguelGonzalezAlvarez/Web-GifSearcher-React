import { render, screen, fireEvent } from "preact/test-utils";
import { AddCategory } from "../../src/components/AddCategory";

describe('Testing <AddCategory /> Component', () => {
    const onNewCategoryMock = jest.fn();

    beforeEach(() => {
        render(<AddCategory onNewCategory={onNewCategoryMock} />);
    });

    test('should match the snapshot', () => {
        const { container } = screen;
        expect(container).toMatchSnapshot();
    });

    test('should handle input change', () => {
        const inputElement = screen.getByPlaceholderText('Buscar gifs');

        fireEvent.change(inputElement, { target: { value: 'New Category' } });

        expect(inputElement.value).toBe('New Category');
    });

    test('should submit form and call onNewCategory', () => {
        const inputElement = screen.getByPlaceholderText('Buscar gifs');
        const formElement = screen.getByRole('form');

        fireEvent.change(inputElement, { target: { value: 'New Category' } });
        fireEvent.submit(formElement);

        expect(onNewCategoryMock).toHaveBeenCalledWith('New Category');
        expect(inputElement.value).toBe('');
    });
    
});