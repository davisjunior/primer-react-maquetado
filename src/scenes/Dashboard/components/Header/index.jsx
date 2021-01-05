import React from 'react'
import { Wrapper } from './styled'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDown } from '@fortawesome/free-solid-svg-icons'
import logo from './img/logo.png'
import { useIsLarge } from '../../../../../src/hooks/responsive'

import { HeaderMobile } from '../../../../components/Header/components/HeaderMobile'

export const Header = () => {
    const isMobileHeader = useIsLarge()
    return(
        <Wrapper>
            {!isMobileHeader ? (
                <div className="main">
                    <div className="logo">
                        <a href="#"><img src={logo} alt="" /></a>
                    </div>
                    <div className="nav">
                        <div className="two-option">
                            <div>
                                <a href="#">Dashboard</a>
                            </div>
                            <div className="job">
                                <a href="#">Job Tracking</a>
                            </div>
                        </div>
                        <div className="option-three">
                            <a href="#">Tools <FontAwesomeIcon icon={faAngleDown} /></a>
                        </div>
                        <div className="option-user">
                            <a href="#">Iraima H <FontAwesomeIcon icon={faAngleDown} /></a>
                        </div>
                    </div>
                </div>
            ):
            ( 
                <HeaderMobile />
            )}
                
        </Wrapper>
    )
}