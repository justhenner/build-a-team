const Employee = require ("../lib/employee");

describe('Employee', () => {
    it('creates an employee object', () => {
        const employee = new Employee('Bob Dillon', 33, 'bob@ontech.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));
    });
    describe('getName', () => {
        it('should return name', () => {
            const employee = new Employee('Bob Dillon', 555, 'bob@ontech.com');
            expect(employee.getNames()).toEqual(expect.any(String));
        });
    });
    describe('getID', () => {
        it('should return id', () => {
            const employee = new Employee('Bob Dillon', 555, 'bob@ontech.com');
            expect(employee.getID()).toEqual(expect.any(Number));
        });
    });
    describe('getEmail', () => {
        it('should return email', () => {
            const employee = new Employee('Bob Dillon', 555, 'bob@ontech.com');
            expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
        });
    });
    describe('getRole', () => {
        it('should return Employee role', () => {
            const employee = new Employee('Mila Kunis', 111, 'mila@ontech.com');
            expect(employee.getRole()).toEqual('Employee');
        });
    });
});

