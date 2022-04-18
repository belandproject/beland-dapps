import { MiddlewareAPI, Dispatch, AnyAction, Action } from 'redux';
export declare type RootDispatch<A extends Action = AnyAction> = Dispatch<A>;
export declare type RootMiddleware = (store: MiddlewareAPI<any>) => (next: RootDispatch<AnyAction>) => (action: AnyAction) => any;
