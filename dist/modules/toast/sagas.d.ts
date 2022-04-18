import { ErrorCode } from '@beland/transactions';
export declare function toastSaga(): Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export declare function handleMetaTransactionError(code: ErrorCode): Generator<import("redux-saga/effects").PutEffect<import("typesafe-actions/dist/types").PayloadAction<"Show toast", {
    toast: Omit<import("./types").Toast, "id">;
}>>, void, unknown>;
