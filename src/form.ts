interface Label {
  name: "label";
  labelLocation: "above" | "nearside";
  /**
   * label 位置：上方，左侧
   */
  Required: "必填" | "选填";
  Alignment: "上下对齐" | "标签右对齐" | "标签左对齐";
  /**
   * Alignment:对齐方式
   */
  isHelp: boolean;
}

interface Input {
  name: "input";
  inputPattern: "文本输入" | "选择框";
  /**
   * inputPattern 输入方式
   */
  isPlaceHolder: boolean;
  size: "large" | "default size" | "small";
  layout: "horizontal" | "vertical" | "inline";
  inputType: "单行输入框" | "自适应多行输入框" | "定高文本域" | "组合输入框";
  inputWidth:104|216|328|440|552
  isBorder?: boolean;
}
