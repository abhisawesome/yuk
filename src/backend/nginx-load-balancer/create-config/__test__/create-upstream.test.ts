import createUpstream from '../create-upstream';

describe('Upstream', () => {
    test('Ideal case', () => {
        const sampleData = [{ host: "backend.test.com", weight: "1", type: "https" }];
        const response = createUpstream(sampleData, 'test');
        expect(response.includes('test')).toBe(true);
        expect(response.includes('backend.test.com')).toBe(true)
    })
    test('Without passing host', () => {
        const sampleData = [{ host: "", weight: "1", type: "https" }];
        const response = createUpstream(sampleData, 'test');
        expect(response).toBe(`upstream test { }`);
        expect(response.includes('test')).toBe(true);
    })
    test('Multiple value with host missing', () => {
        const sampleData = [
            { host: "", weight: "1", type: "https" },
            { host: "backend.com", weight: "3", type: "https" }
        ];
        const response = createUpstream(sampleData, 'test');
        expect(response).toBe(`upstream test {server backend.com weight=3; }`);
    })
})
