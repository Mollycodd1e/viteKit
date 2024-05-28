import Button from './components/Button'
import MobileButton from './components/mobileButton/ui/MobileButton'
import NewIcon from './components/NewIcon'
import Tag from './components/Tag'

function App() {
	return (
		<>
			<Button
				size='large'
				width='auto'
				pre={<span>L</span>}
				variant='blue'>
				Приветики
			</Button>
			<Button
				size='large'
				width='full'
				variant='blue'>
				Покатики
			</Button>
			<MobileButton
				pre={<>L</>}
				width='full'>
				Сервис
			</MobileButton>
			<Tag
				variant='red'
				size='tiny'>
				-10%
			</Tag>
			<Tag
				variant='gray'
				size='medium'>
				79 м²
			</Tag>
			<NewIcon
				name='squareMeter'
				size='24'
				color='black'
			/>
			<NewIcon
				name='user'
				size='24'
				color='black'
			/>
			<Button>
				<NewIcon name='filter' />
			</Button>
		</>
	)
}

export default App

