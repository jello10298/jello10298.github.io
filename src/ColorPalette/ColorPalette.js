import React, {useEffect, useState} from 'react';
import {Box, Button, Modal} from '@mui/material';
import {PhotoshopPicker} from 'react-color';
import {trackEvent} from "../Analytics/Analytics";
import RestoreIcon from '@mui/icons-material/Restore';

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
        trackEvent('Color Palette Opened')
    };

    const handleClose = () => setOpen(false);

    const handleChangeComplete = (color) => {
        setColors({
            ...colors,
            [currentColor]: color.hex
        });
        setSelectedColor(color);
        document.documentElement.style.setProperty(`--${currentColor}`, color.hex);
        trackEvent('Color Palette Changed')
        setIsModified(true); // Set the modified state to true
        // handleClose();
    };

    const resetColors = () => {
        setColors(initialColors);
        Object.entries(initialColors).forEach(([colorKey, colorValue]) => {
            document.documentElement.style.setProperty(`--${colorKey}`, colorValue);
        });
        trackEvent('Color Palette Reset')
        setIsModified(false); // Reset the modified state to false
    };

    // Set initial colors as CSS variables
    useEffect(() => {
        Object.entries(colors).forEach(([colorKey, colorValue]) => {
            document.documentElement.style.setProperty(`--${colorKey}`, colorValue);
        });
    }, []);

    /**
     * Converts a hex color to RGB components.
     * @param {string} hex - The hex color code.
     * @returns {object} An object containing r, g, and b components.
     */
    function hexToRgb(hex) {
        hex = hex.replace(/^#/, ''); // Remove the leading # if present
        let bigint = parseInt(hex, 16);

        // If shorthand notation, convert to full hex
        if (hex.length === 3) {
            return {
                r: (bigint >> 8 & 0xF) * 17, // equivalent to (bigint >> 8 & 0xF0) | (bigint >> 8 & 0xF0)
                g: (bigint >> 4 & 0xF) * 17,
                b: (bigint & 0xF) * 17,
            };
        }

        // Full hex notation
        return {
            r: (bigint >> 16) & 255,
            g: (bigint >> 8) & 255,
            b: bigint & 255
        };
    }

    /**
     * Calculates the luminance of an RGB color.
     * @param {number} r - Red component.
     * @param {number} g - Green component.
     * @param {number} b - Blue component.
     * @returns {number} The luminance of the color.
     */
    function getLuminance(r, g, b) {
        const a = [r, g, b].map(v => {
            v /= 255;
            return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
        });
        return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
    }

    /**
     * Determines the contrasting color for a given hex color.
     * @param {string} colorKey - The hex color code (e.g., "#FFFFFF").
     * @returns {string} The contrasting color ("#000000" or "#FFFFFF").
     */
    function getContrastingColor(colorKey) {
        const { r, g, b } = hexToRgb(colorKey);
        const luminance = getLuminance(r, g, b);
        return luminance > 0.5 ? '#000000' : '#FFFFFF';
    }

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
                        border: `1px solid ${getContrastingColor(colorValue)}`,
                    }}
                />
            ))}
            {isModified && (
                <Button
                    variant="contained"
                    sx={{
                        backgroundColor: 'transparent',
                        boxShadow: 'none',
                        ':hover': {
                            backgroundColor: 'transparent', // Same color on hover for simplicity
                            boxShadow: 'none',
                        }
                    }}
                    onClick={resetColors}
                >
                    {/*Reset Colors*/}
                    <RestoreIcon sx={{ color: getContrastingColor(colors['background-color']) }}/>
                </Button>
            )}
            <Modal open={open} onClose={handleClose}>
                <Box sx={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}>
                    <PhotoshopPicker color={selectedColor} onChange={handleChangeComplete} onAccept={handleClose} onCancel={() => { resetColors(); handleClose();}} />
                </Box>
            </Modal>
        </Box>
    );
};

export default ColorPalette;