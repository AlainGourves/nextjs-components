'use client'
import '../component-global.scss';
import selectStyles from './select.module.scss';
import { useState, useRef, useEffect } from 'react';

type Option = {
    value: string,
    text: string
}

type Props = {
    id: string,
    label: string,
    options: Option[],
    disabled: boolean,
    selected?: number,
}


export default function Select(props: Props) {
    const selectRef = useRef<HTMLSelectElement | null>(null);
    const [selectedVal, setSelectedVal] = useState(0);

    useEffect(() => {
        if (props.selected && props.selected !== 0) {
            setSelectedVal(props.selected)
        };
        //     const sty = window.getComputedStyle(selectRef.current as Element).backgroundImage
        //     console.log('>>>', sty)
    }, [])

    const handleChange = (ev: any) => {
        const newVal = ev.target.value;
        const newIdx = props.options.findIndex((item) => item.value === newVal);
        setSelectedVal(newIdx);
    }

    return (
        <label
            htmlFor={props.id}
            className={`agf-component ${selectStyles['agf-select']}`}>
            {props.label && props.label}
            <select
                id={props.id}
                name={props.id}
                ref={selectRef}
                onChange={handleChange}
                value={props.options[selectedVal]?.value}
                disabled={props.disabled}
            >
                {
                    props.options.map((item: any, idx: any) => {
                        return (
                            <option key={idx} value={props.options[idx].value}>{props.options[idx].text}</option>
                        )
                    })
                }
            </select>
        </label>
    )
}