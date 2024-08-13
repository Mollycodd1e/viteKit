import {Menu} from "../Menu.tsx";

import s from './s.module.scss'
import {NewIcon} from "../../../main.ts";
import {useState} from "react";

export const Header = () => {
    const [isFocused, setIsFocused] = useState(false);

    const [inputValue, setInputValue] = useState('');

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value);
    };

    const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
        if (event.key === 'Enter') {
            window.location.href = 'https://go-friend-go.narod.ru/'
        }
    };

    const handleFocus = () => {
        setIsFocused(true);
    };

    const handleBlur = () => {
        setTimeout(() => {
            if (!document?.activeElement?.classList.contains('close-button')) {
                setIsFocused(false);
            }
        }, 0);
    };
    const handleClose = () => {
        setInputValue('')
        setIsFocused(false)
    }

    return <nav className={s.root}>

        <div className={s.topSide}>
            <button className={s.burger}>
                <span></span>
                <span></span>
                <span></span>
            </button>

            <div className={s.logo}>
                <img src="https://ei.phncdn.com/www-static/images/pornhub_logo_straight.svg?cache=2024080801"
                     alt={'logo'}/>
            </div>

            <search className={s.search}>
                <button style={{margin: 'unset', border: 'unset', background: 'unset', padding: 'unset', cursor: 'pointer'}} onClick={(e) => {
                    e.preventDefault();
                    window.location.href = 'https://go-friend-go.narod.ru/'
                }}>
                    <NewIcon additionalClass={s.searchIcon} size={'24'} name={'search'}/>
                </button>

                <input
                    type="text"
                    value={inputValue} onChange={handleChange}
                    onKeyDown={handleKeyDown} onFocus={handleFocus} onBlur={handleBlur} className={s.searchInp}
                    placeholder={'Изучить stone-kit'}/>

                {isFocused &&
                    <button onClick={handleClose} className={`${s.closeBtn} close-button`}>
                        <NewIcon strokeWidth={'2.5'} color={'#252525'} size={'18'} name={'close'}/>
                    </button>}
            </search>

            <div className={s.avatarWrapper}>
                <NewIcon name={'user'} color={'#151515'} size={'18'}/>
            </div>
        </div>
        <Menu/>
    </nav>
}