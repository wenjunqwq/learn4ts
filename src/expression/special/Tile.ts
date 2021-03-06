import {Tensor} from "tensor4js";
import Graph from "../../Graph";
import Expression from "../Expression";
import {ExpressionTypes} from "../ExpressionTypes";

export default class Tile extends Expression {

  private readonly _base: Expression;
  private readonly _repeats: number[];
  private readonly _shape: number[];

  get base() {
    return this._base;
  }

  get dependencies(): Expression[] {
    return [this.base];
  }

  get params() {
    return {
      type: this.type,
      name: this.name,
      base: this.base.id,
      repeats: this.repeats
    };
  }

  get repeats() {
    return this._repeats;
  }

  get shape() {
    return this._shape;
  }

  get type() {
    return ExpressionTypes.Tile;
  }

  constructor(base: Expression, repeats: number[], graph: Graph, name?: string) {
    super(graph, name);
    this._base = base;
    this._repeats = repeats;
    this._shape = [];

    for (let i = 0; i < base.shape.length; i++) {
      this._shape[i] = base.shape[i] * repeats[i];
    }
    // if (dimension === -1) {
    //   let length = multiple;
    //   let baseShape = base.shape;
    //   for (let i = 0; i < baseShape.length; i++) {
    //     length *= baseShape[i];
    //   }
    //   this._shape = [length];
    // } else {
    //   this._shape = base.shape.slice();
    //   this._shape[dimension] *= multiple;
    // }
  }

  static evaluate(expression: Expression): Tensor {
    let node = expression as Tile;
    let base = node.base.value;
    return base.tile(node.repeats);
  }

}