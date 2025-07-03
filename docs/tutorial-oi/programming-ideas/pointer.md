---
sidebar_position: 1
sidebar_label: '指针'
title: '指针'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

:::warning

本教程涉及到的 **指针** 一词可能与 C/C++ 中的 _指针_ 产生歧义，
请注意辨别。

:::

## 介绍

**指针** _(Pointer)_ 一般地 _(尤其是 OI 领域)_ 是指数组中的指定元素的序列数的值。
听起来有点晦涩难懂，但是如果以代码形式就好理解多了：

<Tabs>
  <TabItem value="cpp" label="C++" default>

```cpp
#include <iostream>
#include <vector>
using namespace std;

vector<int> arr = {1, 2, 3, 4};
int i = 0; // 这是一个指针

int main() {
    cout << arr[i] << endl; // 输出指针指向的元素
    i += 2; // 指针向右移动两步
    cout << arr[i] << endl; // 输出指针指向的元素，应当为 3
    return 0;
}
```

  </TabItem>
  <TabItem value="java" label="Java">

```java
public class Main {
    static int[] arr = {1, 2, 3, 4};
    static int i = 0; // 这是一个指针

    public static void main(String[] args) {
        System.out.println(arr[i]); // 输出指针指向的元素
        i += 2; // 指针向右移动两步
        System.out.println(arr[i]); // 输出指针指向的元素，应当为 3
    }
}
```

  </TabItem>
</Tabs>