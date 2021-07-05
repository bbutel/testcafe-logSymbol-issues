import logSymbols from 'log-symbols'

export type LogTableInfo = {
    [key: string]: string
}
interface Logger {
    logInfo(message: string): void
    logTableInfo(object: LogTableInfo | LogTableInfo[]): void
    logsuccess(message: string): void
    logError(message: string): void
    logWarning(message: string): void
}

class logSymbolsLogger implements Logger {
    logInfo(message: string): void {
        console.log(logSymbols.info, message)
    }
    logTableInfo(object: LogTableInfo | LogTableInfo[]): void {
        // eslint-disable-next-line no-console
        console.table(object)
    }
    logsuccess(message: string): void {
        console.log(logSymbols.success, message)
    }
    logError(message: string): void {
        console.log(logSymbols.error, message)
    }
    logWarning(message: string): void {
        console.log(logSymbols.warning, message)
    }
}

export const myLogger = new logSymbolsLogger()
