---
---

<p align="center">
    <a href="https://paypal.me/gavazquez"><img src="https://img.shields.io/badge/paypal-donate-yellow.svg" alt="PayPal"/></a>
    <a href="https://www.youtube.com/watch?v=gf6xyLnpnoM"><img src="https://img.shields.io/badge/Youtube-Video-red.svg" alt="Youtube video"/></a>
    <a href="https://discord.gg/S6bQR5q"><img src="https://img.shields.io/discord/378456662392045571.svg" alt="Chat on discord"/></a>
    <a href="https://github.com/LunaMultiplayer/LunaMultiplayer/releases"><img src="https://img.shields.io/github/release/lunamultiplayer/lunamultiplayer.svg" alt="Latest release" /></a>
    <a href="https://github.com/LunaMultiplayer/LunaMultiplayer/releases"><img src="https://img.shields.io/github/downloads/lunamultiplayer/lunamultiplayer/total.svg" alt="Total downloads" /></a>
</p>

---

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
<!--- - [QuickLZ](http://www.quicklz.com) for fast compression. --->
<!--- - Support for groups/companies inside career and science modes. --->

Please check the [wiki](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki) to see how to [build](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-compile-LMP), [run](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-play-with-LMP.) or [debug](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/Debugging-in-Visual-studio) LMP

---
### Servers:

Check how many servers are up and running either in [Release](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-get-the-latest-version-of-LMP) or in [Nightly](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-get-nightly-builds) versions

| Release | Nightly
| ------------------------------------------------------  | ------------------------------------------------------- |
| [Release servers](http://dagger.ole32.com:8701) | [Nightly servers](http://dagger.ole32.com:8751) |

---

### Troubleshooting:

Please visit [this page](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/Troubleshooting) in the wiki to solve the most common issues with LMP

---

### Contributing:

Consider [donating trough paypal](https://paypal.me/gavazquez) if you like this project. 
It will encourage us to do future releases and add new features!

---

<p align="center">
  <a href="mailto:gavazquez@gmail.com"><img src="https://img.shields.io/badge/email-gavazquez@gmail.com-blue.svg?style=flat" alt="Email: gavazquez@gmail.com" /></a>
  <a href="./pages/licence.html"><img src="https://img.shields.io/github/license/lunamultiplayer/LunaMultiPlayer.svg" alt="License" /></a>
</p>
