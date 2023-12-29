'use client';
import '../component-global.scss';
import textFieldStyle from './textfield.module.scss';

export default function TextField(props: any) {
    let labelPosition;
    if (props.labelPosition) {
        switch (props.labelPosition) {
            case 'top':
                labelPosition = 'label-above';
                break;
            case 'right':
                labelPosition = 'label-right';
                break;
            case 'bottom':
                labelPosition = 'label-under';
                break;
            default:
                // 'left' is default position for the label
                labelPosition = undefined;
                break;
        }
    }
    // readonly
    return (
        <label htmlFor={props.id}
            className={`agf-component ${textFieldStyle['agf-textfield']} ${labelPosition ? labelPosition:null}`}
        >
            <span>{props.label}</span>
            <textarea
                id={props.id}
                disabled={props.disabled}
                readOnly={props.readonly}
            >
                {props.value}
            </textarea>
        </label>
    )
}