import { IntercomSettings } from './Intercom.types';
export declare class IntercomWidget {
    private _appId;
    private _settings;
    client: (method: string, arg?: any) => void;
    static instance: IntercomWidget;
    private constructor();
    static getInstance(): IntercomWidget;
    set appId(id: string);
    get appId(): string;
    set settings(settings: IntercomSettings);
    get settings(): IntercomSettings;
    init(appId: string, settings?: IntercomSettings): void;
    inject(): Promise<void>;
    render(data?: Record<string, any>): void;
    showNewMessage(text: string): void;
    unmount(): void;
    isInjected(): boolean;
}
