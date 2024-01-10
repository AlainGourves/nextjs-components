'use client';
import '../component-global.scss';
import buttonStyle from './button.module.scss';

type ButtonProps = {
    text: string,
    onClick(event: React.MouseEvent<HTMLButtonElement>): void;
    id?: string,
    disabled?: boolean | undefined,
    classAdd?: string | string[] | undefined
}

export default function Button(props: ButtonProps) {

    let className= `agf-component ${buttonStyle['agf-btn']} `;

    if (props.classAdd) {
        if (typeof props.classAdd === 'string') {
            className += buttonStyle[`agf-btn-${props.classAdd}`];
        }
        if (Array.isArray(props.classAdd)) {
            className += props.classAdd.map((cls: string) => buttonStyle[`agf-btn-${cls}`]).join(' ');
        }
    }

    return (
        <button
            type="button"
            className={className}
            disabled={props.disabled}
            onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}