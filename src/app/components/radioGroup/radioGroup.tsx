import { useState } from "react";
import '../component-global.scss';
import radioGroupStyles from './radioGroup.module.scss';
import Radio from "./radio";
import { RadioType } from "./radio";

type RadioGroupProps= {
    radios: RadioType[],
    defaultValue: string,
    groupName: string,
    onInput(event: React.FormEvent<HTMLFieldSetElement>): void,
    label?: string | null,
    labelPosition?: 'top' | 'right' | 'bottom' | 'left',
    disabled?: boolean | undefined,
    classAdd?: string | string[] | undefined
}

export default function RadioGroup(props: RadioGroupProps) {

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

    let className= `agf-component ${radioGroupStyles['agf-radios']} `;
    if (labelPos) className += labelPos;
    if (props.classAdd) {
        className += ' ';
        if (typeof props.classAdd === 'string') {
            className += radioGroupStyles[`agf-radios-${props.classAdd}`];
        }
        if (Array.isArray(props.classAdd)) {
            className += props.classAdd.map((cls: string) => radioGroupStyles[`agf-radios-${cls}`]).join(' ');
        }
    }

    return (
        <fieldset
            className={className}
            onInput={props.onInput}
            disabled={props.disabled ?? true}
        >
            {props.label ?? (
                <div className={radioGroupStyles['legend']}>{props.label}</div>
            )}
            <div className={radioGroupStyles['radio-group']} >
                {
                    props.radios.map((radio: RadioType) => {
                        return (
                            <Radio
                                key={radio.id}
                                id={radio.id}
                                label={radio.label}
                                value={radio.value}
                                groupName={props.groupName}
                                checked={(radio.value === props.defaultValue) ?? true}
                            />
                        )
                    })
                }
            </div>
        </fieldset >
    )
}