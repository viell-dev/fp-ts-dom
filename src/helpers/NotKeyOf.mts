export type NotKeyOf<T> = string extends keyof T ? never : string;
