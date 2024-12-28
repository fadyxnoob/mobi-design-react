import { SVG, Label, LabelBox, Reset } from '../../';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { DevTool } from '@hookform/devtools';

const Options = () => {

    const [selectedLabel, setSelectedLabel] = useState(null);
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [selectedOptions, setSelectedOptions] = useState({});
    const [totalPrice, setTotalPrice] = useState(500);
    const form = useForm();
    const { control } = form;


    const labelData = {
        'LEATHER': [
            'Tip-Shine Leather',
            'Monaco Leather ($99.00)',
            'Kangree Leather ($400.00)',
            'Cow Hide Leather'
        ],
        'STRETCH': [
            '510 gsm ($50.00)',
            '390 gsm ($50.00)'
        ],
        'EXTERNAL PROTECTION': [
            'Carbon Reinforced Metal Armor',
            'TPU Reinforced Titanium Armor',
            'TPU Reinforced Metal Armor',
            'Carbon Reinforced Titanium Armor',
            'No External Protection'
        ],
        'HUMP': [
            'Hydro Hump ($50.00)',
            'Vantilated Hump ($35.00)',
            'Standard Hump',
            'No Hump'
        ],
        'PERFORATION': [
            'Full Perforated ($20.00)',
            'Perforated Front',
            'Perforated Chest',
            'No Perforation'
        ],
        'MEATCHING GEAR': [
            'Matching Boots ($200.00)',
            'Matching Gloves ($100.00)'
        ],
        'ADDITIONAL FEATURES': [
            'Cable or House Pass Through Wrist Cuff',
            'Cable or House Pass Through Hump',
            'Removable Mesh Lining',
            'Silicon Grip Bands of Base of Leg',
            'Chest Protector Attachment',
            'Left Side inner Mesh Chest Pocket',
            'Bicep, Hips and Tail bone padding',
            'Rider nameplate on inside of suit',
            'Leg over boot "Boot Out"'
        ],
    };

    const handleLabelClick = (label) => {
        if (selectedLabel === label && isBoxOpen) {
            setIsBoxOpen(false);
            setSelectedLabel(null);
        } else {
            setSelectedLabel(label);
            setIsBoxOpen(true);
        }
    };

    // Helper function to extract price from the string, if present
    const extractPrice = (option) => {
        const match = option.match(/\$(\d+\.\d{2})/);
        return match ? parseFloat(match[1]) : 0;
    };

    // Handle input change for checkboxes
    const handleInputChange = (label, option) => {
        const isSelected = selectedOptions[label]?.includes(option);
        setSelectedOptions(
            (prev) => {
                const updatedOptions = { ...prev };
                if (isSelected) {
                    // Remove the selected option if already selected
                    updatedOptions[label] = updatedOptions[label].filter((opt) => opt !== option);
                } else {
                    // Add the option if it's not already selected
                    updatedOptions[label] = [...(updatedOptions[label] || []), option];
                }

                // Update the total price dynamically
                const priceDifference = extractPrice(option);
                setTotalPrice((prevPrice) => prevPrice + (isSelected ? -priceDifference : priceDifference));
                return updatedOptions;

            }
        );
    };

  
    return (
        <div className='md:h-screen w-full bg-primary h-full pb-10'>
            <div className="card-holder flex items-start justify-between w-full flex-col md:flex-row">
                <div className='w-full md:w-1/2'>
                    <SVG />
                </div>

                <div className="h-full flex flex-col justify-center items-center pr-5 w-full md:flex-row md:w-1/2 md:justify-end md:items-end relative top-12">
                    <form action="">
                        <div className="inputFields w-60 h-fit pb-4 relative md:right-20 right-0 ">
                            {Object.keys(labelData).map((label, index) => (
                                <Label
                                    key={index}
                                    title={label}
                                    onClick={() => handleLabelClick(label)}
                                    label={selectedLabel}
                                />
                            ))}

                            <div className="w-full h-11  text-light mt-2 flex items-center pl-10 rounded-sm z-10 bg-secondary ">
                                TOTAL PRICE: $ {totalPrice.toFixed(2)}
                            </div>

                            {selectedLabel && (
                                <LabelBox
                                    inputs={labelData[selectedLabel]}
                                    isOpen={isBoxOpen}
                                    label={selectedLabel}
                                    type='checkbox'
                                    onInputChange={(option) => handleInputChange(selectedLabel, option)}
                                    selectedOptions={selectedOptions[selectedLabel] || []}
                                />
                            )}
                        </div>
                    </form>
                    <DevTool control={control} />
                    <div className="relative hidden md:block">
                        <Reset positionX='right-36' positionY='top-0' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Options;
