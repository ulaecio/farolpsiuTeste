import { sales } from '../types/sales';

export type salePage =  {
    content?: sales[];
    empty?: boolean;
    first: boolean;
    last: boolean;
    number: number;
    numberOfElements?: number;
    totalElements: number;
    totalPages: number;
    size?: number;
}