
'use client'
import sliderStyles from './slider.module.scss';

export default function Slider(props: any) {
    let labelPosition: string|undefined;
    if (props.labelPosition) {
        switch (props.labelPosition) {
            case 'top':
                labelPosition = 'label-above';
                break;
            case 'right':
                labelPosition = 'label-right';
                break;
            case 'bottom':
                labelPosition = 'label-under';
                break;
            default:
                // 'left' is default position for the label
                labelPosition = undefined;
                break;
        }
    }

    return (
        <>
            <label
                htmlFor={props.id}
                className={`${sliderStyles['slider']} ${labelPosition ? sliderStyles[labelPosition]:null}`}
                style={{'--slider-value': `${props.value}`} as any}
            >
                <span>{props.label}</span>
                <input
                    type='range'
                    role='slider'
                    id={props.id}
                    aria-disabled={props.disabled}
                    min={props.min}
                    max={props.max}
                    defaultValue={props.value}
                    onChange={(props.onChange) ? props.onChange : null}
                />
                <output>{props.output}</output>
            </label>
        </>
    )
}