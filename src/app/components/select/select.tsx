'use client'
import '../component-global.scss';
import selectStyles from './select.module.scss';
import { useState, useRef, useEffect } from 'react';

type Option = {
    value: string,
    text: string
}

type SelectProps = {
    id: string,
    label: string,
    options: Option[],
    defaultValue: string,
    onChange(event: any): void;
    disabled?: boolean,
    labelPosition?: 'top' | 'right' | 'bottom' | 'left',
    classAdd?: string | string[] | undefined
}


export default function Select(props: SelectProps) {
    const selectRef = useRef<HTMLSelectElement | null>(null);

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

    let className = `agf-component ${selectStyles['agf-select']} `;
    if (labelPos) className += labelPos;
    if (props.classAdd) {
        className += ' ';
        if (typeof props.classAdd === 'string') {
            className += selectStyles[`agf-select-${props.classAdd}`];
        }
        if (Array.isArray(props.classAdd)) {
            className += props.classAdd.map((cls: string) => selectStyles[`agf-select-${cls}`]).join(' ');
        }
    }

    return (
        <label
            htmlFor={props.id}
            className={className}>
            {props.label && props.label}
            <select
                id={props.id}
                name={props.id}
                ref={selectRef}
                onChange={props.onChange}
                defaultValue={props.defaultValue}
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