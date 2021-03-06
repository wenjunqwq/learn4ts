import {Tensor, TensorMath} from "tensor4js";
import Graph from "../../Graph";
import Expression from "../Expression";
import {ExpressionTypes} from "../ExpressionTypes";
import IndexExpression from "./IndexExpression";

export default class ArgMin extends IndexExpression {

  get type() {
    return ExpressionTypes.ArgMin;
  }

  constructor(base: Expression, dim: number, graph: Graph, name?: string) {
    super(base, dim, graph, name);
  }

  static evaluate(expression: Expression): Tensor {
    let node = expression as ArgMin;
    let base = node.base.value;
    return TensorMath.argMin(base, node.dim);
  }

}