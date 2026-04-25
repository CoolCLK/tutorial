---
sidebar_position: 1
sidebar_label: '快速排序'
title: '快速排序'
---

## 介绍

__快速排序__ _(Quick Sort)_，也被称作快排，
其平均时间复杂度为 $O(n\log_{n})$，
最坏时间复杂度为 $O(n^{2})$，
最优空间复杂度为 $O(\log_{}{n})$，
最差空间复杂度为 $O(n)$。

## 思路

假设我们这里有一个数组 `[9,2,3,8,4,5]`，
我们可以在数组中随意挑选一个数字，作为 __基准值__ _(Pivot)_，比如选第一个或最后一个元素。

<table>
    <tr>
        <th style={{fontWeight: 'normal'}}>9</th>
        <th style={{fontWeight: 'normal'}}>2</th>
        <th style={{fontWeight: 'normal'}}>3</th>
        <th style={{fontWeight: 'normal'}}>8</th>
        <th style={{fontWeight: 'normal'}}>4</th>
        <th style={{fontWeight: 'normal', background: 'rgb(16, 136, 253)'}}>5</th>
    </tr>
</table>

这里我选择最后一个元素。

之后，我们进行 __分区__ _(Partition)_ 操作。
核心思想就是将比基准值小的数字放在基准值的左边，反之放在右边。

_表格中越淡的颜色最先被移动。_

<table>
    <tr>
        <th style={{fontWeight: 'normal'}}>2</th>
        <th style={{fontWeight: 'normal'}}>3</th>
        <th style={{fontWeight: 'normal'}}>4</th>
        <th style={{fontWeight: 'normal', background: 'rgb(16, 136, 253)'}}>5</th>
        <th style={{fontWeight: 'normal', background: 'rgb(255, 100, 100)'}}>9</th>
        <th style={{fontWeight: 'normal', background: 'rgb(255, 50, 50)'}}>8</th>
    </tr>
</table>

之后，我们对左右两边的区域都进行同样操作，直到只剩下一个元素为止。

## 代码实现

快速排序主要分为 __Hoare Partition__ 与 __Lamuto Partition__，本质上都没有什么区别。