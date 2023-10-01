# 高级使用
启动前加歌曲链接参数会直接下载，例子：
```
musicdownloader.py https://......song?id=...
musicdownloader.exe https://......playlist?id=...
```
启动前加参数-s {api server} 可直接更换歌曲[API服务器](https://github.com/injahow/meting-api)，例子：
```
musicdownloader.py -s https://example.com/metting/
musicdownloader.exe https://......song?id=... -s http://192.168.1.7/
```
> 能否下载歌曲或会员歌曲及其音质取决于API服务器
> 自建服务器并添加会员Cookie即可解析相关音乐以及无损

# 感谢 Thanks
- [Meting-api](https://github.com/injahow/meting-api)及本项目贡献者
<a href="https://github.com/beadd/musicdownloader/graphs/contributors">
  <img src="https://contrib.rocks/image?repo=beadd/musicdownloader" />
</a>
