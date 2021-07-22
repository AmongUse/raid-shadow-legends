namespace SpriteKind {
    export const Ego = SpriteKind.create()
    export const Genos = SpriteKind.create()
}
controller.player2.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 3 1 3 . . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . 2 1 1 1 2 . . . . . 
        . . . . . . 2 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite2, 0, -200)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Genos, function (sprite, otherSprite) {
    info.player1.changeLifeBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Ego, function (sprite, otherSprite) {
    info.player2.changeLifeBy(-1)
})
controller.player1.onButtonEvent(ControllerButton.A, ControllerButtonEvent.Pressed, function () {
    projectile = sprites.createProjectileFromSprite(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 2 1 2 . . . . . . 
        . . . . . . . 3 1 3 . . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . 2 1 1 1 2 . . . . . 
        . . . . . . 2 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 3 1 1 1 3 . . . . . 
        . . . . . . 2 3 1 3 2 . . . . . 
        . . . . . . . 2 2 2 . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `, mySprite, 0, 200)
})
controller.player2.onEvent(ControllerEvent.Connected, function () {
    controller.player2.moveSprite(mySprite2)
    scene.cameraFollowSprite(mySprite2)
})
controller.player1.onEvent(ControllerEvent.Connected, function () {
    controller.player1.moveSprite(mySprite)
    scene.cameraFollowSprite(mySprite)
})
let projectile: Sprite = null
let mySprite2: Sprite = null
let mySprite: Sprite = null
info.setLife(3)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . a a a a a a . . . . 
    . . . . . . 5 5 7 5 a a . . . . 
    . . . . 3 3 5 7 5 7 5 5 3 3 . . 
    . . . . f . 5 7 5 5 5 5 . 3 . . 
    . . . . f . 5 7 a 5 a a . 3 . . 
    . . f f f . a 5 5 a 5 a . . . . 
    . . . . f . . . . . . . . . . . 
    . . . . f . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Genos)
mySprite2 = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . f . . . . . . . . . . . 
    . . . . f . . . . . . . . . . . 
    . . f f f . a 5 5 a 5 a . . . . 
    . . . . f . 5 7 a 5 a a . 3 . . 
    . . . . f . 5 7 5 5 5 5 . 3 . . 
    . . . . 3 3 5 7 5 7 5 5 3 3 . . 
    . . . . . . 5 5 7 5 a a . . . . 
    . . . . . . a a a a a a . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    `, SpriteKind.Ego)
controller.player1.moveSprite(mySprite)
tiles.setTilemap(tilemap`level1`)
mySprite.setPosition(126, 10)
mySprite2.setPosition(126, 240)
