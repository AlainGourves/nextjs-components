type RadioProps = {
    id: string,
    label: string,
    groupName: string,
    value: string,
}

export default function Radio(props:RadioProps) {

    return (
        <label htmlFor={props.id}>{props.label}
        <input type="radio" name={props.groupName} id={props.id} value={props.value} />
      </label>
    )
}