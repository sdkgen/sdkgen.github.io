(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"5Uon":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return s})),t.d(n,"default",(function(){return c}));t("5hJT"),t("W1QL"),t("K/PF"),t("t91x"),t("75LO"),t("PJhk"),t("mXGw");var a=t("/FXl"),i=t("TjRS");t("aD51");function r(){return(r=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"defining-your-schema.mdx"}});var o={_frontmatter:s},l=i.a;function c(e){var n=e.components,t=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,["components"]);return Object(a.b)(l,r({},o,t,{components:n,mdxType:"MDXLayout"}),Object(a.b)("h1",{id:"defining-your-schema"},"Defining your schema"),Object(a.b)("p",null,"To generate client targets and server schema, sdkgen provides an expressive language, in which you declare your interfaces, API calls and error treatment, all of this, with automatic type validation.\nYou can also add annotations to generate documentation and REST endpoints to your exposed functions!"),Object(a.b)("h2",{id:"primitive-types"},"Primitive types"),Object(a.b)("p",null,"In addition to having ",Object(a.b)("inlineCode",{parentName:"p"},"string"),", ",Object(a.b)("inlineCode",{parentName:"p"},"int"),", ",Object(a.b)("inlineCode",{parentName:"p"},"float")," and ",Object(a.b)("inlineCode",{parentName:"p"},"bool")," (which are exactly what you expect), it also has: "),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"uint")," - an unsigned integer"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"uuid")," - a universally unique identifier"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"void")," - the absence of any value"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"date")," - a simple type referencing a date in calendar, timezone-agnostic"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"datetime")," - full date type, with time included, always converted to UTC"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"bytes")," - a byte buffer, commonly used when uploading files"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"money")," - an integer for representing money in cents"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"bigint")," - a way to represent integers bigger than 2^53"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"email")," - an email address valid value"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"hex")," - an hexadecimal number"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"base64")," - encoding format for transferring data via text"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"url")," - ",Object(a.b)("a",r({parentName:"li"},{href:"https://www.w3.org/Addressing/URL/url-spec.txt"}),"URL")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"xml")," - ",Object(a.b)("a",r({parentName:"li"},{href:"https://www.w3.org/TR/xml/"}),"XML")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"json")," - ",Object(a.b)("a",r({parentName:"li"},{href:"https://www.json.org/json-en.html"}),"JSON"))),Object(a.b)("p",null,"Brazilian utility types:"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cpf")," - personal document number"),Object(a.b)("li",{parentName:"ul"},Object(a.b)("inlineCode",{parentName:"li"},"cnpj")," - company document number")),Object(a.b)("h2",{id:"compound-types"},"Compound types"),Object(a.b)("p",null,"To compose types into more complex ones, sdkgen provides a TypesScript-like syntax:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"type UserInfo {\n  firstName: string\n  lastName: string\n  additionalNeeds: string\n  socialName: string\n  cpf: cpf\n  email: string\n  phoneNumber: string\n}\n")),Object(a.b)("h3",{id:"spreading-compound-types"},"Spreading compound types"),Object(a.b)("p",null,"Complex types can also be spread and used by other types: "),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"type User {\n    id: uuid\n    ...UserInfo\n}\n")),Object(a.b)("p",null,"In this case, ",Object(a.b)("em",{parentName:"p"},"User")," is transformed into:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"type User {\n    id: uuid\n    firstName: string\n    lastName: string\n    additionalNeeds: string\n    socialName: string\n    cpf: cpf\n    email: string\n    phoneNumber: string\n}\n")),Object(a.b)("h2",{id:"enums"},"Enums"),Object(a.b)("p",null,"In sdkgen, enums are types that consist in a fixed set of strings, behaving very similarly to the other languages and being defined this way:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"type State enum {\n    Bahia\n    RioDeJaneiro\n    SaoPaulo\n}\n")),Object(a.b)("p",null,"You can also define enums inline on compound types:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"type User {\n    username: string\n    password: string\n    type: enum { Teacher Student Director }\n}\n")),Object(a.b)("p",null,"When receiving or sending enum-typed strings, the sdkgen server will validate if the value matches the provided set."),Object(a.b)("h2",{id:"lists"},"Lists"),Object(a.b)("p",null,"To define a list of any type, you can just put ",Object(a.b)("inlineCode",{parentName:"p"},"[]")," at the of its definition. In this case, foo is a list of strings:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"type Game {\n    winner: string\n    players: string[]\n}\n")),Object(a.b)("p",null,"Your compound type can also be a list:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"type Car {\n    brand: string\n    model: string\n    owners: string[]\n}[]\n")),Object(a.b)("h2",{id:"optional-types"},"Optional types"),Object(a.b)("p",null,"To turn your types optional, add ",Object(a.b)("inlineCode",{parentName:"p"},"?")," after its definition. sdkgen won't complain if an optional type is not present in any context."),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"type BlogPost {\n    title: string\n    description: string?\n    text: string\n}\n")),Object(a.b)("p",null,"Any sdkgen type can be set as optional:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"type Comment {\n    owner: User\n    text: string\n    reactions: Reaction[]?\n}\n\ntype Direction enum {\n    Up\n    Down\n    Left\n    Right\n}\n\ntype Car {\n    brand: string\n    direction: Direction?\n}\n")),Object(a.b)("h2",{id:"functions"},"Functions"),Object(a.b)("p",null,"To define what your clients will get and put into the server, you should describe the functions, their arguments and return types:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"fn createUser(info: UserInfo): User\nfn updateUser(info: UserInfo): User\n\nfn removeUser(id: string)\n\nfn getUserHistory(id: string, since: date, until: date): History[]\n")),Object(a.b)("h2",{id:"errors"},"Errors"),Object(a.b)("p",null,"By default, sdkgen provides the ",Object(a.b)("inlineCode",{parentName:"p"},"Fatal")," error type, but, you can create your own to make a more specific error throwing to the clients, as you can see:"),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"error InvalidArgument\nerror NotFound\n")),Object(a.b)("h2",{id:"annotations"},"Annotations"),Object(a.b)("h3",{id:"rest"},"@rest"),Object(a.b)("p",null,"It is possible to add a @rest annotation to any sdkgen function to have it exposed as a REST endpoint. Arguments can be received as path fragments, as query parameters, as headers and on the body. Parsing and strict type validation is all done for you: "),Object(a.b)("pre",null,Object(a.b)("code",r({parentName:"pre"},{}),"// Simple get call\n@rest GET /status\nfn getStatus(): string\n\n// Passing argument on body\n@rest POST /users [body {user}]\nfn createNewUser(user: NewUser): User\n\n// Sending custom headers\n@rest GET /posts [header user-agent: {userAgent}] [header accept-language: {lang}] [header x-token: {token}]\nfn getPosts(userAgent: string, lang: string, token: base64): User\n\n// Sending arguments on path and querystring.\n@rest GET /chats/{chatId}/messages?{since}&{until} [header x-token: {token}]\nfn getMessages(token: base64, chatId: uuid, since: datetime?, until: datetime?): Message[]\n\n// Provide the @description to be displayed in the swagger\n@description Get the list of company users\nfn getUsers(companyId: uuid, since: datetime?, until: datetime?, token: base64): User?\n\n// Provide the @args to be displayed a text for argument in the swagger\n@arg companyId ID from company\nfn getUsers(companyId: uuid, since: datetime?, until: datetime?, token: base64): User?\n\n// You can use both at the same time\n@description Get the list of company users\n@arg companyId ID from company\n@arg since provide a date for the start of the search\n@arg until provide a date for the end of the search\n@arg token provide a token in base64\nfn getUsers(companyId: uuid, since: datetime?, until: datetime?, token: base64): User?\n\n// Sending enum like as an argument\ntype TypeTransfer enum {\n    internal\n    external\n}\n\n@rest GET /transfer/account?{type}&{account}\nfn getTransfersTypeFromAccount(type: TypeTransfer, account: string)\n")))}void 0!==c&&c&&c===Object(c)&&Object.isExtensible(c)&&!c.hasOwnProperty("__filemeta")&&Object.defineProperty(c,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"defining-your-schema.mdx"}}),c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---defining-your-schema-mdx-0a28d6e75ca30b553552.js.map