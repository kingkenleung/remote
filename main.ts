let right = 0
let left = 0
let x = 0
let y = 0
radio.setGroup(10)
basic.forever(function () {
    y = input.rotation(Rotation.Pitch)
    x = input.rotation(Rotation.Roll)
})
basic.forever(function () {
    radio.sendValue("y", y)
    radio.sendValue("x", x)
    radio.sendValue("left", left)
    radio.sendValue("right", right)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        left = 1
    } else if (input.buttonIsPressed(Button.B)) {
        right = 1
    } else {
        left = 0
        right = 0
    }
})
