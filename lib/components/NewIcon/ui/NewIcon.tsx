import { Suspense } from 'react';
import classNames from 'classnames/bind';
import s from './NewIcon.module.scss';
import iconTypes from './iconTypes';

type IconProps = {
	name: string;
	size?: string;
	color?: string;
	additionalClass?: string;
	deg?: string;
	strokeWidth?: string;
};

const cx = classNames.bind(s);

export const NewIcon = ({
	name,
	size = '24',
	color,
	strokeWidth,
	additionalClass,
	deg,
}: IconProps) => {
	const key = name.charAt(0).toLowerCase() + name.slice(1);
	const IconComponent = iconTypes[key];

	if (!IconComponent) {
		console.error(`Icon "${name}" not found`);
		return null;
	}

	return (
		<div
			style={{
				width: size + 'px',
				height: size + 'px',
				minWidth: size + 'px',
				minHeight: size + 'px',
				transform: deg ? `rotate(${deg}deg)` : undefined,
				color: color,
				strokeWidth: strokeWidth,
			}}
			className={cx(s.root, additionalClass)}
		>
				<Suspense fallback={<div>Загрузка...</div>}>
					<IconComponent width={size} height={size} fill={color} stroke={color} strokeWidth={strokeWidth} />
				</Suspense>
		</div>
	);
};