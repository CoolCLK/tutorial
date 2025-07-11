---
sidebar_position: 3
sidebar_label: '类'
title: 'Java 类'
---

当我们创建一个类后，会十分的头大——要干什么？

不过，现如今有了 IDE ，你不必再为此发愁，因为 IDE 会为你自动编写那些东西，比如我在 ```coolclk.tutorial``` 下创建一个 ```Main``` ，打开后直接便有了：

```java title="/src/java/coolclk/tutorial/Main.java" showLineNumbers
package coolclk.tutorial;

public class Main {
}
```

~~不过好像作用不大啊~~。

咳咳，没关系，这不是重点，此教程的重点是 **类 *(Class)*** 。

当我们直接使用 ```java.lang.Class``` 是，只有两个能用的，一个 ```forName(java.lang.String, boolean, java.lang.ClassLoader)``` ，还有一个缩短版的  ```forName(java.lang.String)``` 。一般地，这两个作用差不多，都是以名字找类，找不到就报错。

那么实例化的呢？那可就多了，我就挑几个讲一下。

一个 ```getName()``` ，就是类的名字，除了动态的类，你基本上用不到它，~~你总不能不知道你自己的类在哪里吧~~，其它几个跟它名字差不多的都是在这个方法的基础上格式化而已，```toString()``` 同样如此。

还有一个是 ```newInstance()``` 实例化方法，调用类的*构造函数*新建一个实例，实例的概念较为抽象。

我将类与实例打个比方：假说有个类叫做 *“人类”* ，那实例就是我们这些 *“活着的人类”* ，“人类”拥有“性别”这个变量，没有初始化值，但我们每个“活着的人类”都是拥有“性别”对应的量的（就是是男是女）。怎么样，多少有点概念了吧。

类实际上有用的地方还有很多，例如含类型实参的类，不过我这里**不再阐述**，感兴趣的自行研究。