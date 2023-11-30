'use client'
import styles from '../page.module.css'
import Switch from '../components/switch/switch'
import Slider from '../components/slider/slider';
import { useState, useEffect } from 'react';

export default function About() {
    const [checked, setChecked] = useState(false);
    const [sliderValue, setSliderValue] = useState(12)

    const handleCheck = () => {
        setChecked(!checked)
    };

    const handleSlider = (ev: any) => {
        const newValue = parseInt(ev.target.value);
        ev.target.style.setProperty('--slider-value', newValue);
        setSliderValue(newValue);
    }

    const pos = 'bottom';

    return (
        <main className={styles.main}>
            <div>
                <Switch
                    id='1234'
                    checked={checked}
                    onChange={handleCheck}
                    label='Coche-moi!'
                    labelPosition={pos}
                    />
            </div>
            <div className={styles['slider-container']}>
                <Slider
                    id='3456'
                    min={0}
                    max={100}
                    value={sliderValue}
                    onChange={handleSlider}
                    label="Slide-moi !"
                    labelPosition={pos}
                />
            </div>
        </main>
    )
}