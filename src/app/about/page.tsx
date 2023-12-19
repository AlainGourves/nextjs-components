'use client'
import styles from '../page.module.css'
import Switch from '../components/switch/switch'
import Slider from '../components/slider/slider';
import Button from '../components/button/button';
import { useState } from 'react';
import Select from '../components/select/select';

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

    const handleBtnClick = (ev: any) => {
        console.log("Hello there!", ev.target)
    }

    const pos = 'right';

    const options = [
        { value: 'option1', text: 'Option 1' },
        { value: 'option2', text: 'Option 2' },
        { value: 'option3', text: 'Option 3' },
        { value: 'option4', text: 'Option 4' },
    ];

    return (
        <main className={styles.main}>
            <div>
                <Button
                    text="Clic!"
                    disabled={false}
                    onClick={handleBtnClick}
                />
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
            <div>
                <Switch
                    id='4567'
                    checked={checked}
                    onChange={handleCheck}
                    label='Coche-moi!'
                    labelPosition={pos}
                    disabled={true}
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
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis fuga culpa!</p>
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

            <div>
                <Select
                    id="mySelect"
                    label="Pick an option!"
                    options={options}
                    disabled={false}
                    selected={3}
                />
            </div>
        </main>
    )
}