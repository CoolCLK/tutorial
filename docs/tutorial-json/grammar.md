---
sidebar_position: 2
sidebar_label: '语法'
title: 'JSON 语法'
---

JSON 中有几个重要的概念，这些概念有助于你理解 JSON 。

## 值

**值** *(Value)* 其实就是表示出数字、字符串（文本）、布尔值的方式的概括。

`1` 可以是值，`true` 可以是值，`"CoolCLK"` 可以是值......

不仅如此，对象 `{}` 与 `[]` 数组也都是值。

## 对象

什么是对象？**对象** *(Object)* 可以装下 **项** 或 **数组**。

一般来说，对象由 `{` 和 `}` 组合。

我们可以将项用 `,` 组合在一起，像这样：`{"name":"CoolCLK","fans":["Fans 1","Fans 2"]}`

### 项

前面说到，对象可以装下多个对象，一个个的对象在大的对象中，被认为是一个 **项** 。

一个项的格式是：`键:值`

想要表示 “名字” 是 “CoolCLK” ，你可以这么写：`"名字":"CoolCLK"`

## 数组

**数据** *(Array)* 将**对象**、**值**、**数组**组合在一起，像这样：

```json
[
  "值",
  {
    "type": "对象"
  },
  [
    "又一个数组的值"
  ]
]
```