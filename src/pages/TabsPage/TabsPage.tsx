import { useState } from 'react'
import { FieldInput, TabSelect, TabSwitcher } from '../../main'
import s from './TabsPage.module.scss'

const TabsPage = () => {
	const [activeTab, setActiveTab] = useState('C мебелью')

	const tabList = ['C мебелью', 'C размерами', 'План этажа', 'Ген. план']
	const tabs = ['Студия', '1', '2', '3', '4+']

	return (
		<div className={s.root}>
			<TabSwitcher>
				{tabs.map((m, i) => {
					return (
						<TabSwitcher.Item
							itemsLength={tabs.length}
							key={i}
							index={i}
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
									itemsLength={tabs.length}
									key={i}
									index={i}
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
								itemsLength={tabs.length}
								key={i}
								index={i}
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
								itemsLength={tabs.length}
								key={i}
								index={i}
								value={m}>
								{m}
							</TabSwitcher.Item>
						)
					})}
				</TabSwitcher>
			</div>

			<div className={s.whiteRow_apart}>
				<TabSwitcher
					variant={'whiteRow'}
					isApart={true}
					addClassName={s.row_apart}>
					{tabs.map((m, i) => {
						return (
							<TabSwitcher.Item
								width={i === 0 ? '135px' : undefined}
								width_m={i === 0 ? '96px' : undefined}
								width_l={i === 0 ? '155px' : undefined}
								itemsLength={tabs.length}
								key={i}
								index={i}>
								{m}
							</TabSwitcher.Item>
						)
					})}
				</TabSwitcher>
			</div>

			<div className={s.whiteRow_apart}>
				<TabSwitcher
					variant={'grayRow'}
					isApart={true}
					addClassName={s.row_apart}>
					{tabs.map((m, i) => {
						return (
							<TabSwitcher.Item
								width={i === 0 ? '135px' : undefined}
								width_m={i === 0 ? '96px' : undefined}
								width_l={i === 0 ? '155px' : undefined}
								itemsLength={tabs.length}
								key={i}
								index={i}>
								{m}
							</TabSwitcher.Item>
						)
					})}
				</TabSwitcher>
			</div>

			<div className={s.tabSelectWrapper}>
				<TabSelect variant='grayDesign'>
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

			<div className={s.tabSelectWrapper}>
				<TabSelect variant='whiteStroke'>
					{['для коммерции', 'для жилых'].map((m, i) => {
						return (
							<TabSelect.Item
								name='type'
								width={'160px'}
								key={i}
								withPadding={true}
								checked={activeTab === m}
								onChange={() => setActiveTab(m)}
								value={m}>
								{m}
							</TabSelect.Item>
						)
					})}
				</TabSelect>
			</div>
		</div>
	)
}

export default TabsPage
