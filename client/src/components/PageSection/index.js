import React from 'react';
import PropTypes from 'prop-types';

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

Index.propTypes = {
	bgColor: PropTypes.string,
	children: PropTypes.node,
	id: PropTypes.string,
	vWhitespace: PropTypes.bool
}

Index.defaultProps = {
	children: 'Insert section\'s content here',
	vWhitespace: true
}

export default Index;