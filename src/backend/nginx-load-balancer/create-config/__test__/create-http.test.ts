import createHttp from '../create-http';

describe('Http',()=>{
    test('Ideal case',()=>{
        const response = createHttp('yuk','server{}');
        expect(response.includes('yuk')).toBe(true);
        expect(response.includes('server{}')).toBe(true);
    })
})