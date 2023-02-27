import './style.css'
import createjs from 'createjs-module'

const app = document.querySelector('#app')
if (!(app instanceof HTMLDivElement)) throw new Error('No App')

const canvas = document.createElement('canvas')
canvas.setAttribute('id', 'main')
canvas.setAttribute('width', '500')
canvas.setAttribute('height', '300')

app.appendChild(canvas)

const stage = new createjs.Stage('main')

const circle = new createjs.Shape()
circle.graphics.beginFill('DeepSkyBlue').drawCircle(0, 0, 50)
circle.x = 100
circle.y = 100
stage.addChild(circle)

stage.update()
