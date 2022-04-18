export declare type IntercomWindow = Window & {
    Intercom?: Function;
    intercomSettings: IntercomSettings;
};
export declare type IntercomSettings = Partial<{
    alignment: 'left' | 'right';
    horizontal_padding: number;
    vertical_padding: number;
}>;
export declare type DefaultProps = {
    data: Record<string, any>;
    settings: IntercomSettings;
};
export declare type Props = DefaultProps & {
    appId: string;
};
