import React from 'react'
import styled from 'styled-components'
import HeaderCenter from '@/src/components/header/headerCenter'
import HeaderRight from '@/src/components/header/headerRight'
import HeaderLeft from '@/src/components/header/headerLeft'
import CarouselBanner from '@/src/components/header/carousel'

const Header = styled.div`
    height: 50px;
    display: flex;
    margin-left: 4rem;
    margin-right: 4rem;
    margin-top: 2rem;
    position: relative;
`

const Left = styled.div`
    position: relative;
    width: 15%;
`

const Center = styled.div`
    position: relative;
    width: 60%;
`

const Right = styled.div`
    position: relative;
    width: 25%;
`

export default function AppHeader() {
    return (
        <>
            <Header>
                <Left>
                    <HeaderLeft />
                </Left>
                <Center>
                    <HeaderCenter />
                </Center>
                <Right>
                    <HeaderRight />
                </Right>
            </Header>
            <div>
                <CarouselBanner />
            </div>
        </>
    )
}
