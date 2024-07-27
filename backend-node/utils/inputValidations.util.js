export const isNumber = (value) => {
    return isNaN(value) ? false : true;
}

export const isLettersOnly = (value) => {
    return /^[A-Za-z]+$/.test(value) ? true : false;
}

export const isInLengthRange = (value, minLength, maxLength) => {
    return (value.length < minLength || value.length > maxLength) ? false : true;
}
