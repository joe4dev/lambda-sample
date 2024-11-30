/* eslint-disable import/no-extraneous-dependencies */
import { Logger } from '@aws-lambda-powertools/logger';

const logger: Logger = new Logger();

module.exports = {
    handler: async () => {
        
    logger.error('Hello Lambda Test');
    }
}
