import React from 'react';
import '../tailwind.css';
import Navbar from './components/Navbar.component';

function PageNotFound(){
    return(
        <div>
            <Navbar />
            <h1 className='text-3xl font-bold flex justify-center items-center h-[500px]' >These feature is not implemented</h1>
        </div>
    )
}

export default PageNotFound;