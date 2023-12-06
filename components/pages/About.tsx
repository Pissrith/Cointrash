import { useState } from 'react'
import Footer from '../Footer'
import Hero from '../Hero'
import Info2 from '../Info2'

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Hero />
            <Info2 />
            <Footer />
        </>
    )
}

export default App
