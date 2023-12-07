'use client'
import styles from '../page.module.css'
import Switch from '../components/switch/switch'
import Slider from '../components/slider/slider';
import Button from '../components/button/button';
import { useState } from 'react';

export default function About() {
    const [checked, setChecked] = useState(false);
    const [sliderValue1, setSliderValue1] = useState(66);
    const [sliderValue2, setSliderValue2] = useState(50);

    const handleCheck = () => {
        setChecked(!checked)
    };

    const handleSlider1 = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue1(parseInt(ev.target.value));
    }
    const handleSlider2 = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue2(parseInt(ev.target.value));
    }

    const pos = 'right';

    return (
        <main className={styles.main}>
            <div>
                <Button label="Clic!" />
            </div>
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
                    min={33}
                    max={288}
                    value={sliderValue1}
                    onChange={handleSlider1}
                    label="Slide-moi !"
                    labelPosition={pos}
                    isOutput={true}
                />
            </div>
            <div className={styles['slider-container']}>
                <Slider
                    id='42515'
                    min={0}
                    max={200}
                    value={sliderValue2}
                    onChange={handleSlider2}
                    label="Encore !"
                    labelPosition='bottom'
                    isOutput={true}
                />
            </div>
        </main>
    )
}