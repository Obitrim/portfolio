import React from 'react';

import About from '../../components/About';
import Banner from '../../components/Banner';
import Projects from '../../components/Projects';
import Certificates from '../../components/Certificates';

const Index = (props) => {
  return (
    <>
    	{/*banner dark*/}
    	<Banner/>
    	{/*project display (light)*/}
    	<Projects/>
    	{/*About Section (multi)*/}
        <About/>
    	{/*certicates (white)*/}
        <Certificates/>
    	{/*Tools and technologies (light)*/}
    	{/*Contact (dark)*/}
    </>
  )
}

export default Index;