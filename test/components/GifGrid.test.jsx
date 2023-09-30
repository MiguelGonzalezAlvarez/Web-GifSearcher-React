import { render, screen } from "preact/test-utils";
import { GifGrid } from "../../src/components/GifGrid";
import { useFetchGifs } from "../../src/hooks/useFetchGifs";

jest.mock("../../src/hooks/useFetchGifs");

describe('GifGrid Component', () => {
    const category = 'Test Category';
    const mockGiphyData = [
        { id: '1', title: 'Gif 1', url: 'https://example.com/gif1.gif' },
        { id: '2', title: 'Gif 2', url: 'https://example.com/gif2.gif' },
    ];
    const mockIsLoading = false;

    beforeAll(() => {
        // Configurar el mock del hook useFetchGifs
        useFetchGifs.mockReturnValue({
            giphyData: mockGiphyData,
            isLoading: mockIsLoading,
        });
    });

    test('matches snapshot', () => {
        render(<GifGrid category={category} />);
        const { container } = screen;
        expect(container).toMatchSnapshot();
    });

    test('displays category title', () => {
        render(<GifGrid category={category} />);
        const titleElement = screen.getByText(category);
        expect(titleElement).toBeInTheDocument();
    });

    test('displays loading message while loading', () => {
        // Configurar isLoading como true para esta prueba
        useFetchGifs.mockReturnValue({
            giphyData: [],
            isLoading: true,
        });

        render(<GifGrid category={category} />);
        const loadingElement = screen.getByText('Cargando...');
        expect(loadingElement).toBeInTheDocument();
    });

    test('displays GifItems when not loading', () => {
        render(<GifGrid category={category} />);
        const gifItems = screen.getAllByRole('img');
        expect(gifItems.length).toBe(mockGiphyData.length);
    });
});