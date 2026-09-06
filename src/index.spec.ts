import fn from './index';
import * as LIB from './index';

describe('✅️ fn()', () => {
    const FN = fn;
    const listIsSortedBy = 'addedAt';
    describe('DEV', () => {
        it('should return the path with slashes', () => {
            expect(FN('value')).toBe('/value/');
            expect(FN('value', { listIsSortedBy })).toBe('/value/latest/');
            expect(FN('value/foo')).toBe('/value/foo/');
            expect(FN('/value/foo/')).toBe('/value/foo/');
            expect(FN('home')).toBe('/home/');
            expect(FN('home', { listIsSortedBy })).toBe('/home/latest/');
        });
    });
    describe('DEV', () => {
        it('should return the path with slashes', () => {
            const spy = jest.spyOn(LIB, 'getEnv').mockReturnValue('');
            expect(FN('value')).toBe('/value/');
            expect(FN('value', { listIsSortedBy })).toBe('/value/latest/');
            expect(FN('value/foo')).toBe('/value/foo/');
            expect(FN('/value/foo/')).toBe('/value/foo/');
            expect(FN('home')).toBe('/home/');
            expect(FN('home', { listIsSortedBy })).toBe('/home/latest/');
            spy.mockRestore();
        });
    });
    describe('PROD', () => {
        it('should return the path with slashes', () => {
            const spy = jest.spyOn(LIB, 'getEnv').mockReturnValue('production');
            expect(FN('value')).toBe('/value/');
            expect(FN('value', { listIsSortedBy })).toBe('/value/latest/');
            expect(FN('home')).toBe('/');
            expect(FN('home', { listIsSortedBy })).toBe('/latest/');
            spy.mockRestore();
        });
    });
});
