import React from 'react'
import ContactTitle from '../../components/contact/Title'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import AppButton from '../../components/AppButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withSizeLessThan } from '../../hooks/useWindowSize';
import SectionHead from '../../components/common/Head'



function valuetext(value) {
    return `${value}$`;
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#9FB0E4",
        },
    },
});


const Revenue = () => {
    const sm = withSizeLessThan(720)
    return (
        <div>
            <SectionHead title="Contact Us | Expected Revenue" />
            <ContactTitle title="What's your expected revenue from online channels?" />
            <div className="relative h-40 mx-auto" style={{ width: sm ? 300 : 600 }}>
                <div className="absolute -left-5 top-0 flex flex-col z-0 justify-center items-center">
                    <p className="text-red font-bold py-3">50,0000</p>
                    <img src="/assets/img/contact/icons/blue_icons/expected_revenue.svg" alt="revenue" width={40} />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-2/4 flex items-center justify-center mx-auto">
                    <ThemeProvider theme={theme}>
                        <Box sx={{ width: sm ? 300 : 600 }}>
                            <Slider
                                aria-label="price"
                                defaultValue={50000}
                                getAriaValueText={valuetext}
                                valueLabelDisplay="auto"
                                step={1000000}
                                marks
                                min={50000}
                                max={10000000}
                                color="primary"
                            />
                        </Box>
                    </ThemeProvider>
                </div>
                <div className="absolute -right-5 top-0 z-0 flex flex-col justify-center items-center">
                    <p className="text-red font-bold py-3">10,000,000</p>
                    <img src="/assets/img/contact/icons/blue_icons/expected_revenue.svg" alt="revenue" width={40} />
                </div>
            </div>
            <div className="mx-auto w-56 py-10">
                <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/services' />
            </div>
        </div>
    )
}

export default Revenue
