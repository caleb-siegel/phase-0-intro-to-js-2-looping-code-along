// Code your solutions in this file

const names = ["Guadalupe", "Ollie", "Aki"]

function writeCards (names, event) {
    const thankYous = []
    for (let i = 0; i < names.length; i++) {
        thankYous.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
        console.log(i)
    }
    return thankYous
}

writeCards(names, "Birthday")

function countDown () {
for (let countDown = 10; countDown >= 0; countDown --) {
    console.log(countDown)
}
}

countDown ()