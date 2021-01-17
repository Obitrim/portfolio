import React from 'react';
import "./Projects.css";
import image from './sample.png';
import PageSection from '../PageSection';
import ProjectCard from '../ProjectCard';

const Index = (props) => {
  return (
    <PageSection id="my-works" vWhitespace={true}>
    	<h2>My works</h2>
    	<p>Over the course of time, I have worked on medium to large-scale projects. Samples are listed below.</p>
    	<ProjectCard 
    		bgImage={image}
    		name="Form validator" 
    		description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ex."
    		previewLink=""
    		hashTags={['html', 'css', 'javascript']}
    	/>
    	<ProjectCard 
    		bgImage={image}
    		name="Form validator" 
    		description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ex."
    		previewLink=""
    		hashTags={['html', 'css', 'javascript']}
    		alignRight
    	/>
    	<ProjectCard 
    		bgImage={image}
    		name="Form validator" 
    		description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ex."
    		previewLink=""
    		hashTags={['html', 'css', 'javascript']}
    	/>
    	<ProjectCard 
    		bgImage={image}
    		name="Form validator" 
    		description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe, ex."
    		previewLink=""
    		hashTags={['html', 'css', 'javascript']}
    		alignRight
    	/>
        <button className="BaseButton BaseButton--SeeAllBtn">View All</button>
    </PageSection>
  )
}

export default Index;