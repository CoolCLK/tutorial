---
sidebar_position: 1
sidebar_label: '创建一个新的维度'
title: '创建一个新的维度'
---

在本期教程中，我们将创建一个新的**维度** *(Dimension)*。

我们在包 ```coolclk.tutorial.world``` ，创建类 ```DimensionType``` 并像这样输入代码：

```java
package coolclk.tutorial.world;

import static net.minecraft.world.DimensionType.register;

public class DimensionType {
    public static final net.minecraft.world.DimensionType TUTORIAL;

    static {
        TUTORIAL = register("tutorial", "_tutorial", 2, WorldProviderTurotial.class, false);
    }
}

```

我们在包 ```coolclk.tutorial.world``` ，创建类 ```DimensionType``` 并像这样输入代码：

```java
package coolclk.tutorial.world;

import static net.minecraft.world.DimensionType.register;

public class DimensionType {
    public static final net.minecraft.world.DimensionType TUTORIAL;

    static {
        TUTORIAL = register("tutorial", "_tutorial", 2, WorldProviderTurotial.class, false);
    }
}
```

在此包下创建 ```WorldProviderTutorial``` ，一般是这样的：

```java

package coolclk.tutorial.world;

import coolclk.tutorial.world.DimensionType;
import net.minecraft.world.WorldProvider;

public class WorldProviderTutorial extends WorldProvider {
    @Override
    public DimensionType getDimensionType() {
        return DimensionType.TUTORIAL;
    }
}
```

有很多可选项，我列出了一部分（没有 Forge 提供的方法）：

| 方法                                                                                     | 作用                                                                                                           |
|----------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|
| ```protected void generateLightBrightnessTable()```                                    | 生成各级光照强度的**实际渲染亮度**                                                                                          |
| ```protected void init()```                                                            | 初始化                                                                                                          |
| ```public void createChunkGenerator()```                                               | 创建一个 ```net.minecraft.world.gen.IChunkGenerator``` （用于生成世界）                                                  |
| ```public boolean canCoordinateBeSpawn(int chunkX, int chunkZ)```                      | 检查出生点是否可用                                                                                                    |
| ```public boolean calculateCelestialAngle(long worldTime, float partialTicks)```       | 通过世界时间计算太阳角度                                                                                                 |
| ```public int getMoonPhase(long worldTime)```                                          | 获取月相 *（最终反月食程度的值是 ```net.minecraft.world.WorldProvider.MOON_PHASE_FACTORS[this.getMoonPhase(worldTime)]```）* |
| ```public boolean isSurfaceWorld()```                                                  | 是否为非*地狱/末地*的世界                                                                                               |
| ```public float[] calcSunriseSunsetColors(float celestialAngle, float partialTicks)``` | 计算日出/日落颜色 *（返回值其实是 RGB）*                                                                                     |
| ```public Vec3d getFogColor(float celestialAngle, float partialTicks)```               | 计算雾的颜色 *（返回值其实是 RGB）*                                                                                        |
| ```public boolean canRespawnHere()```                                                  | 玩家是否能在这里重生                                                                                                   |
| ```public float getCloudHeight()```                                                    | 决定云的高度                                                                                                       |
| ```public boolean isSkyColored()```                                                    | 天空是否有颜色                                                                                                      |
| ```public net.minecraft.util.math.BlockPos getSpawnCoordinate()```                     | 获取一个出生点                                                                                                      |
| ```public int getAverageGroundLevel()```                                               | 决定了你认为地面平均的高度 *（用作生成**村庄**一类结构）*                                                                             |
| ```public double getVoidFogYFactor()```                                                | 决定虚空雾的密度（越高的密集值，从天空调入虚空周围变成虚空黑更远但变化更快）                                                                       |
| ```public boolean doesXZShowFog(int x, int z)```                                       | 决定某个地方是否应该有雾                                                                                                 |
| ```public net.minecraft.world.biome.BiomeProvider getBiomeProvider()```                | 返回 ```net.minecraft.world.biome.BiomeProvider```                                                             |
| ```public boolean doesWaterVaporize()```                                               | 决定水是否蒸发                                                                                                      |
| ```public boolean hasSkyLight()```                                                     | 决定天空是否有亮度                                                                                                    |
| ```public boolean isNether()```                                                        | 返回这个世界是否为地狱（或**拥有地狱的特征**）                                                                                    |
| ```public float[] getLightBrightnessTable()```                                         | 与 ```protected void generateLightBrightnessTable()``` 不同，此处是*获取***已生成的亮度表**                                  |
| ```public net.minecraft.world.border.WorldBorder createWorldBorder()```                | 创建一个 ```net.minecraft.world.border.WorldBorder```                                                            |

