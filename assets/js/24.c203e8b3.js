(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{575:function(t,e,s){"use strict";s.r(e);var a=s(12),l=Object(a.a)({},(function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("details",{staticClass:"custom-block details"},[s("summary",[t._v("React328")]),t._v(" "),s("p",[s("img",{attrs:{src:"/img/React328.png",alt:"React328"}})])]),t._v(" "),s("details",{staticClass:"custom-block details"},[s("summary",[t._v("useMemo和useCallback的区别及使用场景")]),t._v(" "),s("p",[t._v("useMemo和useCallback都是reactHook提供的两个API，用于缓存数据，优化性能；两者接收的参数都是一样的，第一个参数表示一个回调函数，第二个表示依赖的数据。"),s("br"),t._v(" "),s("strong",[t._v("共同作用")])]),t._v(" "),s("blockquote",[s("p",[t._v("在依赖数据发生变化的时候，才会调用传进去的回调函数去重新计算结果，起到一个缓存的作用")])]),t._v(" "),s("p",[s("strong",[t._v("两者的区别")])]),t._v(" "),s("blockquote",[s("p",[t._v("useMemo  缓存的结果是回调函数中return回来的值，主要用于缓存计算结果的值，应用场景如需要计算的状态\nuseCallback  缓存的结果是函数，主要用于缓存函数，应用场景如需要缓存的函数，因为函数式组件每次任何一个state发生变化，会触发整个组件更新，一些函数是没有必要更新的，此时就应该缓存起来，提高性能，减少对资源的浪费；另外还需要注意的是，useCallback应该和React.memo配套使用，缺了一个都可能导致性能不升反而下降。")])])])])}),[],!1,null,null,null);e.default=l.exports}}]);