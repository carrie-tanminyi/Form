import { OptionKey, Flow } from "./type";

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

export default flows;
