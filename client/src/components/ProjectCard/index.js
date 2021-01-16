import React from 'react';
import './ProjectCard.css';

const Index = ({ bgImage, name, description, hashTags, previewLink, alignRight }) => {
  return (
    <div className={`ProjectCard ${alignRight && 'AlignRight'}`}>
    	<div className="ProjectCard__BrowserScreen">
    		<span className="Dot"></span>
    		<img className="ProjectCard__Img" src={bgImage} alt={`Project ` + name}/>
    	</div>
   		<div className="ProjectCard__Details">
   			<h3 className="ProjectCard__Name">{ name }</h3>
   			<p className="ProjectCard__Desc">
   				{ description } <br/>
   				{ hashTags.map((hashTag, index) => ( 
	   				<span className="ProjectCard__HashTag" key={index + hashTag}>#{hashTag}</span>)
	   			)}
   			</p>
   			<a href={previewLink} className="BaseButton ProjectCard__PreviewBtn">Preview</a>
   		</div>
    </div>
  )
}

export default Index;