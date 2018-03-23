import {ShapeUtils, Tensor, TensorMath} from "tensor4js";
import Graph from "../../Graph";
import Expression from "../Expression";
import ExpressionTypes from "../ExpressionTypes";
import BinaryExpression from "./BinaryExpression";

export default class Multiply extends BinaryExpression {

  private _shape: number[];

  constructor(left: Expression, right: Expression, graph: Graph, name?: string) {
    super(left, right, graph, name);
    this._shape = ShapeUtils.broadcastShapes(left.shape, right.shape);
  }

  get shape() {
    return this._shape;
  }

  get type() {
    return ExpressionTypes.Multiply;
  }

  static evaluate(node: Multiply): Tensor {
    let left = node.graph.session.getValue(node.left);
    let right = node.graph.session.getValue(node.right);
    return TensorMath.multiply(left, right);
  }

  static gradients(node: Multiply, grad: Expression): Expression[] {
    let pair = ShapeUtils.getReductionIndices(node.left.shape, node.right.shape);
    let leftMul = node.factory.multiply(grad, node.right);
    let rightMul = node.factory.multiply(node.left, grad);
    let leftGrad = node.factory.reduceSum(leftMul, pair.left);
    let rightGrad = node.factory.reduceSum(rightMul, pair.right);
    return [leftGrad, rightGrad];
  }
}