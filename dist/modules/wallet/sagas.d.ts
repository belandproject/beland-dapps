import { CreateWalletOptions } from './types';
export declare function walletSaga(): Generator<import("redux-saga/effects").ForkEffect<void> | import("redux-saga/effects").AllEffect<import("redux-saga/effects").ForkEffect<never>>, void, unknown>;
export declare function createWalletSaga(options: CreateWalletOptions): typeof walletSaga;
