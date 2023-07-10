import { memo } from 'react';
//props로 전달되는 값이 참조형 자료일 떄 참조링크값을 비교하는 것이 아닌 참조되고 있는 원본 데이터가 같은지를 비교.
import { isEqual } from 'lodash';

function Child(props) {
	console.log('child');
	return (
		<div>
			<h1>Child : {props.Counter}</h1>
		</div>
	);
}

export default memo(Child);
