---
sidebar_position: 1
sidebar_label: '聊天组件'
title: '聊天组件'
---

导入 Spigot 的依赖的同时，还有一个依赖也被导入 `net.md-5:bungeecord-chat:1.20-R0.2` 。

通过这个依赖，我们可以发送 [原始 JSON 文本](https://minecraft.fandom.com/zh/wiki/%E5%8E%9F%E5%A7%8BJSON%E6%96%87%E6%9C%AC%E6%A0%BC%E5%BC%8F) 。

### ComponentBuilder

在 `net.md_5.bungee.chat.api` 包下，有一个 `ComponentBuilder` 用于构造 `BaseComponent[]` 。

具体的用法就是使用 `org.bukkit.command.CommandSender` 下的 `spigot()` 拓展方法，调用 `sendMessage` 方法。

有了上方的构造器，我们就可以使消息成为富文本，例如继承 `CommandExecutor` 后在方法里里这么写：

```java showLineNumbers
@Override
public boolean onCommand(@Nonnull CommandSender sender, @Nonnull Command command, @Nonnull String label, @Nonnull String[] arguments) {
    sender.sendMessage(new ComponentBuilder("Hello ").color(ChatColor.RED)
            .append("world").color(ChatColor.DARK_RED).bold(true)
            .append("!").color(ChatColor.RED).create());
    return true;
}
```

像大多数 Builder 一样，结尾都需要 `create()` 。

*原始 JSON：`[{"text":"Hello ","color":"red"},{"text":"world","color":"dark_red","bold":"true"},{"text":"!","color":"red"}]`*

## KeybindCompoent

`KeybindCompoent` 的用处较少，只能显示对应键位。

例子：

```java showLineNumbers
@Override
public boolean onCommand(@Nonnull CommandSender sender, @Nonnull Command command, @Nonnull String label, @Nonnull String[] arguments) {
    sender.sendMessage(new KeybindCompoent("key.jump"));
    return true;
}
```

*原始 JSON：`[{"keybind":"key.jump"}]`*

## SelectorComponent

可以通过目标选择器显示目标，例子：

```java showLineNumbers
@Override
public boolean onCommand(@Nonnull CommandSender sender, @Nonnull Command command, @Nonnull String label, @Nonnull String[] arguments) {
    sender.sendMessage(new SelectorComponent("@p[distance=10..]"));
    return true;
}
```

*原始 JSON：`[{"selector":"@p[distance=10..]"}]`*

## ScoreComponent

可以通过目标选择器显示目标，例子：

```java showLineNumbers
@Override
public boolean onCommand(@Nonnull CommandSender sender, @Nonnull Command command, @Nonnull String label, @Nonnull String[] arguments) {
    sender.sendMessage(new ScoreComponent("Dinnerbone", "objective"));
    return true;
}
```

如果真的有个计分板叫作 `objective` ，并且 `Dinnerbone` 在上面拥有分数，那么这个指令执行时，将会奏效。

*原始 JSON：`[{"score":{"name":"Dinnerbone","objective":"objective"}}]`*

## TextComponent

可以显示文本。创建后是可以使用方法带上属性的，例子：

```java showLineNumbers
@Override
public boolean onCommand(@Nonnull CommandSender sender, @Nonnull Command command, @Nonnull String label, @Nonnull String[] arguments) {
    sender.sendMessage(new TextComponent("Hello world!"));
    return true;
}
```

*原始 JSON：`[{"text":"Hello World!"}]`*

### 格式和颜色

我们可以使用 `TextComponent` 下的几个方法来丰富文本，像与 `net.md_5.bungee.api.ChatColor` 一同使用的 `setColor` 方法，或者 `setBold` 方法，举个例子：

```java showLineNumbers
@Override
public boolean onCommand(@Nonnull CommandSender sender, @Nonnull Command command, @Nonnull String label, @Nonnull String[] arguments) {
    TextComponent message = new TextComponent("Hello world");
    message.setColor(net.md_5.bungee.api.ChatColor.RED);
    message.setBold(true);
    sender.sendMessage(message);
    return true;
}
```

*原始 JSON：`[{"text":"Hello world!","color":"red","bold":"true"}]`*

能不能更好一些？可以，像这样的：

```java showLineNumbers
@Override
public boolean onCommand(@Nonnull CommandSender sender, @Nonnull Command command, @Nonnull String label, @Nonnull String[] arguments) {
    TextComponent message = new TextComponent("Hello ");
    message.setColor(net.md_5.bungee.api.ChatColor.RED);
    message.setBold(true);
    TextComponent world = new TextComponent();
    world.setColor(net.md_5.bungee.api.ChatColor.DARK_RED);
    message.addExtra(world);
    message.addExtra("!");
    return true;
}
```

*原始 JSON：`[{"text":"Hello ","bold":"true","color":"red"},{"text":"world","color":"dark_red","extra":["!"]}]`*

### 事件

我们可以使用 `TextComponent` 事件 API 来处理聊天栏事件，比如：

```java showLineNumbers
@Override
public boolean onCommand(@Nonnull CommandSender sender, @Nonnull Command command, @Nonnull String label, @Nonnull String[] arguments) {
    TextComponent message = new TextComponent("点我");
    message.setClickEvent(new ClickEvent(ClickEvent.Action.OPEN_URL, "https://coolclk.github.io"));
    message.setHoverEvent(new HoverEvent(HoverEvent.Action.SHOW_TEXT, new Text("访问 CoolCLK 的网站!")));
    sender.sendMessage(message);
    return true;
}
```

*原始 JSON：`[{"text":"点我","clickEvent":{"action":"open_url","value":"https://coolclk.github.io"},"hoverEvent":{"action":"show_text","value":"访问 CoolCLK 的网站!"}}]`*

## TranslatableComponent

这可以帮助你显示客户端已被翻译的文本，比如说显示一个给予命令的消息：

```java showLineNumbers
@Override
public boolean onCommand(@Nonnull CommandSender sender, @Nonnull Command command, @Nonnull String label, @Nonnull String[] arguments) {
    TranslatableComponent giveMessage = new TranslatableComponent("commands.give.success");
    TranslatableComponent item = new TranslatableComponent("item.swordDiamond.name");
    item.setColor(net.md_5.bungee.api.ChatColor.GOLD);
    giveMessage.addWith(item);
    giveMessage.addWith("32");
    TextComponent username = new TextComponent("Thinkofdeath");
    username.setColor(net.md_5.bungee.api.ChatColor.AQUA);
    giveMessage.addWith(username);
    sender.sendMessage(giveMessage);
    return true;
}
```

*原始 JSON：`[{"translate":"item.swordDiamond.name","with":[{"translate":"item.swordDiamond.name","color":"gold"},"32",{"text":"Thinkofdeath","color":"aqua"}]}]`*