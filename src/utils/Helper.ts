export function handleCardType(cardType: string) {
    if (stringExists(cardType, 'Monster')) {
        return 'Monster'
    } else if (stringExists(cardType, 'Spell')) {
        return 'Spell'
    } else if (stringExists(cardType, 'Trap')) {
        return 'Trap'
    } else return null;

}

export function handleColor(cardType: string) {
    return (
        cardType === 'Spell' ? '#4AB5A6'
            : cardType === 'Trap' ? '#BC5C8F'
                : cardType === 'Monster' ? '#C1855E'
                    : '#fff'
    )

}

    //check if string exists or not
    function stringExists(cardName: string, cardType: string) {
        const exists = cardName
            .split(/\s+|\./) // split words based on whitespace or a '.'
            .includes(cardType);
        return exists;
    }
