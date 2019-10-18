# SimpleNodeServer

基于node的后端服务，为前端项目提供一些简单的接口、方便前端的快速接口测试

## 开始

### 安装

```
git clone https://github.com/SandBoat/SimpleNodeServer.git
```

### 运行

```
cd server
npm start
```

### 使用

#### 数据接口
```
# 数据查询
request[GET]:  /data/get

# 数据添加
request[POST]:  /data/set
```

#### 爬虫接口
```
# 根据 url 和 选择器, 抓取网页内容
request[GET]: /crawler/content
   query: url    # 网址
   query: select # 选择器
```

## 提供的服务

### 配置类

- [ ] npm 打包
- [ ] 服务选配
- [x] 路由

### 接口类

- [x] 数据增删查改
- [x] 爬虫服务
- [ ] 文件服务