(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1104:function(module,exports,__webpack_require__){"use strict";var _clientApi=__webpack_require__(56),_clientLogger=__webpack_require__(36),_configFilename=__webpack_require__(1105);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1105:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters}));__webpack_require__(1106);var parameters={actions:{argTypesRegex:"^on[A-Z].*"},layout:"fullscreen"}},1106:function(module,exports,__webpack_require__){},1107:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(365).configure)([__webpack_require__(1108),__webpack_require__(1109)],module,!1)}).call(this,__webpack_require__(98)(module))},1108:function(module,exports,__webpack_require__){var map={"./Introduction.stories.mdx":1115};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1108},1109:function(module,exports,__webpack_require__){var map={"./useDrag/Drag.stories.tsx":1116};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1109},1115:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"__page",(function(){return __page}));__webpack_require__(0);var esm=__webpack_require__(8),blocks=__webpack_require__(217),code_brackets=__webpack_require__.p+"static/media/code-brackets.2e1112d7.svg",colors=__webpack_require__.p+"static/media/colors.a4bd0486.svg",comments=__webpack_require__.p+"static/media/comments.a3859089.svg",direction=__webpack_require__.p+"static/media/direction.b770f9af.svg",flow=__webpack_require__.p+"static/media/flow.edad2ac1.svg",assets_plugin=__webpack_require__.p+"static/media/plugin.d494b228.svg",repo=__webpack_require__.p+"static/media/repo.6d496322.svg",stackalt=__webpack_require__.p+"static/media/stackalt.dba9fbb3.svg";function _extends(){return(_extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source)Object.prototype.hasOwnProperty.call(source,key)&&(target[key]=source[key])}return target}).apply(this,arguments)}const layoutProps={};function MDXContent({components:components,...props}){return Object(esm.mdx)("wrapper",_extends({},layoutProps,props,{components:components,mdxType:"MDXLayout"}),Object(esm.mdx)(blocks.Meta,{title:"Introduction",mdxType:"Meta"}),Object(esm.mdx)("style",null,"\n  .subheading {\n    --mediumdark: '#999999';\n    font-weight: 900;\n    font-size: 13px;\n    color: #999;\n    letter-spacing: 6px;\n    line-height: 24px;\n    text-transform: uppercase;\n    margin-bottom: 12px;\n    margin-top: 40px;\n  }\n\n  .link-list {\n    display: grid;\n    grid-template-columns: 1fr;\n    grid-template-rows: 1fr 1fr;\n    row-gap: 10px;\n  }\n\n  @media (min-width: 620px) {\n    .link-list {\n      row-gap: 20px;\n      column-gap: 20px;\n      grid-template-columns: 1fr 1fr;\n    }\n  }\n\n  @media all and (-ms-high-contrast:none) {\n  .link-list {\n      display: -ms-grid;\n      -ms-grid-columns: 1fr 1fr;\n      -ms-grid-rows: 1fr 1fr;\n    }\n  }\n\n  .link-item {\n    display: block;\n    padding: 20px 30px 20px 15px;\n    border: 1px solid #00000010;\n    border-radius: 5px;\n    transition: background 150ms ease-out, border 150ms ease-out, transform 150ms ease-out;\n    color: #333333;\n    display: flex;\n    align-items: flex-start;\n  }\n\n  .link-item:hover {\n    border-color: #1EA7FD50;\n    transform: translate3d(0, -3px, 0);\n    box-shadow: rgba(0, 0, 0, 0.08) 0 3px 10px 0;\n  }\n\n  .link-item:active {\n    border-color: #1EA7FD;\n    transform: translate3d(0, 0, 0);\n  }\n\n  .link-item strong {\n    font-weight: 700;\n    display: block;\n    margin-bottom: 2px;\n  }\n  \n  .link-item img {\n    height: 40px;\n    width: 40px;\n    margin-right: 15px;\n    flex: none;\n  }\n\n  .link-item span {\n    font-size: 14px;\n    line-height: 20px;\n  }\n\n  .tip {\n    display: inline-block;\n    border-radius: 1em;\n    font-size: 11px;\n    line-height: 12px;\n    font-weight: 700;\n    background: #E7FDD8;\n    color: #66BF3C;\n    padding: 4px 12px;\n    margin-right: 10px;\n    vertical-align: top;\n  }\n\n  .tip-wrapper {\n    font-size: 13px;\n    line-height: 20px;\n    margin-top: 40px;\n    margin-bottom: 40px;\n  }\n\n  .tip-wrapper code {\n    font-size: 12px;\n    display: inline-block;\n  }\n\n  \n"),Object(esm.mdx)("h1",{id:"welcome-to-storybook"},"Welcome to Storybook"),Object(esm.mdx)("p",null,"Storybook helps you build UI components in isolation from your app's business logic, data, and context.\nThat makes it easy to develop hard-to-reach states. Save these UI states as ",Object(esm.mdx)("strong",{parentName:"p"},"stories")," to revisit during development, testing, or QA."),Object(esm.mdx)("p",null,"Browse example stories now by navigating to them in the sidebar.\nView their code in the ",Object(esm.mdx)("inlineCode",{parentName:"p"},"src/stories")," directory to learn how they work.\nWe recommend building UIs with a ",Object(esm.mdx)("a",{parentName:"p",href:"https://componentdriven.org",target:"_blank",rel:"nofollow noopener noreferrer"},Object(esm.mdx)("strong",{parentName:"a"},"component-driven"))," process starting with atomic components and ending with pages."),Object(esm.mdx)("div",{className:"subheading"},"Configure"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/addons/addon-types",target:"_blank"},Object(esm.mdx)("img",{src:assets_plugin,alt:"plugin"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Presets for popular tools"),"Easy setup for TypeScript, SCSS and more.")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/webpack",target:"_blank"},Object(esm.mdx)("img",{src:stackalt,alt:"Build"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Build configuration"),"How to customize webpack and Babel")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/configure/styling-and-css",target:"_blank"},Object(esm.mdx)("img",{src:colors,alt:"colors"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Styling"),"How to load and configure CSS libraries")),Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs/react/get-started/setup#configure-storybook-for-your-stack",target:"_blank"},Object(esm.mdx)("img",{src:flow,alt:"flow"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Data"),"Providers and mocking for data libraries"))),Object(esm.mdx)("div",{className:"subheading"},"Learn"),Object(esm.mdx)("div",{className:"link-list"},Object(esm.mdx)("a",{className:"link-item",href:"https://storybook.js.org/docs",target:"_blank"},Object(esm.mdx)("img",{src:repo,alt:"repo"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Storybook documentation"),"Configure, customize, and extend")),Object(esm.mdx)("a",{className:"link-item",href:"https://www.learnstorybook.com",target:"_blank"},Object(esm.mdx)("img",{src:direction,alt:"direction"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"In-depth guides"),"Best practices from leading teams")),Object(esm.mdx)("a",{className:"link-item",href:"https://github.com/storybookjs/storybook",target:"_blank"},Object(esm.mdx)("img",{src:code_brackets,alt:"code"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"GitHub project"),"View the source and add issues")),Object(esm.mdx)("a",{className:"link-item",href:"https://discord.gg/storybook",target:"_blank"},Object(esm.mdx)("img",{src:comments,alt:"comments"}),Object(esm.mdx)("span",null,Object(esm.mdx)("strong",null,"Discord chat"),"Chat with maintainers and the community"))),Object(esm.mdx)("div",{className:"tip-wrapper"},Object(esm.mdx)("span",{className:"tip"},"Tip"),"Edit the Markdown in"," ",Object(esm.mdx)("code",null,"src/stories/Introduction.stories.mdx")))}MDXContent.isMDXComponent=!0;const __page=()=>{throw new Error("Docs-only story")};__page.parameters={docsOnly:!0};const componentMeta={title:"Introduction",includeStories:["__page"]},mdxStoryNameToKey={};componentMeta.parameters=componentMeta.parameters||{},componentMeta.parameters.docs={...componentMeta.parameters.docs||{},page:()=>Object(esm.mdx)(blocks.AddContext,{mdxStoryNameToKey:mdxStoryNameToKey,mdxComponentMeta:componentMeta},Object(esm.mdx)(MDXContent,null))};__webpack_exports__.default=componentMeta},1116:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"SimpleDraggable",(function(){return Drag_stories_SimpleDraggable}));var _templateObject,objectSpread2=__webpack_require__(72),react=__webpack_require__(0),react_default=__webpack_require__.n(react),taggedTemplateLiteral=__webpack_require__(103),styled_components_browser_esm=__webpack_require__(104),index_esm=__webpack_require__(488),jsx_runtime=__webpack_require__(45),StyledGrip=Object(styled_components_browser_esm.a)(index_esm.a)(_templateObject||(_templateObject=Object(taggedTemplateLiteral.a)(["\n\ttouch-action: none;\n\theight: 1.5rem;\n\twidth: 1.5rem;\n\tcolor: #ddd;\n\ttransition: 0.3s;\n\t&:hover {\n\t\ttransform: scale(1.2);\n\t\tcolor: black;\n\t\tcursor: move; /* fallback if grab cursor is unsupported */\n\t\tcursor: grab;\n\t\tcursor: -moz-grab;\n\t\tcursor: -webkit-grab;\n\t}\n\t&:active {\n\t\tcursor: grabbing;\n\t\tcursor: -moz-grabbing;\n\t\tcursor: -webkit-grabbing;\n\t}\n"]))),Grip=react_default.a.forwardRef((function(props,ref){return Object(jsx_runtime.jsx)("div",{ref:ref,style:{display:"flex",touchAction:"none"},children:Object(jsx_runtime.jsx)(StyledGrip,{})})})),components_Grip=Grip;try{Grip.displayName="Grip",Grip.__docgenInfo={description:"",displayName:"Grip",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/Grip.tsx#Grip"]={docgenInfo:Grip.__docgenInfo,name:"Grip",path:"src/stories/components/Grip.tsx#Grip"})}catch(__react_docgen_typescript_loader_error){}var DraggableCard_templateObject,_templateObject2,_templateObject3,slicedToArray=__webpack_require__(487),lodash=__webpack_require__(486);function useDrag(_ref){var draggableRef=_ref.draggableRef,handleRef=_ref.handleRef,hRef=Object(react.useRef)(null),dRef=Object(react.useRef)(null),_useState=Object(react.useState)({isDragging:!1,draggedBy:0,clickX:0,clickY:0,currentX:0,currentY:0,deltaX:0,deltaY:0,hoverID:""}),_useState2=Object(slicedToArray.a)(_useState,2),dragState=_useState2[0],setDragState=_useState2[1];Object(react.useEffect)((function(){draggableRef&&dRef.current!==draggableRef.current&&(dRef.current=draggableRef.current),handleRef&&hRef.current!==handleRef.current&&(hRef.current=handleRef.current)}),[draggableRef,handleRef]),Object(react.useEffect)((function(){function onStart(e,i){setDragState((function(prev){return Object(objectSpread2.a)(Object(objectSpread2.a)({},prev),{},{draggedBy:i,isDragging:!0,clickX:e.pageX,clickY:e.pageY,currentX:e.pageX,currentY:e.pageY,deltaX:0,deltaY:0})}))}function onMouseDown(e){e.preventDefault(),0===e.button&&onStart(e,1)}function onTouchStart(e){e.preventDefault(),onStart(e.touches[0],2)}var node=(null!==hRef.current?hRef:dRef).current;return node&&(node.addEventListener("mousedown",onMouseDown),node.addEventListener("touchstart",onTouchStart)),function(){node&&(node.removeEventListener("mousedown",onMouseDown),node.removeEventListener("touchstart",onTouchStart))}}),[dRef,hRef]),Object(react.useEffect)((function(){function onMove(e){var X=e.pageX-dragState.clickX,Y=e.pageY-dragState.clickY;setDragState((function(prev){return Object(objectSpread2.a)(Object(objectSpread2.a)({},prev),{},{currentX:e.pageX,currentY:e.pageY,deltaX:X,deltaY:Y})}))}function onMouseMove(e){e.preventDefault(),onMove(e)}function onTouchMove(e){e.preventDefault(),onMove(e.touches[0])}function onStop(){setDragState((function(prev){return Object(objectSpread2.a)(Object(objectSpread2.a)({},prev),{},{isDragging:!1,draggedBy:0,deltaX:0,deltaY:0,hoverID:""})}))}function onMouseUp(e){e.preventDefault(),onStop()}function onTouchEnd(e){e.preventDefault(),onStop()}return 1===dragState.draggedBy&&(document.addEventListener("mousemove",onMouseMove),document.addEventListener("mouseup",onMouseUp)),2===dragState.draggedBy&&(document.addEventListener("touchmove",onTouchMove,{passive:!1}),document.addEventListener("touchend",onTouchEnd,{passive:!1})),function(){document.removeEventListener("mousemove",onMouseMove),document.removeEventListener("mouseup",onMouseUp),document.removeEventListener("touchmove",onTouchMove),document.removeEventListener("touchend",onTouchEnd)}}),[dragState.draggedBy,dragState.clickX,dragState.clickY]);var updateDNDStore=Object(react.useRef)(Object(lodash.throttle)((function(x,y){var drop;document.elementsFromPoint(x,y).forEach((function(el){void 0===drop&&(null==el?void 0:el.getAttribute("data-dropid"))&&(drop=el)})),void 0!==drop&&setDragState((function(prev){var _drop;return Object(objectSpread2.a)(Object(objectSpread2.a)({},prev),{},{hoverID:(null===(_drop=drop)||void 0===_drop?void 0:_drop.getAttribute("data-dropid"))||""})}))}),128));return Object(react.useEffect)((function(){var node=dRef.current;node&&(node.style.transform="translate(".concat(dragState.deltaX,"px, ").concat(dragState.deltaY,"px)"),node.style.zIndex=dragState.isDragging?"5000":""),updateDNDStore.current(dragState.currentX,dragState.currentY)}),[dragState]),{draggableRef:dRef,handleRef:hRef,dragState:dragState}}try{useDrag.displayName="useDrag",useDrag.__docgenInfo={description:"",displayName:"useDrag",props:{draggableRef:{defaultValue:null,description:"Pass in a list of elements that can be dragged. Returns 1 ref by default.",name:"draggableRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}},handleRef:{defaultValue:null,description:"Pass in the handle(s) by which the element(s) from draggableRefs must be dragged.",name:"handleRef",required:!1,type:{name:"MutableRefObject<HTMLDivElement | null>"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/hooks/useDrag.tsx#useDrag"]={docgenInfo:useDrag.__docgenInfo,name:"useDrag",path:"src/hooks/useDrag.tsx#useDrag"})}catch(__react_docgen_typescript_loader_error){}var Simple_templateObject,DraggableCard_Container=styled_components_browser_esm.a.div(DraggableCard_templateObject||(DraggableCard_templateObject=Object(taggedTemplateLiteral.a)(["\n\tdisplay: flex;\n\tflex-direction: column;\n\twidth: 150px;\n\tbackground-color: white;\n\tpadding: 2rem;\n\tborder-radius: 1rem;\n\tborder: 1px solid #eee;\n\ttransition: 0.3s;\n\t:hover {\n\t\ttransform: scale(1.1);\n\t}\n"]))),Header=styled_components_browser_esm.a.div(_templateObject2||(_templateObject2=Object(taggedTemplateLiteral.a)(["\n\tdisplay: flex;\n\tflex-direction: row;\n\talign-items: center;\n\tjustify-content: space-between;\n"]))),Title=styled_components_browser_esm.a.h2(_templateObject3||(_templateObject3=Object(taggedTemplateLiteral.a)(["\n\tmargin: 0px;\n"])));function Card(props){var _useDrag=useDrag({}),draggableRef=_useDrag.draggableRef,handleRef=_useDrag.handleRef;return Object(jsx_runtime.jsxs)(DraggableCard_Container,{ref:draggableRef,children:[Object(jsx_runtime.jsxs)(Header,{children:[Object(jsx_runtime.jsx)(Title,{children:props.title}),Object(jsx_runtime.jsx)(components_Grip,{ref:handleRef})]}),props.children]})}try{DraggableCard.displayName="DraggableCard",DraggableCard.__docgenInfo={description:"",displayName:"DraggableCard",props:{title:{defaultValue:null,description:"Card title",name:"title",required:!0,type:{name:"string"}},children:{defaultValue:null,description:"Children held within this card",name:"children",required:!1,type:{name:"any"}}}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/components/DraggableCard.tsx#DraggableCard"]={docgenInfo:DraggableCard.__docgenInfo,name:"DraggableCard",path:"src/stories/components/DraggableCard.tsx#DraggableCard"})}catch(__react_docgen_typescript_loader_error){}function Drag(){var Container=styled_components_browser_esm.a.div(Simple_templateObject||(Simple_templateObject=Object(taggedTemplateLiteral.a)(["\n\t\tdisplay: flex;\n\t\theight: 100vh;\n\t\twidth: 100vw;\n\t\toverflow: hidden;\n\t\talign-items: center;\n\t\tjustify-content: center;\n\t\tbackground-color: #f8f8f8;\n\t"])));return Object(jsx_runtime.jsx)(Container,{children:Object(jsx_runtime.jsx)(Card,{title:"A Card!",children:Object(jsx_runtime.jsxs)("p",{children:["text text text",Object(jsx_runtime.jsx)("br",{})," more text ",Object(jsx_runtime.jsx)("br",{})," even more text!! (but longer)",Object(jsx_runtime.jsx)("br",{})," text"]})})})}__webpack_exports__.default={title:"useDrag"};var Drag_stories_SimpleDraggable=function SimpleDraggable(){return Object(jsx_runtime.jsx)(Drag,{})};Drag_stories_SimpleDraggable.parameters=Object(objectSpread2.a)({storySource:{source:"() => <Simple />"}},Drag_stories_SimpleDraggable.parameters);try{Drag_stories_SimpleDraggable.displayName="SimpleDraggable",Drag_stories_SimpleDraggable.__docgenInfo={description:"",displayName:"SimpleDraggable",props:{}},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/useDrag/Drag.stories.tsx#SimpleDraggable"]={docgenInfo:Drag_stories_SimpleDraggable.__docgenInfo,name:"SimpleDraggable",path:"src/stories/useDrag/Drag.stories.tsx#SimpleDraggable"})}catch(__react_docgen_typescript_loader_error){}},491:function(module,exports,__webpack_require__){__webpack_require__(492),__webpack_require__(657),__webpack_require__(658),__webpack_require__(823),__webpack_require__(1042),__webpack_require__(1075),__webpack_require__(1083),__webpack_require__(1095),__webpack_require__(1097),__webpack_require__(1102),__webpack_require__(1104),module.exports=__webpack_require__(1107)},566:function(module,exports){},658:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(365)}},[[491,1,2]]]);
//# sourceMappingURL=main.1b79950dc943a71c96c7.bundle.js.map