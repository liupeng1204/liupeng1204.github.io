## webpack

::: details webpack的构建流程（从读取配置到输出文件这个过程尽量说全）
```text 
1.初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；
2.开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；
3.确定入口：根据配置中的 entry 找出所有的入口文件；
4.编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；
5.完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；
6.输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；
7.输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。
```
:::

::: details 如何利用webpack来优化前端性能？（提高性能和体验）
用webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运行快速高效。
```text 
* 压缩代码。删除多余的代码、注释、简化代码的写法等等方式。可以利用webpack的UglifyJsPlugin和ParallelUglifyPlugin来压缩JS文件， 利用cssnano（css-loader?minimize）来压缩css
* 利用CDN加速。在构建过程中，将引用的静态资源路径修改为CDN上对应的路径。可以利用webpack对于output参数和各loader的publicPath参数来修改资源路径
* 删除死代码（Tree Shaking）。将代码中永远不会走到的片段删除掉。可以通过在启动webpack时追加参数--optimize-minimize来实现
* 提取公共代码。
```
:::

::: details 如何提高webpack的构建速度？
```js  
1.使用CommonsChunkPlugin来提取公共代码
2.通过externals配置来提取常用库，用cdn引入
3.利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来。
4.使用Happypack 实现多线程加速编译
5.使用webpack-uglify-parallel来提升uglifyPlugin的压缩速度。 原理上webpack-uglify-parallel采用了多核并行压缩来提升压缩速度
6.使用Tree-shaking和Scope Hoisting来剔除多余代码
```
:::

::: details webpack配置Demo
```js  

const path = require("path");
const webpack = require("webpack");
const htmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const PurifyCSS = require('purifycss-webpack')
const glob = require('glob-all')
const SpeedMeasurePlugin = require("speed-measure-webpack-plugin");//分析loader时间
const smp = new SpeedMeasurePlugin();
let publicPath = `https://cdn04.convergemob.com/AD_TEST/VIDEO_TEMPLATE_REACT/ANDROID/`
let template = "./src/template/index.html"
const WebPlugin = require('web-webpack-plugin');

if(process.env.PROTOCAL == '2'){
    publicPath = 'https://cdn04.convergemob.com/AD_TEST/VIDEO_TEMPLATE_REACT_2/ANDROID/'
    template = "./src/template/index_2.html"
}

