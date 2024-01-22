import { Footer } from "@audiophile/components/Footer/Footer";
import { Header } from "@audiophile/components/Header/Header";

export const Layout = ({ showProject, children }) => {
    return (
        <>
            <Header/>
            {children}
            <Footer showProject={showProject}/>
        </>
    );
}