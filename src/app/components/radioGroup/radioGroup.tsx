import { useEffect, useState } from "react";
import Radio from "./radio";
import '../component-global.scss';
import radioGroupStyles from './radioGroup.module.scss';

const radios = [
    {
        id: 'hsl',
        label: 'HSL',
        value: 'hsl',
    },
    {
        id: 'lch',
        label: 'LCH',
        value: 'lch'
    },
    {
        id: 'oklab',
        label: 'OKLAB',
        value: 'oklab'
    },
    {
        id: 'xyz',
        label: 'XYZ',
        value: 'xyz'
    }
]

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
                radios.map(radio => {
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