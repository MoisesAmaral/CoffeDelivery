import { Navbar } from '../../components/Navbar'
import { Hero } from '../../components/Hero'
import { Products } from '../../components/Products'
export function Home(){
    return (
        <>
            <Navbar />
            <Hero />
            <Products />
        </>    
    )
}