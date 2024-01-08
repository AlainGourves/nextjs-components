'use client'
import RadioGroup from '../components/radioGroup/radioGroup';
import styles from '../page.module.css'

export default function RadioTest() {

    const radios = [
        {
            id: 'hsl',
            label: 'HSL',
            value: 'hsl',
        },
        {
            id: 'lch',
            label: 'LCH',
            value: 'lch'
        },
        {
            id: 'oklab',
            label: 'OKLAB',
            value: 'oklab'
        },
        {
            id: 'xyz',
            label: 'XYZ',
            value: 'xyz'
        }
    ]

    return (
        <main className={styles.main}>
            <div>
                <RadioGroup radios={radios} />
            </div>
        </main>
    )
}