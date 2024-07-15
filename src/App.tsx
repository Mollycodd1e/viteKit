import {useState} from 'react'
import {Button} from './components/Button'
import {DestinationTab} from './components/DestinationTab'
import {NewIcon} from './components/NewIcon'
import {RoundButton} from './components/RoundButton'
import {Tag} from './components/Tag'
import {Input} from './components/Input'
import {Switcher} from './components/Switcher'
import {Flex} from './components/Flex'
import {Modal} from './components/Modal'
import s from './app.module.scss'

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
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

    const menuList = [
        {
            title: 'О компании',
            link: '#about',
        },
        {
            title: 'Услуги',
            link: '#services',
        },
        {
            title: 'Новости',
            link: '#news',
        },
        {
            title: 'Вакансии',
            link: '#vacancy',
        },
        {
            title: 'Контакты',
            link: '#contacts',
        },
        {
            title: 'О компании',
            link: '#about',
        },
        {
            title: 'Услуги',
            link: '#services',
        },
        {
            title: 'Новости',
            link: '#news',
        },
        {
            title: 'Вакансии',
            link: '#vacancy',
        },
        {
            title: 'Контакты',
            link: '#contacts',
        },
        {
            title: 'О компании',
            link: '#about',
        },
        {
            title: 'Услуги',
            link: '#services',
        },
        {
            title: 'Новости',
            link: '#news',
        },
        {
            title: 'Вакансии',
            link: '#vacancy',
        },
        {
            title: 'Контакты',
            link: '#contacts',
        },
    ]
    return (
        <>
            <div
                style={{
                    width: '100%',
                    height: '56px',
                    background: 'white',
                    position: 'fixed',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                }}>
                Меню
                <div onClick={() => setIsModalOpen((prev) => !prev)}>нажми</div>
            </div>
            {destinatinList.map((item, i) => (
                <DestinationTab
                    key={i}
                    checked={i === checkedRoute}
                    onChange={() => setCheckedRoute(i)}
                    destination={{destName: item.station, color: item.color}}
                    routes={item.routes.map((m) => {
                        return {type: <NewIcon name={m.icon}/>, text: m.text}
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
            <RoundButton iconName='plus'/>
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
                post={<NewIcon name='user'/>}>
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
            <Tag size={'large'} variant='shade'>STONE Towers</Tag>
            <div style={{padding: '20px', backgroundColor: '#141416'}}>
                <Input
                    size_s={'small'}
                    variant='dark'
                    pre={'От'}
                    post={'м²'}
                    type='number'
                    placeholder='шушпинчик'
                />
            </div>
            <div style={{padding: '20px', backgroundColor: 'gray'}}>
                <Input
                    size_s={'small'}
                    variant='light'
                    pre={'От'}
                    post={'м²'}
                    type='number'
                    placeholder='шушпинчик'
                />
            </div>
            <div style={{padding: '20px', backgroundColor: 'orange'}}>
                <Switcher
                    isActive={isActive}
                    onClick={() => setIsActive((prev) => !prev)}>
                    Приветики
                </Switcher>
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
                        post={<NewIcon name='user'/>}>
                        Войти в кабинет
                    </Button>
                </Flex>
            </Modal>

        </>
    )
}

export default App

