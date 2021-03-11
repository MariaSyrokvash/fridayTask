import React, {FC} from 'react';
import {Train} from './Train';

type TrainContainerPropsType = {
	theme?: string
}

export const TrainContainer: FC<TrainContainerPropsType> = ({theme}) => {
	return (
		<Train />
	)
}