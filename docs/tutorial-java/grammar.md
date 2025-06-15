---
sidebar_position: 2
sidebar_label: '语法'
title: 'Java 语法'
---

## 代码块

**代码块** *(Code Block)* 限定了一个代码范围，使用 `{` 和 `}` 来框出一个代码块。

例子：

```java
{
    // 此处可以写点什么...
}
```

## 修饰符

**修饰符** *(Modifier)* 被用于修饰代码。常见的修饰符有很多，见下表：

| 符号          | 描述                  |
|-------------|---------------------|
| `public`    | 设定可见度为包外、包内的字段都能够访问 |
| `private`   | 设定可见度为类内的字段都能够访问    |
| `protected` | 设定可见度为包内的字段都能够访问    |
| `static`    | 作为整个类的变量，而非单一实例的    |

## 基元数据

常见的基元数据有很多，见下表：

| 符号       | 描述   |
|----------|------|
| `void`   | 空    |
| `short`  | 短型整数 |
| `int`    | 整型整数 |
| `long`   | 长型整数 |
| `double` | 精度数  |
| `float`  | 浮点数  |

## 基元常量

最为常见的**常量** *(Constant)* 莫过于 `null` 了。

## 匿名函数

**匿名函数** *(Lambda function)* 适用于 **接口** *(Interface)* ，假如我有一个接口：

```java showLineNumbers
public interface MyInterface {
    void myFunction();
}
```

在 **方法** *(Method)* 引用此接口作为变量时，我们可以这样来简化代码：

```java showLineNumbers
public class MyClass {
    public void myMethod(MyInterface myInterface) {
        myInterface.myFunction();
    }
}

MyClass myClass = new MyClass();
myClass.myMethod(() -> {
    System.out.println("Hello world!");
});
```

## 注释

你可以在行中使用 `//` 使后方的内容为注释，或者用 `/*` 和 `*/` 来框定一个范围。

### JavaDoc

我们可以在 `/*` 和 `*/` 的基础上，在前者后方加上一个 `*` 来启用 Java Doc 。

```java showLineNumbers
/**
 * this is {@link #hello()} and it will tell you {@code hi}.
 * @author CoolCLK
 */
public String hello() {
    return "hi";
}
```