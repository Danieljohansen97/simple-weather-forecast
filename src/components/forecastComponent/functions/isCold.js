function isCold(tempC) {
    let answer = tempC <= 0 ? "primary" : "danger"
    return answer;
}

export default isCold;