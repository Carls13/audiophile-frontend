import { Footer } from "@audiophile/components/Footer/Footer";
import { Header } from "@audiophile/components/Header/Header";
import { SmallPageHero } from "../SmallPageHero/SmallPageHero";
import { HomeHero } from "../HomeHero/HomeHero";

export const Layout = ({ showProject, children, title, isHome }) => {
    return (
        <>
        {
            isHome ? <HomeHero>
                <Header isHome={isHome} />
            </HomeHero> : <><Header/>
            {title && <SmallPageHero title={title} />}</>
        }
            
            {children}
            <Footer showProject={showProject}/>
        </>
    );
}