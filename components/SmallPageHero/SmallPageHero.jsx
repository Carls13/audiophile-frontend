import { BlackHeroContainer, HR, Title } from "./SmallPageHero.styles"

export const SmallPageHero = ({ title }) => {
    return (
        <>
            <BlackHeroContainer>
                <Title>{title}</Title>
            </BlackHeroContainer>
        </>
    )
}