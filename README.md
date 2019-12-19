# may-pro

> A Vue.js project

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For a detailed explanation on how things work, check out the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

解决问题：

1、vue-cli没有sass功能

下载了sass-loader和node-sass

安装：`npm i node-sass -D`

安装：`npm i sass-loader@7.3.1` , 直接装sass-loader版本过高还是会报错，所以装了7版本

2、加载static文件夹中的图片报错

要配置几个webpack的地方：

**使用相对路径**

===》开发环境也正常，但是到了生产环境只有HTML里面的图片资源正常。JS和CSS中都找不到路径

原因：HTML里面的图片路径会经过vue转换路径所有正常显示，js因为没有处理而找不到路径。所以我们直接帮它处理即可

解决方法：

- HTML中使用相对路径让vue正常打包转换路径；
- JS中使用直接设置路径为打包后应该显示的路径 `./static/images/b2.jpg` 即可正常显示
- CSS中使用因为打包后代码都是在 css-- * .css文件中，所以我们使用 `../../static/images/b3.jpg`。同时还需要修改两个地方的设置

【build/utils.js文件】

```js
if (options.extract) {
    return ExtractTextPlugin.extract({
    use: loaders,
    fallback: 'vue-style-loader',
    publicPath: '../../' //新增这一句,作用是设置打包过程中提取CSS的方法
    })
} else {
    return ['vue-style-loader'].concat(loaders)
}
```

【config/index.js 文件】

```js
// 找到build 
build: {
   assetsSubDirectory: 'static',
    assetsPublicPath: '/',
 }
// 修改为
build: {
   assetsSubDirectory: './static',// 子目录---解决css相对路径的问题
   assetsPublicPath: './', //资源专用路径---解决JS路径问题
 }
```
参考博客链接：
https://www.cnblogs.com/zhaowy/p/10072570.html
https://blog.csdn.net/qq_30632003/article/details/79353035
https://blog.csdn.net/a1424261303/article/details/86569111