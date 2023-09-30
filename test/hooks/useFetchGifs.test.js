import { renderHook } from '@testing-library/react-hooks';
import { useFetchGifs } from './useFetchGifs';

describe('useFetchGifs Custom Hook', () => {
    test('should return initial state', () => {
        const { result } = renderHook(() => useFetchGifs('testing'));

        expect(result.current.giphyData).toEqual([]);
        expect(result.current.isLoading).toBe(true);
    });

    test('should fetch data correctly', async () => {
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('testing'));

        await waitForNextUpdate();

        expect(result.current.giphyData.length).toBeGreaterThan(0);
        expect(result.current.isLoading).toBe(false);
    });

});