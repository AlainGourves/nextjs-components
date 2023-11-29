'use client'
import switchStyles from './switch.module.scss';

export default function Switch(props: any) {

    return (
        <label
            htmlFor={props.id}
            className={`${switchStyles.switch} ${switchStyles['label-right']}`}
        >
            <span>{props.label}</span>
            <input
                type='checkbox'
                role='switch'
                id={props.id}
                aria-disabled={props.disabled}
                checked={props.checked}
                onChange={(props.onChange) ? props.onChange : null}
            />
        </label>
    )
}