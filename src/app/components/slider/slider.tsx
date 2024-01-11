
'use client'
import '../component-global.scss';
import sliderStyles from './slider.module.scss';

type SliderProps = {
    id: string,
    value: number,
    min: number,
    max: number,
    label?: string | null,
    labelPosition?: 'top' | 'right' | 'bottom' | 'left',
    isOutput?: boolean | undefined,
    disabled?: boolean | undefined,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Slider({ id, value, min, max, label, labelPosition, isOutput = undefined, disabled=undefined, onChange }: SliderProps) {

    let labelPos: string | undefined = undefined;
    if (labelPosition) {
        switch (labelPosition) {
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

    let className = `agf-component ${sliderStyles['agf-slider']} `;
    if (labelPos) className += labelPos;

    // "normamize" the slider's value between 0 & 100
    const lerp = (val: number) => {
        return (100 * (val - min)) / (max - min);
    }

    return (
        <>
            <label
                htmlFor={id}
                className={className}
                style={{ '--slider-value': `${lerp(value)}` } as React.CSSProperties}
            >
                <span>{label}</span>
                <div>
                    <input
                        type='range'
                        role='slider'
                        id={id}
                        min={min}
                        max={max}
                        defaultValue={value}
                        disabled={disabled}
                        onChange={onChange}
                    />
                    {isOutput ? <output>{value}</output> : null}
                </div>
            </label>
        </>
    )
}