import s from './LotCard.module.scss'
import {ILotCard} from './LotCard.types'
import LotImage from './../assets/testLot.webp'
import {Text} from '../../Text'
import {checkBedroomsCount} from '../utils/checkBedroomsCount'
import {NewIcon} from '../../NewIcon'
import {Tag} from '../../Tag'
import {Button} from '../../Button'
import {formatPrice} from '../utils/formatPrice'
import {formatPayment} from '../utils/monthlyPayment'
import {OFFICE_TYPES} from '../utils/const'
import classNames from 'classnames'

const cx = classNames.bind(s)

export const LotCard = ({
                            lot,
                            handleBtnForm,
                            handleFullScreenBtn,
                            btnDisabled,
                            addClassname,
                            orientation = 'horizontal',
                            btnName = 'Уточнить детали',
                            imgNode
                        }: ILotCard) => {
    const {
        area,
        floor,
        floorsNumber,
        housing,
        bedroomsCount,
        number,
        isDecoration,
        sellingPrice,
        sellingPricePerMeter,
        interiorPlanImg,
        mortgageMonthlyPayment,
        workPlacesCount,
        type,
        direction,
        floorPlanImg,
        discount,
        sellingPriceBeforeDiscount,
    } = lot

    const isOffice = direction === 1
    const areaStr = area + ' ' + 'м²'
    const floorStr = floor + ' ' + 'из' + ' ' + floorsNumber

    if (orientation === 'vertical') {
        return (
            <div className={s.verticalWrapper}>
                <div className={cx(s.root, addClassname)}>
                    {imgNode ? imgNode : <img
                        className={s.img}
                        loading='lazy'
                        alt={'floor plan image'}
                        src={interiorPlanImg ?? floorPlanImg ?? LotImage}
                    />}

                    <div className={s.title}>{number}</div>

                    <ul className={s.features}>
                        {area && (
                            <li className={s.feature}>
                                <p className={s.text}>{'Площадь'}</p>
                                <p className={s.value}>{area}</p>
                            </li>
                        )}

                        {housing && (
                            <li className={s.feature}>
                                <p className={s.text}>{'Площадь'}</p>
                                <p className={s.value}>{housing}</p>
                            </li>
                        )}

                        {floor && (
                            <li className={s.feature}>
                                <p className={s.text}>{'Этаж'}</p>
                                <p className={s.value}>{floor}</p>
                            </li>
                        )}
                    </ul>

                    <div className={s.bot}>
                        <p className={s.price}>{'Цена'}</p>
                        <p className={s.priceValue}>{btnName}</p>
                    </div>
                </div>
            </div>
        )
    } else
        return (
            <div className={cx(s.root, addClassname)}>
                <div className={s.lotImageWrapper}>
                    {imgNode ? imgNode : <img
                        loading='lazy'
                        src={interiorPlanImg ?? floorPlanImg ?? LotImage}
                        width={311}
                        height={224}
                    />}
                </div>
                <div className={s.lotInfoWrapper}>
                    <div className={s.monthlyWrapper}>
                        <Text
                            className={s.infoHeader}
                            html={`${
                                isOffice && type
                                    ? OFFICE_TYPES[type as keyof typeof OFFICE_TYPES]
                                    : checkBedroomsCount(bedroomsCount)
                            }, ${number}`}
                        />
                        {mortgageMonthlyPayment && (
                            <div className={s.monthlyPayment}>{formatPayment(mortgageMonthlyPayment)}</div>
                        )}
                    </div>
                    {!isDecoration && (
                        <div className={s.decor}>
                            {!isOffice && (
                                <>
                                    <NewIcon name={'withoutDecor'}/>
                                    <span>Без отделки</span>
                                </>
                            )}
                            {isOffice && (workPlacesCount === 0 || workPlacesCount) && (
                                <span>{`${workPlacesCount} рабочих мест`}</span>
                            )}
                        </div>
                    )}
                    <div className={s.lotPropertyListDesktop}>
                        <Tag variant='gray'>{areaStr}</Tag>
                        <Tag variant='gray'>{housing}</Tag>
                        <Tag variant='gray'>{'Этаж' + ' ' + floorStr}</Tag>
                    </div>
                    <ul className={s.lotPropertyListMobile}>
                        <li className={s.lotPropertyItem}>
                            <div>Площадь</div>
                            <div>{areaStr}</div>
                        </li>
                        <li className={s.lotPropertyItem}>
                            <div>{housing?.split(' ')[0]}</div>
                            <div>{housing?.split(' ')[1]}</div>
                        </li>
                        <li className={s.lotPropertyItem}>
                            <div>Этаж</div>
                            <div>{floorStr}</div>
                        </li>
                    </ul>
                </div>
                <div className={s.lotPriceWrapper}>
                    <div className={s.discountWrapper}>
                        {discount && sellingPrice && sellingPriceBeforeDiscount && (
                            <div className={s.discountPrice}>
                                <span>{formatPrice(sellingPriceBeforeDiscount ?? sellingPrice)}</span>
                                <Tag
                                    additionalClass={s.discountTag}
                                    variant='red'
                                    size='tiny'>
                                    {'-' + Number(discount) + '%'}
                                </Tag>
                            </div>
                        )}
                        <div>{formatPrice(sellingPrice)}</div>
                    </div>
                    {sellingPricePerMeter && (
                        <div className={s.lotPricePerMetr}>{formatPrice(sellingPricePerMeter, true)}</div>
                    )}
                    <div className={s.btnWrapper}>
                        <Button
                            as='button'
                            disabled={btnDisabled}
                            variant='gray'
                            additionalClass={s.fullscreenBtn}
                            onClick={(e) => {
                                e.preventDefault()
                                handleFullScreenBtn && handleFullScreenBtn()
                            }}>
                            <NewIcon
                                name='fullscreen'
                                color='#141416'
                                size='20'
                            />
                        </Button>
                        <Button
                            as='button'
                            size='medium'
                            variant='blue'
                            width='full'
                            onClick={(e) => {
                                e.preventDefault()
                                handleBtnForm()
                            }}>
                            {btnName}
                        </Button>
                    </div>
                </div>
            </div>
        )
}
