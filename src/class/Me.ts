import createjs from 'createjs-module'
import { CELL_SIZE } from '../constance'
import { randomcolor } from '../randomcolor'
import { Entity } from './Entity'

export class Me extends Entity {
  constructor(x: number, y: number) {
    super(x, y)

    this.obj.graphics.beginFill(randomcolor()).drawCircle(this.x * CELL_SIZE + CELL_SIZE / 2, this.y * CELL_SIZE + CELL_SIZE / 2, CELL_SIZE / 3)
  }

  move(dx: number, dy: number) {
    this.x += dx
    this.y += dy

    // animation
    createjs.Tween.get(this.obj).to({ x: this.x * CELL_SIZE, y: this.y * CELL_SIZE }, 100, createjs.Ease.getPowOut(10))
  }
}
