import Load from '../index';

describe('Test', () => {
  test('Ideal', async () => {
    const sampleData = [{ host: "backend.test.com", weight: "1", type: "https" }];
    const load = new Load(sampleData);
    const response = await load.createConfig();
    expect(response.includes('server backend.test.com weight=1;')).toBe(true);
    expect(response.includes('listen 8080')).toBe(true);
    expect(response.includes('proxy_pass http://yuk/'));
  });
});
