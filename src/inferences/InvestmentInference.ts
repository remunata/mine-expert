const evaluateInvestment = async (profit: string, prospect: string) => {
    if (profit === 'bagus') {
        if (prospect === 'kurang') {
            return 'tidakLayak';
        } else {
            return 'layak';
        }
    } else if (profit === 'sedang' && prospect === 'bagus') {
        return 'layak';
    } else {
        return 'tidakLayak';
    }
}

export default evaluateInvestment;