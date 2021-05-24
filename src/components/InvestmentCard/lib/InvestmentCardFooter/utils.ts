import moment from "moment";



export const calculateDays = (expiryDate: string) => {
    const expiry = moment(expiryDate);
    const todaysDate = moment("2017-05-24 23:59:59");
    const differece = expiry.diff(todaysDate, 'days');

    return differece;
}


export const formatCurrency = (value: string) => {
    return new Intl.NumberFormat('en-gb', {maximumSignificantDigits: 3}).format(parseInt(value));
}