const Manager = require('../lib/manager');

describe('Manager', () => {
    it('should create a Manager object', () => {
        const manager = new Manager('Bob Dillon', 555, 'bob@ontech.com', 1234567890);
        expect(manager.officeNumber).toEqual(expect.any(Number));
    });
    describe('getRole', () => {
        it('should return Managers role', () => {
            const manager = new Manager('Bob Dillon', 555, 'bob@ontech.com', 1234567890);
            expect(manager.getRole()).toEqual('Manager');
        });
    });
});
