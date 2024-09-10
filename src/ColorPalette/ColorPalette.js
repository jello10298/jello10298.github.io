import React, {useEffect, useState} from 'react';
import {Box, Button, Modal} from '@mui/material';
import { ChromePicker } from 'react-color';

const initialColors = {
    // magentaHaze: '#9E4770',
    // royalBlue: '#496DDB',
    'background-color': '#010714',
    'menu-color': '#FED057', //sunglow
    'text-color': '#fff',
    // lightBlue: '#9DC7C8',
    // richBlack: '#010714'
};

const ColorPalette = () => {
    const [colors, setColors] = useState(initialColors);
    const [selectedColor, setSelectedColor] = useState('');
    const [open, setOpen] = useState(false);
    const [currentColor, setCurrentColor] = useState('');
    const [isModified, setIsModified] = useState(false);

    const handleOpen = (colorKey) => {
        setCurrentColor(colorKey);
        setSelectedColor(colors[colorKey]);
        setOpen(true);
    };

    const handleClose = () => setOpen(false);

    const handleChangeComplete = (color) => {
        setColors({
            ...colors,
            [currentColor]: color.hex
        });
        document.documentElement.style.setProperty(`--${currentColor}`, color.hex);
        setIsModified(true); // Set the modified state to true
        handleClose();
    };

    const resetColors = () => {
        setColors(initialColors);
        Object.entries(initialColors).forEach(([colorKey, colorValue]) => {
            document.documentElement.style.setProperty(`--${colorKey}`, colorValue);
        });
        setIsModified(false); // Reset the modified state to false
    };

    // Set initial colors as CSS variables
    useEffect(() => {
        Object.entries(colors).forEach(([colorKey, colorValue]) => {
            document.documentElement.style.setProperty(`--${colorKey}`, colorValue);
        });
    }, []);

    return (
        <Box className="color_pallet" sx={{ display: 'flex', position: 'absolute', right: '20px'}}>
            {Object.entries(colors).map(([colorKey, colorValue]) => (
                <Box
                    key={colorKey}
                    className={colorKey}
                    onClick={() => handleOpen(colorKey)}
                    sx={{
                        width: 20,
                        height: 20,
                        backgroundColor: colorValue,
                        cursor: 'pointer',
                        margin: 1,
                        border: colorKey === 'background-color' ? '1px solid gray' : undefined,
                    }}
                />
            ))}
            {isModified && (
                <Button variant="contained" color="secondary" onClick={resetColors}>
                    Reset Colors
                </Button>
            )}
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <ChromePicker color={selectedColor} onChangeComplete={handleChangeComplete} />
                </Box>
            </Modal>
        </Box>
    );
};

export default ColorPalette;