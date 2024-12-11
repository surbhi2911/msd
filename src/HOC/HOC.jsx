import React from 'react'
import Header from './Header'
import Footer from './Footer'

function HOC(MSD) {
    function component() {
        return (
            <>
                <Header />
                <MSD />
                <Footer />
            </>
        )
    }
    return component()

}

export default HOC