

import { DCardActor } from '../src/DCard.js';
import { TextureSurface } from '../src/DSurface.js';
import { q_euler } from "@croquet/worldcore";
const SCALE = 0.025;
const SQUARE = 0.125;

export function createChess(translation, scale, rotation){
    let chessSurface = TextureSurface.create({url: './assets/images/chessboard.webp'});
    let svg = 'square-full.svg';
    let board = DCardActor.create(
    {
        cardShapeURL: './assets/SVG/'+svg,
        cardSurface: chessSurface,
        cardFullBright: false,
        cardDepth: 0.1,
        cardBevel:0.02,
        cardColor:[1,1,1], // white
        rotation:q_euler(-Math.PI/2,0,0),
        translation: translation,
        scale: scale,
        //rotation: rotation,
        cardShadow: true
    });

    let pawn  = DCardActor.create(
        {       
            model3d: './assets/3D/pawnlow.glb.zip',
            //cardSurface: chessLightSurface,
            cardFullBright: false,
            cardColor:[1,1,1], // white
            rotation:q_euler(-Math.PI/2, 0, 0),
            cardShadow:true,
            scale:[SCALE, SCALE, SCALE],
//            cardTranslation: [0,0.028,0.035],
            parent:board,
            translation: [-SQUARE*2.5,0,SQUARE*-2.5],
        });
        /*
    let king  = CardActor.create(
        {
            card3DURL: './assets/3D/kinglow.glb.zip',
            //cardSurface: chessLightSurface,
            cardFullBright: false,
            cardColor:[1,1,1], // white
            //cardRotation:q_euler(-Math.PI/2, 0, 0),
            cardShadow:true,
            cardScale:[SCALE, SCALE, SCALE],
            //cardTranslation: [0,-0.0004,-0.008],
            //cardTranslation: [0,-0.0004,0.108],
            cardTranslation: [SQUARE*0.5,0,SQUARE*-3.5],            
        });
    let queen  = CardActor.create(
        {
            card3DURL: './assets/3D/queenlow.glb.zip',
            //cardSurface: chessLightSurface,
            cardFullBright: false,
            cardColor:[1,1,1], // white
            //cardRotation:q_euler(-Math.PI/2, 0, 0),
            cardShadow:true,
            cardScale:[SCALE, SCALE, SCALE],
            //cardTranslation: [0.008,-0.007,0],
            //cardTranslation: [0.008,-0.007,0.2],
            cardTranslation: [-SQUARE*0.5,0,SQUARE*-3.5],
       });
    let bishop  = CardActor.create(
        {
            card3DURL: './assets/3D/bishoplow.glb.zip',
            //cardSurface: chessLightSurface,
            cardFullBright: false,
            cardColor:[1,1,1], // white
            //cardRotation:q_euler(-Math.PI/2, 0, 0),
            cardShadow:true,
            cardScale:[SCALE, SCALE, SCALE],
            //cardTranslation: [0,0.00,0],
            //cardTranslation: [0,0.00,0.3],
            cardTranslation: [-SQUARE*1.5,0,SQUARE*-3.5],
        });
    let knight  = CardActor.create(
        {
            card3DURL: './assets/3D/knightlow.glb.zip',
            //cardSurface: chessLightSurface,
            cardFullBright: false,
            cardColor:[1,1,1], // white
            cardRotation:q_euler(0, Math.PI/2, 0),
            cardShadow:true,
            cardScale:[SCALE, SCALE, SCALE],
            //cardTranslation: [0,0.02,0.4],
            cardTranslation: [-SQUARE*2.5,0,SQUARE*-3.5],
        });
    let rook  = CardActor.create(
        {
            card3DURL: './assets/3D/rooklow.glb.zip',
            //cardSurface: chessLightSurface,
            cardFullBright: false,
            cardColor:[1,1,1], // white
            //cardRotation:q_euler(-Math.PI/2, 0, 0),
            cardShadow:true,
            cardScale:[SCALE, SCALE, SCALE],
            //cardTranslation: [0,0.02,0.5],
            cardTranslation: [-SQUARE*3.5,0,SQUARE*-3.5],
        });
    console.log("--------CHESS--------")
    black.addCard(pawn);
    black.addCard(king);
    black.addCard(queen);
    black.addCard(bishop);
    black.addCard(knight);
    black.addCard(rook);
    */

}