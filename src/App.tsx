import { Button } from './components/Button'
import { DestinationTab } from './components/DestinationTag'
import { RoundButton } from './components/RoundButton'

function App() {
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
			<DestinationTab destinationName='Метро' size='large'/>
		</>
	)
}

export default App

