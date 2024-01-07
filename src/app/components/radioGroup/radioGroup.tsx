import Radio from "./radio";

const radios = [
    {
        id: 'hsl',
        label: 'HSL',
        groupName: 'color-space',
        value: 'hsl',
    },
    {
        id: 'lch',
        label: 'LDH',
        groupName: 'color-space',
        value: 'lch',
    }
]

export default function RadioGroup(props: any) {


    return (
        <fieldset>
            <legend>Légendaire légende</legend>
            {
                radios.map(radio => {
                    return (
                        <Radio
                            id={radio.id}
                            label={radio.label}
                            value={radio.value}
                            groupName={radio.groupName}
                        />
                    )
                })
            }
        </fieldset>
    )
}