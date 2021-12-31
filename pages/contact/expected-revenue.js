import React, { useEffect, useState } from 'react'
import ContactTitle from '../../components/contact/Title'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import AppButton from '../../components/AppButton';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { withSizeLessThan } from '../../hooks/useWindowSize';
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import { numberWithCommas } from '../../hooks/tools'
import SlideIn from '../../components/animation/SlideIn'
import { pushDataLayer } from '../../helper/pushDataLayer';
import { useSelector, useDispatch } from 'react-redux'
import { updateForm } from '../../hooks/form';


function valuetext(value) {
    return <p className="bg-red">{numberWithCommas(value)}</p>
}

const theme = createTheme({
    palette: {
        primary: {
            main: "#9FB0E4",
        },
    },
});


const Revenue = ({ revenueSection }) => {
    const type = 'Expected Revenue'
    const dispatch = useDispatch()
    const { form } = useSelector(state => state.contactForm)
    const index = form.findIndex(i => i.type === type)
    const { minimum, maximum } = revenueSection
    const sm = withSizeLessThan(720)

    const onGettingPrice = (e) => {
        form[index].revenue = e.target.value
        updateForm(form, dispatch)
    }

    const ontoNextPage = () => {
        pushDataLayer('Contact Us', 'Expected Revenue', form[index].revenue)
    }
    return (
        <div>
            <SectionHead title="Contact Us | Expected Revenue" />
            <ContactTitle title={revenueSection.question} />
            {form[index].revenue && <SlideIn y={4}><h2 className='text-purple font-bold text-center text-4xl'>${numberWithCommas(form[index].revenue)}</h2></SlideIn>}
            <div className="relative h-40 mx-auto mt-5" style={{ width: sm ? 300 : 600 }}>
                <div className="absolute -left-5 top-0 flex flex-col z-0 justify-center items-center">
                    <p className={`${!form[index].revenue ? 'text-red' : 'text-gray-500'} font-bold py-3`}>{numberWithCommas(minimum)}</p>
                    <img src="/assets/img/contact/icons/blue_icons/expected_revenue.svg" alt="revenue" width={40} />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-2/4 flex items-center justify-center mx-auto">
                    <ThemeProvider theme={theme}>
                        <Box sx={{ width: sm ? 300 : 600 }}>
                            <Slider
                                aria-label="price"
                                value={form[index].revenue || minimum}
                                getAriaValueText={valuetext}
                                step={5000000}
                                min={minimum}
                                max={maximum}
                                marks
                                color="primary"
                                onChange={(e) => onGettingPrice(e)}

                            />
                        </Box>
                    </ThemeProvider>
                </div>
                <div className="absolute -right-5 top-0 z-0 flex flex-col justify-center items-center">
                    <p className={`${!form[index].revenue ? 'text-red' : 'text-gray-500'} font-bold py-3`}>{numberWithCommas(maximum)}</p>
                    <img src="/assets/img/contact/icons/blue_icons/expected_revenue.svg" alt="revenue" width={40} />
                </div>
            </div>
            <div className="mx-auto w-56 py-10">
                <AppButton title="Continue" width={200} bgColor="bg-blue-dark" bgColorHover="hover:bg-red" txtColor="text-white" link='/contact/services' clicked={() => ontoNextPage()} />
            </div>
        </div>
    )
}

export const getStaticProps = async (ctx) => {
    const locale = ctx.locale
    let index = 1
    if (locale == 'en-au') {
        index = 1
    } else {
        index = 0
    }
    const props = await getData(`*[_type == 'interactiveForm'][${index}]{revenueSection}`)
    return { props }
}

export default Revenue
