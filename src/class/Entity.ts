import createjs from 'createjs-module'
import { GRID_WIDTH_COUNT, GRID_HEIGHT_COUNT } from '../constance'
import { stage } from '../main'

export class Entity {
  private _x: number
  public get x(): number {
    return this._x
  }
  public set x(value: number) {
    if (!(0 <= value && value < GRID_WIDTH_COUNT)) throw new RangeError('Out of Range')
    this._x = value
    // this.obj.x = this._x * CELL_SIZE
  }

  private _y: number
  public get y(): number {
    return this._y
  }
  public set y(value: number) {
    if (!(0 <= value && value < GRID_HEIGHT_COUNT)) throw new RangeError('Out of Range')
    this._y = value
    // this.obj.y = this._y * CELL_SIZE
  }

  obj: createjs.Shape

  constructor(x: number, y: number) {
    if (!(0 <= x && x < GRID_WIDTH_COUNT && 0 <= y && y < GRID_HEIGHT_COUNT)) throw new RangeError('Out of Range')
    this._x = x
    this._y = y
    this.obj = new createjs.Shape()
    stage.addChild(this.obj)
  }
}
