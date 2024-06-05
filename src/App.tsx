import { useState } from 'react'
import { Button } from './components/Button'
import { DestinationTab } from './components/DestinationTab'
import { NewIcon } from './components/NewIcon'
import { RoundButton } from './components/RoundButton'
import { Tag } from './components/Tag'
import { Input } from './components/Input'
import { Switcher } from './components/Switcher'

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
	const [isActive, setIsActive] = useState<boolean>(false)
	return (
		<>
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
			<Button
				as='button'
				variant='black'
				size='small'>
				<NewIcon
					name='phoneFilled'
					size='16'
				/>
			</Button>
			<Button
				as='button'
				variant='gray'
				size='small'>
				<NewIcon
					name='user'
					size='16'
					color='#141416'
				/>
			</Button>
			<Button
				as='button'
				variant='gray'
				size='small'>
				<NewIcon
					name='burger'
					size='16'
					color='#141416'
				/>
			</Button>
			<Button
				as='button'
				variant='black'
				size='large'
				width='full'>
				Оставить сообщение
			</Button>
			<Button
				as='link'
				variant='gray'
				size='medium'
				href='https://google.com'>
				Подробнее
			</Button>
			<RoundButton iconName='plus' />
			<RoundButton
				iconName='arrowLong'
				deg='90'
			/>
			<RoundButton
				iconName='arrowLong'
				deg='-90'
			/>
			<Button
				as='link'
				href='https://google.com'
				variant='shade'
				size='large'
				post={
					<NewIcon
						name='whatsapp'
						size='24'
					/>
				}>
				Смотреть вакансии
			</Button>
			<Button
				as='button'
				variant='blue'
				size='large'>
				Оставить обращение
			</Button>
			<Button
				as='button'
				variant='black'
				size='large'
				post={<NewIcon name='user' />}>
				Войти в кабинет
			</Button>
			<Button
				as='button'
				variant='gray'
				size='small'>
				<NewIcon
					name='close'
					size='16'
					color='black'
				/>
			</Button>
			<Tag
				variant='shade'
				size='medium'
				size_m='tiny'
				size_l='medium'>
				2004
			</Tag>
			<Tag variant='shade'>STONE Towers</Tag>
			<div style={{ padding: '20px', backgroundColor: '#141416' }}>
				<Input
					size_s={'small'}
					variant='dark'
					pre={'От'}
					post={'м²'}
					type='number'
					placeholder='шушпинчик'
				/>
			</div>
			<div style={{ padding: '20px', backgroundColor: 'gray' }}>
				<Input
					size_s={'small'}
					variant='light'
					pre={'От'}
					post={'м²'}
					type='number'
					placeholder='шушпинчик'
				/>
			</div>
			<div style={{ padding: '20px', backgroundColor: 'orange' }}>
				<Switcher
					isActive={isActive}
					onClick={() => setIsActive((prev) => !prev)}>Приветики</Switcher>
			</div>
		</>
	)
}

export default App

