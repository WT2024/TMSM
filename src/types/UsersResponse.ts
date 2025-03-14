export interface User {
    userId: number;
    userName: string;
    userType: string;
    password: string;
}

export interface UsersResponse {
    total: number;
    users: User[];
}