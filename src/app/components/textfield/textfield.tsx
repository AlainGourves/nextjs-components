'use client';
import '../component-global.scss';
import textFieldStyle from './textfield.module.scss';
import { useRef } from 'react';

type TextFieldProps = {
    id: string,
    label?: string | null,
    value: string | undefined,
    nbLines?: number,
    placeholder?: string | undefined,
    labelPosition?: 'top' | 'right' | 'bottom' | 'left',
    disabled?: boolean | undefined,
    readOnly?: boolean | undefined,
    onChange: React.ChangeEventHandler<HTMLTextAreaElement>,
    reset: React.MouseEventHandler<HTMLButtonElement>,
}

export default function TextField(props: TextFieldProps) {

    const textAreaRef = useRef<HTMLTextAreaElement>(null);

    let style = undefined;
    if (props.nbLines) {
        // if defined, add an inline custom property to set the height of the texarea
        style = { '--lines': props.nbLines } as React.CSSProperties;
    }

    let labelPos: string | undefined = undefined;
    if (props.labelPosition) {
        switch (props.labelPosition) {
            case 'top':
                labelPos = 'label-above';
                break;
            case 'right':
                labelPos = 'label-right';
                break;
            case 'bottom':
                labelPos = 'label-under';
                break;
            default:
                // 'left' is default position for the label
                break;
        }
    }
    let className = `agf-component ${textFieldStyle['agf-textfield']} `;
    if (labelPos) className += labelPos;

    return (
        <label htmlFor={props.id}
            className={className}
            style={props.nbLines ? style : undefined}
        >
            <span>{props.label}</span>
            <div>

                <textarea
                    id={props.id}
                    value={props.value}
                    onChange={props.onChange}
                    disabled={props.disabled}
                    readOnly={props.readOnly}
                    placeholder={props.placeholder ?? props.placeholder}
                    ref={textAreaRef}
                ></textarea>
                {!props.readOnly && (props.value && props.value.length > 0) ?
                    <button
                        className={textFieldStyle.erase}
                        title='Clear text'
                        tabIndex={-1} // button is not focusable
                        onClick={props.reset}
                    ></button>
                    : null}
            </div>
        </label>
    )
}