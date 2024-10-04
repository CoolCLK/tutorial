---
sidebar_position: 2
sidebar_label: '创建一个新的维度'
title: '创建一个新的维度'
---

在本期教程中，我们将创建一个新的**维度** *(Dimension)*。

我们打开文件夹 ```src/main/resources/data/tutorial/dimension_type``` ，创建一个 ```example_dimension_type.json```，输入如下内容：

```json
{
  "fixed_time": 0,
  "has_skylight": true,
  "has_ceiling": false,
  "ultrawarm": false,
  "natural": true,
  "coordinate_scale": 1.0,
  "create_dragon_fight": false,
  "piglin_safe": false,
  "bed_works": true,
  "respawn_anchor_works": false,
  "has_raids": true,
  "logical_height": 256,
  "infiniburn": "minecraft:infiniburn_overworld",
  "effects": "tutorial:example_dimension",
  "ambient_light": 0.0
}
```

现有维度的数据值如表 *(源自源代码)*：

| effects              | minecraft:overworld            | minecraft:nether            | minecraft:end            |
|----------------------|--------------------------------|-----------------------------|--------------------------|
| fixed_time           | *(此项不存在)*                      | 18000                       | 6000                     |
| has_skylight         | true                           | false                       | false                    |
| has_ceiling          | false                          | true                        | false                    |
| ultrawarm            | false                          | true                        | false                    |
| natural              | true                           | false                       | false                    |
| coordinate_scale     | 1.0                            | 8.0                         | 1.0                      |
| create_dragon_fight  | false                          | false                       | true                     |
| piglin_safe          | false                          | true                        | false                    |
| bed_works            | true                           | false                       | false                    |
| respawn_anchor_works | false                          | true                        | false                    |
| has_raids            | true                           | false                       | true                     |
| logical_height       | 256                            | 128                         | 256                      |
| infiniburn           | minecraft:infiniburn_overworld | minecraft:infiniburn_nether | minecraft:infiniburn_end |
| ambient_light        | 0.0                            | 0.1                         | 0.0                      |

