---
sidebar_position: 1
sidebar_label: '创建一个新的物品'
title: '创建一个新的物品'
---

本期教程导入列表：
```java
import net.minecraft.block.Block;
import net.minecraft.item.Item;
import net.minecraft.item.BlockItem;
import net.minecraft.item.Items;
import net.minecraft.item.ItemGroup;
import net.minecraft.util.ResourceLocation;
import net.minecraft.item.Item.Properties;
import net.minecraft.item.ItemGroup;
import net.minecraft.item.ItemStack;
import net.minecraftforge.api.distmarker.Dist;
import net.minecraftforge.api.distmarker.OnlyIn;

import java.lang.Override;
```

在本期教程中，我们将创建一个新的**物品** *(Item)*。

我们在软件包下创建一个类 ```Items``` ，不需要继承任何东西，仅仅作为管理物品的一个地方。

创建一个物品是极其简单的，在代码中创建物品*最简单*的仅需一行——使用 ```net.minecraft.item.Item``` 。

创建还不行，还被注册，比如一个 **草** 是这么被注册的：

```java
public static final Item GRASS = net.minecraft.item.Items.registerBlock(Blocks.GRASS, ItemGroup.TAB_DECORATIONS);
```

至于这 ```net.minecraft.item.Items.registerBlock(Block, ItemGroup)```（区分好这个 `Items` 不是我们刚刚创建的那一个，而是 `net.minecraft.item.Items` ） 嘛，是 Forge 为了方便**注册***方块的物品形式*写的。但它最后指向的是这个方法：

```java
private static Item registerItem(ResourceLocation location, Item item) {
  if (item instanceof BlockItem) {
     ((BlockItem) item).registerBlocks(Item.BY_BLOCK, item);
  }

  return Registry.register(Registry.ITEM, location, item);
}
```

上面的代码最后一行是最为关键的，为什么呢？因为这代码调用了注册方法，注册完了你就可以在你的物品栏看到... 还不行，你只能用 ```give``` 指令。

那要怎么给它放创造物品栏里边呢？十分简单，你可以在物品构造方法中插入设定创造模式物品栏的代码，例如我在我们自己创建的 ```Items``` 类写的这一行代码：

```java
public static final Item TUTOIRAL = new Item(new Properties().tab(ItemGroup.TAB_MISC));
```

但是你还想要创建一个专属的创造模式物品栏吗？很简单，也是创建一个类 ```ItemGroup``` （我是在 `coolclk.tutorial.item` ） 管理创造模式物品栏，创建的例子比如这一行：

```java
public static final ItemGroup TAB_TUTORIAL = new ItemGroup("tutoiral") {
    @Override
    @OnlyIn(Dist.CLIENT)
    public ItemStack makeIcon() {
        return new ItemStack(coolclk.tutorial.Items.TUTOIRAL);
    }
};
```

之后将刚才的代码稍作改动：

```java
public static final Item TUTOIRAL = new Item(new Properties().tab(coolclk.tutorial.item.ItemGroup.TAB_TUTORIAL));
```

启动游戏后应该就会有效果了。

但是，为什么这些东西是黑紫黑紫、顺便带有一串英文的代号的名字的物品呢？~~因为你压根没有设定啊。~~

创建文件夹 ```src/main/resources/assets/tutorial/textures/item``` 、 ```src/main/resources/assets/tutorial/models/item``` ，分别放入你的材质或创建一个 ```.json``` 文件，你的文件应该取名为与物品注册是相同的 ID ，那么我这里就创建 ```tutoiral.json``` ，对于正常的物品，只需要这么写：

```json
{
  "parent": "tutorial:item/generated",
  "textures": {
    "layer0": "tutorial:item/tutorial"
  }
}
```

因为我的材质名字就叫 ```tutorial.png``` 所以我就直接在 ```layer0``` 处输入 ```tutorial:item/tutorial``` 了。

然后是语言文件，创建文件夹 ```src/main/resources/assets/tutorial/lang``` ，在其之内再次创建一个 ```zh_cn.json``` ，如果你想支持英文就顺带创建 ```en_us.json``` ，不过你本就**应该创建英文文件而不是*只*创建中文文件**，因为英文文件是**默认**被使用的。

格式倒是没什么好说的，我就顺带把上面需要语言文件的地方都添加名称了。

```json
// en_us.json
{
  "item.tutorial.tutorial": "Tutorial Item",
  "itemGroup.tutorial": "Tutorial",
}
```

```json
// zh_cn.json
{
  "item.tutorial.tutorial": "教程物品",
  "itemGroup.tutorial": "教程",
}
```

这里不再阐述给物品添加 **介绍** *(Lore)* 的教程，有能力的可以上网搜索，~~我懒了~~~