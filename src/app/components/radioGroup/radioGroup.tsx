import { useState } from "react";
import '../component-global.scss';
import radioGroupStyles from './radioGroup.module.scss';
import Radio from "./radio";
import { RadioType } from "./radio";

export default function RadioGroup(props: any) {
    const defaultValue = 'hsl';
    const groupName = 'color-space';
    let labelPos: string | undefined = undefined;
    const [value, setValue] = useState(defaultValue);

    const handleRadioGroup = (ev: any) => {
        setValue(ev.target.value);
    }

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

    return (
        <fieldset
            className={`agf-component
                ${radioGroupStyles['agf-radios']}
                ${(labelPos) ?? labelPos}
                ${(props.small) ? radioGroupStyles['small']:''} `}
            onInput={handleRadioGroup}
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
                                groupName={groupName}
                                checked={(radio.value === value) ?? true}
                            />
                        )
                    })
                }
            </div>
        </fieldset >
    )
}