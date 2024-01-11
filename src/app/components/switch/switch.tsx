'use client'
import '../component-global.scss';
import switchStyles from './switch.module.scss';

type SwitchProps={
    id: string,
    label: string,
    onChange: React.ChangeEventHandler<HTMLInputElement>
    checked?: boolean | undefined,
    labelPosition?: 'top' | 'right' | 'bottom' | 'left',
    disabled?: boolean | undefined,
}

export default function Switch(props: SwitchProps) {

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

    let className = `agf-component ${switchStyles['agf-switch']} `;
    if (labelPos) className += labelPos;

    return (
        <label
            htmlFor={props.id}
            className={className}
        >
            <span>{props.label}</span>
            <input
                type='checkbox'
                role='switch'
                id={props.id}
                disabled={(props.disabled) ? props.disabled : undefined}
                aria-disabled={(props.disabled) ? props.disabled : undefined}
                checked={props.checked}
                onChange={props.onChange}
            />
        </label>
    )
}