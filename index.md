---
---

---

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
- Cached [QuickLZ](http://www.quicklz.com) for fast compression without generating garbage.
<!--- - Support for groups/companies inside career and science modes. --->

Please check the [wiki](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki) to see how to [install](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-install-LMP), [run](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-play-with-LMP), [build](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-compile-LMP), [debug](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/Debugging-in-Visual-studio) or [troubleshoot](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/Troubleshooting) LMP among other things

---
### Servers:

Check how many servers are up and running either in [Release](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-get-the-latest-version-of-LMP) or in [Nightly](https://github.com/LunaMultiplayer/LunaMultiplayer/wiki/How-to-get-nightly-builds) versions

| Release | Nightly
| ------------------------------------------------------  | ------------------------------------------------------- |
| [Release servers](/pages/releaseservers.html) | [Nightly servers](/pages/nightlyservers.html) |

---

### Contributing:

Consider [donating trough paypal](https://paypal.me/gavazquez) if you like this project. 
It will encourage us to do future releases, fix bugs and add new features!
