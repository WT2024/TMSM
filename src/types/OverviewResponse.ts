import os from 'os';
export interface OverviewResponse {
    name: string;
    version: string;
    nowUser: {
        userId: number;
        userName: string;
        userType: string;
        password: string;
    };
    cpus: os.CpuInfo[];
    totalMem: string;
    usedMem: string;
    application: {
        name: string;
        type: string;
        flag: string;
    }[];
};