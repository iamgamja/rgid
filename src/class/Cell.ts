import { CELL_SIZE } from '../constance'
import { Entity } from './Entity'
import { randomcolor } from '../randomcolor'

export class Cell extends Entity {
  constructor(x: number, y: number) {
    super(x, y)

    this.obj.graphics.beginFill(randomcolor()).drawRect(this.x * CELL_SIZE, this.y * CELL_SIZE, CELL_SIZE, CELL_SIZE)
  }
}
