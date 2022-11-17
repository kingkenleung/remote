input.onButtonPressed(Button.A, function () {
    radio.sendValue("left", 1)
})
input.onButtonPressed(Button.B, function () {
    radio.sendValue("right", 1)
})
let x = 0
let y = 0
radio.setGroup(1)
basic.forever(function () {
    y = input.rotation(Rotation.Pitch)
    x = input.rotation(Rotation.Roll)
})
basic.forever(function () {
    radio.sendValue("y", y)
    radio.sendValue("x", x)
})
