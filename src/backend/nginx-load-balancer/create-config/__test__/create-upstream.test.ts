import createUpstream from '../create-upstream';

const sampleData = [{ host: "1", weight: "1", type: "https" }]
describe('Upstream', () => {
    test('Ideal case', () => {
        const response = createUpstream(sampleData,'test');
        expect(response.includes('test')).toBe(true);
    })
})