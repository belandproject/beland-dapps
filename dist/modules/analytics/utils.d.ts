/// <reference types="segment-analytics" />
import { AnyAction } from 'redux';
import { AnalyticsAction, ActionType, EventName, GetPayload, TransformPayload } from './types';
export declare const trackedActions: {
    [key: string]: AnalyticsAction;
};
export declare function add(actionType: ActionType, eventName?: EventName, getPayload?: GetPayload): void;
export declare function track(action: AnyAction): void;
export declare function isTrackable(action: AnyAction): boolean;
export declare function getAnalytics(): SegmentAnalytics.AnalyticsJS;
export declare function configure(params: {
    transformPayload?: TransformPayload;
}): void;
