import {Tensor, TensorMath} from "tensor4js";
import Graph from "../../Graph";
import Expression from "../Expression";
import TransformExpression from "./TransformExpression";
import {ExpressionTypes} from "../ExpressionTypes";

export default class TangentGrad extends TransformExpression {

  get type() {
    return ExpressionTypes.TangentGrad;
  }

  constructor(base: Expression, graph: Graph, name?: string) {
    super(base, graph, name);
  }

  static evaluate(node: TangentGrad): Tensor {
    let base = node.base.value;
    return TensorMath.tanGrad(base);
  }

}