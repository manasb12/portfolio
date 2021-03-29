import React, {useState} from 'react';
import {useSpring, animated} from 'react-spring';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

const Button = styled.button`
    min-width: 100px;
    padding: 16px 32px;
    border-radius: 4px;
    border: none;
    background: #f44336;
    color: #fff;
    cursor: pointer;
`

const ModalContainer = () => {
    const [showModal, setShowModal] = useState(false);
    const openModal = () => {
        setShowModal(prev => !prev);
    }

    return (
        <React.Fragment>
            <Container>
                <Button onClick={openModal}>More About Me</Button>
                <Modal showModal={showModal} setShowModal={setShowModal} />
            </Container>
        </React.Fragment>

    )
}

const Modal = ({showModal, setShowModal}) => {
    const Background = styled.div`
        width: 100%;
        height: 100%;
        background: rgba(0, 0, 0, 0.7);
        position: fixed;
        display: flex;
        justify-content: center;
        align-items: center;
    `

    const ModalWrapper = styled.div`
        width: 800px;
        height: 500px;
        background: #fff;
        color: #000;
        display: grid;
        grid-template-colums: 1fr 1fr;
        position: relative;
        z-index: 10;
        border-radius: 10px;
    `

    const ModalContent = styled.div`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        line-height: 1.8;
        color: #141414;
    `

    const CloseModalButton = styled(MdClose)`
        cursor: pointer;
        position: absolute;
        top: 20px;
        right: 20px;
        width: 32px;
        height: 32px;
        padding: 0;
        z-index: 10;
    `

    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    })

    return (
       <>
        {showModal ? (
            <Background>
                <animated.div style={animation}>
                <ModalWrapper showModal={showModal}>
                    <ModalContent>
                        <h1>More About Me</h1>
                        <h2>SMART GOALS</h2>
                    </ModalContent>
                    <CloseModalButton aria-label='Close modal' onClick={() => setShowModal(prev=>!prev)}/>
                </ModalWrapper>
                </animated.div>
            </Background>
        ) : null}
       </>
    )
}

export default ModalContainer;