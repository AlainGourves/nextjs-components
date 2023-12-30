'use client';
import '../component-global.scss';
import buttonStyle from './button.module.scss';

export default function Button(props: any){

    let extraClass: string | undefined = undefined;
    if (props.classAdd) {
        extraClass = `agf-btn-${props.classAdd}`;
    }

    return (
        <button
        type="button"
        className={`
            agf-component
            ${buttonStyle['agf-btn']}
            ${extraClass ? buttonStyle[extraClass] : null}
        `}
        disabled={props.disabled}
        onClick={props.onClick}
        >
            {props.text}
        </button>
    )
}