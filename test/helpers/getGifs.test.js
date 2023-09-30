import getGifs from '../../helpers/getGifs';

describe('Testing getGifs helper', () => {
    let gifs;

    beforeAll(async () => {
        gifs = await getGifs('Gifs');
    });

    test('should return a non-empty array of gifs', () => {
        expect(gifs).toBeTruthy();
        expect(Array.isArray(gifs)).toBe(true);
        expect(gifs.length).toBeGreaterThan(0);
    });

    test('each gif should have the expected properties', () => {
        gifs.forEach((gif) => {
            expect(gif).toEqual({
                id: expect.any(String),
                title: expect.any(String),
                url: expect.any(String),
            });
        });
    });
    
});