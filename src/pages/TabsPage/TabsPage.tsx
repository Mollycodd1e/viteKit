import { useState } from 'react'
import { FieldInput, SliderNavigation, TabSelect, TabSwitcher } from '../../main'
import s from './TabsPage.module.scss'

const TabsPage = () => {
	const [activeTab, setActiveTab] = useState('C мебелью')
	// const [checkedRoute, setCheckedRoute] = useState<number>(0)

	const tabList = ['C мебелью', 'C размерами', 'План этажа', 'Ген. план']
	const tabs = ['Студия', '1', '2', '3', '4+']

	// const destinationList = [
	// 	{
	// 		station: 'Швабра',
	// 		color: 'green',
	// 		routes: [
	// 			{
	// 				text: '100 минут в пути',
	// 				icon: 'car',
	// 			},
	// 			{
	// 				text: 'часик',
	// 				icon: 'walk',
	// 			},
	// 		],
	// 	},
	// 	{
	// 		station: 'Метро',
	// 		color: 'red',
	// 		routes: [
	// 			{
	// 				text: 'часик',
	// 				icon: 'walk',
	// 			},
	// 		],
	// 	},
	// ]

	return (
		<div className={s.root}>
			<TabSwitcher>
				{tabs.map((m, i) => {
					return (
						<TabSwitcher.Item
							key={i}
							value={m}>
							{m}
						</TabSwitcher.Item>
					)
				})}
			</TabSwitcher>
			<div className={s.tabsShort}>
				<FieldInput label='Количество спален'>
					<TabSwitcher>
						{tabs.map((m, i) => {
							return (
								<TabSwitcher.Item
									key={i}
									value={m}
									addItemClassName={i === 0 ? s.gg : ''}>
									{m}
								</TabSwitcher.Item>
							)
						})}
					</TabSwitcher>
				</FieldInput>
			</div>
			<div>
				<TabSwitcher col>
					{tabs.map((m, i) => {
						return (
							<TabSwitcher.Item
								key={i}
								value={m}>
								{m}
							</TabSwitcher.Item>
						)
					})}
				</TabSwitcher>
			</div>
			<div className={s.tabsShort}>
				<TabSwitcher col>
					{tabs.map((m, i) => {
						return (
							<TabSwitcher.Item
								key={i}
								value={m}>
								{m}
							</TabSwitcher.Item>
						)
					})}
				</TabSwitcher>
			</div>
			<div className={s.tabSelectWrapper}>
				<TabSelect variant='whiteFill'>
					{tabList.map((m, i) => {
						return (
							<TabSelect.Item
								name='type'
								key={i}
								checked={activeTab === m}
								onChange={() => setActiveTab(m)}
								value={m}>
								{m}
							</TabSelect.Item>
						)
					})}
				</TabSelect>
			</div>
			{/* <div className={s.destinationWrapper}>
				{destinationList.map((item, i) => (
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
			</div> */}

			<SliderNavigation
				goNext={() => {}}
				arr={[1, 2, 3]}
				indexSlide={0}
				goPrev={() => {}}
			/>
		</div>
	)
}

export default TabsPage
