export declare function tokenizeCommand(command: string): {
    tokens: {
        startColumn: number;
        endColumn: number;
        word: string;
    }[];
};
export declare function tokenizeTargetSelector(targetSelector: string, wordOffset?: number): {
    tokens: {
        startColumn: number;
        endColumn: number;
        word: string;
    }[];
};