为了让这个世界能够加载区块，你要添加 ```public net.minecraft.world.gen.IChunkGenerator createChunkGenerator()V``` 方法，给它返回你创建的新实例。

~~不过，你还没创建。~~

在此包下创建 ```gen.ChunkGeneratorTutorial``` ，默认是这样的：

```java
package coolclk.tutorial.world.gen;

import net.minecraft.entity.EnumCreatureType;
import net.minecraft.util.math.BlockPos;
import net.minecraft.world.World;
import net.minecraft.world.biome.Biome;
import net.minecraft.world.chunk.Chunk;
import net.minecraft.world.gen.IChunkGenerator;

import javax.annotation.Nonnull;
import javax.annotation.Nullable;
import java.util.Collections;
import java.util.List;

public class ChunkGeneratorTutorial implements IChunkGenerator {
    @Nonnull
    @Override
    public Chunk generateChunk(int chunkX, int chunkZ) {
        return null;
    }

    @Override
    public void populate(int chunkX, int chunkZ) {

    }

    @Override
    public boolean generateStructures(@Nonnull Chunk chunkIn, int chunkX, int chunkZ) {
        return false;
    }

    @Nonnull
    @Override
    public List<Biome.SpawnListEntry> getPossibleCreatures(@Nonnull EnumCreatureType creatureType, @Nonnull BlockPos position) {
        return Collections.emptyList();
    }

    @Nullable
    @Override
    public BlockPos getNearestStructurePos(@Nonnull World worldIn, @Nonnull String structureName, @Nonnull BlockPos position, boolean findUnexplored) {
        return null;
    }

    @Override
    public void recreateStructures(@Nonnull Chunk chunkIn, int chunkX, int chunkZ) {

    }

    @Override
    public boolean isInsideStructure(@Nonnull World worldIn, @Nonnull String structureName, @Nonnull BlockPos pos) {
        return false;
    }
}
```

我们主要操作的是 ```generateChunk(int, int)``` 和 ```populate(int, int)``` ，其余的大多是可选的。

这是一个简单生成拥有矿洞、村庄、要塞、水湖、岩浆湖、矿物的超平坦的例子（省略 ```import``` 等）：

