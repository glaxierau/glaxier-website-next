import React from 'react'
import ContactTitle from '../../components/contact/Title'
import Box from '@mui/material/Box'
import Slider from '@mui/material/Slider'
import AppButton from '../../components/AppButton'
import { createTheme, ThemeProvider } from '@mui/material/styles'
import useWindowSize, { useSizeLessThan } from '../../hooks/useWindowSize'
import SectionHead from '../../components/common/Head'
import { getData } from '../../hooks/getData'
import { numberWithCommas } from '../../hooks/tools'
import SlideIn from '../../components/animation/SlideIn'
import { pushDataLayer } from '../../helper/pushDataLayer'
import { useSelector, useDispatch } from 'react-redux'
import { updateForm } from '../../hooks/form'
import { Icon } from '../../components/contact/Icon'


const Revenue = ({ revenueSection }) => {
    const type = 'Expected Revenue'
    const dispatch = useDispatch()
    const { form } = useSelector((state) => state.contactForm)
    const index = form.findIndex((i) => i.type === type)
    const { minimum, maximum } = revenueSection
    const sm = useSizeLessThan(700)
    const screenWidth = useWindowSize().width


    const onGettingPrice = (e) => {
        form[index].revenue = e.target.value
        updateForm(form, dispatch)
    }

    const ontoNextPage = () => {
        pushDataLayer('Contact Us', 'Expected Revenue', form[index].revenue)
    }

    // console.log(useWindowSize().width)
    return (
        <div>
            <SectionHead title="Contact Us | Expected Revenue" />
            <ContactTitle title={revenueSection.question} />
            {form[index].revenue && (
                <SlideIn y={4}>
                    <h2 className="text-purple font-bold text-center text-4xl">
                        ${numberWithCommas(form[index].revenue)}
                    </h2>
                </SlideIn>
            )}
            <div
                className="relative mx-auto mt-5 h-40 w-auto"
                style={{ width: sm ? screenWidth - 120 : 600 }}
            >
                <div className='flex justify-between' >
                    <Icon colorChange={form[index].revenue}
                        value={minimum}
                        className="absolute top-0 lg:-left-[0.9rem] md:-left-[0.9rem] -left-[2rem]"
                    />
                    <Icon colorChange={form[index].revenue}
                        value={maximum}
                        className="absolute top-0 lg:-right-[2rem] md:-right-[0.9rem] -right-[2.5rem]"
                    />
                </div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 flex items-center justify-center mx-auto">
                    <ThemeProvider theme={theme}>
                        <Box sx={{ width: sm ? screenWidth - 120 : 550 }}>
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
            </div>
            <div className="mx-auto w-56 py-10">
                <AppButton
                    title="Continue"
                    width={200}
                    bgColor="bg-blue-dark"
                    bgColorHover="hover:bg-red"
                    txtColor="text-white"
                    link="/contact/services"
                    clicked={() => ontoNextPage()}
                />
            </div>
        </div>
    )
}

function valuetext(value) {
    return <p className="bg-red">{numberWithCommas(value)}</p>
}

const theme = createTheme({
    palette: {
        primary: {
            main: '#9FB0E4',
        },
    },
})


export const getStaticProps = async (ctx) => {
    const locale = ctx.locale
    let index = 1
    if (locale == 'en-au') {
        index = 1
    } else {
        index = 0
    }
    const props = await getData(
        `*[_type == 'interactiveForm'][${index}]{revenueSection}`
    )
    return { props }
}

export default Revenue
