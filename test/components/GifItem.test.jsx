import React from 'react';
import { render, screen } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";


describe('Testing in <GifItem Component>', () => {
    const title = 'Un titulo';
    const url = 'https://localhost/algo.jpg';

    beforeEach(() => {
        render(<GifItem title={title} url={url} />);
    });

    test('should match the snapshot', () => {
        const { container } = screen;
        
        expect(container).toMatchSnapshot();
    });

    test('should show title passed', () => {
        const titleShown = screen.getByText(title);

        expect(titleShown).toBeTruthy();
        expect(titleShown.textContent).toBe(title);
    });

    test('should show image using url and alt passed', () => {
        const { url, alt } = screen.getByRole('img');

        expect(url).toBe(url);
        expect(alt).toBe(title);
    });

});