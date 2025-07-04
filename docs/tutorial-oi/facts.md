---
sidebar_position: 2
sidebar_label: '冷知识'
title: 'OI 冷知识'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::note

说是冷知识...
不过讲的挺杂的，这里也算得上杂项。

:::

## 缩写

初看这些缩写可能难以快速反应过来，但是写多了程序便会习惯：

| 缩写    | 全名       | 说明                                           |
|-------|----------|----------------------------------------------|
| `ans` | `answer` | 即答案。常见于变量名。                                  |
| `i`   | `index`  | 即序列数。常见于 `for` 循环中，衍生出了 `j`、`k` 等缩写，但都是同一意思。 |

## 时间复杂度 & 空间复杂度

**时间复杂度** _(Time Complexity)_ 是衡量一个算法的快慢，一定要考虑数据规模的大小。
所谓数据规模，一般指输入的数字个数、输入中给出的图的点数与边数等等。
一般来说，数据规模越大，算法的用时就越长。
而在算法竞赛中，我们衡量一个算法的效率时，最重要的不是看它在某个数据规模下的用时，而是看它的用时随数据规模而增长的趋势。

类似地，**空间复杂度** _(Space Complexity)_ 是用来衡量算法所使用的空间随输入规模变化的趋势。

一般地，由于诸多因素，我们都使用符号 $O(...)$ 来表示复杂度。
当然这是不准确的，详见 [oi-wiki 对渐进符号的解释](https://oi-wiki.org/basic/complexity/#%E6%B8%90%E8%BF%9B%E7%AC%A6%E5%8F%B7%E7%9A%84%E5%AE%9A%E4%B9%89)。

## 评判结果

在我们写完程序后，我们可以将代码提交至在线评判平台。

**在线评判平台** _(Online Judge System，又称 OJ)_ 
常见的有
[力扣](https://leetcode.cn/) _(国际版的是 [LeetCode](https://leetcode.com/)，不过国内也进不去)_、
[洛谷](https://www.luogu.com.cn/) 等，
大多数评判平台同时也是题库提供方，我们可以在上面找到许多题目。

同样地，评判结果也大多以缩写的形式告诉我们，见表：

| 缩写  | 全名                    | 说明                                                                            |
|-----|-----------------------|-------------------------------------------------------------------------------|
| AC  | Accepted              | 选手程序被接受。                                                                      |
| CE  | Compile Error         | 选手程序无法正常编译。如果思路没问题的话，一般是哪些写漏或者写错了。                                            |
| WA  | Wrong Answer          | 选手程序正常结束，但是选手程序的输出与测试点输出不符。                                                   |
| PE  | Presentation Error    | 选手程序正常结束，但是格式不符合要求。                                                           |
| RE  | Runtime Error         | 选手程序非正常结束 _(选手程序结束时的返回值不为零，一般是 `int main()` 方法结尾返回了非 `0` 的值，如 `return 1;`。)_。 |
| TLE | Time Limit Exceeded   | 选手程序运行的时间超过了给定的时间限制。                                                          |
| MLE | Memory Limit Exceeded | 选手程序占用的最大空间超过了给定的空间限制。                                                        |
| OLE | Output Limit Exceeded | 选手程序输出的内容的量超过了最大限制。                                                           |

### 小技巧

<Tabs>
  <TabItem value="cpp" label="C++" default>

#### 竞赛佬必备

时间紧，任务重，直接通用头文件吧！

```cpp
#include <bits/stdc++.h>
```

#### 更好的重复循环

为什么重复做某件事情还要 `for` 写长长一坨？直接 `#define` 一下就舒服了：

```cpp
#define repeat(n) for (size_t _ = 0; _ < n; _++)
```

具体用法：

```cpp {6} showLineNumbers
#include <iostream>
#define repeat(n) for (size_t _ = 0; _ < n; _++)
using namespace std;

int main() {
    repeat (10) {
        cout << "Hello! " << endl;
    }
    return 0;
}
```

#### 更好的输入

你还在傻傻的一个个 `cin` 来赋值吗，太不美观了！
不妨试试不定参数方法：

```cpp
void acceptInput() {}

/**
 * 接受多个参数的输入。
 * @author CoolCLK
 */
template <typename T, typename... Args>
void acceptInput(T& first, Args&... args) {
    std::cin >> first;
    acceptInput(args...);
}
```

之后，我们只需要优雅的使用它即可：

```cpp {18} showLineNumbers
#include <iostream>
using namespace std;

void acceptInput() {}

/**
 * 接受多个参数的输入。
 * @author CoolCLK
 */
template <typename T, typename... Args>
void acceptInput(T& first, Args&... args) {
    std::cin >> first;
    acceptInput(args...);
}

int main() {
    int a, b, c, d, e, f, g;
    acceptInput(a, b, c, d, e, f, g);
    cout << a + b + c + d + e + f + g << endl;
    return 0;
}
```

  </TabItem>
</Tabs>