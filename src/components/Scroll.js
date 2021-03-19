import React from 'react'

const Scroll = (props) => {
	return (
		<div style={{ overflow: 'scroll', height: '800px', width: '100%' }}>
			{props.children}
		</div>
	)
};

export default Scroll;