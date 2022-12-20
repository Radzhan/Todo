export interface ResponseInner{
    title: string;
    status: boolean;
    id: string;
}
export interface Response {
    id: ResponseInner;
}