```java
private final Random randomizer;
private final World world;
private final boolean mapFeaturesEnabled;
private final ChunkGeneratorSettings settings;
private final MapGenCaves caveGenerator;
private final MapGenVillage villageGenerator;
private final MapGenStrongholdPortalRoom strongholdGenerator;

public ChunkGeneratorSky(World world) {
    this.world = world;
    this.mapFeaturesEnabled = world.getWorldInfo().isMapFeaturesEnabled();
    this.randomizer = new Random(world.getSeed());
    this.caveGenerator = new MapGenCaves();
    this.villageGenerator = new MapGenVillage();
    this.strongholdGenerator = new MapGenStrongholdPortalRoom();

    this.settings = ChunkGeneratorSettings.Factory.jsonToFactory(world.getWorldInfo().getGeneratorOptions()).build();
    this.world.setSeaLevel(this.settings.seaLevel);
}

private void generateFlat(int chunkX, int chunkZ, ChunkPrimer chunkPrimer) {
    for (int x = 0; x < 16; x++) {
        for (int z = 0; z < 16; z++) {
            IBlockState fillBlock = Blocks.STONE.getDefaultState();
            for (int y = 0; y <= 60; y++) {
                if (y == 60) fillBlock = Blocks.GRASS.getDefaultState();
                chunkPrimer.setBlockState(x, y, z, fillBlock);
                fillBlock = y >= 55 ? Blocks.DIRT.getDefaultState() : Blocks.STONE.getDefaultState();
            }
        }
    }
}

@Nonnull
@Override
public Chunk generateChunk(int chunkX, int chunkZ) {
    this.randomizer.setSeed((long) chunkX * 0x4f9939f508L + (long) chunkX * 0x1ef1565bd5L); // 我也不知道为什么这样，经典老番，notch 是这样写的

    ChunkPrimer chunkPrimer = new ChunkPrimer();

    this.generateFlat(chunkX, chunkZ, chunkPrimer);

    if (this.settings.useCaves) { // 使你的世界更灵活，因而这是可选的 if，下面也差不多
        this.caveGenerator.generate(this.world, chunkX, chunkZ, chunkPrimer);
    }

    if (this.mapFeaturesEnabled) {
        if (this.settings.useVillages) {
            this.villageGenerator.generate(this.world, chunkX, chunkZ, chunkPrimer);
        }
        if (this.settings.useStrongholds) {
            this.strongholdGenerator.generate(this.world, chunkX, chunkZ, chunkPrimer);
        }
    }

    Chunk chunk = new Chunk(this.world, chunkPrimer, chunkX, chunkZ);
    chunk.generateSkylightMap(); // 给区块加载一波光照，要不然黑漆漆
    return chunk;
}

@Override
public void populate(int chunkX, int chunkZ) {
    BlockSand.fallInstantly = true;

    int chunkWorldX = chunkX * 16;
    int chunkWorldZ = chunkZ * 16;
    BlockPos chunkWorldPosition = new BlockPos(chunkWorldX, this.getBaseHeight(chunkX, chunkZ), chunkWorldZ);
    Biome biome = world.getBiome(chunkWorldPosition.add(16, this.getBaseHeight(chunkX, chunkZ), 16));
    randomizer.setSeed(world.getSeed());
    long xTemperature = (randomizer.nextLong() / 2L) * 2L + 1L;
    long zTemperature = (randomizer.nextLong() / 2L) * 2L + 1L;
    randomizer.setSeed((long) chunkX * xTemperature + (long) chunkZ * zTemperature ^ world.getSeed());
    boolean hasVillage = false;
    ChunkPos chunkPosition = new ChunkPos(chunkWorldX, chunkWorldZ);

    if (this.mapFeaturesEnabled) {
        if (this.settings.useVillages) {
            hasVillage = this.villageGenerator.generateStructure(this.world, this.randomizer, chunkPosition);
        }
        if (this.settings.useStrongholds) {
            this.strongholdGenerator.generateStructure(this.world, this.randomizer, chunkPosition);
        }
    }

    if (biome != Biomes.DESERT && biome != Biomes.DESERT_HILLS && this.settings.useWaterLakes && !hasVillage && randomizer.nextInt(this.settings.waterLakeChance) == 0) {
        int x = this.randomizer.nextInt(16) + 8,
            y = this.randomizer.nextInt(256),
            z = this.randomizer.nextInt(16) + 8;
        (new WorldGenLakes(Blocks.WATER)).generate(world, randomizer, chunkWorldPosition.add(x, y, z));
    }
    if (!hasVillage && this.randomizer.nextInt(this.settings.lavaLakeChance / 10) == 0 && this.settings.useLavaLakes) {
        int x = this.randomizer.nextInt(16) + 8,
            y = this.randomizer.nextInt(this.randomizer.nextInt(240) + 8),
            z = this.randomizer.nextInt(16) + 8;
        if (y < this.world.getSeaLevel() || this.randomizer.nextInt(this.settings.lavaLakeChance / 8) == 0) {
            (new WorldGenLakes(Blocks.LAVA)).generate(this.world, this.randomizer, chunkWorldPosition.add(x, y, z));
        }
    }
    if (this.settings.useDungeons) {
        for (int _times = 0; _times < this.settings.dungeonChance; _times++) {
            int x = this.randomizer.nextInt(16) + 8,
                y = this.randomizer.nextInt(256),
                z = this.randomizer.nextInt(16) + 8;
            (new WorldGenDungeons()).generate(this.world, this.randomizer, chunkWorldPosition.add(x, y, z));
        }
    }

    biome.decorate(this.world, this.randomizer, new BlockPos(chunkWorldX, 0, chunkWorldZ));
    WorldEntitySpawner.performWorldGenSpawning(this.world, biome, chunkWorldX + 8, chunkWorldZ + 8, 16, 16, this.randomizer);

    for (int x = 0; x < 16; x++) {
        for (int z = 0; z < 16; z++) {
            BlockPos precipitationHeight = this.world.getPrecipitationHeight(chunkWorldPosition.add(x, 0, z));
            if (this.world.canBlockFreezeWater(precipitationHeight.down())) {
                this.world.setBlockState(precipitationHeight.down(), Blocks.ICE.getDefaultState(), 2);
            }
            if (this.world.canSnowAt(precipitationHeight, true)) {
                this.world.setBlockState(precipitationHeight, Blocks.SNOW_LAYER.getDefaultState(), 2);
            }
        }
    }

    BlockSand.fallInstantly = false;
}

@Override
public boolean generateStructures(@Nonnull Chunk chunkIn, int chunkX, int chunkZ) {
    return false;
}

@Nonnull
@Override
public List<Biome.SpawnListEntry> getPossibleCreatures(@Nonnull EnumCreatureType creatureType, @Nonnull BlockPos position) {
    return this.world.getBiome(blockPos).getSpawnableList(creatureType);
}

@Nullable
@Override
public BlockPos getNearestStructurePos(@Nonnull World worldIn, @Nonnull String structureName, @Nonnull BlockPos position, boolean findUnexplored) {
    if (this.mapFeaturesEnabled) {
        if (this.villageGenerator != null && "Village".getStructureName().equals(structureName)) {
            return this.villageGenerator.getNearestStructurePos(world, blockPos, findUnexplored);
        }
        if (this.strongholdGenerator != null && "StrongHold".getStructureName().equals(structureName)) {
            return this.strongholdGenerator.getNearestStructurePos(world, blockPos, findUnexplored);
        }
    }
    return null;
}

@Override
public void recreateStructures(@Nonnull Chunk chunkIn, int chunkX, int chunkZ) {
    if (this.mapFeaturesEnabled) {
        if (this.settings.useStrongholds) {
            this.strongholdGenerator.generate(this.world, chunkX, chunkZ, null);
        }
        if (this.settings.useVillages) {
            this.villageGenerator.generate(this.world, chunkX, chunkZ, null);
        }
    }
}

@Override
public boolean isInsideStructure(@Nonnull World worldIn, @Nonnull String structureName, @Nonnull BlockPos position) {
    if (this.mapFeaturesEnabled) {
        if (this.villageGenerator != null && "Village".getStructureName().equals(structureName)) {
            return this.villageGenerator.isInsideStructure(position);
        }
        if (this.strongholdGenerator != null && "StrongHold".getStructureName().equals(structureName)) {
            return this.strongholdGenerator.isInsideStructure(position);
        }
    }
    return false;
}
```

