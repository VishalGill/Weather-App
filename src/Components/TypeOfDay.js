import React from 'react';

function TypeOfDay({weatherType}) {
	
		// if (weatherType === 'Sunny' ) {
		// 	return <h3>{`${weatherType} `}</h3>;
		// }

	

    return (
			<div>
				<h2>{weatherType}</h2>
			</div>
		);
}

export default TypeOfDay;