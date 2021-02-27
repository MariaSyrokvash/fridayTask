import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react';
import s from './SuperButton.module.scss';

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

type SuperButtonPropsType = DefaultButtonPropsType & {
	red?: boolean
	theme?: string
	className?: string
}

const SuperButton: React.FC<SuperButtonPropsType> = (
	{
		theme,
		red, className,
		...restProps// все остальные пропсы попадут в объект restProps, там же будет children
	}
) => {
	const finalClassName = `${red ? s.red : s.default} ${theme == 'dark' ? s.dark : s.light} ${className}`;
	return (
		<button
			className={finalClassName}
			{...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
		/>
	);
}

export default SuperButton;
