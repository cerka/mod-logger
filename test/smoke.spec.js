describe('[SMOKE]', () => {
    describe('load conf test', () => {
        it('work', () => {
            let logger
            expect(() => {
                logger = require('../src/app')
                logger.log("test")
            }).not.toThrow()
        })
    })
})