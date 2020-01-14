export interface ITransitions {
    IN: boolean;
    OUT: boolean;
}

export interface IDirections {
    TOP: string;
    RIGHT: string;
    BOTTOM: string;
    LEFT: string;
}

export interface IPanelConfig {
    hasOverlay?: boolean;
    headerContainerClass?: string;
    bodyContainerClass?: string;
}

export const DEFAULTCONFIG: IPanelConfig = {
    hasOverlay: true
}

export const TRANSITIONS: ITransitions = {
    IN: true,
    OUT: false
}

export const DIRECTIONS: IDirections = {
    TOP: '@@PANEL_TOP',
    RIGHT: '@@PANEL_RIGHT',
    BOTTOM: '@@PANEL_BOTTOM',
    LEFT: '@@PANEL_LEFT'
}
