import Header from "../Components/Header";
import Footer from "../Components/Footer";
const Layout = ({ children }: any) => {
    return (
        <>
            <Header />
                { children }
            <Footer />
        </>
    )
}

export default Layout;