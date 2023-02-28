import './style.css'
import createjs from 'createjs-module'
import { GRID_WIDTH_COUNT, GRID_HEIGHT_COUNT, CANVAS_HEIGHT, CANVAS_WIDTH } from './constance'
import { Cell } from './class/Cell'
import { Me } from './class/Me'

// get #app
const app = document.querySelector('#app')
if (!(app instanceof HTMLDivElement)) throw new Error('No App')

// create <canvas>
const canvas = document.createElement('canvas')
canvas.setAttribute('id', 'main')
canvas.setAttribute('width', CANVAS_WIDTH.toString())
canvas.setAttribute('height', CANVAS_HEIGHT.toString())

app.appendChild(canvas)

// create stage

export const stage = new createjs.Stage('main')
createjs.Ticker.framerate = 60
createjs.Ticker.addEventListener('tick', stage)

// make grid

const grid: Cell[][] = []

for (let y = 0; y < GRID_HEIGHT_COUNT; y++) {
  grid.push([])
  for (let x = 0; x < GRID_WIDTH_COUNT; x++) {
    grid[y].push(new Cell(x, y))
  }
}

console.log(grid)

// make me

const me = new Me(0, 0)

console.log(me)

document.addEventListener('keydown', (e) => {
  switch (e.code) {
    case 'ArrowLeft':
    case 'KeyA':
      me.move(-1, 0)
      break
    case 'ArrowRight':
    case 'KeyD':
      me.move(1, 0)
      break
    case 'ArrowUp':
    case 'KeyW':
      me.move(0, -1)
      break
    case 'ArrowDown':
    case 'KeyS':
      me.move(0, 1)
      break
  }
})
