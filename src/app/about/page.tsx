'use client'
import styles from '../page.module.css'
import Switch from '../components/switch/switch'
import Slider from '../components/slider/slider';
import Button from '../components/button/button';
import { useState, useEffect } from 'react';
import Select from '../components/select/select';
import TextField from '../components/textfield/textfield';

export default function About() {
    const [checked1, setChecked1] = useState(false);
    const [checked2, setChecked2] = useState(false);
    const [switchDisabled, setSwitchDisabled] = useState(true);
    const [sliderValue1, setSliderValue1] = useState(66);
    const [sliderValue2, setSliderValue2] = useState(50);

    const handleCheck1 = () => {
        setChecked1(!checked1);
    };

    const handleCheck2 = () => {
        setChecked2(!checked2)
    };

    useEffect(()=>{
        setSwitchDisabled(!checked1);
    }, [checked1])

    const handleSlider1 = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue1(parseInt(ev.target.value));
    }
    const handleSlider2 = (ev: React.ChangeEvent<HTMLInputElement>) => {
        setSliderValue2(parseInt(ev.target.value));
    }

    const handleBtnClick = (ev: React.MouseEvent<HTMLElement>) => {
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
                    text="Button"
                    disabled={false}
                    onClick={handleBtnClick}
                />
            </div>
            <div>
                <Switch
                    id='1234'
                    checked={checked1}
                    onChange={handleCheck1}
                    label='Switch'
                    labelPosition={pos}
                />
            </div>
            <div>
                <Switch
                    id='4567'
                    checked={checked2}
                    onChange={handleCheck2}
                    label='Disabled Switch'
                    labelPosition={pos}
                    disabled={switchDisabled}
                />
            </div>
            <div className={styles['slider-container']}>
                <Slider
                    id='3456'
                    min={33}
                    max={288}
                    value={sliderValue1}
                    onChange={handleSlider1}
                    label="Slider"
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
                    label="Another Slider"
                    labelPosition='bottom'
                    isOutput={true}
                    disabled={true}
                />
            </div>

            <div>
                <Select
                    id="mySelect"
                    label="Select Menu"
                    options={options}
                    disabled={false}
                    selected={3}
                />
            </div>

            <div>
                <Select
                    id="mySelectDisabled"
                    label="Disabled Select Menu"
                    options={options}
                    disabled={true}
                    selected={0}
                />
            </div>

            <div>
                <TextField
                    id="myTextField"
                    disabled={false}
                    readOnly={false}
                    label="Type your text"
                    labelPosition="right"
                />
            </div>
        </main>
    )
}