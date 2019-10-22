# SimpleNodeServer

基于node的后端服务，为前端项目提供一些简单的接口、方便需要后端支持的前端项目快速开发

## 开始

### 安装脚手架

```
npm install -g simplenodeserver-cli
```

### 初始化项目

```
sns-cli init package-name
```

### 运行

```
cd package-name
npm install
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

- [x] npm 打包（提供脚手架）
- [ ] 服务选配
- [x] 路由

### 接口类

- [x] 数据增删查改
- [x] 爬虫服务
- [ ] 文件服务