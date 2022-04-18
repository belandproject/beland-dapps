/// <reference types="segment-analytics" />
import { AnyAction } from 'redux';
export interface AnalyticsWindow extends Window {
    analytics: SegmentAnalytics.AnalyticsJS;
}
export declare type ActionType = AnyAction['type'];
export declare type EventName = string | ((action: AnyAction) => string);
export declare type GetPayload = (action: AnyAction) => {
    [key: string]: any;
} | string;
export declare type TrackPayload = string | undefined | Record<string, any>;
export declare type TransformPayload = (payload: TrackPayload) => TrackPayload;
export interface AnalyticsAction {
    actionType: ActionType;
    eventName?: EventName;
    getPayload?: GetPayload;
}
