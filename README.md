# egg-cloud develop distributed systems demo

## 服务发现
1. 从 Github 下载 nacos 最新的 release 包
2. 解压后，进入 nacos/bin 目录
```
$ tar -xvf nacos-server-0.3.0.tar.gz
$ cd nacos/bin
```

3. 启动 nacos
```
$ sh startup.sh -m standalone
````

## rpc-server启动

```
npm install

npm start

```

## rpc-client启动

```
npm install

npm start

```

## 测试
``` 
curl http://127.0.0.1:{rpc-client port}
```
