import React from 'react';
import './PageSection.css';

const Index = ({ bgColor, children, className, id, vWhitespace }) => {
	let wrapperStyles = {
		backgroundColor: bgColor
	}
	
	return (
		<section 
			style={wrapperStyles} 
			className={`${className} ${vWhitespace && 'VWhitespace'}`} 
			id={id}
			>
			<div className="Container">{ children }</div>
		</section>
	)
}

export default Index;