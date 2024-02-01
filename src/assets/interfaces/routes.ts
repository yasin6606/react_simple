export interface RoutesInterface {
    path: string;
    element: any;
    children?: RoutesInterface[];
    redirect?: string;
    caseSensitive?: boolean;
    needAuthenticating?: boolean;
}