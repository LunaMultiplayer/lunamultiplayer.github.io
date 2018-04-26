<p align="center">
    <img src="https://github.com/LunaMultiplayer/LunaMultiplayer/blob/master/External/logo.png?raw=true" alt="Luna multiplayer logo"/>
    <a href="https://www.youtube.com/watch?v=gf6xyLnpnoM"><img src="https://img.youtube.com/vi/gf6xyLnpnoM/0.jpg" alt="Video" height="187" width="250"/></a>
</p>

<p align="center">
    <a href="https://paypal.me/gavazquez"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal"/></a>
    <a href="https://discord.gg/S6bQR5q"><img src="https://img.shields.io/discord/378456662392045571.svg" alt="Chat on discord"/></a>
    <a href="https://github.com/LunaMultiplayer/LunaMultiplayer/releases"><img src="https://img.shields.io/github/release/lunamultiplayer/lunamultiplayer.svg" alt="Latest release" /></a>
    <a href="https://github.com/LunaMultiplayer/LunaMultiplayer/releases"><img src="https://img.shields.io/github/downloads/lunamultiplayer/lunamultiplayer/total.svg" alt="Total downloads" /></a>
</p>

---

<p align="center">
  <a href="https://github.com/LunaMultiplayer/LunaMultiplayer/releases/latest"><img src="https://github.com/LunaMultiplayer/LunaMultiplayer/blob/master/External/downloadIcon.png?raw=true" alt="Download" height="64" width="225"/></a>
  <a href="https://github.com/LunaMultiplayer/LunaMultiplayer/wiki"><img src="https://github.com/LunaMultiplayer/LunaMultiplayer/blob/master/External/documentationIcon.png?raw=true" alt="Documentation" height="64" width="250"/></a>
</p>

---

# Luna Multiplayer Mod (LMP)

*Multiplayer mod for [Kerbal Space Program (KSP)](https://kerbalspaceprogram.com)*

*[Official KSP forum post](https://forum.kerbalspaceprogram.com/index.php?/topic/168271-131-luna-multiplayer-lmp-alpha/)*

*[Latest build updater](https://github.com/LunaMultiplayer/LunaMultiplayerUpdater)*

### Main features:

- Clean and optimized code.
- Multi threaded.
- [NTP](https://en.wikipedia.org/wiki/Network_Time_Protocol) protocol to sync the time between clients and the server.
- [UDP](https://en.wikipedia.org/wiki/User_Datagram_Protocol) based using the [Lidgren](https://github.com/lidgren/lidgren-network-gen3) library for reliable UDP message handling.
- [Interpolation](http://www.gabrielgambetta.com/entity-interpolation.html) so the vessels won't jump when there are bad network conditions.
- Multilanguage.
- [Nat-punchtrough](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/Master-server) feature so a server doesn't need to open ports on it's router.
- Servers displayed within the mod.
- Settings saved as XML.
- [UPnP](https://en.wikipedia.org/wiki/Universal_Plug_and_Play) support for servers and [master servers](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/Master-server)
- Better creation of network messages so they are easier to modify and serialize.
- Every network message is cached in order to reduce the garbage collector spikes.
- Based on tasks instead of threads.
- Supports career and science modes.
- [QuickLZ](http://www.quicklz.com) for fast compression.
- Support for groups/companies inside career and science modes.

Please check the [wiki](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki) to see how to [build](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-compile-LMP), [run](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-play-with-LMP.) or [debug](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/Debugging-in-Visual-studio) LMP

---
### Servers:

Check how many servers are up and running either in [Release](../../wiki/How-to-get-the-latest-version-of-LMP) or in [Nightly](../../wiki/How-to-get-nightly-builds) versions

| Release | Nightly
| ------------------------------------------------------  | ------------------------------------------------------- |
| [Release servers](http://dagger.ole32.com:8701/servers) | [Nightly servers](http://dagger.ole32.com:8751) |

---

### Status:

|   Branch   |   Build  |   Tests  |  Last commit  |   Activity    |    Commits    |
| ---------- | -------- | -------- | ------------- | ------------- | ------------- |
| **master** |[![AppVeyor](https://img.shields.io/appveyor/ci/gavazquez/lunamultiplayer/master.svg?logo=appveyor)](https://ci.appveyor.com/project/gavazquez/lunamultiplayer/branch/master) | [![AppVeyor Tests](https://img.shields.io/appveyor/tests/gavazquez/lunamultiplayer/master.svg?logo=appveyor)](https://ci.appveyor.com/project/gavazquez/lunamultiplayer/branch/master/tests) | [![Last commit](https://img.shields.io/github/last-commit/lunamultiplayer/lunamultiplayer/master.svg)](https://github.com/LunaMultiplayer/LunaMultiplayer/commits/master) | [![Commit activity](https://img.shields.io/github/commit-activity/y/lunamultiplayer/lunamultiplayer.svg)](https://github.com/LunaMultiplayer/LunaMultiplayer/commits/master) | [![Commits since release](https://img.shields.io/github/commits-since/lunamultiplayer/lunamultiplayer/latest.svg)](https://github.com/LunaMultiplayer/LunaMultiplayer/commits/master)

---

### Contributing:

Consider [donating trough paypal](https://paypal.me/gavazquez) if you like this project. 
It will encourage us to do future releases and add new features :star:

Please write the code as you were going to leave it, return after 1 year and you'd have to understand what you wrote.  
It's **very** important that the code is clean and documented so in case someone leaves, another programmer could take and maintain it. Bear in mind that **nobody** likes to take a project where it's code looks like a dumpster.

There's also a test project in case you want to add tests to your code.

---

### Troubleshooting:

Please visit [this page](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/Troubleshooting) in the wiki to solve the most common issues with LMP

---

<p align="center">
  <a href="mailto:gavazquez@gmail.com"><img src="https://img.shields.io/badge/email-gavazquez@gmail.com-blue.svg?style=flat" alt="Email: gavazquez@gmail.com" /></a>
  <a href="https://github.com/LunaMultiplayer/LunaMultiplayer/blob/master//LICENSE"><img src="https://img.shields.io/github/license/lunamultiplayer/LunaMultiPlayer.svg" alt="License" /></a>
</p>
