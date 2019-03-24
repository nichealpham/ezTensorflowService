import * as express from 'express';
export declare class SandraCore {
    private _routeCounter;
    private server;
    private serverConfig;
    constructor(config: IServerConfig);
    private createServer;
    applyMiddleware(middleware: express.RequestHandler): void;
    applyRoutes(routes: IServerRoute[]): void;
    startListening(): Promise<boolean>;
    getServerConfig(): IServerConfig;
}
export interface IServerConfig {
    apiRoot: string;
    hostName: string;
    port: number;
    swagger: {
        url: string;
        enableUI: boolean;
        spec: any;
    };
    remoting: {
        cors: {
            origin: string | string[];
            optionsSuccessStatus: number;
        };
        json: {
            strict: boolean;
            limit: string;
        };
        urlencoded: {
            extended: boolean;
            limit: string;
        };
        logger: {
            logFilePath: string;
            timestampFormat: string;
        };
        rest: {
            errorHandler: {
                fieldName: string;
                writeLog: boolean;
            };
            successHandler: {
                fieldName: string;
                writeLog: boolean;
            };
            convertNullToError: boolean;
        };
    };
}
export interface IServerRoute {
    method: string;
    url: string;
    validators: Function[];
    controller: Function;
}