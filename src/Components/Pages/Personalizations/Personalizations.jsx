import { Label, LabelBox, SVG, Input, CustomCheckBox, LogosForm, FittingAndSizeForm, Reset } from '../../';
import React, { useState, useEffect } from 'react';


const Personalizations = () => {
    const [selectedLabel, setSelectedLabel] = useState(null);
    const [isBoxOpen, setIsBoxOpen] = useState(false);
    const [isRiderNameDisabled, setRiderNameDisabled] = useState(false);
    const [isSuitNumberDisabled, setSuitNumberDisabled] = useState(false);
    const [riderName, setRiderNameValue] = useState('');
    const [suitNumber, setSuitNumberValue] = useState('');
    const [selectedOptions, setSelectedOptions] = useState({});
    const [totalPrice, setTotalPrice] = useState(500);
    const [hideType, setHideType] = useState('hidden');
    const [openLogos, setOpenLogos] = useState(false)
    const [fittingandSize, setFittingandSize] = useState(false)

    const extractPrice = (option) => {
        const match = option.match(/\$(\d+\.\d{2})/);
        return match ? parseFloat(match[1]) : 0;
    };

    const handleRiderName = () => {
        setRiderNameDisabled(prev => !prev);
    };

    const handleSuitNumber = () => {
        setSuitNumberDisabled(prev => !prev);
    };

    const handleRiderNameChange = (e) => {
        setRiderNameValue(e.target.value);
    };

    const handleSuitNumberChange = (e) => {
        setSuitNumberValue(e.target.value);
    };

    let inputStyle = ['bg-primary', 'text-light', 'p-4', 'rounded', 'h-10', 'block', 'border-0', 'outline-0', 'w-full', 'focus:border focus:border-light', 'focus:placeholder-light'].join(' ');

    // Handle input change for checkboxes
    const handleInputChange = (label, option) => {
        const isSelected = selectedOptions[label]?.includes(option);
        setSelectedOptions((prev) => {
            const updatedOptions = { ...prev };
            if (isSelected) {
                updatedOptions[label] = updatedOptions[label].filter((opt) => opt !== option);
            } else {
                updatedOptions[label] = [...(updatedOptions[label] || []), option];
            }

            const priceDifference = extractPrice(option);
            setTotalPrice((prevPrice) => prevPrice + (isSelected ? -priceDifference : priceDifference));
            return updatedOptions;
        });
    };

    const labelData = {
        'Branding Type': [
            'Printed (+$150.00)',
            'Leather Patch (+$99.00)',
        ],
        'Name & Number': [
            <Input
                label="Rider's Name"
                style={inputStyle}
                id="RiderName"
                type="text"
                isDisabled={isRiderNameDisabled}
                value={isRiderNameDisabled ? 'Do Not Print Name' : riderName}
                onChange={handleRiderNameChange}
            />,
            <CustomCheckBox onClick={handleRiderName} id='RiderNameCheck' />,

            <Input
                label="Suit Number"
                style={inputStyle}
                id="SuitNumber"
                type="text"
                isDisabled={isSuitNumberDisabled}
                value={isSuitNumberDisabled ? 'Do Not Print Number' : suitNumber}
                onChange={handleSuitNumberChange}
            />,
            <CustomCheckBox onClick={handleSuitNumber} id='SuitNumberCheck' />,
        ],
    };

    const handleLabelClick = (label) => {
        if (selectedLabel === label && isBoxOpen) {
            setIsBoxOpen(false);
            setSelectedLabel(null);
        } else {
            setSelectedLabel(label);
            setIsBoxOpen(true);
            setOpenLogos(false)
            setFittingandSize(false)
        }
    };

    useEffect(() => {
        if (selectedLabel === 'Name & Number' || selectedLabel === 'Logos') {
            setHideType('hidden');
        } else {
            setHideType('block');
        }
    }, [selectedLabel]);

    const handleOpenLogos = () => {
        setOpenLogos((prev) => !prev);
        setSelectedLabel(null)
        setFittingandSize(false)
    };

    const handleOpenFittingandSize = () => {
        setFittingandSize((prev) => !prev);
        setSelectedLabel(null)
        setOpenLogos(false);
    };

    return (
        <div className='md:h-screen w-full bg-primary h-full pb-10 md:pb-0'>
            <div className="card-holder flex items-start justify-between w-full flex-col md:flex-row">
                <div className="w-full md:w-1/2">
                    <SVG />
                </div>

                <div className="h-full flex flex-col justify-center items-center md:pr-5 w-full md:flex-row md:w-1/2 md:justify-end md:items-end relative md:top-12">
                    <form action="">
                        <div className="inputFields md:w-60 h-fit pb-4 relative md:right-20 w-full">
                            {Object.keys(labelData).map((label, index) => (
                                <Label
                                    key={index}
                                    title={label}
                                    onClick={() => handleLabelClick(label)}
                                    label={selectedLabel}
                                />
                            ))}

                            <div
                                onClick={handleOpenLogos}
                                className={`w-full h-11 text-light mt-2 flex items-center pl-10 rounded-sm z-10  cursor-pointer ${!openLogos ? 'bg-secondary' : 'bg-primary border border-secondary'}`}
                            >
                                LOGOS
                            </div>
                            {openLogos && <LogosForm />}
                            <div
                                onClick={handleOpenFittingandSize}
                                className={`w-full h-11 text-light mt-2 flex items-center pl-10 rounded-sm z-10  cursor-pointer ${!fittingandSize ? 'bg-secondary' : 'bg-primary border border-secondary'}`}
                            >
                                FITTING & SIZE
                            </div>
                            {fittingandSize && <FittingAndSizeForm />}

                            <div className="w-full h-11 text-light mt-2 flex items-center pl-10 rounded-sm z-10 bg-secondary">
                                TOTAL PRICE: ${totalPrice.toFixed(2)}
                            </div>

                            {selectedLabel && (
                                <LabelBox
                                    inputs={labelData[selectedLabel]}
                                    isOpen={isBoxOpen}
                                    label={selectedLabel}
                                    type='checkbox'
                                    onInputChange={(option) => handleInputChange(selectedLabel, option)}
                                    selectedOptions={selectedOptions[selectedLabel] || []}
                                    typeDisplay={hideType}
                                />
                            )}
                        </div>
                    </form>

                    <div className="relative hidden md:block">
                        <Reset positionX='right-36' positionY='top-0' />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Personalizations;





