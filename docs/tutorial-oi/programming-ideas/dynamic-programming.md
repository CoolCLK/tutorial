---
sidebar_position: 3
sidebar_label: '动态规划'
title: '动态规划'
---
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## 运用

### 斐波那契数列

**斐波那契数列** _(Fibonacci Sequence)_，又称黄金分割数列。
其第 $1$ 个数字为 $0$，第 $2$ 个数字为 $1$，
我们把整个数列的定义为一个函数 $f(x)$ 的话，
那么第 $n$ 个数字就为：
$$f(n) = f(n - 1) + f(n - 2)$$

当然，我们也可以使用表格来表示它：

| 1 | 2 | 3 | 4 | 5 | 6   | ...      | $n - 2$ | $n - 1$ | $n$   |
|---|---|---|---|---|-----|----------|---------|---------|-------|
| $0$ | $1$ | $1$ | $2$ | $3$ | $5$ | $\dots$  | $a$     | $b$     | $a+b$ |

那么，我们怎样来用程序计算任一斐波那契数呢。
我们很容易地想到递归 _(此处存在第 $0$ 个数字)_：

<Tabs>
  <TabItem value="cpp" label="C++" default>

```cpp showLineNumbers
/**
 * 斐波那契数计算。
 * @author CoolCLK
 */
#include <iostream>
#include <unordered_map>
#define l_long long long

l_long fibonacci(int x) {
    if (x <= 1) {
        return x; // 返回第 0、1 个数字
    }
    return fibonacci(x - 1) + fibonacci(x - 2);
}

int main() {
    int x;
    std::cin >> x;
    std::cout << fibonacci(x) << std::endl;
    return 0;
}
```

  </TabItem>
</Tabs>

但是，不难发现，这种方法的时间复杂度为 $O({2}^{n})$，实在是难以接受。

我们此时可以使用动态规划的记忆化来解决这个问题。

<Tabs>
  <TabItem value="cpp" label="C++" default>

```cpp {9,13,15,19-20} showLineNumbers
/**
 * 斐波那契数计算，使用动态规划优化。
 * @author CoolCLK
 */
#include <iostream>
#include <unordered_map>
#define l_long long long

std::unordered_map<int, l_long> sequence = {{0, 0}, {1, 1}}; // 记录已经计算过的数字

l_long fibonacci(int x) {
    if (sequence.size() <= x - 1) {
        sequence[x - 1] = fibonacci(x - 1); // 由于是顺序计算，直接计算前一个即可
    }
    return sequence[x - 1] + sequence[x - 2];
}

int main() {
    sequence[0] = 0;
    sequence[1] = 1;

    int x;
    std::cin >> x;
    std::cout << fibonacci(x) << std::endl;
    return 0;
}
```

  </TabItem>
</Tabs>

最终，这种方法的时间复杂度为 $Θ(n - 2)$，差不多是 $O(n)$。
当然，还有更好的优化方法，这里不再进行阐述。