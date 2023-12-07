import buttonStyle from './button.module.scss';

export default function Button(props: any){

    return (
        <button
        type="button"
        className={buttonStyle['agf-btn']}>
            {props.label}
        </button>
    )
}