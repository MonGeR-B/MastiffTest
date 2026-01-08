const isDevelopment = process.env.NODE_ENV === 'development';

export const logger = {
    /**
     * Development-only logging
     * Logs to console only in development mode
     */
    log: (...args: any[]) => {
        if (isDevelopment) {
            console.log(...args);
        }
    },

    /**
     * Warning logs (development only)
     */
    warn: (...args: any[]) => {
        if (isDevelopment) {
            console.warn(...args);
        }
    },

    /**
     * Error logs (always logged)
     * Errors should always be logged for debugging
     */
    error: (...args: any[]) => {
        console.error(...args);
    },

    /**
     * Info logs (development only)
     */
    info: (...args: any[]) => {
        if (isDevelopment) {
            console.info(...args);
        }
    },

    /**
     * Debug logs (development only)
     */
    debug: (...args: any[]) => {
        if (isDevelopment) {
            console.debug(...args);
        }
    },
};
