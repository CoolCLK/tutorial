---
sidebar_position: 3
sidebar_label: '变量'
title: 'Java 变量'
---

## 变量

> 此教程使用 **Java Development Kit 1.8.0_341** ，与高版本 Java 可能有*些许差异*

> 此教程仅针对对 **Minecraft** 相关的 **Java** 知识，进阶知识在此不会阐述，但会说明与 **Minecraft** 开发相关技巧

> **Java** 并不是开发 **Minecraft** 的最终语言，也有与 **Java** 同样是使用 *Java Virtual Machine* 的 **Kotlin** ，以及其它通过一些桥梁连接来实现制作模组、使你得以使用其它语言畅游在 **Minecraft** 开发的世界中，又或是使用简易的方法 *（例如 [MCreator](https://mcreator.net/)）* 生成代码。

> 对于想要学习更多的用户，可以前往 [Runoob Java 教程](https://www.runoob.com/java) 学习

**变量 *(Variable)*** 是为我们储存*临时*数据的解决方案。

一个简单的变量定义如下：

```Object obj;```

这是一个很有意思的代码，因为它定义的变量 ```obj``` 兼容性极强。

你可以给这个变量**赋值**，像这样：

``` java
obj = null; // null
obj = 0; // int
obj = 0D; // double
obj = 0L; // long
obj = 0F; // float
obj = ""; // java.lang.String
Object anotherObj;
obj = anotherObj; // 这个变量将最终指向另一个变量
```

变量之间的赋值，又分为*软复制*和*硬复制*。

什么是**软复制**呢？就是指一个变量的**指针** *(内存地址，对于每一种语言都基于此在内存储存变量)* 被赋予到目标变量，引用目标变量是实际上*最终*引用的是一开始的变量。像这样：

``` java
class Student {
    String name;
    
    Student(String name) {
        this.name = name;
    }
}

Student a = new Student("A 学生");
Student b = a;
b.name = "B 学生";
```

按预期运行的话，此处 ```b``` 变量的 ```name``` 属性的值应该为 ```"B 学生"``` ，的确如此。

你也可能会认为此处 ```a``` 变量的 ```name``` 属性的值应该还是原先的 ```"A 学生"``` 。但是，这是错误的。实际上， ```a``` 变量的 ```name``` 属性的值也已经在语句 ```b.name = "B 学生";``` 执行完毕后也变成了 ```"B 学生"```。

因为两个变量实际上用的都是一个 ```Student``` 对象，为了验证，你可以在此之后加上：

``` java
System.out.println(a);
System.out.println(b);
```

结果显而易见，当你调用方法 ```System.out.println``` 时，此方法将传入的值 ```a``` ```b``` 分别调用了共同的方法 ```toString``` ，你会看到控制台输出的结果是：

```
coolclk.tutorial.Main.Student@114514
coolclk.tutorial.Main.Student@114514
```

完全相同，在 ```@``` 后的内容是每个对象独立的 *hashCode* ，也验证了上方的说法。

那么，该怎么解决这个问题呢？

你可以进行 **硬复制** ，但除 *基元数据* 和其它特殊数据外，你仍需要自己实现这个过程。

对于同一包下的类，你可以在原先基础上做出改变，像这样：

``` java
class Student implements Cloneable {
    String name;
    
    Student(String name) {
        this.name = name;
    }
    
    @Override
    protected Object clone() throws CloneNotSupportedException {
        return new Student(this.name);
    }
}

Student a = new Student("A 学生");
Student b = (Student) a.clone(); // 此处方法的调用是必须的
b.name = "B 学生";
```

完成~ 你也可以另外写一个方法，就像上面那样，优点是支持跨包，缺点是针对完美主义者。