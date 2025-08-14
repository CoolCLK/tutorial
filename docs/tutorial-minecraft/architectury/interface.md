---
sidebar_position: 3
sidebar_label: '接口实现'
title: 'Architectury 多平台接口实现'
---

我们在面对多平台开发的差异时，我们往往可以用接口的思想来解决。

### Architectury 注解

我们可以直接使用注解 `dev.architectury.injectables.annotations.ExpectPlatform`，
以注册物品为例子，我们可以这么来实现注册物品 _(以 `1.20.6` 为例，实际注册物品可能与有些许差异)_：

```java title="/common/src/main/java/coolclk/tutorial/world/level/block/Blocks.java" showLineNumbers
package coolclk.tutorial.world.level.block;

import dev.architectury.injectables.annotations.ExpectPlatform;
import net.minecraft.world.level.block.Block;
import net.minecraft.world.level.block.GrassBlock;
import net.minecraft.world.level.block.SoundType;
import net.minecraft.world.level.block.state.BlockBehaviour;
import net.minecraft.world.level.material.MapColor;

public class Blocks {
    public static Block GRASS_BLOCK = register(
            "grass_block", new GrassBlock(Properties.of().mapColor(MapColor.GRASS).randomTicks().strength(0.6F).sound(SoundType.GRASS))
    );

    @ExpectPlatform
    public static Block register(String name, Block block) {
        throw new AssertionError();
    }
}
```

```java title="/common/src/main/java/coolclk/tutorial/world/item/Items.java" showLineNumbers
package coolclk.tutorial.world.item;

import coolclk.tutorial.world.level.block.Blocks;
import dev.architectury.injectables.annotations.ExpectPlatform;
import net.minecraft.world.item.Item;
import net.minecraft.world.level.block.Block;

public class Items {
    public static Item GRASS_BLOCK = registerBlock(Blocks.GRASS_BLOCK);

    @ExpectPlatform
    public static Item registerBlock(Block block) {
        throw new AssertionError();
    }
}
```

```java title="/fabric-like/src/main/java/coolclk/tutorial/world/level/block/BlocksImpl.java" showLineNumbers
package coolclk.tutorial.world.level.block;

import coolclk.tutorial.TutorialMod;
import net.minecraft.core.Registry;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.resources.ResourceLocation;
import net.minecraft.world.level.block.Block;

public class BlocksImpl {
    public static Block register(String name, Block block) {
        return Registry.register(BuiltInRegistries.BLOCK, new ResourceLocation(TutorialMod.MOD_ID, name), block);
    }
}
```

```java title="/fabric-like/src/main/java/coolclk/tutorial/world/item/ItemsImpl.java" showLineNumbers
package coolclk.tutorial.world.item;

import net.minecraft.world.item.BlockItem;
import net.minecraft.world.item.Item;
import net.minecraft.world.item.Items;
import net.minecraft.world.level.block.Block;

public class ItemsImpl {
    public static Item registerBlock(Block block) {
        return Items.registerBlock(new BlockItem(block, new Item.Properties()));
    }
}
```

```java title="/neoforge/src/main/java/coolclk/tutorial/world/level/block/BlocksImpl.java" showLineNumbers
package coolclk.tutorial.world.level.block;

import coolclk.tutorial.TutorialMod;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.level.block.Block;
import net.neoforged.neoforge.registries.DeferredRegister;

public class BlocksImpl {
    public static final DeferredRegister<Block> BLOCKS = DeferredRegister.create(
            BuiltInRegistries.BLOCK,
            TutorialMod.MOD_ID
    );
    
    public static Block register(String name, Block block) {
        return BLOCKS.register(
                name,
                () -> block
        ).get();
    }
}
```

```java title="/neoforge/src/main/java/coolclk/tutorial/world/item/ItemsImpl.java" showLineNumbers
package coolclk.tutorial.world.item;

import coolclk.tutorial.TutorialMod;
import net.minecraft.core.registries.BuiltInRegistries;
import net.minecraft.world.item.BlockItem;
import net.minecraft.world.level.block.Block;
import net.neoforged.neoforge.registries.DeferredRegister;

public class ItemsImpl {
    public static final DeferredRegister<Block> ITEMS = DeferredRegister.create(
            BuiltInRegistries.ITEM,
            TutorialMod.MOD_ID
    );
    
    public static Item registerBlock(Block block) {
        return ITEMS.register(
                BuiltInRegistries.BLOCK.getKey(block),
                () -> new BlockItem(block, new Item.Properties())
        ).get();
    }
}
```

```java title="/neoforge/src/main/java/coolclk/tutorial/neoforge/TutorialModNeoForge.java" showLineNumbers
package coolclk.tutorial.neoforge;

import coolclk.tutorial.TutorialMod;
import coolclk.tutorial.world.item.ItemsImpl;
import coolclk.tutorial.world.level.block.BlocksImpl;

@Mod(TutorialMod.MOD_ID)
public class TutorialModNeoForge {
    public TutorialModNeoForge(IEventBus modBus) {
        TutorialMod.init();
        BlocksImpl.BLOCKS.register(modBus);
        ItemsImpl.ITEMS.register(modBus);
    }
}
```

### 覆写

当然，我们也可以不需要使用注解，只需要保持类路径一致即可。