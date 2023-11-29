
'use client'
import sliderStyles from './slider.module.scss';

export default function Slider(props: any) {

    return (
        <label
            htmlFor={props.id}
            className={`${sliderStyles['slider']}`}
        >
            <input
                type='range'
                role='slider'
                id={props.id}
                aria-disabled={props.disabled}
                min={props.min}
                max={props.max}
                value={props.value}
                onChange={(props.onChange) ? props.onChange : null}
                />
                <output>{props.output}</output>
                <span>{props.label}</span>
        </label>
    )
}