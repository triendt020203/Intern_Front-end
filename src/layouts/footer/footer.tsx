import React from 'react'
import FooterLeft from '@/src/components/footer/footerleft'
import styled from 'styled-components'
import FooterCenter from '@/src/components/footer/footercenter'
import FooterRight from '@/src/components/footer/footerright'

const Conatainer = styled.div`
    display: flex;
    margin-left: 4rem;
    margin-right: 4rem;
`

const Left = styled.div`
    width: 35%;
`
const Center = styled.div`
    width: 30%;
`
const Right = styled.div`
    width: 35%;
    text-align: right;
`

export default function Footers() {
    return (
        <>
            <Conatainer>
                <Left>
                    <FooterLeft />
                </Left>
                <Center>
                    <FooterCenter />
                </Center>
                <Right>
                    <FooterRight />
                </Right>
            </Conatainer>
        </>
    )
}
