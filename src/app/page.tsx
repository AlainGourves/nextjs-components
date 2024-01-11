'use client'
import { useEffect, useState } from 'react'
import styles from './page.module.scss'
import Button from './components/button/button'
import RadioGroup from './components/radioGroup/radioGroup'
import Select from './components/select/select'
import Slider from './components/slider/slider'
import Switch from './components/switch/switch'
import TextField from './components/textfield/textfield'

export default function Home() {
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

  useEffect(() => {
    setSwitchDisabled(!checked1);
  }, [checked1])

  const handleSlider1 = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue1(parseInt(ev.target.value));
  }
  const handleSlider2 = (ev: React.ChangeEvent<HTMLInputElement>) => {
    setSliderValue2(parseInt(ev.target.value));
  }

  const handleBtnClick = (ev: React.MouseEvent<HTMLElement>) => {
    console.log("Hello there!")
  }

  const pos = 'left';

  const options = [
    { value: 'option1', text: 'Option 1' },
    { value: 'option2', text: 'Option 2' },
    { value: 'option3', text: 'Option 3' },
    { value: 'option4', text: 'Option 4' },
  ];
  const selectDefaultValue = 'option2';
  const [selectValue, setSelectValue] = useState(selectDefaultValue);
  const handleSelectChange = (ev: any) => {
    const newVal = ev.target.value;
    setSelectValue(newVal);
  }
  useEffect(() => {
    console.log(`Select value: ${selectValue}`);
  }, [selectValue]);

  const radioGroupName = 'color-space';
  const radioDefaultValue = 'xyz';
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
  const [radioGroupValue, setRadioGroupValue] = useState<string>(radioDefaultValue);

  const handleRadioGroup = (ev: any) => {
    setRadioGroupValue(ev.target.value);
  }

  useEffect(() => {
    console.log(`Color-space: ${radioGroupValue}`)
  }, [radioGroupValue]);

  const textfieldDefaultValue = "C'était à Mégara, faubourg de Carthage, dans les jardins d'Hamilcar."
  const [textfieldValue, setTextfieldValue] = useState(textfieldDefaultValue);
  const handleTextfield = (ev: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTextfieldValue(ev.target.value);
  }

  useEffect(() => {
    console.log(`textField: ${textfieldValue}`)
  }, [textfieldValue]);

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>My Form's components</p>
      </div>

      <section className={styles.section}>
        <div>
          <Button
            text="Button"
            disabled={false}
            onClick={handleBtnClick}
          />
          <Button
            text="Other"
            disabled={false}
            onClick={handleBtnClick}
            classAdd={["small", "outlined"]}
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

          <Switch
            id='4567'
            checked={checked2}
            onChange={handleCheck2}
            label='Disabled Switch'
            labelPosition={pos}
            disabled={switchDisabled}
          />
        </div>
        <div>
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
        </div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus blanditiis fuga culpa!</p>
        <div>
          <div className={styles['slider-container']}>
            <Slider
              id='42515'
              min={0}
              max={200}
              value={sliderValue2}
              onChange={handleSlider2}
              label="Another Slider"
              labelPosition='top'
              isOutput={true}
              disabled={true}
            />
          </div>
        </div>

        <div>
          <Select
            id="mySelect"
            label="Select Menu"
            options={options}
            defaultValue={selectDefaultValue}
            onChange={handleSelectChange}
            disabled={false}
          />

          <Select
            id="mySelectDisabled"
            label="Disabled Select Menu"
            options={options}
            defaultValue={options[0].value}
            onChange={handleSelectChange}
            labelPosition='right'
            disabled={true}
            classAdd={'small'}
          />
        </div>

        <div>
          <TextField
            id="myTextField"
            disabled={false}
            readOnly={false}
            defaultValue={textfieldDefaultValue}
            placeholder='Type here...'
            onChange={handleTextfield}
            label="Type your text"
            labelPosition="right"
            nbLines={8}
          />
        </div>

        <div>
          <RadioGroup
            radios={radios}
            groupName={radioGroupName}
            defaultValue={radioDefaultValue}
            onInput={handleRadioGroup}
            label="Radio Group"
            labelPosition="top"
            disabled={false}
          // classAdd={'small'}
          />
        </div>
      </section>


    </main>
  )
}
