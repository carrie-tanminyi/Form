const optionLibraries = {
  // Step 1:定义「选项是什么」的数据结构
  input: "输入",
  select: "选择",
  upload: "上传",
  number: "数字",
  string: "文字",
  radio: "单选",
  moreOptions: "多选",
  other: "其他",
  uploadByClicking: "点击上传",
  dragAndDrop: "拖拽上传",
};

type OptionKey = keyof typeof optionLibraries;

interface Flow {
  title: string;
  options: OptionKey[] | Record<any, OptionKey[]>;
}

const flows: (Flow | Partial<Record<OptionKey, Flow>>)[] = [
  {
    title: "1312321",
    options: ["input", "select", "upload"],
  },
  {
    input: {
      title: "你需要输入什么？",
      options: ["number", "string"],
    },
    select: {
      title: "你的选择场景是什么？",
      options: ["radio", "moreOptions", "other"],
    },
    upload: {
      title: "你上传的交互方式是什么？",
      options: ["uploadByClicking", "dragAndDrop"],
    },
  },
];

const list = [
  [["input", "Number"], ["InputNumber"]],
  [
    ["input", "String"],
    ["Form", "Input", "Mentions"],
  ],
  [
    ["Select", "Radio"],
    ["Radio（选项数量<=5)", "Select（选项数量>5)", "treeSelect(选项有分类时）"],
  ],
  [
    ["Select", "MoreOptions"],
    ["TreeSelect(选项有分类时）", "Checkbox （选项数量<=5)", "Transfer"],
  ],
  [
    ["Select", "Other"],
    ["Rate评分", "Slider滑动输入条"],
  ],
  [["upload", "uploadByClicking"], ["点击上传"]],
  [["upload", "dragAndDrop"], ["拖拽上传"]],
];
