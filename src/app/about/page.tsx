'use client'
import styles from '../page.module.css'
import Switch from '../components/switch/switch'
import Slider from '../components/slider/slider';
import { useState } from 'react';

export default function About() {
    const [checked, setChecked] = useState(false);
    const [sliderValue, setSliderValue] = useState<number>()

    const handleCheck = () => {
        setChecked(!checked)
    };

    const handleSlider = (ev: any) => {
        setSliderValue(parseInt(ev.target.value));
    }

    return (
        <main className={styles.main}>
            <div>
                <Switch
                    id='1234'
                    label='Coche-moi!'
                    checked={checked}
                    disabled={false}
                    onChange={handleCheck}
                />
            </div>
            <div>
                <Slider
                    id='3456'
                    min={0}
                    max={100}
                    value={92}
                    onChange={handleSlider}
                />
            </div>
        </main>
    )
}