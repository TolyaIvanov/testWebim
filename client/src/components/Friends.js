import React from 'react'

const Friends = (props) => (
	<div className={'friends'}>
		<p className={'friend-list-title'}>random friends</p>
		<ul className={'friend-list'}>
			{props.children}
		</ul>
	</div>
);

export default Friends;
