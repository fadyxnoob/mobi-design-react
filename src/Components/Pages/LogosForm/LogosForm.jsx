import React, { useState } from 'react';
import {CustomRadioInput} from '../../';
import { FiX } from 'react-icons/fi';
import { FaDeleteLeft } from "react-icons/fa6";

const LogosForm = () => {
    const [numberOfInputsRight, setNumberOfInputsRight] = useState(null);
    const [numberOfInputsLeft, setNumberOfInputsLeft] = useState(null);
    const [numberOfInputsUpperArmRight, setUpperArmRight] = useState(null);
    const [numberOfInputsUpperArmLeft, setUpperArmLeft] = useState(null);
    const [numberOfForeArmRight, setNumberOfForeArmRight] = useState(null)
    const [numberOfForeArmLeft, setNumberOfForeArmLeft] = useState(null)
    const [numberOfRightThigh, setNumberOfRightThigh] = useState(null)
    const [numberOfLeftThigh, setNumberOfLeftThigh] = useState(null)
    const [numberOfRightShin, setNumberOfRightShin] = useState(null)
    const [numberOfLeftShin, setNumberOfLeftShin] = useState(null)
    const [numberOfFront, setNumberOfFront] = useState(null)
    const [numberOfHump, setNumberOfHump] = useState(null)
    const [numberOfBack, setNumberOfBack] = useState(null)
    const [numberOfLowerBack, setNumberOfLowerBack] = useState(null)

    const [fileNamesUpperArmRight, setNamesUpperArmRight] = useState({});
    const [fileNamesUpperArmLeft, setNamesUpperArmLeft] = useState({});
    const [fileNamesRight, setFileNamesRight] = useState({});
    const [fileNamesLeft, setFileNamesLeft] = useState({});
    const [fileNamesForeArmRight, setFileNamesForeArmRight] = useState({})
    const [fileNamesForeArmLeft, setFileNamesForeArmLeft] = useState({})
    const [fileNamesOfRightThigh, setFileNamesOfRightThigh] = useState({})
    const [fileNamesOfLeftThigh, setFileNamesOfLeftThigh] = useState({})
    const [fileNamesOfRightShin, setFileNamesOfRightShin] = useState({})
    const [fileNamesOfLeftShin, setFileNamesOfLeftShin] = useState({})
    const [fileNamesOfFront, setFileNamesOfFront] = useState({})
    const [fileNamesOfHump, setFileNamesOfHump] = useState({})
    const [fileNamesOfBack, setFileNamesOfBack] = useState({})
    const [fileNamesOfLowerBack, setFileNamesOfLowerBack] = useState({})


    // Open the inputs files by Requires
    const handleRadioChange = (e) => {
        const { name, value } = e.target;
        const inputValue = parseInt(value);

        if (name === 'collarBoneRight') {
            setNumberOfInputsRight(inputValue);
        } else if (name === 'collarBoneLeft') {
            setNumberOfInputsLeft(inputValue);
        } else if (name === 'upperArmRight') {
            setUpperArmRight(inputValue);
        } else if (name === 'upperArmLeft') {
            setUpperArmLeft(inputValue);
        } else if (name === 'foreArmRight') {
            setNumberOfForeArmRight(inputValue);
        } else if (name === 'foreArmLeft') {
            setNumberOfForeArmLeft(inputValue);
        } else if (name === 'rightThigh') {
            setNumberOfRightThigh(inputValue);
        } else if (name === 'leftThigh') {
            setNumberOfLeftThigh(inputValue);
        } else if (name === 'rightShin') {
            setNumberOfRightShin(inputValue);
        } else if (name === 'leftShin') {
            setNumberOfLeftShin(inputValue);
        } else if (name === 'frontLogos') {
            setNumberOfFront(inputValue);
        } else if (name === 'hump') {
            setNumberOfHump(inputValue);
        } else if (name === 'back') {
            setNumberOfBack(inputValue);
        } else if (name === 'lowerBack') {
            setNumberOfLowerBack(inputValue);
        }
    };


    // Select uploaded sinlge file 
    const handleFileChange = (e, index, type) => {
        const file = e.target.files[0];

        if (type === 'right') {
            setFileNamesRight((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'left') {
            setFileNamesLeft((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'upperArmRight') {
            setNamesUpperArmRight((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'upperArmLeft') {
            setNamesUpperArmLeft((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'foreArmRight') {
            setFileNamesForeArmRight((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'foreArmLeft') {
            setFileNamesForeArmLeft((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'rightThigh') {
            setFileNamesOfRightThigh((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'leftThigh') {
            setFileNamesOfLeftThigh((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'rightShin') {
            setFileNamesOfRightShin((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'leftShin') {
            setFileNamesOfLeftShin((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'frontLogos') {
            setFileNamesOfFront((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'hump') {
            setFileNamesOfHump((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'back') {
            setFileNamesOfBack((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        } else if (type === 'lowerBack') {
            setFileNamesOfLowerBack((prev) => ({
                ...prev,
                [index]: file ? file.name : 'No file chosen'
            }));
        }
    };

    // remove single file from input 
    const handleRemoveFile = (idx, type) => {
        if (type === 'right') {
            setFileNamesRight((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'left') {
            setFileNamesLeft((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'upperArmRight') {
            setNamesUpperArmRight((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'upperArmLeft') {
            setNamesUpperArmLeft((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'foreArmRight') {
            setFileNamesForeArmRight((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'foreArmLeft') {
            setFileNamesForeArmLeft((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'rightThigh') {
            setFileNamesOfRightThigh((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'leftThigh') {
            setFileNamesOfLeftThigh((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'rightShin') {
            setFileNamesOfRightShin((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'leftShin') {
            setFileNamesOfLeftShin((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'frontLogos') {
            setFileNamesOfFront((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'hump') {
            setFileNamesOfHump((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'back') {
            setFileNamesOfBack((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        } else if (type === 'lowerBack') {
            setFileNamesOfLowerBack((prevFiles) => {
                const updatedFiles = { ...prevFiles };
                delete updatedFiles[idx];
                return updatedFiles;
            });
        }
    };

    const renderFileInputs = (numberOfInputs, fileNames, type) => {
        if (numberOfInputs === 0) return null;

        return Array.from({ length: numberOfInputs }).map((_, index) => (
            <div key={index} className="flex items-center overflow-hidden mt-2">
                <label
                    htmlFor={`file-upload-${type}-${index}`}
                    className="w-1/4 bg-primary flex items-center justify-center py-1 px-2 cursor-pointer"
                >
                    UPLOAD
                </label>

                <div className="w-3/4 bg-white ml-2 px-2 border-b flex justify-between">
                    <span className="">{fileNames[index] || `Upload Logo ${index + 1} `}</span>
                    {fileNames[index] &&
                        <span>
                            <FaDeleteLeft
                                className='text-light cursor-pointer'
                                onClick={() => handleRemoveFile(index, type)}
                            />
                        </span>}
                </div>

                <input
                    id={`file-upload-${type}-${index}`}
                    type="file"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, index, type)}
                />
            </div>
        ));
    };

    //  Clears Inputs numbering
    const clearInputs = (type) => {
        if (type === 'right') {
            setNumberOfInputsRight(null);
            setFileNamesRight({});
        } else if (type === 'left') {
            setNumberOfInputsLeft(null);
            setFileNamesLeft({});
        } else if (type === 'upperArmRight') {
            setUpperArmRight(null);
            setNamesUpperArmRight({});
        } else if (type === 'upperArmLeft') {
            setUpperArmLeft(null);
            setNamesUpperArmLeft({});
        } else if (type === 'foreArmRight') {
            setNumberOfForeArmRight(null);
            setFileNamesForeArmRight({});
        } else if (type === 'foreArmLeft') {
            setNumberOfForeArmLeft(null);
            setFileNamesForeArmLeft({});
        } else if (type === 'rightThigh') {
            setNumberOfRightThigh(null);
            setFileNamesOfRightThigh({});
        } else if (type === 'leftThigh') {
            setNumberOfLeftThigh(null);
            setFileNamesOfLeftThigh({});
        } else if (type === 'rightShin') {
            setNumberOfRightShin(null);
            setFileNamesOfRightShin({});
        } else if (type === 'leftShin') {
            setNumberOfLeftShin(null);
            setFileNamesOfLeftShin({});
        } else if (type === 'frontLogos') {
            setNumberOfFront(null);
            setFileNamesOfFront({});
        } else if (type === 'hump') {
            setNumberOfHump(null);
            setFileNamesOfHump({});
        } else if (type === 'back') {
            setNumberOfBack(null);
            setFileNamesOfBack({});
        } else if (type === 'lowerBack') {
            setNumberOfLowerBack(null);
            setFileNamesOfLowerBack({});
        }
    };

    return (
        <div className="labelBox rounded bg-secondary text-light absolute right-64 top-0 p-3 w-80  max-h-600 overflow-auto scrollbar-thin scrollbar-thumb-rounded-lg scrollbar-thumb-secondary scrollbar-track-ButtonBG">
            <form>
                <h3 className="text-lg font-semibold">UPLOAD LOGOS</h3>

                {/* Right Collar Bone Section */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">1. COLLAR BONE (RIGHT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="collarBoneRight"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfInputsRight === 1}
                        />
                        <CustomRadioInput
                            label="2"
                            name="collarBoneRight"
                            value="2"
                            onChange={handleRadioChange}
                            checked={numberOfInputsRight === 2}
                        />
                        <CustomRadioInput
                            label="3"
                            name="collarBoneRight"
                            value="3"
                            onChange={handleRadioChange}
                            checked={numberOfInputsRight === 3}
                        />
                        {numberOfInputsRight && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('right')} />}
                    </div>
                    {renderFileInputs(numberOfInputsRight, fileNamesRight, 'right')}
                </div>

                {/* Left Collar Bone Section */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">2. COLLAR BONE (LEFT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="collarBoneLeft"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfInputsLeft === 1}
                        />
                        <CustomRadioInput
                            label="2"
                            name="collarBoneLeft"
                            value="2"
                            onChange={handleRadioChange}
                            checked={numberOfInputsLeft === 2}
                        />
                        <CustomRadioInput
                            label="3"
                            name="collarBoneLeft"
                            value="3"
                            onChange={handleRadioChange}
                            checked={numberOfInputsLeft === 3}
                        />
                        {numberOfInputsLeft && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('left')} />}
                    </div>
                    {renderFileInputs(numberOfInputsLeft, fileNamesLeft, 'left')}
                </div>

                {/* RIGHT UPPER ARM Section */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">3. UPPER ARM (RIGHT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="upperArmRight"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfInputsUpperArmRight === 1}
                        />
                        <CustomRadioInput
                            label="2"
                            name="upperArmRight"
                            value="2"
                            onChange={handleRadioChange}
                            checked={numberOfInputsUpperArmRight === 2}
                        />
                        <CustomRadioInput
                            label="3"
                            name="upperArmRight"
                            value="3"
                            onChange={handleRadioChange}
                            checked={numberOfInputsUpperArmRight === 3}
                        />
                        {numberOfInputsUpperArmRight && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('upperArmRight')} />}
                    </div>
                    {renderFileInputs(numberOfInputsUpperArmRight, fileNamesUpperArmRight, 'upperArmRight')}
                </div>

                {/* LEFT UPPER ARM Section */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">4. UPPER ARM (LEFT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="upperArmLeft"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfInputsUpperArmLeft === 1}
                        />
                        <CustomRadioInput
                            label="2"
                            name="upperArmLeft"
                            value="2"
                            onChange={handleRadioChange}
                            checked={numberOfInputsUpperArmLeft === 2}
                        />
                        <CustomRadioInput
                            label="3"
                            name="upperArmLeft"
                            value="3"
                            onChange={handleRadioChange}
                            checked={numberOfInputsUpperArmLeft === 3}
                        />
                        {numberOfInputsUpperArmLeft && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('upperArmLeft')} />}
                    </div>
                    {renderFileInputs(numberOfInputsUpperArmLeft, fileNamesUpperArmLeft, 'upperArmLeft')}
                </div>

                {/* FRONT LOPGOS Section */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">5.FRONT</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="frontLogos"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfFront === 1}
                        />
                        <CustomRadioInput
                            label="2"
                            name="frontLogos"
                            value="2"
                            onChange={handleRadioChange}
                            checked={numberOfFront === 2}
                        />
                        <CustomRadioInput
                            label="3"
                            name="frontLogos"
                            value="3"
                            onChange={handleRadioChange}
                            checked={numberOfFront === 3}
                        />
                        {numberOfFront && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('frontLogos')} />}
                    </div>
                    {renderFileInputs(numberOfFront, fileNamesOfFront, 'frontLogos')}
                </div>


                {/* RIGHT FOREARM Section */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">6. FOREARM (RIGHT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="foreArmRight"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfForeArmRight === 1}
                        />

                        {numberOfForeArmRight && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('foreArmRight')} />}
                    </div>
                    {renderFileInputs(numberOfForeArmRight, fileNamesForeArmRight, 'foreArmRight')}
                </div>

                {/* LEFT FOREARM Section */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">7. FOREARM (LEFT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="foreArmLeft"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfForeArmLeft === 1}
                        />
                        {numberOfForeArmLeft && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('foreArmLeft')} />}
                    </div>
                    {renderFileInputs(numberOfForeArmLeft, fileNamesForeArmLeft, 'foreArmLeft')}
                </div>

                {/* Right THIGH FRONT SECTION */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">8. THIGH FRONT (RIGHT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="rightThigh"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfRightThigh === 1}
                        />
                        {numberOfRightThigh && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('rightThigh')} />}
                    </div>
                    {renderFileInputs(numberOfRightThigh, fileNamesOfRightThigh, 'rightThigh')}
                </div>
                {/* LEFT THIGH FRONT SECTION */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">9. THIGH FRONT (LEFT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="leftThigh"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfLeftThigh === 1}
                        />
                        {numberOfLeftThigh && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('leftThigh')} />}
                    </div>
                    {renderFileInputs(numberOfLeftThigh, fileNamesOfLeftThigh, 'leftThigh')}
                </div>

                {/* Right SHIN SECTION */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">10. SHIN (RIGHT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="rightShin"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfRightShin === 1}
                        />
                        {numberOfRightShin && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('rightShin')} />}
                    </div>
                    {renderFileInputs(numberOfRightShin, fileNamesOfRightShin, 'rightShin')}
                </div>
                {/* LEFT SHIN SECTION */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">11. SHIN (LEFT)</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="leftShin"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfLeftShin === 1}
                        />
                        {numberOfLeftShin && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('leftShin')} />}
                    </div>
                    {renderFileInputs(numberOfLeftShin, fileNamesOfLeftShin, 'leftShin')}
                </div>

                {/* HUMP  SECTION */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">12. HUMP</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="hump"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfHump === 1}
                        />
                        <CustomRadioInput
                            label="2"
                            name="hump"
                            value="2"
                            onChange={handleRadioChange}
                            checked={numberOfHump === 2}
                        />
                        {numberOfHump && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('hump')} />}
                    </div>
                    {renderFileInputs(numberOfHump, fileNamesOfHump, 'hump')}
                </div>

                {/* Back  SECTION */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">13. Back</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="back"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfBack === 1}
                        />
                        <CustomRadioInput
                            label="2"
                            name="back"
                            value="2"
                            onChange={handleRadioChange}
                            checked={numberOfBack === 2}
                        />
                        {numberOfBack && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('back')} />}
                    </div>
                    {renderFileInputs(numberOfBack, fileNamesOfBack, 'back')}
                </div>

                {/* LOWER Back  SECTION */}
                <h5 className="bg-primary py-1 px-2 mt-2 font-medium">14. LOWER Back</h5>
                <div className="radioBoxes-container mt-1">
                    <div className="flex gap-3 w-4/5 mx-auto">
                        <CustomRadioInput
                            label="1"
                            name="lowerBack"
                            value="1"
                            onChange={handleRadioChange}
                            checked={numberOfLowerBack === 1}
                        />
                        {numberOfLowerBack && <FiX className='size-5 ml-auto cursor-pointer' onClick={() => clearInputs('lowerBack')} />}
                    </div>
                    {renderFileInputs(numberOfLowerBack, fileNamesOfLowerBack, 'lowerBack')}
                </div>

            </form>
        </div>
    );
};

export default LogosForm;
