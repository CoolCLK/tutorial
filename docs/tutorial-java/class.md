---
sidebar_position: 2
sidebar_label: '类'
title: 'Java 类'
---

## 类

> 此教程使用 **Java Development Kit 1.8.0_341** ，与高版本 Java 可能有*些许差异*

> 此教程仅针对对 **Minecraft** 相关的 **Java** 知识，进阶知识在此不会阐述，但会说明与 **Minecraft** 开发相关技巧

> **Java** 并不是开发 **Minecraft** 的最终语言，也有与 **Java** 同样是使用 *Java Virtual Machine* 的 **Kotlin** ，以及其它通过一些桥梁连接来实现制作模组、使你得以使用其它语言畅游在 **Minecraft** 开发的世界中，又或是使用简易的方法 *（例如 [MCreator](https://mcreator.net/)）* 生成代码。

> 对于想要学习更多的用户，可以前往 [Runoob Java 教程](https://www.runoob.com/java) 学习

当我们创建一个类后，会十分的头大——要干什么？

不过，现如今有了 IDE ，你不必再为此发愁，因为 IDE 会为你自动编写那些东西，比如我在 ```coolclk.tutorial``` 下创建一个 ```Main``` ，打开后直接便有了：

``` java
package coolclk.tutorial;

public class Main {
}
```

~~不过好像作用不大啊~~。

咳咳，没关系，这不是重点，此教程的重点是 **类 *(Class)*** 。

类有什么特性，看源代码后你就知道了：

``` java
// 想得美，这么长自己去找
```

当我们直接使用 ```java.lang.Class``` 是，只有两个能用的，一个 ```forName(java.lang.String, boolean, java.lang.ClassLoader)``` ，还有一个缩短版的  ```forName(java.lang.String)``` 。一般地，这两个作用差不多，都是以名字找类，找不到就报错。

那么实例化的呢？那可就多了，我就挑几个讲一下。

一个 ```getName()``` ，就是类的名字，除了动态的类，你基本上用不到它，~~你总不能不知道你自己的类在哪里吧~~，其它几个跟它名字差不多的都是在这个方法的基础上格式化而已，```toString()``` 同样如此。

还有一个是 ```newInstance()``` 实例化方法，调用类的*构造函数*新建一个实例，实例的概念较为抽象。

我将类与实例打个比方：假说有个类叫做 *“人类”* ，那实例就是我们这些 *“活着的人类”* ，“人类”拥有“性别”这个变量，没有初始化值，但我们每个“活着的人类”都是拥有“性别”对应的量的（就是是男是女）。怎么样，多少有点概念了吧。

类实际上有用的地方还有很多，例如含类型实参的类，不过我这里**不再阐述**，感兴趣的自行研究。