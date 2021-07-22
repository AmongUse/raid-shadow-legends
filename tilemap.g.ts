// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`10001000010606060606060606060606060606030809090909090909090909090909090708090909090909090909090909090907020606060309090909090106060606040a0a0a0a080909090909070a0a0a0a0a0a0a0a0a080909090909070a0a0a0a0a0a0a0a0a080909090909070a0a0a0a0a0a0a0a0a080909090909070a0a0a0a0a0a0a0a0a080909090909070a0a0a0a0a0a0a0a0a080909090909070a0a0a0a0a0a0a0a0a080909090909070a0a0a0a0a0a0a0a0a080909090909070a0a0a0a0a01050505040909090909020505050503080909090909090909090909090909070809090909090909090909090909090702050505050505050505050505050504`, img`
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . 2 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
. . . . 2 . . . . . 2 . . . . . 
2 2 2 2 2 . . . . . 2 2 2 2 2 2 
2 . . . . . . . . . . . . . . 2 
2 . . . . . . . . . . . . . . . 
2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 2 
`, [myTiles.transparency16,sprites.dungeon.purpleOuterNorthWest,sprites.dungeon.purpleOuterSouthEast,sprites.dungeon.purpleOuterNorthEast,sprites.dungeon.purpleOuterSouthWest,sprites.dungeon.purpleOuterSouth1,sprites.dungeon.purpleOuterNorth1,sprites.dungeon.purpleOuterEast0,sprites.dungeon.purpleOuterWest0,sprites.dungeon.floorDark0,sprites.dungeon.darkGroundNorthWest1], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
