///////CCCCCCC/////AAAAAAA////////NN/////NN/////VV/////////VVVV///////AAA////////SSSSSSSS////////
///////CC//////////A/////AA///////NN/NN//NN//////VVV/////VVV////////AA//AAA///////SS/////////////
///////CC/////////AAAA////AAA ////NN//NNNNN///////VVVV//VVVVV//////AA/////AAA/////SSSSSSS////////
///////CC/////////AAAAAAAAAAA/////NN////NN///////////VVVVV////////AAAAAAAAAAAA/////////SS///////
///////CCCCCCC///AAAA//////AAA////NN////NN///////////VVVV////////AAA/////////AAA/SSSSSSSS///////

const canvas = document.querySelector('canvas')        // A VARIÁVEL canvas é o elemento <canvas> HTML

canvas.width = window.innerWidth - 25           // DEFINA A LARGURA DO CANVAS
canvas.height = window.innerHeight - 25           // DEFINA A ALTURA DO CANVAS

const cH = canvas.height  // cH é uma constante global que se refere à altura do canvas
const cW = canvas.width   // cW é uma constante global que se refere ao comprimento do canvas
const cM = cW > cH ? cH : cW
var c = canvas.getContext('2d') // CONTEXTO DO CANVAS = 2d , elemento que tem métodos para desenhar no canvas

c.textBaseline = 'middle'
c.textAlign = 'center'

const fps = 1
var fallFps = 160


document.addEventListener('mousemove', onMouseUpdate, false);
document.addEventListener('mouseenter', onMouseUpdate, false);
var posY = null;
var posX = null;
function onMouseUpdate(e) {
    posX = e.pageX;
    posY = e.pageY;
}
const matrixWidth = 15
const matrixheight = 25

const square = function(){
    this.pos = 0
    this.color = 'rgba(255,0,100,0.2)' 
}
const defaultColor = 'rgba(100,255,255,0.31)'
const backgroundcolor = 'rgba(20,0,60,1)'
const backgroundPieceFieldColor = 'rgba(10,100,250,0.3)'
const backgroundPieceFieldLineColor = 'rgba(255,255,255)'
const ghostColor = 'rgba(255,100,255)'
const pieceBackgroundColor = 'rgba(255,255,255,0.4)'
const color1 = 'rgba(0,218,250)'
const color2 = 'rgba(180,218,0)'
const color3 = 'rgba(255,111,105)'
const color4 = 'rgba(250,180,0)'
const color5 = 'rgba(136,216,176)'

const emojiUP = ' ⬆'
const emojiDOWN = ' ⬇'
const emojiRIGHT = '➡'
const emojiLEFT = '⬅'

