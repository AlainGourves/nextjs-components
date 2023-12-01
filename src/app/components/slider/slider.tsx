
'use client'
import sliderStyles from './slider.module.scss';

interface Props {
    id: string,
    value: number,
    min: number,
    max: number,
    label?: string | null,
    labelPosition?: 'top' | 'right' | 'bottom' | 'left',
    isOutput: boolean,
    onChange: React.ChangeEventHandler<HTMLInputElement>
}

export default function Slider({ id, value, min, max, label, labelPosition, isOutput = false, onChange }: Props) {

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
                labelPos = undefined;
                break;
        }
    }

    // "normamize" the slider's value between 0 & 100
    const lerp = (val: number) => {
        return (100 * (val - min)) / (max - min);
    }

    return (
        <>
            <label
                htmlFor={id}
                className={`${sliderStyles['slider']} ${labelPos ? sliderStyles[labelPos] : null}`}
                style={{ '--slider-value': `${lerp(value)}` } as any}
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
                        onChange={onChange}
                    />
                    {isOutput ? <output>{value}</output> : null}
                </div>
            </label>
        </>
    )
}