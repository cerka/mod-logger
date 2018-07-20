describe('[SMOKE]', () => {
    describe('load conf test', () => {
        it('work', () => {
            expect(() => {
                require('../src/app');
            }).not.toThrow();
        });
    });
});