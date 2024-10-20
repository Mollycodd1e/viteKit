import { jsx as _jsx } from "react/jsx-runtime";
import s from './HomePage.module.scss';
const HomePage = () => {
    return (_jsx("div", { className: s.root }));
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
                <div
                    style={{
                        display: 'flex',
                        gap: '20px',
                        justifyContent: 'center',
                        flexDirection: 'column',
                        margin: '20px 0',
                    }}>
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
            </>
            )
        </div> */
    }
};
export default HomePage;
