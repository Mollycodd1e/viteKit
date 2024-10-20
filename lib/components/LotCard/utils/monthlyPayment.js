export const formatPayment = (payment) => {
    return `Ежемесячный платеж от ${Number(payment.replace(/\s/g, '')).toLocaleString()} ₽`;
};
