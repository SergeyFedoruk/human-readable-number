module.exports = function toReadable (number) {
    let limit = 1000000000000, t = 0
    if (number === 0) {
        return ("zero")
    }
    let first_twenty = ["", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "ten", "eleven",
        "twelve", "thirteen", "fourteen", "fifteen", "sixteen", "seventeen", "eighteen", "nineteen"]

    let tens = ["", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"]

    if (number < 20) {
        return (first_twenty[number])

    }
    let answer = ""
    let i = number
    while (i > 0) {

        let curr_hun = Math.floor(i / limit)

        while (curr_hun === 0) {
            i %= limit

            limit /= 1000

            curr_hun = Math.floor(i / limit)

            t += 1
        }

        let flr = Math.floor(curr_hun / 100);

        if (curr_hun > 99)
            answer += (first_twenty[flr] + " hundred ")

        curr_hun = curr_hun % 100
        if (curr_hun > 0 && curr_hun < 20)
            answer += (first_twenty[curr_hun] + "")
        else if (curr_hun % 10 === 0 && curr_hun !== 0) {
            flr = Math.floor(curr_hun / 10);
            answer += (tens[flr - 1] + "")
        } else if (curr_hun > 19 && curr_hun < 100) {
            flr = Math.floor(curr_hun / 10);
            answer += (tens[flr - 1] + " " +
                first_twenty[curr_hun % 10] + "")
        }
        if (t < 4)
            answer += (multiplier[t] + " ")

        i = i % limit
        limit = Math.floor(limit / 1000)
    }

    return (answer.trim())
}
