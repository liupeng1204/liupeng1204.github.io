(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{560:function(s,a,e){"use strict";e.r(a);var n=e(12),t=Object(n.a)({},(function(){var s=this,a=s.$createElement,e=s._self._c||a;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h2",{attrs:{id:"webpack"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#webpack"}},[s._v("#")]),s._v(" webpack")]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("webpack的构建流程（从读取配置到输出文件这个过程尽量说全）")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("1.初始化参数：从配置文件和 Shell 语句中读取与合并参数，得出最终的参数；\n2.开始编译：用上一步得到的参数初始化 Compiler 对象，加载所有配置的插件，执行对象的 run 方法开始执行编译；\n3.确定入口：根据配置中的 entry 找出所有的入口文件；\n4.编译模块：从入口文件出发，调用所有配置的 Loader 对模块进行翻译，再找出该模块依赖的模块，再递归本步骤直到所有入口依赖的文件都经过了本步骤的处理；\n5.完成模块编译：在经过第4步使用 Loader 翻译完所有模块后，得到了每个模块被翻译后的最终内容以及它们之间的依赖关系；\n6.输出资源：根据入口和模块之间的依赖关系，组装成一个个包含多个模块的 Chunk，再把每个 Chunk 转换成一个单独的文件加入到输出列表，这步是可以修改输出内容的最后机会；\n7.输出完成：在确定好输出内容后，根据配置确定输出的路径和文件名，把文件内容写入到文件系统。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br")])])]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("如何利用webpack来优化前端性能？（提高性能和体验）")]),s._v(" "),e("p",[s._v("用webpack优化前端性能是指优化webpack的输出结果，让打包的最终结果在浏览器运行快速高效。")]),s._v(" "),e("div",{staticClass:"language-text line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("* 压缩代码。删除多余的代码、注释、简化代码的写法等等方式。可以利用webpack的UglifyJsPlugin和ParallelUglifyPlugin来压缩JS文件， 利用cssnano（css-loader?minimize）来压缩css\n* 利用CDN加速。在构建过程中，将引用的静态资源路径修改为CDN上对应的路径。可以利用webpack对于output参数和各loader的publicPath参数来修改资源路径\n* 删除死代码（Tree Shaking）。将代码中永远不会走到的片段删除掉。可以通过在启动webpack时追加参数--optimize-minimize来实现\n* 提取公共代码。\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])])]),s._v(" "),e("details",{staticClass:"custom-block details"},[e("summary",[s._v("如何提高webpack的构建速度？")]),s._v(" "),e("div",{staticClass:"language-js line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token number"}},[s._v("1.")]),s._v("使用CommonsChunkPlugin来提取公共代码\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("2.")]),s._v("通过externals配置来提取常用库，用cdn引入\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("3.")]),s._v("利用DllPlugin和DllReferencePlugin预编译资源模块 通过DllPlugin来对那些我们引用但是绝对不会修改的npm包来进行预编译，再通过DllReferencePlugin将预编译的模块加载进来。\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("4.")]),s._v("使用Happypack 实现多线程加速编译\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("5.")]),s._v("使用webpack"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uglify"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("parallel来提升uglifyPlugin的压缩速度。 原理上webpack"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("uglify"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("parallel采用了多核并行压缩来提升压缩速度\n"),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("6.")]),s._v("使用Tree"),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("-")]),s._v("shaking和Scope Hoisting来剔除多余代码\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])])])])}),[],!1,null,null,null);a.default=t.exports}}]);