var matrixArray = [
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
    [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
]

const unit = ~~(cH / matrixheight)
const matrix = {
    x1: cW / 2 - matrixWidth/2*unit,
    y1: cH / 2 - matrixheight/2 * unit,
    x2: cW / 2 + matrixWidth / 2 * unit,
    y2: cH,
    unit: unit,
    width: matrixWidth,
    height: matrixheight
}

const param = unit

const pieceOne = {
    stage_1: [[0, 1, 0]
            , [0, 1, 0]
            , [0, 1, 1]],
    stage_2: [[0, 0, 0]
            , [1, 1, 1]
            , [1, 0, 0]],
    stage_3: [[1, 1, 0]
            , [0, 1, 0]
            , [0, 1, 0]],
    stage_4: [[0, 0, 0]
            , [0, 0, 1]
            , [1, 1, 1]],
    actualStage: 'stage_1',
    index: 1,
    color: color1
}
const pieceOneMod = {
    stage_1: [[0, 1, 0]
            , [0, 1, 0]
            , [1, 1, 0]],
    stage_2: [[0, 0, 0]
            , [1, 0, 0]
            , [1, 1, 1]],
    stage_3: [[0, 1, 1]
            , [0, 1, 0]
            , [0, 1, 0]],
    stage_4: [[0, 0, 0]
            , [1, 1, 1]
            , [0, 0, 1]],
    actualStage: 'stage_1',
    index: 1,
    color: color1  
}
const pieceTwo = {
    stage_1: [[0, 0, 0]
            , [0, 1, 1]
            , [1, 1, 0]],
    stage_2: [[0, 1, 0]
            , [0, 1, 1]
            , [0, 0, 1]],
    stage_3: [[0, 0, 0]
            , [0, 1, 1]
            , [1, 1, 0]],
    stage_4: [[0, 1, 0]
            , [0, 1, 1]
            , [0, 0, 1]],
    actualStage: 'stage_1',
    index: 1,
    color: color2     
}
const pieceTwoMod = {
    stage_1: [[0, 0, 0]
            , [1, 1, 0]
            , [0, 1, 1]],
    stage_2: [[0, 1, 0]
            , [1, 1, 0]
            , [1, 0, 0]],
    stage_3: [[0, 0, 0]
            , [1, 1, 0]
            , [0, 1, 1]],
    stage_4: [[0, 1, 0]
            , [1, 1, 0]
            , [1, 0, 0]],
    actualStage: 'stage_1',
    index: 1,
    color: color2    
}
const pieceThree = {
    stage_1: [[0, 0, 0]
            , [0, 1, 0]
            , [1, 1, 1]],
    stage_2: [[1, 0, 0]
            , [1, 1, 0]
            , [1, 0, 0]],
    stage_3: [[0, 0, 0]
            , [1, 1, 1]
            , [0, 1, 0]],
    stage_4: [[0, 0, 1]
            , [0, 1, 1]
            , [0, 0, 1]],
    actualStage: 'stage_1',
    index: 1,
    color: color3   
}
const pieceFour = {
    stage_1: [[0, 0, 0]
            , [0, 1, 1]
            , [0, 1, 1]],
    stage_2: [[0, 0, 0]
            , [0, 1, 1]
            , [0, 1, 1]],
    stage_3: [[0, 0, 0]
            , [0, 1, 1]
            , [0, 1, 1]],
    stage_4: [[0, 0, 0]
            , [0, 1, 1]
            , [0, 1, 1]],
    actualStage: 'stage_1',
    index: 1,
    color: color4   
}
const pieceFive = {
    stage_1: [[0, 1, 0, 0]
            , [0, 1, 0, 0]
            , [0, 1, 0, 0]
            , [0, 1, 0, 0]],
    stage_2: [[0, 0, 0, 0]
            , [0, 0, 0, 0]
            , [0, 0, 0, 0]
            , [1, 1, 1, 1]],
    stage_3: [[0, 1, 0, 0]
            , [0, 1, 0, 0]
            , [0, 1, 0, 0]
            , [0, 1, 0, 0]],
    stage_4: [[0, 0, 0, 0]
            , [0, 0, 0, 0]
            , [0, 0, 0, 0]
            , [1, 1, 1, 1]],
    actualStage: 'stage_1',
    index: 1,
    color: color5
}

function piece(piece, posX = ~~(matrixWidth/2) - 1, posY = 0){
    this.piece = piece
    this.posX = posX
    this.posY = posY
}

const piecesArray = [pieceOne, pieceTwo, pieceThree, pieceFour, pieceFive, pieceOneMod, pieceTwoMod]
var cont = 0
var time = 0
var points = 0
var area = 0
var rows = 0
var speedMode = true
var gameOver = false
var gamePaused = false
var showConfigBool = false
var countedd = true
var arrayOfGamePieces = new Array(4).fill().map(_ => piecesArray[~~(Math.random() * piecesArray.length)])
var gamePiece = new piece(arrayOfGamePieces.shift())
var initGame = false

arrayOfGamePieces.push(piecesArray[~~(Math.random() * piecesArray.length)])

var saveConfi = null

var timer = new Date().getTime()
var compareTime = 0


var configObject = {
    rightKey: 'ArrowRight',
    leftKey: 'ArrowLeft',
    turnClockWiseKey: 'ArrowUp',
    turnAntiClockWiseKey: 'ArrowDown',
    moveOneRowDownKey: 's',
    putPieceDownKey: ' ',
    movePieceFurtherLeft: 'a',
    movePieceFurtherRight: 'd',
    turn180Degre:'w'
}


function fillPiece(piece, posX = cW/2, posY = cH/2){
    const ar = piece[piece.actualStage] 
    for (let x in ar) {
        for (let y in ar[x]) {
            
            if (ar[x][y] == 1) {
                c.fillStyle = piece.color
                c.fillRect(posX + y * param, posY + x * param, matrix.unit, matrix.unit)
            }else{
                c.fillStyle = pieceBackgroundColor
                c.fillRect(posX + y * param, posY + x * param, matrix.unit, matrix.unit)
            }
        }
    }
}

function drawGame(array){
    c.fillStyle = backgroundPieceFieldColor
    c.fillRect(matrix.x2, 0, 190, 160 * 4 + matrix.unit)
    c.strokeStyle = backgroundPieceFieldLineColor
    c.lineWidth = 5
    c.strokeRect(matrix.x2, 2, 190, 160 * 4 + matrix.unit)
    
    for (let y in array) {
        for (let x in array[y]) {
            c.fillStyle = array[y][x].color            
            c.fillRect(matrix.x1 + x * matrix.unit, matrix.y1 + y * matrix.unit, matrix.unit - 1, matrix.unit - 1)
        }
    }
    
    var grd = c.createLinearGradient(0, 0, 0, cH);
    grd.addColorStop(0, arrayOfGamePieces[0].color);
    grd.addColorStop(1, gamePiece.piece.color);
    c.strokeStyle = grd
    c.lineWidth = 5
    c.strokeRect(matrix.x1 - 2.5, matrix.y1 - 2.5, matrix.x2 - matrix.x1 + 2.5, matrix.y2 - matrix.y1)

    for(let index in arrayOfGamePieces){
        if (arrayOfGamePieces[index][arrayOfGamePieces[index].actualStage].length  == 4){
            fillPiece(arrayOfGamePieces[index], matrix.x2 + 20, matrix.unit / 2 + index*160)
        }else{
            fillPiece(arrayOfGamePieces[index], matrix.x2 + 20 + matrix.unit / 2, matrix.unit + index * 160)
        }
    }
}

function atributePiecePosition(){
    const ar  = gamePiece.piece[gamePiece.piece.actualStage]
    const pX = gamePiece.posX
    const pY = gamePiece.posY
    for (let y in matrixArray) {
        for (let x in matrixArray[y]) {
            if (matrixArray[y][x].pos == 1){
                matrixArray[y][x].pos = 0
                matrixArray[y][x].color = defaultColor
            }
        }
    }
    for(let i in ar){
        for(let j in ar[i]){
            if(ar[i][j] != 0){
                const y = parseInt(pY) + parseInt(i)
                const x = parseInt(pX) + parseInt(j)               
                matrixArray[y][x].pos = 1
                matrixArray[y][x].color = gamePiece.piece.color
            }
        }
    }    
}

function pieceCanBePushedDown(piece_ = gamePiece){
    const ar = piece_.piece[piece_.piece.actualStage]
    const pX = piece_.posX
    const pY = piece_.posY
    for (let i in ar){
        for(let j in ar[i]){
            if(ar[i][j] == 1){
                const y = parseInt(pY) + parseInt(i)
                const x = parseInt(pX) + parseInt(j)
                if (y >= matrixheight - 1){
                    return false
                }
                if (matrixArray[y + 1][x]){
                    if (matrixArray[y + 1][x].pos != 0 && matrixArray[y + 1][x].pos != 1){
                        return false
                    }
                }
            }
        }
    }
    return true
}

var soundON = true
var musicON = true
var audioPiece = new Audio()
var audioRowArray = [new Audio(), new Audio(), new Audio(), new Audio()]
var audioEnd = new Audio()
var audioBegin = new Audio()
var hoverSoundArray = [new Audio(), new Audio(), new Audio(), new Audio(), new Audio()]
var selectSound = new Audio()
var rowCompletedSound = new Audio()
var showGhostBool = true
audioPiece.volume = 0.45
audioEnd.volume = 0.45
audioBegin.volume = 0.45
selectSound.volume = 0.45
rowCompletedSound.volume = 0.45

audioRowArray.forEach(el =>{
    el.volume = 0.45
})
hoverSoundArray.forEach(el =>{
    el.volume = 0.45
})

copyArray2D = arr => arr.map( arr_ => arr_.slice() )

function playAudioPiece(){
    const rand = Math.random()
    if(rand < 0.05){
        audioPiece.src = 'piece3.mp3'        
    }else if(rand < 0.1){
        audioPiece.src = 'piece5.mp3'
    }else if(rand < 0.4){
        audioPiece.src = 'piece1.mp3'
    } else if (rand < 0.7) {
        audioPiece.src = 'piece2.mp3'
    } else if (rand < 1) {
        audioPiece.src = 'piece4.mp3'
    }
    if(soundON){
        audioPiece.play()
    }
}

function playAudioRow(){
    const rand = 1+~~(Math.random()*6)
    contAudio++
    if (contAudio == 4) {
        contAudio = 0
    }
    audioRowArray[contAudio].src = `row${rand}.mp3`
    if (soundON) {
        audioRowArray[contAudio].play()
    }
    const probabilityToPlay = Math.random()
    if(probabilityToPlay < 0.36){
        setTimeout(playRowCompleted,1000)
    }
}

function playAudioEndGame(){
    const rand = 1 + ~~(Math.random() * 6)
    audioEnd.src = `gameOver${rand}.mp3`
    if (soundON) {
        audioBegin.pause()
        audioEnd.play()
    }
}

function playAudioStartGame(){
    const rand = 1 + ~~(Math.random() * 5)
    audioBegin.src = `gameStart${rand}.mp3`
    if (soundON) {
        audioEnd.pause()
        audioBegin.play()
    }
}

function playHover(){
    contAudioHover++
    if (contAudioHover == 5) {
        contAudioHover = 0
    }
    hoverSoundArray[contAudioHover].src = `hoverSound.mp3`
    if (soundON) {
        hoverSoundArray[contAudioHover].play()
    }
    console.log(contAudioHover)
}

function playSelect(){
    if(soundON){
        selectSound.src = 'select.mp3'
        selectSound.play()
    }
}

function playRowCompleted(){
    const rand = 1 + ~~(Math.random() * 6)
    const probabilityToPlay = Math.random()
    rowCompletedSound.src = `rowCompleted${rand}.mp3`
    if (soundON) {
        rowCompletedSound.play()
    }
}

var contAudio = 1
var contAudioHover = 0

var hoverID = -1

const arrayOfHoveringPositions = [
        { x: 200, y: cH - 55, w: 30 * 6, h: 45, status: 'notShowConfig' }, //speedMove
        { x: cW - 110, y: cH - 55, w: 100, h: 45, status: 'independent' }, //sound on
        // { x: cW - 220, y: cH - 55, w: 100, h: 45, status: 'independent' }, //music on
        { x: 10, y: cH - 55, w: 30 * 6, h: 45, status: 'notShowConfig' },// settings  
        { x: 165 + 32, y: cH - 55 - 135 - 90, w: 30 * 2.7, h: 45 , status:'showConfig'}, //save
        { x: 10, y: cH - 55 - 75 - 45, w: 30 * 3.8 + 110, h: 35 , status: 'showConfig'}, //left
        { x: 130 + 110, y: cH - 55 - 75 - 45, w: 30 * 3.8 + 110, h: 35 , status: 'showConfig'}, //right
        { x: 10, y: cH - 55 - 30, w: 30 * 3.8 + 110, h: 35 , status:'showConfig'}, //anticlock
        { x: 130 + 110, y: cH - 55 - 30, w: 30 * 3.8 + 110, h: 35 , status:'showConfig'}, // clockwise
        { x: 10, y: cH - 40, w: 30 * 3.8 + 110, h: 35 , status:'showConfig'}, //pushdown
        { x: 130 + 110, y: cH - 40, w: 30 * 3.8 + 110, h: 35 , status:'showConfig'}, //putpiece
        { x: 10, y: cH - 55 - 75, w: 30 * 3.8 + 110, h: 35 , status:'showConfig'}, //allleft
        { x: 130 + 110, y: cH - 55 - 75, w: 30 * 3.8 + 110, h: 35 , status:'showConfig'}, // allright
        { x: 10, y: cH - 55 - 75 - 90, w: 30 * 3.8 + 110, h: 35 , status:'showConfig'}, //turn180degree
        { x: 130 + 110, y: cH - 55 - 75 - 90, w: 30 * 3.8 + 110, h: 35 , status:'showConfig'} // ghost              
    ]

function checkHover(){
    const actualHoverID = arrayOfHoveringPositions.findIndex(({ x, y, w, h, status }) => {
        if(status == 'notShowConfig' && !showConfigBool){
            return onhover(posX, posY, x, y, w, h)
        }
        if (status == 'showConfig' && showConfigBool) {
            return onhover(posX, posY, x, y, w, h)
        }
        if(status == 'independent'){
            return onhover(posX, posY, x, y, w, h)
        }
        return false
    })
    if(hoverID != -1){
        const obj = arrayOfHoveringPositions[hoverID]
        if(!onhover(posX,posY,obj.x,obj.y,obj.w,obj.h)){
            hoverID = -1
        }
    }
    if(actualHoverID != -1 && hoverID != actualHoverID){
        hoverID = actualHoverID
        playHover()
    }
}

function checkForRowCompleted(){
    const matrixBefore = copyArray2D(matrixArray)
    var didTetris = false
    for(let y in matrixArray){
        if(matrixArray[y].every( ({ pos }) => pos == 2)){
            for(let y_ = y ; y_ > 0; y_--){
                for (let x_ in matrixArray[y_]) {
                    matrixArray[y_][x_].pos = matrixBefore[y_ - 1][x_].pos
                    matrixArray[y_][x_].color = matrixBefore[y_ - 1][x_].color                    
                }
            }
            if(fallFps - 3 > 15 && speedMode){
                fallFps--
            }
            didTetris = true           
            rows++
        }
    }
    if(didTetris){                    
        playAudioRow()
    }
}

function addPieceToTheMatrix(){
    const ar = gamePiece.piece[gamePiece.piece.actualStage]
    const pX = gamePiece.posX
    const pY = gamePiece.posY
    for (let i in ar) {
        for (let j in ar[i]) {
            if (ar[i][j] == 1) {
                const y = parseInt(pY) + parseInt(i)
                const x = parseInt(pX) + parseInt(j)
                matrixArray[y][x].pos = 2
                matrixArray[y][x].color = gamePiece.piece.color
            }
        }
    }
    
    gamePiece = new piece(arrayOfGamePieces.shift())
    arrayOfGamePieces.push(piecesArray[~~(Math.random() * piecesArray.length)])
    points++
    const ar2 = gamePiece.piece[gamePiece.piece.actualStage]
    const pX2 = gamePiece.posX
    const pY2 = gamePiece.posY
    for (let i in ar2) {
        for (let j in ar2[i]) {
            if (ar2[i][j] == 1) {
                const y = parseInt(pY2) + parseInt(i)
                const x = parseInt(pX2) + parseInt(j)
                if (matrixArray[y][x]) {
                    if (matrixArray[y][x].pos != 0 && matrixArray[y][x].pos != 1) {
                        gameOver = true                                               
                    }
                }
            }
        }
    }  
    if (gameOver && countedd) {
        for (let a in matrixArray) {
            for (let b in matrixArray[a]) {
                if (matrixArray[a][b].pos != 0) {
                    area++
                }
            }
        }
        countedd = false
        playAudioEndGame()
    }
    checkForRowCompleted()    
    playAudioPiece()
}

function movePieceOneRowDown(piece = gamePiece){
    if(pieceCanBePushedDown(piece = gamePiece)){
        piece.posY++
    }else{
        addPieceToTheMatrix()
    }
}

function clone(obj) {
    if (null == obj || "object" != typeof obj) return obj;
    var copy = obj.constructor();
    for (var attr in obj) {
        if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
    }
    return copy;
}

function clone_(obj) {
    var copy;

    // Handle the 3 simple types, and null or undefined
    if (null == obj || "object" != typeof obj) return obj;

    // Handle Date
    if (obj instanceof Date) {
        copy = new Date();
        copy.setTime(obj.getTime());
        return copy;
    }

    // Handle Array
    if (obj instanceof Array) {
        copy = [];
        for (var i = 0, len = obj.length; i < len; i++) {
            copy[i] = clone(obj[i]);
        }
        return copy;
    }

    // Handle Object
    if (obj instanceof Object) {
        copy = {};
        for (var attr in obj) {
            if (obj.hasOwnProperty(attr)) copy[attr] = clone(obj[attr]);
        }
        return copy;
    }

    throw new Error("Unable to copy obj! Its type isn't supported.");
}

function showGhost(piece_ = gamePiece , color = ghostColor){
    var pieceGhost = clone_(piece_)
    while(pieceCanBePushedDown(pieceGhost)){
        pieceGhost.posY++
    }
    c.fillStyle = color
    const ar = pieceGhost.piece[pieceGhost.piece.actualStage]
    const pX = pieceGhost.posX
    const pY = pieceGhost.posY
    for(let i in ar){
        for (let j in ar[i]) {
            if (ar[i][j] == 1) {
                const y = parseInt(pY) + parseInt(i)
                const x = parseInt(pX) + parseInt(j)
                c.fillRect(matrix.x1 + x * matrix.unit, matrix.y1 + y * matrix.unit, matrix.unit - 1, matrix.unit - 1)
            }
        }
    }
}

function drawHover(xM = posX, yM = posY, x1, y1, w, h, c1 = 'white', c2 = 'black') {
    if (x1 < xM && xM < x1 + w && y1 < yM && yM < y1 + h) {
        c.fillStyle = c1
        c.fillRect(x1, y1, w, h)
    } else {
        c.fillStyle = c2
        c.fillRect(x1, y1, w, h)
    }
}
function onhover(xM = posX, yM = posY, x1, y1, w, h) {
    return x1 < xM && xM < x1 + w && y1 < yM && yM < y1 + h
}
function fillCard(x, y, w, h, r, cor = 'white') {
    c.fillStyle = cor
    c.beginPath()
    c.arc(x + r, y + r, r, Math.PI, 3 / 2 * Math.PI);
    c.moveTo(x + r, y)
    c.lineTo(x, y + r)
    c.lineTo(x + r, y + r)
    c.fill()
    c.closePath()
    c.beginPath()
    c.arc(x + w - r, y + r, r, 3 / 2 * Math.PI, 0);
    c.moveTo(x + w - r, y)
    c.lineTo(x + w - r, y + r)
    c.lineTo(x + w, y + r)
    c.fill()
    c.beginPath()
    c.arc(x + r, y + h - r, r, Math.PI / 2, Math.PI);
    c.moveTo(x + r, y + h - r)
    c.lineTo(x + r, y + h)
    c.lineTo(x, y + h - r)
    c.fill()
    c.beginPath()
    c.arc(x + w - r, y + h - r, r, 0, Math.PI / 2);
    c.moveTo(x + w - r, y + h - r)
    c.lineTo(x + w - r, y + h)
    c.lineTo(x + w, y + h - r)
    c.fill()
    c.fillRect(x, y + r, w, h - 2 * r)
    c.fillRect(x + r, y, w - 2 * r, r)
    c.fillRect(x + r, y + h - r, w - 2 * r, r)

}
function fillHover(xM = posX, yM = posY, x1, y1, w, h, r, c1 = 'white', c2 = 'black') {
    if (x1 < xM && xM < x1 + w && y1 < yM && yM < y1 + h) {
        fillCard(x1, y1, w, h, r, c1)
    } else {
        fillCard(x1, y1, w, h, r, c2)
    }
}
function strokeCard(x, y, w, h, r, cor = 'black', lW = 5) {
    c.strokeStyle = cor
    c.lineWidth = lW
    c.beginPath()
    c.moveTo(x, y + r)
    c.lineTo(x, y + h - r)
    c.moveTo(x + w, y + r)
    c.lineTo(x + w, y + h - r)
    c.moveTo(x + r, y)
    c.lineTo(x + w - r, y)
    c.moveTo(x + r, y + h)
    c.lineTo(x + w - r, y + h)
    c.stroke()
    c.beginPath()
    c.arc(x + r, y + r, r, Math.PI, 3 / 2 * Math.PI);
    c.stroke()
    c.beginPath()
    c.arc(x + w - r, y + r, r, 3 / 2 * Math.PI, 0);
    c.stroke()
    c.beginPath()
    c.arc(x + r, y + h - r, r, Math.PI / 2, Math.PI);
    c.stroke()
    c.beginPath()
    c.arc(x + w - r, y + h - r, r, 0, Math.PI / 2);
    c.stroke()
}
function strokeHover(xM = posX, yM = posY, x1, y1, w, h, r, c1 = 'white', c2 = 'black', lw = 5) {
    if (x1 < xM && xM < x1 + w && y1 < yM && yM < y1 + h) {
        strokeCard(x1, y1, w, h, r, c1, lw)
    } else {
        strokeCard(x1, y1, w, h, r, c2, lw)
    }
}

function formatKey(key){
    const arrayOfKeysToBeFormated = [{ keyName: 'ArrowUp', sub: emojiUP },
                                     { keyName: 'ArrowDown', sub: emojiDOWN },
                                     { keyName: 'ArrowLeft', sub: emojiLEFT },
                                     { keyName: 'ArrowRight', sub: emojiRIGHT },
                                     { keyName: ' ', sub: 'Bar' }]
    const subOrNotSub = arrayOfKeysToBeFormated.findIndex(el => el.keyName == key)
    if(subOrNotSub != -1){
        return arrayOfKeysToBeFormated[subOrNotSub].sub
    }
    return key
}

const messagesToNotExclude = ['Select a config to change', 'Repeated Key', 'Key changed successfully']
function showConfig(){    
    if(showConfigBool){
        c.textBaseline = 'bottom'
        c.textAlign = 'start'
        fillHover(posX, posY, 165 + 32, cH - 55 - 135 - 90, 30 * 2.7, 45, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '30px monospace'
        c.fillText('Save', 15 + 158 + 32, cH - 150 - 90)
        /////// LEFT__
        fillHover(posX, posY, 10, cH - 55 - 75 - 45, 30 * 3.8+110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '25px monospace'
        c.fillText(`Left    | ${formatKey(configObject.leftKey)}`, 15, cH - 100 - 45)
        /////// RIGHT
        fillHover(posX, posY, 130+110, cH - 55 - 75 - 45, 30 * 3.8+110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '25px monospace'
        c.fillText(`Right    | ${formatKey(configObject.rightKey)}`, 135 + 110, cH - 100 - 45)
        /////// ANTICLOCKWISE__
        fillHover(posX, posY, 10, cH - 55 - 30, 30 * 3.8+110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '25px monospace'
        c.fillText(`Turn⬅  | ${formatKey(configObject.turnAntiClockWiseKey)}`, 15, cH - 55)
        /////// CLOCKWISE__
        fillHover(posX, posY, 130 + 110, cH - 55 - 30, 30 * 3.8+110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '25px monospace'
        c.fillText(`Turn➡   | ${formatKey(configObject.turnClockWiseKey)}`, 135 + 110, cH - 55)
        /////// PUSHONEDOWN__
        fillHover(posX, posY, 10, cH - 40, 30 * 3.8+110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '25px monospace'
        c.fillText(`Down    | ${formatKey(configObject.moveOneRowDownKey)}`, 15, cH - 10)
        /////// PUTPIECE
        fillHover(posX, posY, 130 + 110, cH - 40, 30 * 3.8+110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '25px monospace'
        c.fillText(`Insert   | ${formatKey(configObject.putPieceDownKey)}`, 135 + 110, cH - 10)
        /////// LEFT__all left ALL LEFT
        fillHover(posX, posY, 10, cH - 55 - 75 , 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '25px monospace'
        c.fillText(`All Left| ${formatKey(configObject.movePieceFurtherLeft)}`, 15, cH - 100 )
        /////// RIGHTall right ALL RIGHT
        fillHover(posX, posY, 130 + 110, cH - 55 - 75 , 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '25px monospace'
        c.fillText(`All Right| ${formatKey(configObject.movePieceFurtherRight)}`, 135 + 110, cH - 100 )
        /////// TURN 180
        fillHover(posX, posY, 10, cH - 55 - 75 - 90, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '25px monospace'
        c.fillText(`Turn 180 | ${formatKey(configObject.turn180Degre)}`, 15, cH - 100 - 90)  
        /////// GHOST
        if(showGhostBool){
            fillHover(posX, posY, 130 + 110,  cH - 55 - 75 - 90, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.7)', 'rgba(255,250,255,0.9)')
            c.fillStyle = 'black'
            c.font = '25px monospace'
            c.fillText(`Ghost ON`, 135 + 160, cH - 100 - 88)
        }else{
            fillHover(posX, posY, 130 + 110, cH - 55 - 75 - 90, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
            c.fillStyle = 'white'
            c.font = '25px monospace'
            c.fillText(`Ghost OFF`, 135 + 160, cH - 100 - 88)
        }
             
        if(messagesToNotExclude.some( el => el == message)){
            c.textAlign = 'center'
            c.fillStyle = 'white'
            c.font = '20px monospace'
            c.fillText(message, 240, cH - 290)
        }else if(message){
            c.textAlign = 'start'
            c.fillStyle = 'white'
            c.font = '20px monospace'
            c.fillText(message, 10, cH - 290)
        }
        c.textAlign = 'center'
        c.textBaseline = 'middle'
        c.font = '150px monospace'
        c.fillStyle = 'rgba(255,250,100,0.8)'
        c.fillText('Pause', cW / 2, cH / 2)
    }else{
        c.textBaseline = 'bottom'
        c.textAlign = 'start'
        fillHover(posX, posY, 10, cH - 55, 30 * 6, 45, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '30px monospace'
        c.fillText('Settings⚙️', 15, cH - 15)
        if(onhover(posX, posY, 10, cH - 55, 30 * 6, 45)){
            c.fillStyle = 'white'
            c.font = '25px monospace'
            c.fillText(`Change the settings`, 10, cH - 15 - 45) 
        }
        if(speedMode){
            if(onhover(posX, posY, 200, cH - 55, 30 * 6, 45)){
                fillCard(200, cH - 55, 30 * 6, 45, 0, 'rgba(255,250,255,0.4)')
                c.fillStyle = 'rgba(235,255,120,1)'
                c.font = '30px monospace'
                c.fillText('Speed Mode', 205, cH - 15) 
                c.fillStyle = 'rgba(235,255,120,1)'
                c.font = '25px monospace'
                c.fillText(`Pieces fall faster as you complete rows`, 10, cH - 15 - 45)                  
            }else{
                fillCard(200, cH - 55, 30 * 6, 45, 0, 'rgba(255, 250, 255, 1)')
                c.fillStyle = 'rgba(20,0,60,1)'
                c.font = '30px monospace'
                c.fillText('Speed Mode', 205, cH - 15)     
                c.fillStyle = 'white'
                c.font = '20px monospace'
                c.fillText(`ON`, 205 + 30 * 6 + 2, cH - 10)             
            }             
        }else{
            if(onhover(posX, posY, 200, cH - 55, 30 * 6, 45)){
                c.fillStyle = 'rgba(235,255,120,1)'
                c.font = '25px monospace'
                c.fillText(`Pieces fall faster as you complete rows`, 10, cH - 15 - 45) 
            }
            fillHover(posX, posY, 200, cH - 55, 30 * 6, 45, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
            c.fillStyle = 'white'
            c.font = '30px monospace'            
            c.fillText('Speed Mode', 205, cH - 15)
        }
    }
    // c.textBaseline = 'bottom'
    // c.textAlign = 'end'
    // if(musicON){
    //     fillHover(posX, posY, cW - 110, cH - 55, 100, 45, 0, 'rgba(255,255,255,0.8)', 'rgba(255,250,255,0.9)')
    //     c.fillStyle = 'black'
    //     c.font = '30px monospace'
    //     c.fillText('Song', cW - 26, cH - 15)
    //     // c.fillStyle = 'white'
    //     // c.font = '20px monospace'
    //     // c.fillText('ON', cW - 115, cH - 10)
    // }else{
    //     c.fillStyle = 'white'
    //     c.font = '30px monospace'
    //     c.fillText('Song', cW - 26, cH - 15)
    //     fillHover(posX, posY, cW - 110, cH - 55, 100, 45, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    // }
    c.textBaseline = 'bottom'
    c.textAlign = 'end'
    if (soundON) {
        fillHover(posX, posY, cW - 110, cH - 55, 100, 45, 0, 'rgba(255,255,255,0.8)', 'rgba(255,250,255,0.9)')
        c.fillStyle = 'black'
        c.font = '30px monospace'
        c.fillText('Sound', cW - 20, cH - 15)        
    } else {
        fillHover(posX, posY, cW - 110, cH - 55, 100, 45, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
        c.fillStyle = 'white'
        c.font = '30px monospace'
        c.fillText('Sound', cW - 20, cH - 15) 
    }
    
     
}

function showInitGame(){
    c.textBaseline = 'middle'
    c.textAlign = 'center'
    c.font = '30px monospace'
    c.fillStyle = 'rgba(0,250,250,1)'    
    c.fillText('Press Space Bar to Start Playing', cW / 2, cH / 2 + 100)

    c.font = '20px monospace'
    c.fillStyle = 'rgba(250,250,0,1)' 

    c.textBaseline = 'bottom'
    c.textAlign = 'start'

    const offSetX = cW / 2 - 98*2.4
    const offSetY = -400
    /////// LEFT__
    fillHover(posX, posY, 10 + offSetX, cH - 55 - 75 - 45 + offSetY, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    c.fillStyle = 'white'
    c.font = '25px monospace'
    c.fillText(`Left    | ${formatKey(configObject.leftKey)}`, 15 + offSetX, cH - 100 - 45 + offSetY)
    /////// RIGHT
    fillHover(posX, posY, 130 + 110 + offSetX, cH - 55 - 75 - 45 + offSetY, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    c.fillStyle = 'white'
    c.font = '25px monospace'
    c.fillText(`Right    | ${formatKey(configObject.rightKey)}`, 135 + 110 + offSetX, cH - 100 - 45 + offSetY)
    /////// ANTICLOCKWISE__
    fillHover(posX, posY, 10 + offSetX, cH - 55 - 30 + offSetY, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    c.fillStyle = 'white'
    c.font = '25px monospace'
    c.fillText(`Turn⬅  | ${formatKey(configObject.turnAntiClockWiseKey)}`, 15 + offSetX, cH - 55 + offSetY)
    /////// CLOCKWISE__
    fillHover(posX, posY, 130 + 110 + offSetX, cH - 55 - 30 + offSetY, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    c.fillStyle = 'white'
    c.font = '25px monospace'
    c.fillText(`Turn➡   | ${formatKey(configObject.turnClockWiseKey)}`, 135 + 110 + offSetX, cH - 55 + offSetY)
    /////// PUSHONEDOWN__
    fillHover(posX, posY, 10 + offSetX, cH - 40 + offSetY, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    c.fillStyle = 'white'
    c.font = '25px monospace'
    c.fillText(`Down    | ${formatKey(configObject.moveOneRowDownKey)}`, 15 + offSetX, cH - 10 + offSetY)
    /////// PUTPIECE
    fillHover(posX, posY, 130 + 110 + offSetX, cH - 40 + offSetY, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    c.fillStyle = 'white'
    c.font = '25px monospace'
    c.fillText(`Insert   | ${formatKey(configObject.putPieceDownKey)}`, 135 + 110 + offSetX, cH - 10 + offSetY)
    /////// LEFT__all left ALL LEFT
    fillHover(posX, posY, 10 + offSetX, cH - 55 - 75 + offSetY, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    c.fillStyle = 'white'
    c.font = '25px monospace'
    c.fillText(`All Left| ${formatKey(configObject.movePieceFurtherLeft)}`, 15 + offSetX, cH - 100 + offSetY)
    /////// RIGHTall right ALL RIGHT
    fillHover(posX, posY, 130 + 110 + offSetX, cH - 55 - 75 + offSetY, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    c.fillStyle = 'white'
    c.font = '25px monospace'
    c.fillText(`All Right| ${formatKey(configObject.movePieceFurtherRight)}`, 135 + 110 + offSetX, cH - 100 + offSetY)
    /////// LEFT__
    fillHover(posX, posY, 120 + offSetX, cH - 55 - 75 - 90 + offSetY, 30 * 3.8 + 110, 35, 0, 'rgba(255,255,255,0.3)', 'rgba(255,250,255,0.4)')
    c.fillStyle = 'white'
    c.font = '25px monospace'
    c.fillText(`Turn 180 | ${formatKey(configObject.turn180Degre)}`, 125 + offSetX, cH - 100 - 90 + offSetY)
    


}

var counter = 0

const render = function () {
    c.textBaseline = 'middle'
    c.textAlign = 'center'

    c.clearRect(0, 0, cW, cH)
    c.fillStyle = backgroundcolor
    c.fillRect(0, 0, cW, cH)

    atributePiecePosition()
    if(showGhostBool){
        showGhost()
    }
    drawGame(matrixArray)
    if (time % fallFps == 0 && !gameOver && !gamePaused && initGame){
        movePieceOneRowDown()
    }    
    if(gameOver){
        c.fillStyle = 'rgba(0,0,0,0.5)'
        c.fillRect(0, cH * 0.5 - 200 - 30,cW, 180)
        c.fillStyle = 'rgba(0,250,250,0.4)'
        c.strokeStyle = 'rgba(255,250,250,0.8)'
        c.fillRect(cW / 2 - 50 * 10, cH / 2 + 100 - 40, 50 * 20, 80)
        c.strokeRect(cW / 2 - 50 * 10, cH / 2 + 100 - 40, 50 * 20, 80)
        c.font = '30px monospace'
        c.fillStyle = 'white'
        c.fillText(`You have put ${points} pieces`,cW/2,cH*0.5 - 200)
        c.fillText(`Filled ${rows} rows`, cW / 2, cH * 0.5 - 160)
        c.fillText(`Covered ${area} squares of ${matrixWidth * matrixheight}`, cW / 2, cH * 0.5 - 120)
        c.fillText(`All of that in ${compareTime} seconds`, cW / 2, cH * 0.5 - 80)
        c.fillStyle = `rgba(${255 * Math.abs(Math.sin(counter))},${255 * Math.abs(Math.cos(counter))},${255 * Math.abs(Math.sin(3 / 2 * counter))},1)`
        c.font = '100px monospace'
        c.fillText('Game Over',cW/2,cH/2)
        c.fillStyle = `rgba(${255 - 255 * Math.abs(Math.sin(counter))},${255 - 255 * Math.abs(Math.cos(counter))},${255 * Math.abs(Math.sin(3 / 2 * counter))},1)`
        c.font = '50px monospace'
        c.fillText('Press Enter to Play again', cW / 2, cH / 2 + 100)
        c.strokeStyle = `rgba(${255 * Math.abs(Math.sin(1/5*counter))},${255 * Math.abs(Math.cos(1/7*counter))},${255 * Math.abs(Math.sin(3 / 2 * counter))},1)`
        c.lineWidth = 1
        c.strokeText('Press Enter to Play again', cW / 2, cH / 2 + 100)
        counter += 0.002
    } else if (!gamePaused && initGame){
        compareTime = ((new Date().getTime() - timer) / 1000)
    }
    c.textBaseline = 'top'
    c.textAlign = 'end'
    c.fillStyle = 'white'
    c.font = '50px monospace'
    c.fillText((compareTime).toFixed(1),matrix.x1 - 20,10)
    c.fillText(`${points}`, matrix.x1 - 20, 70)
    c.fillText(`${rows}`, matrix.x1 - 20, 130)
    time++
    if(posY > cH/2 || gamePaused){
        showConfig()
    }
    if(!initGame){
        showInitGame()
    }
    checkHover()
}

const update = function () {
    // requestAnimationFrame(update, c)
    render()
    setTimeout(update, fps);
}
// LOOP QUE MOVE E RENDERIZA
update()
// ONDE TODA A MÁGICA AKONTECE

function turnClockWise(){
    gamePiece.piece.index++
    if (gamePiece.piece.index == 5) {
        gamePiece.piece.index = 1
    }
    gamePiece.piece.actualStage = 'stage_' + gamePiece.piece.index
    
    var ar = gamePiece.piece[gamePiece.piece.actualStage]
    if (gamePiece.posX < 0) {
        while (ar.some(el => el[Math.abs(gamePiece.posX) - 1] == 1 && gamePiece.posX < 0)) {
            gamePiece.posX++
        }
    }
    if (gamePiece.posX + ar.length > matrix.width) {
        while (ar.some(el => el[Math.abs(gamePiece.posX + ar.length - 1 - matrix.width) + 1] == 1 && gamePiece.posX + ar.length > matrix.width)) {
            gamePiece.posX--
        }
    }
    
    var isNewPositionPossible = true
    const pX = gamePiece.posX
    const pY = gamePiece.posY
    for (let i in ar) {
        for (let j in ar[i]) {
            if (ar[i][j] == 1) {
                const y = parseInt(pY) + parseInt(i)
                const x = parseInt(pX) + parseInt(j)
                if (matrixArray[y][x]) {
                    if (matrixArray[y][x].pos != 0 && matrixArray[y][x].pos != 1) {
                        isNewPositionPossible = false
                    }
                }
            }
        }
    }

    if (!isNewPositionPossible){
        turnAntiClockWise()
    }
}

function turnAntiClockWise(){
    gamePiece.piece.index--
    if (gamePiece.piece.index == 0) {
        gamePiece.piece.index = 4
    }
    gamePiece.piece.actualStage = 'stage_' + gamePiece.piece.index
    var ar = gamePiece.piece[gamePiece.piece.actualStage]
    if (gamePiece.posX < 0) {
        while (ar.some(el => el[Math.abs(gamePiece.posX) - 1] == 1 && gamePiece.posX < 0)) {
            gamePiece.posX++
        }
    }
    if (gamePiece.posX + ar.length > matrix.width) {
        while (ar.some(el => el[Math.abs(gamePiece.posX + ar.length - 1 - matrix.width) + 1] == 1 && gamePiece.posX + ar.length > matrix.width)) {
            gamePiece.posX--

        }
    } 
    var isNewPositionPossible = true
    const pX = gamePiece.posX
    const pY = gamePiece.posY
    for (let i in ar) {
        for (let j in ar[i]) {
            if (ar[i][j] == 1) {
                const y = parseInt(pY) + parseInt(i)
                const x = parseInt(pX) + parseInt(j)
                if (matrixArray[y][x]) {
                    if (matrixArray[y][x].pos != 0 && matrixArray[y][x].pos != 1) {
                        isNewPositionPossible = false
                    }
                }
            }
        }
    }
    if (!isNewPositionPossible) {
        turnClockWise()
    }
}

function movePieceLeft(){
    var ar = gamePiece.piece[gamePiece.piece.actualStage]
    var moveToLeftIsPossible = true    

    const num = (gamePiece.posX)
    if (num <= 0) {
        for (let i in ar) {
            if (ar[i][Math.abs(num)] == 1) {
                moveToLeftIsPossible = false
            }
        }
    }

    if (moveToLeftIsPossible) {
        const pX = gamePiece.posX
        const pY = gamePiece.posY
        for (let i in ar) {
            for (let j in ar[i]) {
                if (ar[i][j] == 1) {
                    const y = parseInt(pY) + parseInt(i)
                    const x = parseInt(pX) + parseInt(j)
                    if (matrixArray[y][x - 1]) {
                        if (matrixArray[y][x - 1].pos != 0 && matrixArray[y][x - 1].pos != 1) {
                            moveToLeftIsPossible = false
                        }
                    }
                }
            }
        }
    }
    if (moveToLeftIsPossible) {
        gamePiece.posX--
    }
}

function movePieceRight(){
    var ar = gamePiece.piece[gamePiece.piece.actualStage]
    var moveToRightIsPossible = true
    
    const num = (matrix.width - gamePiece.posX - 1)
    if (num <= ar.length) {
        for (let i in ar) {
            if (ar[i][num] == 1) {
                moveToRightIsPossible = false
            }
        }
    }
    if (moveToRightIsPossible){
        const pX = gamePiece.posX
        const pY = gamePiece.posY
        for (let i in ar) {
            for (let j in ar[i]) {
                if (ar[i][j] == 1) {
                    const y = parseInt(pY) + parseInt(i)
                    const x = parseInt(pX) + parseInt(j)
                    if (matrixArray[y][x + 1]) {
                        if (matrixArray[y][x + 1].pos != 0 && matrixArray[y][x + 1].pos != 1) {
                            moveToRightIsPossible = false
                        }
                    }
                }
            }
        }
    }
    if (moveToRightIsPossible){        
        gamePiece.posX++
    }
}

function putPieceDown(){
    while (pieceCanBePushedDown(gamePiece)) {
        gamePiece.posY++
    }
    addPieceToTheMatrix()
}

function movePieceToExtremeLeft(){
    var moveToLeftIsPossible = true

    while(moveToLeftIsPossible){
        var ar = gamePiece.piece[gamePiece.piece.actualStage]
        const num = (gamePiece.posX)
        if (num <= 0) {
            for (let i in ar) {
                if (ar[i][Math.abs(num)] == 1) {
                    moveToLeftIsPossible = false
                }
            }
        }

        if (moveToLeftIsPossible) {
            const pX = gamePiece.posX
            const pY = gamePiece.posY
            for (let i in ar) {
                for (let j in ar[i]) {
                    if (ar[i][j] == 1) {
                        const y = parseInt(pY) + parseInt(i)
                        const x = parseInt(pX) + parseInt(j)
                        if (matrixArray[y][x - 1]) {
                            if (matrixArray[y][x - 1].pos != 0 && matrixArray[y][x - 1].pos != 1) {
                                moveToLeftIsPossible = false
                            }
                        }
                    }
                }
            }
        }
        if (moveToLeftIsPossible) {
            gamePiece.posX--
        }
    }
}

function movePieceToExtremeRight(){
    var moveToRightIsPossible = true

    while(moveToRightIsPossible){
        var ar = gamePiece.piece[gamePiece.piece.actualStage]
        const num = (matrix.width - gamePiece.posX - 1)
        if (num <= ar.length) {
            for (let i in ar) {
                if (ar[i][num] == 1) {
                    moveToRightIsPossible = false
                }
            }
        }
        if (moveToRightIsPossible) {
            const pX = gamePiece.posX
            const pY = gamePiece.posY
            for (let i in ar) {
                for (let j in ar[i]) {
                    if (ar[i][j] == 1) {
                        const y = parseInt(pY) + parseInt(i)
                        const x = parseInt(pX) + parseInt(j)
                        if (matrixArray[y][x + 1]) {
                            if (matrixArray[y][x + 1].pos != 0 && matrixArray[y][x + 1].pos != 1) {
                                moveToRightIsPossible = false
                            }
                        }
                    }
                }
            }
        }
        if (moveToRightIsPossible) {
            gamePiece.posX++
        }
    }
}

function turnPiece180Degre(){
    const initialStage = gamePiece.piece.actualStage.slice()
    gamePiece.piece.index++
    if (gamePiece.piece.index == 5) {
        gamePiece.piece.index = 1
    }
    gamePiece.piece.index++
    if (gamePiece.piece.index == 5) {
        gamePiece.piece.index = 1
    }
    gamePiece.piece.actualStage = 'stage_' + gamePiece.piece.index
    var ar = gamePiece.piece[gamePiece.piece.actualStage]
    if (gamePiece.posX < 0) {
        while (ar.some(el => el[Math.abs(gamePiece.posX) - 1] == 1 && gamePiece.posX < 0)) {
            gamePiece.posX++
        }
    }
    if (gamePiece.posX + ar.length > matrix.width) {
        while (ar.some(el => el[Math.abs(gamePiece.posX + ar.length - 1 - matrix.width) + 1] == 1 && gamePiece.posX + ar.length > matrix.width)) {
            gamePiece.posX--
        }
    }

    var isNewPositionPossible = true
    const pX = gamePiece.posX
    const pY = gamePiece.posY
    for (let i in ar) {
        for (let j in ar[i]) {
            if (ar[i][j] == 1) {
                const y = parseInt(pY) + parseInt(i)
                const x = parseInt(pX) + parseInt(j)
                if (matrixArray[y][x]) {
                    if (matrixArray[y][x].pos != 0 && matrixArray[y][x].pos != 1) {
                        isNewPositionPossible = false
                    }
                }
            }
        }
    }
    if (!isNewPositionPossible) {
        gamePiece.piece.actualStage = initialStage
    }
}

var message = 'Select a config to change'

window.addEventListener('keydown', key => {
    const kaka = key.key
    const k = kaka.length == 1? kaka.toLocaleLowerCase() : kaka
    if (!gameOver && !gamePaused && initGame){
        if (k == configObject.rightKey){
            movePieceRight()        
        }
        if (k == configObject.leftKey) {
            movePieceLeft()
        }
        if (k == configObject.turnClockWiseKey){
            turnClockWise()
        }
        if (k == configObject.turnAntiClockWiseKey){
            turnAntiClockWise()               
        }
        if (k == configObject.moveOneRowDownKey){
            movePieceOneRowDown()
        }
        if (k == configObject.putPieceDownKey){
            putPieceDown()
        }
        if (k == configObject.movePieceFurtherLeft) {
            movePieceToExtremeLeft()
        }
        if(k == configObject.movePieceFurtherRight){
            movePieceToExtremeRight()
        }
        if(k == configObject.turn180Degre){
            turnPiece180Degre()
        }
    }else{
        console.log('Game Over')
    }
    if(showConfigBool){
        if(saveConfi){
            if (Object.entries(configObject).every( el => el[1]!=k)){
                configObject[saveConfi] = k
                message = 'Key changed successfully'
            }else{
                message = 'Repeated Key'
            }
            saveConfi = null
        }
    }
    if(gameOver && k == 'Enter'){
        matrixArray = [
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
            [{ pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }, { pos: 0, color: defaultColor }],
        ]
        gamePiece = new piece(piecesArray[0])
        points = 0
        area = 0
        rows = 0
        gameOver = false
        countedd = true
        fallFps = 160
        timer = new Date().getTime()
        compareTime = new Date().getTime()
        playAudioStartGame()
        
    }
    if(k == ' '){
        if(initGame == false){
            timer = new Date().getTime()
            audioBegin.src = `gameStart${6}.mp3`
            if (soundON) {
                audioBegin.play()
            }
        }
        initGame = true
    }
    if(k == '+'){
        if(audioPiece.volume < 0.9){
            audioPiece.volume += 0.1
            audioEnd.volume += 0.1
            audioBegin.volume += 0.1            
            selectSound.volume += 0.1
            rowCompletedSound.volume += 0.1
            audioRowArray.forEach(el => {
                el.volume += 0.1
            })
            hoverSoundArray.forEach(el => {
                el.volume += 0.1
            })
        }
    }
    if(k == '-'){
        if (audioPiece.volume > 0.2) {
            audioPiece.volume -= 0.1
            audioEnd.volume -= 0.1
            audioBegin.volume -= 0.1
            selectSound.volume -= 0.1
            rowCompletedSound.volume -= 0.1
            audioRowArray.forEach(el => {
                el.volume -= 0.1
            })
            hoverSoundArray.forEach(el => {
                el.volume -= 0.1
            })
        }
    }
})

window.addEventListener('click', () =>{    
    if(showConfigBool){
        message = 'Select a config to change'
        saveConfi = null
        ///left left
        if (onhover(posX, posY, 10, cH - 55 - 75 - 45, 30 * 3.8 + 110, 35)) {
            saveConfi = "leftKey"
            message = 'Waiting for you to press a key to set Left Key'
            playSelect()
        }
        ///RIGHT RIGHT
        if (onhover(posX, posY, 130 + 110, cH - 55 - 75 - 45, 30 * 3.8 + 110, 35)) {
            saveConfi = "rightKey"
            message = 'Waiting for you to press a key to set Right Key'
            playSelect()
        }
        ///turnAntiClockWiseKey turnAntiClockWiseKey
        if (onhover(posX, posY, 10, cH - 55 - 30, 30 * 3.8 + 110, 35)) {
            saveConfi = "turnAntiClockWiseKey"
            message = 'Waiting for you to press a key to set Turn⬅ Key'
            playSelect()
        }
        ///turnClockWiseKey turnClockWiseKey
        if (onhover(posX, posY, 130 + 110, cH - 55 - 30, 30 * 3.8 + 110, 35)) {
            saveConfi = "turnClockWiseKey"
            message = 'Waiting for you to press a key to set Turn➡ Key'
            playSelect()
        }
        ///moveOneRowDownKey moveOneRowDownKey
        if (onhover(posX, posY, 10, cH - 40, 30 * 3.8 + 110, 35)) {
            saveConfi = "moveOneRowDownKey"
            message = 'Waiting for you to press a key to set Down Key'
            playSelect()
        }
        ///putPieceDownKey putPieceDownKey
        if (onhover(posX, posY, 130 + 110, cH - 40, 30 * 3.8 + 110,35)) {
            saveConfi = "putPieceDownKey"
            message = 'Waiting for you to press a key to set Insert Key'
            playSelect()
        }
        ///MOVE FURTHER LEFT
        if (onhover(posX, posY, 10, cH - 55 - 75, 30 * 3.8 + 110, 35)) {
            saveConfi = "movePieceFurtherLeft"
            message = 'Waiting for you to press a key to set All Left Key'
            playSelect()
        }
        // MOVE FURTHER RIGHT
        if (onhover(posX, posY, 130 + 110, cH - 55 - 75, 30 * 3.8 + 110, 35)) {
            saveConfi = "movePieceFurtherRight"
            message = 'Waiting for you to press a key to set All Right Key'
            playSelect()
        }
        /// TURN 180 DEGREE
        if (onhover(posX, posY, 10, cH - 55 - 75 - 90, 30 * 3.8 + 110, 35)) {
            saveConfi = "turn180Degre"
            message = 'Waiting for you to press a key to set Turn 180 Key'
            playSelect()
        }
        // SOUND EFFECT
        if(onhover(posX, posY, 130 + 110, cH - 55 - 75 - 90, 30 * 3.8 + 110, 35)){
            showGhostBool = !showGhostBool
            playSelect()
        }
    }else if(!showConfigBool){
        if(onhover(posX, posY, 200, cH - 55, 30 * 6, 45)){
            speedMode = !speedMode
            playSelect()
        }
    }

    /// O SETTINGS TEM QUE ESTAR EMBAIXO DO RESTO SENÃO BUGA
    /// SETTINGS
    if (onhover(posX, posY, 10, cH - 55, 30 * 6, 45)) {
        showConfigBool = true
        gamePaused = showConfigBool
        if (!gamePaused) {
            timer = new Date().getTime() - compareTime * 1000
        }
        playSelect()
    }
    /// SAVE
    if (onhover(posX, posY, 165 + 32, cH - 55 - 135 - 90, 30 * 2.7, 45)) {
        showConfigBool = false
        gamePaused = showConfigBool
        if (!gamePaused) {
            timer = new Date().getTime() - compareTime * 1000
        }
        message = 'Select a config to change'
        playSelect()
    }
    // if(onhover(posX, posY, cW - 110, cH - 55, 100, 45)){
    //     musicON = !musicON
    //     playSelect()
    // }
    if(onhover(posX, posY, cW - 110, cH - 55, 100, 45)){
        soundON = !soundON
        playSelect()
    }
})
