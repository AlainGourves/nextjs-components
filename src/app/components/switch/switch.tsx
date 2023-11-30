'use client'
import switchStyles from './switch.module.scss';

export default function Switch(props: any) {
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
        <label
            htmlFor={props.id}
            className={`${switchStyles.switch} ${labelPosition ? switchStyles[labelPosition]:null}`}
        >
            <span>{props.label}</span>
            <input
                type='checkbox'
                role='switch'
                id={props.id}
                disabled={(props.disabled) ? props.disabled : false}
                aria-disabled={(props.disabled) ? props.disabled : false}
                checked={props.checked}
                onChange={(props.onChange) ? props.onChange : null}
            />
        </label>
    )
}