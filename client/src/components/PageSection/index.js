import React from 'react';

const Index = ({ bgColor, children, className, id }) => {
	let wrapperStyles = {
		backgroundColor: bgColor
	}
	
	return (
		<section style={wrapperStyles} className={className} id={id}>
			<div className="Container">{ children }</div>
		</section>
	)
}

export default Index;