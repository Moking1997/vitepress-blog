const pages = [
  {
    frontMatter: {
      date: "2020-12-13",
      title: "测试",
      describe:
        "作者经历了一次特别的面试，面试中的一个环节是考察应试者学习新的 Web 框架；作者需要花七天时间学习一个从未接触过的 Web 框架，然后在在线编程面试中展示学到的知识和技能。也就是说，雇主考察",
    },
    regularPath: "/docs/1 copy 4.html",
    relativePath: "docs/1 copy 4.md",
  },
  {
    frontMatter: {
      date: "2020-11-13",
      title: "测试",
      describe:
        "作者经历了一次特别的面试，面试中的一个环节是考察应试者学习新的 Web 框架；作者需要花七天时间学习一个从未接触过的 Web 框架，然后在在线编程面试中展示学到的知识和技能。也就是说，雇主考察",
    },
    regularPath: "/docs/1.html",
    relativePath: "docs/1.md",
  },
  {
    frontMatter: {
      date: "2020-11-13",
      title: "测试",
      describe:
        "作者经历了一次特别的面试，面试中的一个环节是考察应试者学习新的 Web 框架；作者需要花七天时间学习一个从未接触过的 Web 框架，然后在在线编程面试中展示学到的知识和技能。也就是说，雇主考察",
    },
    regularPath: "/docs/1 copy.html",
    relativePath: "docs/1 copy.md",
  },
  {
    frontMatter: {
      home: true,
      date: "2020-11-13",
      title: "首页",
      describe: "首页",
    },
    regularPath: "/index.html",
    relativePath: "index.md",
  },
  {
    frontMatter: { date: "2020-11-13", title: "归档", describe: "归档" },
    regularPath: "/docs.html",
    relativePath: "docs.md",
  },
  {
    frontMatter: {
      date: "2020-11-12",
      title: "测试2",
      describe:
        "作者经历了一次特别的面试，面试中的一个环节是考察应试者学习新的 Web 框架；作者需要花七天时间学习一个从未接触过的 Web 框架，然后在在线编程面试中展示学到的知识和技能。也就是说，雇主考察",
    },
    regularPath: "/docs/test.html",
    relativePath: "docs/test.md",
  },
  {
    frontMatter: {
      date: "2020-11-03",
      title: "测试",
      describe:
        "作者经历了一次特别的面试，面试中的一个环节是考察应试者学习新的 Web 框架；作者需要花七天时间学习一个从未接触过的 Web 框架，然后在在线编程面试中展示学到的知识和技能。也就是说，雇主考察",
    },
    regularPath: "/docs/1 copy 3.html",
    relativePath: "docs/1 copy 3.md",
  },
  {
    frontMatter: {
      date: "2020-01-13",
      title: "测试",
      describe:
        "作者经历了一次特别的面试，面试中的一个环节是考察应试者学习新的 Web 框架；作者需要花七天时间学习一个从未接触过的 Web 框架，然后在在线编程面试中展示学到的知识和技能。也就是说，雇主考察",
    },
    regularPath: "/docs/1 copy 5.html",
    relativePath: "docs/1 copy 5.md",
  },
  {
    frontMatter: {
      date: "2010-11-14",
      title: "测试",
      describe:
        "作者经历了一次特别的面试，面试中的一个环节是考察应试者学习新的 Web 框架；作者需要花七天时间学习一个从未接触过的 Web 框架，然后在在线编程面试中展示学到的知识和技能。也就是说，雇主考察",
    },
    regularPath: "/docs/1 copy 2.html",
    relativePath: "docs/1 copy 2.md",
  },
];
function useYearSort(pages) {
  const data = [];
  let year = 0;
  let num = -1;
  for (let index = 0; index < pages.length; index++) {
    const element = pages[index];
    const y = element.frontMatter.date.split("-")[0];
    if (y == year) {
      data[num].push(element);
    } else {
      num++;
      data[num] = [];
      data[num].push(element);
      year = y;
    }
  }
  return data;
}
console.log("数据", useYearSort(pages));
