import Image from 'next/image';
import {
    TheBestContainer, 
    TheBestColumn,
    TheBestTitle,
    Orange,
    TheBestText
} from './TheBest.styles';

export const TheBest = () => {
    return (
        <TheBestContainer>
            <TheBestColumn>
                <TheBestTitle>
                    Bringing you the <Orange>best</Orange>  audio gear
                </TheBestTitle>
                <TheBestText>
                Located at the heart of New York City, Audiophile is the premier store for high end headphones, earphones, speakers, and audio accessories. We have a large showroom and luxury demonstration rooms available for you to browse and experience a wide range of our products. Stop by our store to meet some of the fantastic people who make Audiophile the best place to buy your portable audio equipment.
                </TheBestText>
            </TheBestColumn>
            <Image src='/shared/desktop/image-best-gear.jpg' alt="The Best" width={540} height={580} />
        </TheBestContainer>
    );
};