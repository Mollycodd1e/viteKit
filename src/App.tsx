import { useState } from 'react'
import { Button } from './components/Button'
import { DestinationTab } from './components/DestinationTag'
import { NewIcon } from './components/NewIcon'
import { RoundButton } from './components/RoundButton'

function App() {
	const destinatinList = [
		{
			station: 'Швабра',
			color: 'green',
			routes: [
				{
					text: '100 минут в пути',
					icon: 'car',
				},
				{
					text: 'часик',
					icon: 'walk',
				},
			],
		},
		{
			station: 'Метро',
			color: 'red',
			routes: [
				{
					text: 'часик',
					icon: 'walk',
				},
			],
		},
	]

	const [checkedRoute, setCheckedRoute] = useState<number>(0)

	return (
		<>
			<Button
				size='small'
				size_m='medium'
				size_l='large'
				width='auto'
				pre={<span>L</span>}
				variant='sokolniki'
				post={<span>R</span>}>
				Приветики
			</Button>
			<div> sdf</div>
			<div> sdf</div>
			<RoundButton
				size='small'
				size_m='medium'
				size_l='large'
				iconName='case'
				color='red'
			/>
			<div> sdf</div>
			<div> sdf</div>
			{destinatinList.map((item, i) => (
				<DestinationTab
					key={i}
					checked={i === checkedRoute}
					onChange={() => setCheckedRoute(i)}
					destination={{ destName: item.station, color: item.color }}
					routes={item.routes.map((m) => {
						return { type: <NewIcon name={m.icon} />, text: m.text }
					})}
					size='large'
					size_m='large'
					size_l='medium'
				/>
			))}
		</>
	)
}

export default App

