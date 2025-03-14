import os from 'os';
import { User } from './UsersResponse';
export interface OverviewResponse {
    name: string;
    version: string;
    nowUser: User;
    cpus: os.CpuInfo[];
    totalMem: string;
    usedMem: string;
};