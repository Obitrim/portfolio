import React from 'react';
import './Banner.css';
import PageSection from '../PageSection';

const Index = (props) => {
  return (
    <PageSection bgColor="var(--dark)" className="Banner" vWhitespace={true}>
		<p className="Banner__InfoText">Hi, <strong className="Banner__Name">Paul Obitrim</strong> here</p>
		<h1 className="Banner__Title">Web Developer</h1>
		<p className="Banner__InfoText">
			I build responsive, maintainable and scalable web applications that promote businesses and organizations
		</p>
		<a href="#" className="Banner__DownloadBtn">Download CV</a>
	</PageSection>
  )
}

export default Index;