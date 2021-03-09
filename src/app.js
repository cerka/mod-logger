const conf = require('mod-config').logger
const Bunyan = require('bunyan')

const logger_defaults = {name:'logger',level:'trace'}

class Logger extends Bunyan {
    constructor () {
        super()        
    }

    static getInstance() {
        if (!this._instance) {
            if (conf) {
                this._instance = Logger.createLogger(conf)
                this._instance.trace('logger configured')
            } else {
                this._instance = Logger.createLogger(logger_defaults)
                this._instance.trace('logger not configured, see https://github.com/trentm/node-bunyan/blob/master/README.md')
            }
            this._instance.log = this._instance.info
        }
        return this._instance
    }
}

module.exports = Logger.getInstance()
