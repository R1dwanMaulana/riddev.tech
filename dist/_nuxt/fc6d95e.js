(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{263:function(t,n,e){var content=e(269);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(44).default)("d71ad70c",content,!0,{sourceMap:!1})},268:function(t,n,e){"use strict";e(263)},269:function(t,n,e){var r=e(43)((function(i){return i[1]}));r.push([t.i,".nuxt-content h2{\n  font-weight:700;\n  font-size:28px\n}\n.nuxt-content h3{\n  font-weight:700;\n  font-size:22px\n}\n.nuxt-content p{\n  margin-bottom:20px;\n  font-size:18px;\n  font-weight:400\n}\n.container1{\n  display:block\n}",""]),t.exports=r},288:function(t,n,e){"use strict";e.r(n);var r=e(6),o=(e(45),{asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,article;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,r=t.params,n.next=3,e("articles",r.slug).fetch();case 3:return article=n.sent,n.abrupt("return",{article:article});case 5:case"end":return n.stop()}}),n)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("id",{year:"numeric",month:"long",day:"numeric"})}},head:{title:"Berbagi Artikel",htmlAttrs:{lang:"en"},meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"blog page"}],link:[{rel:"icon",type:"image/x-icon",href:"/man.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500&family=Poppins:wght@200;300;400;500;600&display=swap"}]}}),c=(e(268),e(22)),component=Object(c.a)(o,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"container1 p-5"},[e("div",{staticClass:"lg:max-w-4xl mx-auto sm:max-w-md md:max-w-2xl"},[e("article",{staticClass:"detail-card"},[e("h1",{staticClass:"title"},[t._v("\n        "+t._s(t.article.title)+"\n      ")]),t._v(" "),e("h2",{staticClass:"mt-3"},[t._v("\n        By: "+t._s(t.article.author)+"\n      ")]),t._v(" "),e("p",{staticClass:"pb-4 mr-3 text-gray-500"},[t._v("\n        Post last updated: "+t._s(t.formatDate(t.article.updatedAt))+"\n      ")]),t._v(" "),e("nuxt-content",{attrs:{document:t.article}})],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);