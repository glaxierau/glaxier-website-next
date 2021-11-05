import React from 'react'

const MobileNav = () => {
    return (
        <div>
            <nav className="fixed lg:hidden z-50 top-0 h-14 bg-white w-full flex items-center justify-between px-4">
                <img src="/assets/img/header/logo.png" width="100" alt="logo" />
                <div className="flex items-center justify-center pt-2 pl-2">
                    <button className="`hamburger hamburger--slider-r`" type="button">
                        <span className="hamburger-box">
                            <span className="hamburger-inner"></span>
                        </span>
                    </button>
                </div>
            </nav>
        </div>
    )
}

export default MobileNav
