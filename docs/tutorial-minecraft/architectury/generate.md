---
sidebar_position: 2
sidebar_label: '生成模板'
title: '生成 Architectury 模板'
---

我们不需要从零开始，
[Architectury Template Generator](https://generate.architectury.dev/) 提供了模板生成器。

与大多数生成器 _(比如 [Spring Initializr](https://start.spring.io/))_ 类似，
Architectury 允许您选择支持的平台。

此外，Architectury 还允许您选择 **映射表** _(Mappings，主流的有 **Official Mojang mappings**、**Yarn**)_。

Architectury 也提供了 Quilt 这个类 Fabric 项目的通用解决方案，
即又提供了 **Fabric-Like** 的可选子项目。

与大多数加载器类似，Architectury 也提供了 API，即 **Architectury API**。

与别的加载器的 API 不同，Architectury API 只是在不同的平台上进行接口的实现，
因而 Architectury API 的功能实际上比较局限，在 [多平台接口实现](interface.md) 可以了解更多。

生成完项目后，我们导入到 IDE 并导入 Gradle 项目后就可以进行开发了。