之后，为了进入到这个维度，我这里先用指令实现进入我的维度，若你也想这样，在你的 Forge 入口，像我这样注册简易指令：

```java
package coolclk.tutorial;

import coolclk.tutorial.world.DimensionType;
import net.minecraft.command.CommandBase;
import net.minecraft.command.ICommand;
import net.minecraft.command.ICommandSender;
import net.minecraft.entity.player.EntityPlayer;
import net.minecraft.server.MinecraftServer;
import net.minecraft.util.text.TextComponentTranslation;
import net.minecraft.world.Teleporter;
import net.minecraftforge.client.ClientCommandHandler;
import net.minecraftforge.fml.common.event.FMLServerStartingEvent;

import javax.annotation.Nonnull;
import java.util.Collections;
import java.util.List;

@Mod(modid = "tutorial")
public class TutorialMod implements IObject {
    @Mod.EventHandler
    public static void onServerStarting(FMLServerStartingEvent event) {
        List<ICommand> commands = Collections.singletonList(new CommandBase() {
            @Nonnull
            @Override
            public String getName() {
                return "tp-tutorial";
            }

            @Nonnull
            @Override
            public String getUsage(@Nonnull ICommandSender sender) {
                return new TextComponentTranslation("command.tutorial.tp-tutorial.usage").getFormattedText();
            }

            @Override
            public void execute(@Nonnull MinecraftServer server, @Nonnull ICommandSender sender, @Nonnull String[] args) {
                EntityPlayer player = null;
                if (args.length > 0) {
                    player = server.getPlayerList().getPlayerByUsername(args[0]);
                } else if (sender instanceof EntityPlayer) {
                    player = (EntityPlayer) sender;
                }
                if (player != null) {
                    if (player.dimension != DimensionType.TUTORIAL.getId()) {
                        player.changeDimension(DimensionType.SKY.getId(), new Teleporter(event.getServer().getWorld(DimensionType.TUTORIAL.getId())));
                    }
                }
            }
        });
        commands.forEach(command -> {
            if (event != null) {
                event.registerServerCommand(command);
                return;
            }
            ClientCommandHandler.instance.registerCommand(command);
        });
    }
}
```

大功告成！尽情享受吧。