const config = {
    // 模式，开启相应模式的内置优化
    mode: "production",
    // 打包入口
    entry: {
        index: `./src/index.tsx`
    },
    // 一些包被重复的在一些组件中引用，导致多次打包到了输出的bundle文件中，
    // 通过externals,将一些包不打包进bundle中，而是当使用时，从外部获取扩展。
    // 优点： 避免多次打包相同的package导致的打包后的体积过大
    externals: {},

    // 指定解析文件的方式
    resolve: {
      // 优先查找后缀开始的文件
        extensions: ['.tsx', '.ts', '.js'],
        // 设置优先从哪个文件查找
        modules: [path.resolve(__dirname, "./node_modules")],
        // 引入的路径可以取别名
        alias: {
            "@": path.join(__dirname, "./src")
        },
    },
    output: {
        // 输出的bundle名称，[name]表示使用内部chunck id，entry所对应的index==>> index.js
        filename: "[name].js",
        // 打包的输出文件的存放路径
        path: path.resolve(__dirname, "./dist"),
        chunkFilename: "[name].js",
        // 加载外部资源时的前缀，多数情况下会以/结束，页面中的图片、文件的等会根据出publicpath做相应的调整
        publicPath //指定存放JS⽂件的CDN地址

    },
    // module、chunk、bundle区别
    // 1、打包前的每个文件都是一个module，根据每个文件的依赖关系生成chunk文件，处理好的chunk文件就是bundle文件，为最终源文件，可以在浏览器上直接运行
    // 2、一般来说一个chunk文件对应一个bundle文件，但是当使用其他的转换后，可能一个chunk对应多个bundle，比如把css单独抽离，那么会生成两个bundle
    // 3、直接写出来的是 module，webpack 处理时是 chunk，最后生成浏览器可以直接运行的 bundle。


    // 决定了如何处理不同类型的module文件
    module: {
      // 创建module时匹配数组的规则
        rules: [
            {
                test: /\.tsx?$/,
                include: path.resolve(__dirname, "./src"),
                loaders: ['babel-loader?cacheDirectory=true', 'awesome-typescript-loader']
            },
            {
                test: /\.css$/,
                include: path.resolve(__dirname, "./src"),
                use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
            },
            {
                test: /\.scss$/,
                include: path.resolve(__dirname, "./src"),
                use: [{
                    loader: MiniCssExtractPlugin.loader
                }, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }, {
                    loader: "postcss-loader"
                }]
            },
            {
                test: /\.(png|jpe?g|gif)$/,
                include: path.resolve(__dirname, "./src"),
                use: {
                    loader: "url-loader",
                    options: {
                        name: "[name]-[hash:8].[ext]",
                        outputPath: "images/",
                        limit: 10 * 1024
                    }
                }
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            title: '激励视频',
            filename: "index.html", //输出的html文件名称
            template, // html模版所在的路径
            minify: {
                // 压缩HTML⽂件
                removeComments: true, // 移除HTML中的注释
                collapseWhitespace: true, // 删除空⽩符与换⾏符
                minifyCSS: true, // 压缩内联css
                //minifyJS: true,
            }
        }),
       // 使用WebPlugin， 可替代上面的生成模版, 一个WebPlugin对应一个html文件，管理多个单页面应用，每个单页面生成不同的html
       new WebPlugin({
         template: template,
         filename: 'index.html'
       })

        //抽离css
        new MiniCssExtractPlugin({
            filename: "[name].css"
        }),
        new OptimizeCSSAssetsPlugin({
            cssProcessor: require("cssnano"), //引⼊cssnano配置压缩选项
            cssProcessorOptions: {
                discardComments: { removeAll: true }
            }
        }),
        // 清除⽆⽤ css
        new PurifyCSS({
            paths: glob.sync([
                // 要做 CSS Tree Shaking 的路径⽂件
                path.resolve(__dirname, `./src/**/*.tsx`),
                path.resolve(__dirname, './src/*.html'), // 请注意，我们同样需要对 html ⽂件进⾏ tree shaking
            ])
        }),
    ],
    optimization: {
      // 1、最初的chunks之间的关系是通过webpack之间的图谱关系依赖的，可能存在重复依赖的情况
      // 2、splitChunks配置如何进行chunk的拆分
      // 3、拆分规则：新的chunk可以被共享，或者模块来自于node_modules文件，体积大于一定的大小，初始化加载并行数量、按需加载并行数量最大数量小于或等于 30

        splitChunks: {
              chunks: 'async', // 表示选择哪些 chunks 进行分割，可选值有：async，initial和all
              minSize: 30000, // 如果提取后的 chunks（被压缩前）体积大于 30k，才会被提取
              minChunks: 1, // 非按需导入时，模块被共享的次数达到 n 次就会被拆分出来
              maxAsyncRequests: 5, // 按需加载时，最多只能同时引入多少个模块
              maxInitialRequests: 3, // 最大初始化加载次数，入口文件可以并行加载的最大文件数量。
              automaticNameDelimiter: '~', // 抽取出来的文件的自动生成名字的分割符，默认为 ~；
              name: true, // 配置项name默认为true，它意味着SplitChunks可以根据cacheGroups和作用范围自动为新生成的chunk命名，并以automaticNameDelimiter分隔。如vendors~a~b~c.js意思是cacheGroups为vendors，并且该chunk是由a、b、c三个入口chunk所产生的。
              cacheGroups: {
                vendors: { // vendors用于提取所有node_modules中符合条件的模块
                  test: /[\\/]node_modules[\\/]/,
                  priority: -10 // 当一个模块同时符合多个cacheGroups时，则根据其中的priority配置项确定优先级
                },
                default: { // 作用于被多次引用的模块
                  minChunks: 2,
                  priority: -20,
                  reuseExistingChunk: true
                }
              },
        }
    },
}
module.exports = smp.wrap(config);
```
:::

