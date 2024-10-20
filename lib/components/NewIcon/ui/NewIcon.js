import { jsx as _jsx } from "react/jsx-runtime";
import Loader from './../assets/Loader.svg';
import Filter from './../assets/Filter.svg';
import FullScreen from './../assets/Fullscreen.svg';
import TwoArrows from './../assets/TwoArrows.svg';
import Heart from './../assets/Heart.svg';
import Download from './../assets/Download.svg';
import User from './../assets/User.svg';
import SquareMeter from './../assets/SquareMeter.svg';
import Check from './../assets/Check.svg';
import Close from './../assets/Close.svg';
import Circle from './../assets/Circle.svg';
import Layers from './../assets/Layers.svg';
import LayersFilled from './../assets/LayersFilled.svg';
import Minus from './../assets/Minus.svg';
import Moon from './../assets/Moon.svg';
import Play from './../assets/Play.svg';
import Plus from './../assets/Plus.svg';
import Ruble from './../assets/Ruble.svg';
import Share from './../assets/Share.svg';
import Sun from './../assets/Sun.svg';
import Star from './../assets/Star.svg';
import StarFilled from './../assets/StarFilled.svg';
import Burger from './../assets/Burger.svg';
import Phone from './../assets/Phone.svg';
import PhoneFilled from './../assets/PhoneFilled.svg';
import Call from './../assets/Call.svg';
import Callback from './../assets/Callback.svg';
import Telegram from './../assets/Telegram.svg';
import WhatsApp from './../assets/WhatsApp.svg';
import DirectionDown from './../assets/DirectionDown.svg';
import ArrowLong from './../assets/ArrowLong.svg';
import BurgerClose from './../assets/BurgerClose.svg';
import Auto from './../assets/Auto.svg';
import Pedestrian from './../assets/Pedestrian.svg';
import Park from './../assets/Park.svg';
import Metro from './../assets/Metro.svg';
import Food from './../assets/Food.svg';
import Building from './../assets/Building.svg';
import Case from './../assets/Case.svg';
import Sport from './../assets/Sport.svg';
import WithoutDecor from '../assets/WithoutDecor.svg';
import Play2 from './../assets/Play2.svg';
import SelectChecked from './../assets/SelectChecked.svg';
import SelectUnchecked from './../assets/SelectUnchecked.svg';
import ArrowShort from './../assets/ArrowShort.svg';
import Search from './../assets/Search.svg';
import ArrowRight from './../assets/arrowRight.svg';
import Redo from './../assets/Redo.svg';
export const iconTypes = {
    arrowRight: () => _jsx(ArrowRight, {}),
    loader: () => _jsx(Loader, {}),
    filter: () => _jsx(Filter, {}),
    fullscreen: () => _jsx(FullScreen, {}),
    twoArrows: () => _jsx(TwoArrows, {}),
    heart: () => _jsx(Heart, {}),
    download: () => _jsx(Download, {}),
    user: () => _jsx(User, {}),
    squareMeter: () => _jsx(SquareMeter, {}),
    check: () => _jsx(Check, {}),
    close: () => _jsx(Close, {}),
    layers: () => _jsx(Layers, {}),
    layersFilled: () => _jsx(LayersFilled, {}),
    minus: () => _jsx(Minus, {}),
    moon: () => _jsx(Moon, {}),
    play: () => _jsx(Play, {}),
    plus: () => _jsx(Plus, {}),
    ruble: () => _jsx(Ruble, {}),
    share: () => _jsx(Share, {}),
    sun: () => _jsx(Sun, {}),
    star: () => _jsx(Star, {}),
    starFilled: () => _jsx(StarFilled, {}),
    burger: () => _jsx(Burger, {}),
    phone: () => _jsx(Phone, {}),
    phoneFilled: () => _jsx(PhoneFilled, {}),
    call: () => _jsx(Call, {}),
    callback: () => _jsx(Callback, {}),
    telegram: () => _jsx(Telegram, {}),
    whatsapp: () => _jsx(WhatsApp, {}),
    directionDown: () => _jsx(DirectionDown, {}),
    burgerClose: () => _jsx(BurgerClose, {}),
    arrowLong: () => _jsx(ArrowLong, {}),
    auto: () => _jsx(Auto, {}),
    pedestrian: () => _jsx(Pedestrian, {}),
    park: () => _jsx(Park, {}),
    metro: () => _jsx(Metro, {}),
    food: () => _jsx(Food, {}),
    building: () => _jsx(Building, {}),
    case: () => _jsx(Case, {}),
    sport: () => _jsx(Sport, {}),
    withoutDecor: () => _jsx(WithoutDecor, {}),
    play2: () => _jsx(Play2, {}),
    selectChecked: () => _jsx(SelectChecked, {}),
    selectUnchecked: () => _jsx(SelectUnchecked, {}),
    arrowShort: () => _jsx(ArrowShort, {}),
    search: () => _jsx(Search, {}),
    circle: () => _jsx(Circle, {}),
    redo: () => _jsx(Redo, {}),
};
export const NewIcon = ({ name, size = '24', color, strokeWidth, additionalClass, deg, }) => {
    const IconComponent = iconTypes[name];
    return (_jsx("div", { style: {
            width: size + 'px',
            height: size + 'px',
            transform: `rotate(${deg}deg)`,
            color: color,
            strokeWidth: strokeWidth,
        }, className: additionalClass ?? '', children: _jsx(IconComponent, { width: size, height: size, fill: color, stroke: color, strokeWidth: strokeWidth }) }));
};
