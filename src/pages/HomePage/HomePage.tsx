import { Link } from 'react-router-dom'
import s from './HomePage.module.scss'

const HomePage = () => {
	return (
		<div className={s.root}>
			<Link
				className={s.link}
				to='/buttons'>
				Кнопки
			</Link>
		</div>
	)
	{
		/* 			
			<>
				<div
					style={{
						width: '100%',
						height: '56px',
						background: 'white',
						display: 'flex',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					Меню
					<div onClick={() => setIsModalOpen((prev) => !prev)}>нажми</div>
				</div>
				<div onClick={() => setmodal1((prev) => !prev)}>Каскад модалок</div>
				<Modal
					isOpen={modal1}
					emitIsOpen={() => setmodal1((prev) => !prev)}>
					<Button
						as='button'
						onClick={() => setmodal2((prev) => !prev)}>
						вайди
					</Button>
				</Modal>
				<div style={{ margin: '20px 0' }}>
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
				<Modal
					isOpen={modal2}
					emitIsOpen={() => setmodal2((prev) => !prev)}
					leaveDisableScroll>
					<Button
						as='button'
						onClick={() => setmodal2((prev) => !prev)}>
						выйди
					</Button>
				</Modal>
				<div
					style={{
						display: 'flex',
						gap: '20px',
						justifyContent: 'center',
						flexDirection: 'column',
						margin: '20px 0',
					}}>
					<ProjectCardSkeleton></ProjectCardSkeleton>
					<LotCardSkeleton />
					<LotCard lot={testLot}></LotCard>
				</div>
				<div style={{ margin: '20px 0' }}>
					<Button
						as='button'
						variant='sokolniki'
						onClick={() => setIsIconOpen((prev) => !prev)}>
						ТУТ ВСЕ ИКОНКИ
					</Button>
				</div>

				<div style={{ margin: '20px 0' }}>
					<Select
						options={options}
						onChange={handleClick}
						placeholder='Выберите корпус'
						onBlur={handleBlur}></Select>
				</div>
				<div
					style={{
						width: 'max-content',
						position: 'relative',
						display: 'flex',
						gap: '20px',
						margin: '0 auto',
					}}>
					<Button
						as='button'
						variant='blue'>
						Фильтры
					</Button>
					<SortSelect
						options={sort_options}
						selectedOption={sort_options[0]}
						openOnTop
						//@ts-expect-error кастомный эвент
						onChange={(e) => setSort(e)}></SortSelect>
				</div>
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
					variant='gray'
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
					variant='volodiyaLight'
					size='large'
					width='full'>
					Оставить сообщение
				</Button>
				<div
					style={{
						display: 'flex',
						flexWrap: 'wrap',
						gap: '8px',
						width: '100%',
						margin: '16px 0',
					}}>
					<MetroTag metro={metro} />
					<MetroTag metro={metro} />
					<MetroTag metro={metro} />
				</div>
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
					size='large'
					post={
						<NewIcon
							name='play2'
							size='24'
						/>
					}>
					Оставить обращение
				</Button>
				<div style={{ width: '100%', margin: '40px 0', backgroundColor: 'white' }}>
					<LotCard lot={testLot}></LotCard>
				</div>
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
				<Tag
					variant='gray'
					size='tiny'
					size_l='preLarge'>
					STONE Towers
				</Tag>
				<Tag
					size={'large'}
					variant='shade'
					size_l='large'>
					STONE Towers
				</Tag>
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
				<div style={{ padding: '20px', backgroundColor: '#ffffff' }}>
					<Input
						size_s={'small'}
						variant='light'
						pre={'От'}
						post={'м²'}
						type='text'
						placeholder='+7 (- - -) - - -  - -  - -'
					/>
				</div>

				<div style={{ margin: '20px', backgroundColor: '#ffffff' }}>
					<FieldInput label='Лейбл'>
						<Input
							size_s={'small'}
							variant='light'
							pre={'От'}
							post={'м²'}
							type='text'
							placeholder='+7 (- - -) - - -  - -  - -'
						/>
					</FieldInput>
				</div>
				<div style={{ padding: '20px', backgroundColor: 'orange' }}>
					<Switcher
						isActive={isActive}
						onClick={() => setIsActive((prev) => !prev)}>
						Приветики
					</Switcher>
				</div>
				<div style={{ padding: '20px', backgroundColor: 'white' }}>
					<div style={{ padding: '20px', maxWidth: '327px' }}>
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
					<div style={{ padding: '20px' }}>
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
					<div style={{ padding: '20px', maxWidth: '327px' }}>
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
				</div>
				<div style={{ padding: '20px', backgroundColor: 'orange' }}>
					<Logo
						variant='white'
						uk
					/>
				</div>
				<div style={{ padding: '20px', backgroundColor: 'white' }}>
					<Input width='full'></Input>
					<FieldInput label='Количество metrov'>
						<GroupedInputs>
							<Input
								size_s={'small'}
								pre={'От'}
								variant='light'
								type='number'
								placeholder='70'
							/>
							<Input
								size_s={'small'}
								variant='light'
								post={'м²'}
								type='number'
								placeholder='50'
							/>
						</GroupedInputs>
					</FieldInput>
				</div>
				<Flex
					jc='between'
					gap='1'>
					<div>1</div>
					<div>2</div>
					<div>3</div>
					<div>4</div>
					<div>5</div>
				</Flex>

				<MetroLabel metro={metro} />

				<Modal
					isOpen={isModalOpen}
					emitIsOpen={() => {
						setIsModalOpen((prev) => !prev)
					}}
					additionalClass={s.modal}>
					<Flex additionalClass={s.modalContent}>
						<Flex additionalClass={s.menuList}>
							{menuList.map((m, i) => {
								return (
									<a
										key={i}
										href={m.link}
										className={s.menuItem}
										onClick={() => setIsModalOpen(false)}>
										{m.title}
									</a>
								)
							})}
						</Flex>
						<Button
							as='link'
							href='https://stone.ru'
							variant='black'
							size='large'
							width='full'
							post={<NewIcon name='user' />}>
							Войти в кабинет
						</Button>
					</Flex>
				</Modal>

				<Modal
					isOpen={isIconOpen}
					createPortalObj={{ domNode: document.body }}
					emitIsOpen={() => setIsIconOpen((prev) => !prev)}
					isClickOutside={true}>
					<div
						style={{
							background: 'white',
							padding: '40px',
						}}
						onClick={(e) => e.stopPropagation()}>
						{Array.isArray(Object.keys(iconTypes))
							? Object.keys(iconTypes).map((e, i) => {
									return (
										<div
											style={{ width: '100%', display: 'flex', justifyContent: 'space-between' }}>
											<NewIcon
												key={i}
												name={e}
												size='16'
											/>
											{e ?? ''}
										</div>
									)
							  })
							: null}
					</div>
				</Modal>
			</>
			)
		</div> */
	}
}

export default HomePage

