exports.calculate = (birthdate) => {
    const date = new Date(birthdate)
    const year = date.getFullYear()
    const yearNow = new Date().getFullYear()
    const age = yearNow - year
    const minor =  age < 18
    return minor
}