若你对此感到疑惑，可前往 [Minecraft Fandom Wiki](https://minecraft.fandom.com/zh/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E7%BB%B4%E5%BA%A6#%E9%BB%98%E8%AE%A4%E5%80%BC) 获取更多信息。

我们打开文件夹 ```src/main/resources/data/tutorial/dimension``` ，创建一个 ```example_dimension.json```，我们将来到本篇*最复杂、最困难的部分*——**世界生成**。

这里有四种方式生成你的世界，分别是 ```minecraft:noise```、```minecraft:flat```、```minecraft:debug```、和自定义生成维度。接下来我将一一列出除最后一种的配置文件：

```json
{
  "type": "tutorial:example_dimension_type",
  "generator": {
    "type": "minecraft:noise",
    "settings": { // 此处也可以是一个噪声配置的ID，此处直接另外配置。除部分改动外，默认使用主世界配置
        "sea_level": 63,
        "disable_mob_generation": false,
        "ore_veins_enabled": true,
        "default_block": {
            "Name": "minecraft:stone",
            "Properties": {} // 可选，此处为空
        },
        "default_fluid": {
            "Name": "minecraft:water",
            "Properties": {} // 可选，此处为空
        },
        "spawn_target": [], // 必选，此处为空，详见 https://minecraft.fandom.com/zh/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%96%E7%95%8C%E7%94%9F%E6%88%90#%E5%99%AA%E5%A3%B0%E8%AE%BE%E7%BD%AE
        "noise": {
            "min_y": 0,
            "height": 256,
            "size_horizontal": 1,
            "size:vertical": 1,
        },
        "noise_router": { // 此处的所有值可填一个字符串、一个精度值、一个对象，详见 https://minecraft.fandom.com/zh/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%96%E7%95%8C%E7%94%9F%E6%88%90#%E5%99%AA%E5%A3%B0%E8%AE%BE%E7%BD%AE
            "initial_density_without_jaggedness": 0.0,
            "final_density": 0.0,
            "barrier": 0.0,
            "fluid_level_floodedness": 0.0,
            "fluid_level_spread": 0.0,
            "lava": 0.0,
            "vein_toggle": 0.0,
            "vein_ridged": 0.0,
            "vein_gap": 0.0,
            "temperature": 0.0,
            "vegetation": 0.0,
            "continents": 0.0,
            "erosion": 0.0,
            "depth": 0.0,
            "ridges": 0.0,
        },
        "surface_rule": {
            "type": "block", // 此处只演示 block 模式，详见 https://minecraft.fandom.com/zh/wiki/%E8%87%AA%E5%AE%9A%E4%B9%89%E4%B8%96%E7%95%8C%E7%94%9F%E6%88%90#%E5%99%AA%E5%A3%B0%E8%AE%BE%E7%BD%AE
            "reuslt_state": {
                "Name": "minecraft:grass_block",
                "Properties": {} // 可选，此处为空
            }
        }
    },
  }
}
```

```json
{
  "type": "tutorial:example_dimension_type",
  "generator": {
    "type": "minecraft:debug"
  }
}
```

```json
{
  "type": "tutorial:example_dimension_type",
  "generator": {
    "type": "minecraft:flat",
    "settings": {
        "layers": [ // 可以为空，此处使用默认超平坦配置
            {
                "height": 1,
                "block": "minecraft:bedrock"
            },
            {
                "height": 3,
                "block": "minecraft:dirt"
            },
            {
                "height": 1,
                "block": "minecraft:grass_block"
            }
        ],
        "biome": "plains", // 可选，此处使用默认超平坦配置
        "lakes": false, // 可选，此处使用默认超平坦配置
        "features": false, // 可选，此处使用默认超平坦配置
        "structure_overrides": [] // 可选，此处为空
    }
  }
}
```

最后一种自定义生成方式具有**高自由度**的特点，适合高级用户。

我们在任意软件包下创建一个类（例如 ```ExampleChunkGenerator``` ），我们首先继承 ```net.minecraft.world.gen.ChunkGenerator``` ，代码如下：

```java
package coolclk.tutorial.world.gen;

import net.minecraft.world.gen.ChunkGenerator;

import javax.annotation.Nonnull;

public class ChunkGeneratorExample extends ChunkGenerator {
    @Override
    @Nonnull
    protected Codec<? extends ChunkGenerator> codec() {
        return null;
    }

    @Override
    @Nonnull
    public ChunkGenerator withSeed(long seed) {
        return null;
    }

    @Override
    public void buildSurfaceAndBedrock(@Nonnull WorldGenRegion region, @Nonnull IChunk chunk) {
    }

    @Override
    public void fillFromNoise(@Nonnull IWorld world, @Nonnull StructureManager manager, @Nonnull IChunk chunk) {
    }

    @Override
    public int getBaseHeight(int x, int y, @Nonnull Heightmap.Type type) {
        return 0; // 这个世界的基础高度
    }

    @Override
    @Nonnull
    public IBlockReader getBaseColumn(int x, int y) {
        return null;
    }
}
```

*实际上，上面那些代码我还没想好怎么写 qwq*

当我们编写完成后，怎么使用呢？很简单，我们在代码结尾添加这些代码：

```java
static {
    Registry.register(Registry.CHUNK_GENERATOR, "example_generator", ChunkGeneratorExample.CODEC);
}
```

一般你是不会去直接使用 ```settings``` *（除非为了~~方便同时创建其它维度~~**提高代码可读性**除外）*，因此，我此处的配置文件只需要这么写：

```json
{
  "type": "tutorial:example_dimension_type",
  "generator": {
    "type": "tutorial:example_generator",
  }
}
```

最后，我们来注册这个维度。这里我创建了一个新的类来管理维度，代码如下：

```java
public static final RegistryKey<Dimension> EXAMPLE_DIMENSION = RegistryKey.create(Registry.LEVEL_STEM_REGISTRY, new ResourceLocation("example_dimension"));
```

我们运行游戏，正常创建世界，输入指令 ```execute as @s in tutorial:example_dimension run tp @s ~ ~ ~```