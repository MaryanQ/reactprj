export interface User {
    id?: number;
    name: string;
    email: string;
    isActive: boolean;
}
export declare const users: User[];
export declare function getNextId(): number;
export declare function addUser(user: User): void;
