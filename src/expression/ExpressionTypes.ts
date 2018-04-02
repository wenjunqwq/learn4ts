export const enum ExpressionTypes {

  Add = "Add",
  Divide = "Divide",
  MatMul = "MatMul",
  Maximum = "Maximum",
  Minimum = "Minimum",
  Modulo = "Modulo",
  Multiply = "Multiply",
  Subtract = "Subtract",

  Constant = "Constant",
  Parameter = "Parameter",
  Variable = "Variable",

  ReduceSum = "ReduceSum",
  ReduceMax = "ReduceMax",
  ReduceMin = "ReduceMin",
  ReduceMean = "ReduceMean",
  ReduceProd = "ReduceProd",

  Absolute = "Absolute",
  Cosine = "Cosine",
  Expm1 = "Expm1",
  Exponential = "Exponential",
  Log1p = "Log1p",
  Logarithm = "Logarithm",
  Negate = "Negate",
  Reciprocal = "Reciprocal",
  ReciprocalGrad = "ReciprocalGrad",
  Relu = "Relu",
  Round = "Round",
  RSqrt = "RSqrt",
  Sigmoid = "Sigmoid",
  SigmoidGrad = "SigmoidGrad",
  Sign = "Sign",
  Sine = "Sine",
  Softmax = "Softmax",
  SoftmaxGrad = "SoftmaxGrad",
  Square = "Square",
  Sqrt = "Sqrt",
  SqrtGrad = "SqrtGrad",
  Step = "Step",
  Tangent = "Tangent",
  TangentGrad = "TangentGrad",
  Tanh = "Tanh",
  TanhGrad = "TanhGrad",
  Cosh = "Cosh",
  Sinh = "Sinh",

  Fill = "Fill",
  Assign = "Assign",
  Group = "Group",
  AddN = "AddN",
  Reshape = "Reshape",
  Repeat = "Repeat",
  Tile = "Tile",
  Slice = "Slice"

}