---
sidebar_position: 1
sidebar_label: '入门'
title: 'ConsoleCode 开始页'
---

__ConsoleCode__ 项目的核心就是 `coolclk.consolecode.ConsoleCode`,  围绕这个类你可以掌控整个终端样式！

> 本库支持链式方法。

> 如若没有说明, 接下来任何类都是 `coolclk.consolecode` 下的包/类. 

## 样式

调用 `ConsoleCode.style()` 来开始, 这将会返回一个 `builder.StyleCode` 实例. 

### 效果

我们可以调用 `builder.StyleCode` 的各种方法来对效果进行操作, 这将会返回一个 `builder.style.EffectCode<builder.StyleCode>` 实例. 

| 方法           | 参数                                                       | 作用        |
|--------------|----------------------------------------------------------|-----------|
| `reset`      |                                                          | 重置所有效果    |
| `normal`     |                                                          | 使用默认效果    |
| `bold`       | `off`: _可选_, 类型 `boolean` , 若为 `true` 则取消粗体.             | 粗体        |
| `faint`      |                                                          | 暗淡        |
| `italic`     |                                                          | 斜体        |
| `underline`  | `isDoubled`: _可选_, 类型 `boolean` , 若为 `true` 则使下划线变为双下划线. | _(双)_ 下划线 |
| `blink`      | `rapid`: _可选_, 类型 `boolean` , 若为 `true` 则使闪烁速度加快.        | 闪烁        |
| `invert`     |                                                          | 反转颜色      |
| `conceal`    | `off`: _可选_, 类型 `boolean` , 若为 `true` 则再次显示文字.           | 隐藏        |
| `crossedOut` | `off`: _可选_, 类型 `boolean` , 若为 `true` 则取消删除线.            | 删除线       |

## 内容

调用 `ConsoleCode.context()` 来开始, 这将会返回一个 `builder.ContextCode` 实例.

### 擦除

我们可以调用 `builder.ContextCode.erase()` 进行内容擦除操作, 这将会返回一个 `builder.context.EraseCode<builder.ContextCode>` 实例.

_假定 `T` 为类的类型变量_，在 `builder.context.EraseCode<T>` 中，可以使用 `line()`、`screen()` 方法来选择、擦除内容。

## 指针

调用 `ConsoleCode.cursor()` 来开始, 这将会返回一个 `builder.CursorCode` 实例.

### 移动

我们可以调用 `builder.Cursor` 的各种方法来对指针进行操作, 如移动、放置、保存位置与读取位置.