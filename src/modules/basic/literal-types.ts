//let logType: string ='info'
//logType = 'warn'

//let logType: 'info'
//logType = 'warn'
type LogType = 'info' | 'warn' | 'error'


export function logger(type: LogType, message: string) {
    switch (type) {
        case 'info':
            console.info(`Info: ${message}`);
            break;
        case 'warn':
            console.warn(`Warn: ${message}`);
            break; 
        case 'error':
            console.error(`Error: ${message}`);
            break;
    }
}

logger('info', 'O lançamento de Project Hail Mary está confirmado para 2026!');
