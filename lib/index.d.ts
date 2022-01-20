import { Component } from "react";
declare type EquationEditorProps = {
    onChange(latex: string): void;
    value: string;
    spaceBehavesLikeTab?: boolean;
    autoCommands: string;
    autoOperatorNames: string;
    onEnter?(): void;
};
/**
 * @typedef {EquationEditorProps} props
 * @prop {Function} onChange Triggered when content of the equation editor changes
 * @prop {string} value Content of the equation handler
 * @prop {boolean}[false] spaceBehavesLikeTab Whether spacebar should simulate tab behavior
 * @prop {string} autoCommands List of commands for which you only have to type the name of the
 * command with a \ in front of it. Examples: pi theta rho sum
 * @prop {string} autoOperatorNames List of operators for which you only have to type the name of the
 * operator with a \ in front of it. Examples: sin cos tan
 * @prop {Function} onEnter Triggered when enter is pressed in the equation editor
 * @extends {Component<EquationEditorProps>}
 */
declare class EquationEditor extends Component<EquationEditorProps> {
    element: any;
    mathField: any;
    ignoreEditEvents: number;
    constructor(props: EquationEditorProps);
    componentDidMount(): void;
    render(): JSX.Element;
}
export default EquationEditor;
