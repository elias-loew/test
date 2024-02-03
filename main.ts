let text_list: string[] = []
let list: Image = null
basic.forever(function () {
    let sprite: game.LedSprite = null
    basic.showLeds(`
        . # . # .
        # # # # #
        # # # # #
        . # # # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    led.plotBarGraph(
    1,
    10
    )
    null.delete()
    sprite.turn(Direction.Right, 45)
    game.pause()
    sprite.set(LedSpriteProperty.X, 0)
    text_list = ["a", "b", "c"]
    list = images.createBigImage(`
        # # # # # # # # # #
        # # # # # # # # # #
        # # # # # # # # # #
        # # # # # # # # # #
        # # # # # # # # # #
        `)
})
