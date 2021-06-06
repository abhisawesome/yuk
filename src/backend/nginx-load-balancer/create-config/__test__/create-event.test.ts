import createEvent from '../create-event';

describe('Create Event',()=>{
    test('Ideal case',()=>{
        const response = createEvent();
        expect(response).toBe(`events {}`)
    })
})