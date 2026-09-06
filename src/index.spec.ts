/**
 * 🧪 testing module
 * @version 1.0.0
 * @date 2026-09-06
 * @license MIT
 * @author Robert Willemelis <github.com/willi84>
 */
import { sample } from './index';

describe('@robert.tools/eleventy-filter-route', () => {
    it('should return a eleventy-filter-route string', () => {
        expect(sample('hello')).toBe('sample: hello');
    });

    it('should return a eleventy-filter-route string with empty input', () => {
        expect(sample('')).toBe('sample: ');
    });
});
