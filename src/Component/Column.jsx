import React from 'react';


export default function Column(props){

	const { handleChange, name, index, handleClick, styles, cards, firstIndex, lastIndex} = props;
	return (
		<div className="Column">
		 	<div style={styles} className="title">
		 		<h1>{name}</h1>
		 	</div>
		 	<div className="cards">
		 	{	

				cards.map((el,i) => (
		 			<div className="Card" key={`key=${i}`}>
				 		{!firstIndex ? <span className="lspan" name="left" datacindex={index}  dataindex={i} onClick={handleChange}>&#x3C;</span> : null}
		 				<p>{el.text}</p>
		 				{!lastIndex ? <span className="rspan" name="right" datacindex={index} dataindex={i} onClick={handleChange}>></span> : null}
		 			</div>	
		 		))
		 	}
		 	</div>
		 	<button datacindex={index} onClick={handleClick}>+ Add a card</button>
	 	</div>
  	);
}
	
