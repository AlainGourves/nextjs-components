'use client';
import '../component-global.scss';
import textFieldStyle from './textfield.module.scss';

export default function TextField(props: any) {
    let labelPosition = undefined;
    let style = undefined;

    if (props.nbLines) {
        // if defined, add an inline custom property to set the height of the texarea
        style = { '--lines': props.nbLines } as React.CSSProperties;
    }

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
                break;
        }
    }
    // readonly
    return (
        <label htmlFor={props.id}
            className={`agf-component ${textFieldStyle['agf-textfield']} ${labelPosition ? labelPosition : null}`}
            style={props.nbLines ? style : undefined}
        >
            <span>{props.label}</span>
            <textarea
                id={props.id}
                disabled={props.disabled}
                readOnly={props.readonly}
                placeholder={props.placeholder ?? props.placeholder}
            >
                {props.value}
            </textarea>
        </label>
    )
}