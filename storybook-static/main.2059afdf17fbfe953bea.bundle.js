(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{1070:function(module,exports,__webpack_require__){"use strict";__webpack_require__(4),__webpack_require__(49),__webpack_require__(1071),__webpack_require__(1072),__webpack_require__(7),__webpack_require__(39);var _clientApi=__webpack_require__(57),_clientLogger=__webpack_require__(34),_configFilename=__webpack_require__(1073);function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?ownKeys(Object(source),!0).forEach((function(key){_defineProperty(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}))}return target}function _defineProperty(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value:value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}(_configFilename.args||_configFilename.argTypes)&&_clientLogger.logger.warn("Invalid args/argTypes in config, ignoring.",JSON.stringify({args:_configFilename.args,argTypes:_configFilename.argTypes})),_configFilename.decorators&&_configFilename.decorators.forEach((function(decorator){return(0,_clientApi.addDecorator)(decorator,!1)})),_configFilename.loaders&&_configFilename.loaders.forEach((function(loader){return(0,_clientApi.addLoader)(loader,!1)})),(_configFilename.parameters||_configFilename.globals||_configFilename.globalTypes)&&(0,_clientApi.addParameters)(_objectSpread(_objectSpread({},_configFilename.parameters),{},{globals:_configFilename.globals,globalTypes:_configFilename.globalTypes}),!1),_configFilename.argTypesEnhancers&&_configFilename.argTypesEnhancers.forEach((function(enhancer){return(0,_clientApi.addArgTypesEnhancer)(enhancer)}))},1073:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"parameters",(function(){return parameters})),__webpack_require__.d(__webpack_exports__,"decorators",(function(){return decorators}));__webpack_require__(0),__webpack_require__(1074);var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(44),parameters={controls:{expanded:!0}},decorators=[function(storyFn){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{padding:"16px"},children:storyFn()})}]},1079:function(module,exports,__webpack_require__){"use strict";(function(module){(0,__webpack_require__(349).configure)([__webpack_require__(1080)],module,!1)}).call(this,__webpack_require__(101)(module))},1080:function(module,exports,__webpack_require__){var map={"./stories/0-Welcome.stories.js":1081,"./stories/1-Authentication.stories.js":1089,"./stories/2-Home.stories.js":1091};function webpackContext(req){var id=webpackContextResolve(req);return __webpack_require__(id)}function webpackContextResolve(req){if(!__webpack_require__.o(map,req)){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}return map[req]}webpackContext.keys=function webpackContextKeys(){return Object.keys(map)},webpackContext.resolve=webpackContextResolve,module.exports=webpackContext,webpackContext.id=1080},1081:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"ToStorybook",(function(){return ToStorybook}));__webpack_require__(3),__webpack_require__(0);var _storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(469),_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(307),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(44);__webpack_exports__.default={title:"Welcome",component:_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__.Welcome};var ToStorybook=function ToStorybook(){return Object(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_4__.jsx)(_storybook_react_demo__WEBPACK_IMPORTED_MODULE_3__.Welcome,{showApp:Object(_storybook_addon_links__WEBPACK_IMPORTED_MODULE_2__.linkTo)("Button")})};ToStorybook.displayName="ToStorybook",ToStorybook.story={name:"to Storybook"},ToStorybook.parameters=Object.assign({storySource:{source:'() => <Welcome showApp={linkTo("Button")} />'}},ToStorybook.parameters),ToStorybook.__docgenInfo={description:"",methods:[],displayName:"ToStorybook"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/0-Welcome.stories.js"]={name:"ToStorybook",docgenInfo:ToStorybook.__docgenInfo,path:"src/stories/0-Welcome.stories.js"})},1089:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"LoginPage",(function(){return _1_Authentication_stories_LoginPage}));__webpack_require__(3),__webpack_require__(0);var route_constants={home:"/",login:"/login",register:"/register"},jsx_runtime=__webpack_require__(44),Button_component_Button=function Button(props){var text=props.text,onClick=props.onClick;return Object(jsx_runtime.jsx)("button",{className:"ug-button",onClick:onClick,children:text})};Button_component_Button.displayName="Button",Button_component_Button.__docgenInfo={description:"",methods:[],displayName:"Button"};var Button_component=Button_component_Button;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Button/Button.component.js"]={name:"Button",docgenInfo:Button_component_Button.__docgenInfo,path:"src/UI/Button/Button.component.js"});var Input_component_Input=function Input(props){var value=props.value,placeholder=props.placeholder;return Object(jsx_runtime.jsx)("input",{className:"ug-button",placeholder:placeholder,value:value})};Input_component_Input.displayName="Input",Input_component_Input.__docgenInfo={description:"",methods:[],displayName:"Input"};"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/UI/Input/Input.component.js"]={name:"Input",docgenInfo:Input_component_Input.__docgenInfo,path:"src/UI/Input/Input.component.js"});var Login_component_LoginComponent=function LoginComponent(props){var history=props.history;return Object(jsx_runtime.jsxs)("div",{children:["LOGIN PAGE",Object(jsx_runtime.jsx)(Button_component,{text:"login",onClick:function onClick(){history.push(route_constants.home)}})]})};Login_component_LoginComponent.displayName="LoginComponent",Login_component_LoginComponent.__docgenInfo={description:"",methods:[],displayName:"LoginComponent"};var Login_component=Login_component_LoginComponent;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Authentication/Login.component.js"]={name:"LoginComponent",docgenInfo:Login_component_LoginComponent.__docgenInfo,path:"src/Components/Authentication/Login.component.js"});__webpack_exports__.default={title:"Authentication"};var _1_Authentication_stories_LoginPage=function LoginPage(){return Object(jsx_runtime.jsx)(Login_component,{})};_1_Authentication_stories_LoginPage.displayName="LoginPage",_1_Authentication_stories_LoginPage.parameters=Object.assign({storySource:{source:"() => <LoginComponent/>"}},_1_Authentication_stories_LoginPage.parameters),_1_Authentication_stories_LoginPage.__docgenInfo={description:"",methods:[],displayName:"LoginPage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/1-Authentication.stories.js"]={name:"LoginPage",docgenInfo:_1_Authentication_stories_LoginPage.__docgenInfo,path:"src/stories/1-Authentication.stories.js"})},1091:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,"HomePage",(function(){return _2_Home_stories_HomePage}));__webpack_require__(3),__webpack_require__(0);var jsx_runtime=__webpack_require__(44),Home_component_HomeComponent=function HomeComponent(){return Object(jsx_runtime.jsx)("div",{children:"HOME"})};Home_component_HomeComponent.displayName="HomeComponent",Home_component_HomeComponent.__docgenInfo={description:"",methods:[],displayName:"HomeComponent"};var Home_component=Home_component_HomeComponent;"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/Components/Home/Home.component.js"]={name:"HomeComponent",docgenInfo:Home_component_HomeComponent.__docgenInfo,path:"src/Components/Home/Home.component.js"});__webpack_exports__.default={title:"Home"};var _2_Home_stories_HomePage=function HomePage(){return Object(jsx_runtime.jsx)(Home_component,{})};_2_Home_stories_HomePage.displayName="HomePage",_2_Home_stories_HomePage.parameters=Object.assign({storySource:{source:"() => <HomeComponent />"}},_2_Home_stories_HomePage.parameters),_2_Home_stories_HomePage.__docgenInfo={description:"",methods:[],displayName:"HomePage"},"undefined"!=typeof STORYBOOK_REACT_CLASSES&&(STORYBOOK_REACT_CLASSES["src/stories/2-Home.stories.js"]={name:"HomePage",docgenInfo:_2_Home_stories_HomePage.__docgenInfo,path:"src/stories/2-Home.stories.js"})},472:function(module,exports,__webpack_require__){__webpack_require__(473),__webpack_require__(635),__webpack_require__(636),__webpack_require__(794),__webpack_require__(1016),__webpack_require__(1049),__webpack_require__(1054),__webpack_require__(1056),__webpack_require__(1068),__webpack_require__(1070),module.exports=__webpack_require__(1079)},545:function(module,exports){},636:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__);__webpack_require__(349)}},[[472,1,2]]]);
//# sourceMappingURL=main.2059afdf17fbfe953bea.bundle.js.map