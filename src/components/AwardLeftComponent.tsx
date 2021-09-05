import React, { useState } from 'react';
import { ImageText } from '../UI/molecules/imgText';
import { ImgTextSection } from '../UI/organisms/ImgTextSection';
import TripleImage from '../assets/images/triple@2x.png';
import { Image } from '../UI/atoms/image'
import { Text }  from '../UI/atoms/text'
import styled from 'styled-components';
import { useSpring, animated, config } from 'react-spring'

const StyledDiv = styled.div`
   width: 50vw;
`;

export function AwardLeftComponent(): JSX.Element {
    
    const [flip, set] = useState(false);

    const props  = useSpring({
        from: { opacity : 0 },
        to: { opacity : 1 },
        delay: 0,
        config: {
            tension: 280,
            friction: 170,
            duration: 700
        } ,
        onRest: () => set(!flip),
    })
    
    return (<StyledDiv>
        <ImgTextSection>
            <ImageText display="row" width="50vw">
                <animated.div style={props}>
                    <Image
                        
                        src={TripleImage}
                        width="50vw"
                        padding="10vw"
                        alt="tripleimage"
                    ></Image>
                </animated.div>
                <Text position="relative"
                    top="-15vw"
                    width="inherit"
                    textAlign="center"
                    color="gray"
                    fontSize="12.5px"
                >
                    2019년 2월 기준
                </Text>
            </ImageText>
        </ImgTextSection>
        
    </StyledDiv>);


}