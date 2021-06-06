import create from '../index';

describe('Create config',()=>{
    test('Ideal case',async ()=>{
        const sampleData = [{ host: "backend.test.com", weight: "1", type: "https" }];
        const response = await create(sampleData,'yuk',8080);
        expect(response.includes('server backend.test.com weight=1;')).toBe(true);
        expect(response.includes('listen 8080')).toBe(true);
        expect(response.includes('proxy_pass http://yuk/'));
    })
})