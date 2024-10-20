export const formatPrice = (price, perMetr) => {
    if (!price)
        return 'Цена по запросу';
    const symbol = perMetr ? ' ₽/м²' : ' ₽';
    const res = Number(price).toLocaleString() + symbol;
    return res;
};
