declare type CreateProfileSagaOptions = {
    peerUrl: string;
};
export declare function createProfileSaga({ peerUrl }: CreateProfileSagaOptions): () => Generator<import("redux-saga/effects").ForkEffect<never>, void, unknown>;
export {};
