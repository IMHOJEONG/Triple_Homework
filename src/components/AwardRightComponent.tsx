import React, { useState } from 'react';
import { StrongText } from '../UI/atoms/strongText';
import { Texts } from '../UI/molecules/texts';
import { ImgTextSection } from '../UI/organisms/ImgTextSection';
import { TextsParagraph } from '../UI/organisms/text_paragraphs';
import { Text } from '../UI/atoms/text'
import { ImageText } from '../UI/molecules/imgText';
import PlayStoreImage from '../assets/images/play-store@2x.png';
import AppStoreImage from '../assets/images/app-store@2x.png';
import { Image } from '../UI/atoms/image';
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring'



const StyledDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 50vw;
    height: 50vh;
`;

export function AwardRightComponent(): JSX.Element {
    
    const [flip, set] = useState(false);

    const { userNumber } = useSpring({
        from: { userNumber: 0 },
        userNumber: 350,
        delay: 100,
        config: {
            tension: 280,
            friction: 170,
            duration: 700
        } ,
        onRest: () => set(!flip),
    })

    const { reviewNumber } = useSpring({
        from: { reviewNumber: 0 },
        reviewNumber: 21,
        delay: 100,
        config: {
            tension: 280,
            friction: 170,
            duration: 700
        } ,
        onRest: () => set(!flip),
    })

    const { storeNumber } = useSpring({
        from: { storeNumber: 0 },
        storeNumber: 650,
        delay: 100,
        config: {
            tension: 280,
            friction: 170,
            duration: 700
        } ,
        onRest: () => set(!flip),
    })

    const props = useSpring({
        from: { opacity : 0 },
        to: { opacity : 1 },
        delay: 100,
        config: {
            tension: 280,
            friction: 170,
            duration: 700
        } ,
        onRest: () => set(!flip),
    })

    const propsAward = useSpring({
        from: { opacity : 0 },
        to: { opacity : 1 },
        delay: 200,
        config: {
            tension: 280,
            friction: 170,
            duration: 700
        } ,
        onRest: () => set(!flip),
    })

    return (
        <StyledDiv>
            <TextsParagraph display="flex"
                flexDirection="column"
                padding="10vw 5vw 3vw 5vw"
            >
                <animated.div style={props}>
                    <Texts display="flex"
                        justifyContent="left"
                        alignItems="center"
                        height="10vh"
                        fontSize="40px"
                    >
                        
                            <StrongText
                                display="flex"    
                            >
                                <animated.div>
                                    { userNumber.to(n => n.toFixed(0)) }
                                </animated.div>
                                만명
                            </StrongText>
                            <Text>의 사용자</Text>
                    

                        
                    </Texts>
                </animated.div>
                <animated.div style={props}>
                <Texts display="flex"
                    justifyContent="left"
                    alignItems="center"
                    height="10vh"
                    fontSize="40px"
                >
                    <StrongText
                        display="flex">
                        <animated.div>
                            { reviewNumber.to(n => n.toFixed(0)) }
                        </animated.div>
                        만 개
                    </StrongText>
                    <Text>의 리뷰</Text>
                </Texts>
                </animated.div>
                <animated.div style={props}>
                <Texts display="flex"
                justifyContent="left"
                    alignItems="center"
                    height="10vh"
                    fontSize="40px"
                >
                    <StrongText
                        display="flex"
                    >
                        <animated.div>
                            { storeNumber.to(n => n.toFixed(0)) }
                        </animated.div>
                        만 개
                    </StrongText>
                    <Text>의 저장</Text>
                </Texts>
                </animated.div>
            </TextsParagraph>
            <ImgTextSection display="flex"
                padding="0 5vw 0 5vw"
                justifyContent="space-between"
            >
                <animated.div style={propsAward}>
                <ImageText display="flex"
                    >
                    <Image
                        src={PlayStoreImage}
                        alt="playstore"
                        width="5vw"
                        height="5vw"
                        margin="0 15px 0 0"
                    ></Image>
                    <Text fontSize="25px"
                    lineHeight="2.5vw">
                        {`2018 구글 플레이스토어`}
                        <br />
                        {`올해의 앱 최우수상 수상`}
                    </Text>
                    </ImageText>
                </animated.div>
                <animated.div style={propsAward}>
                <ImageText display="flex">
                    <Image
                        src={AppStoreImage}
                        alt="appstore"
                        width="5vw"
                        height="5vw"
                        margin="0 15px 0 0"
                    ></Image>
                    <Text fontSize="25px"
                    lineHeight="2.5vw">
                        {`2018 애플 앱스토어`}
                        <br />
                        {`오늘의 여행앱 선정`}
                    </Text>
                </ImageText>
                </animated.div>
            </ImgTextSection>
        
        </StyledDiv>

    );
}