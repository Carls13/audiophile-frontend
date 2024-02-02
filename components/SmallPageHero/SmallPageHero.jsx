import { BlackHeroContainer, HR, Title } from "./SmallPageHero.styles"

export const SmallPageHero = ({ title }) => {
    return (
        <>
            <BlackHeroContainer>
                <HR />
                <Title>{title}</Title>
            </BlackHeroContainer>
        </>
    )
}