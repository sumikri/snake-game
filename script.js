const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const boxSize = 20; // Size of each box in the game grid
const canvasSize = 400; // Size of the canvas
canvas.width = canvasSize;
canvas.height = canvasSize;

let snake = [{ x: boxSize * 5, y: boxSize * 5 }]; // Initial snake position
let direction = 'RIGHT';
let food = generateFood();
let score = 0;

// Event listener for keyboard input
document.addEventListener('keydown', changeDirection);

// Game loop interval
let game = setInterval(updateGame, 100);

function updateGame() {
    if (checkCollision()) {
        clearInterval(game);
        alert('Game Over! Your score: ' + score);
        return;
    }

    clearCanvas();
    drawFood();
    moveSnake();
    drawSnake();
}

function clearCanvas() {
    ctx.fillStyle = '#000';
    ctx.fillRect(0, 0, canvasSize, canvasSize);
}

function drawSnake() {
    ctx.fillStyle = 'lime';
    snake.forEach(part => {
        ctx.fillRect(part.x, part.y, boxSize, boxSize);
    });
}

function drawFood() {
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x, food.y, boxSize
