import React from 'react';

import './About.css';
import PageSection from '../PageSection';

const Index = (props) => {
  return (
    <PageSection id="about" className="PageSection__About BgDark" vWhitespace={false}>
    	<div className="About">
    		<div className="About__Section About__Section--Bio">
    		 	<h2 className="About__Section__Heading"><span>Who I am</span></h2>
    		 	<p>Lorem, ipsum dolor sit, amet consectetur adipisicing elit. Minus dolores dolor iure, maiores culpa possimus neque nobis odio, architecto, aliquam fugiat, doloremque adipisci enim inventore distinctio sapiente repellat officiis? Rem!</p>
    		</div>
	    	<div className="About__Section About__Section--Skills">
	    	 	<h2 className="About__Section__Heading"><span>Skills</span></h2>
	    	 	<ul className="About__Skills">
	    	 		<li className="About__Skills__Item">Twitter</li>
	    	 		<li className="About__Skills__Item">Facebook</li>
	    	 		<li className="About__Skills__Item">LinkedIn</li>
	    	 		<li className="About__Skills__Item">Instagram</li>
	    	 	</ul>
	    	</div>
	    	<div className="About__Section About__Section--HowIStarted">
	    	 	<h2 className="About__Section__Heading"><span>How I started</span></h2>
	    	 	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia impedit ipsam molestias repellendus velit exercitationem reiciendis placeat voluptatum sequi.</p>
	    	 	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia impedit ipsam molestias repellendus velit exercitationem reiciendis placeat voluptatum sequi.</p>
	    	 	<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo mollitia impedit ipsam molestias repellendus velit exercitationem reiciendis placeat voluptatum sequi.</p>
	    	</div>
	    	<div className="About__Section About__Section--SocialMedia">
	    	 	<h2 className="About__Section__Heading"><span>Follow Me</span></h2>
	    	 	<ul className="About__SocialMedia">
	    	 		<li className="About__SocialMedia__Item">Twitter</li>
	    	 		<li className="About__SocialMedia__Item">Facebook</li>
	    	 		<li className="About__SocialMedia__Item">LinkedIn</li>
	    	 		<li className="About__SocialMedia__Item">Instagram</li>
	    	 	</ul>
	    	</div>
    	</div>
    </PageSection>
  )
}

export default Index;