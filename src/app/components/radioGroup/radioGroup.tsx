import { useEffect, useState } from "react";
import Radio from "./radio";
import '../component-global.scss';
import radioGroupStyles from './radioGroup.module.scss';

type RadioType = {
    id: string,
    label: string,
    groupName: string,
    value: string,
    checked?: boolean | undefined,
}

export default function RadioGroup(props: any) {
    const defaultValue = 'hsl';
    const groupName = 'color-space';
    const [value, setValue] = useState(defaultValue);

    const handleRadioGroup = (ev: any) => {
        setValue(ev.target.value);
    }

    return (
        <fieldset
            className={`agf-component ${radioGroupStyles['agf-radios']}`}
            onInput={handleRadioGroup}
        >
            <div className={radioGroupStyles['legend']}>Légendaire légende</div>
            <div className={radioGroupStyles['radio-group']} >
            {
                props.radios.map((radio :RadioType) => {
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