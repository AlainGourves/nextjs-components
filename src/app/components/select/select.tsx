'use client'
import selectStyles from './select.module.scss';
import { useState, useRef, useEffect } from 'react';

type Props = {
    id: string,
    label: string,
    disabled: boolean,
    selected?: number,
}


export default function Select(props: Props) {
    const selectRef = useRef<HTMLSelectElement | null>(null);
    const [selectedVal, setSelectedVal] = useState(0);

    const list = [
        { value: 'option1', text: 'Option 1' },
        { value: 'option2', text: 'Option 2' },
        { value: 'option3', text: 'Option 3' },
        { value: 'option4', text: 'Option 4' },
    ];

    useEffect(() => {
        if (props.selected && props.selected !== 0) {
            setSelectedVal(props.selected)
        };
        //     const sty = window.getComputedStyle(selectRef.current as Element).backgroundImage
        //     console.log('>>>', sty)
    }, [])

    const handleChange = (ev: any) => {
        const newVal = ev.target.value;
        const newIdx = list.findIndex((item) => item.value === newVal);
        setSelectedVal(newIdx);
    }

    return (
        <label
            htmlFor={props.id}
            className={selectStyles['agf-select']}>
            {props.label && props.label}
            <select
                id={props.id}
                name={props.id}
                ref={selectRef}
                onChange={handleChange}
                value={list[selectedVal]?.value}
                disabled={props.disabled}
            >
                {
                    list.map((item: any, idx: any) => {
                        return (
                            <option key={idx} value={list[idx].value}>{list[idx].text}</option>
                        )
                    })
                }
            </select>
        </label>
    )
}