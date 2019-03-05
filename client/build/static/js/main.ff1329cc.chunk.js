(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{44:function(e,t,a){e.exports=a(92)},92:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(37),l=a.n(o),s=a(94),c=a(7),i=a(16),u=a(39),m=a.n(u),p=a(40),d=a(96),h=a(95),v=a(4),E=a(5),f=a(8),b=a(6),g=a(9),y=a(19),O=a.n(y),k=a(93),w=a(41),_=a.n(w);var j=Object(c.b)(function(e){return{user:e.user}})(function(e){var t=e.user,a=[{type:"navItem",icon:"home",text:"Home",link:"/",restricted:!1},{type:"navItem",icon:"file-text-o",text:"My Profile",link:"/user",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Add Admins",link:"/user/register",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Login",link:"/login",restricted:!1,exclude:!0},{type:"navItem",icon:"file-text-o",text:"My reviews",link:"/user/user-reviews",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Add reviews",link:"/user/add",restricted:!0},{type:"navItem",icon:"file-text-o",text:"Logout",link:"/user/logout",restricted:!0}],n=function(e,t){return r.a.createElement("div",{key:t,className:e.type},r.a.createElement(k.a,{to:e.link},r.a.createElement(O.a,{name:e.icon}),e.text))};return r.a.createElement("div",null,t.login?a.map(function(e,a){return t.login.isAuth?e.exclude?null:n(e,a):e.restricted?null:n(e,a)}):null)}),N=function(e){return r.a.createElement(_.a,{showNav:e.showNav,onHideNav:e.onHideNav,navStyle:{background:"#242424",maxWidth:"220px"}},r.a.createElement(j,null))},D=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={showNav:!1},a.onHideNav=function(){a.setState({showNav:!1})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"render",value:function(){var e=this;return r.a.createElement("header",null,r.a.createElement("div",{className:"open_nav"},r.a.createElement(O.a,{name:"bars",style:{color:"#fff",padding:"15px",cursor:"pointer"},onClick:function(){return e.setState({showNav:!0})}})),r.a.createElement(N,{showNav:this.state.showNav,onHideNav:function(){e.onHideNav()}}),r.a.createElement(k.a,{to:"/",className:"logo"},"The Book Shelf"))}}]),t}(n.Component),I=function(e){return r.a.createElement("div",null,r.a.createElement(D,null),r.a.createElement("div",null,e.children))},S=a(22),x=a(12),C=a.n(x);function A(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:10,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0,a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"asc",n=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"";return{type:"GET_BOOKS",payload:C.a.get("/api/getBooks?limit=".concat(e,"&skip=").concat(t,"&order=").concat(a)).then(function(e){return n?[].concat(Object(S.a)(n),Object(S.a)(e.data)):e.data})}}var B=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={width:window.innerWidth},a.onResize=function(){a.setState({width:window.innerWidth})},a.count=function(e,t){if(t){var n=a.state.width,r=n>1600?1800:n>1200&&n<1600?500:n<1200&&n>768?300:n<768&&n>480?200:80;return e=e.substring(0,r),"".concat(e,"...")}return e},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentDidMount",value:function(){window.addEventListener("resize",this.onResize)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.onResize)}},{key:"render",value:function(){var e=this.props,t=e._id,a=e.cover,n=e.name,o=e.author,l=e.price,s=e.pages,c=e.rating,i=e.review,u=e.overflow;return r.a.createElement(k.a,{to:"/books/".concat(t),className:"book_item"},r.a.createElement("div",{className:"book_cover"},r.a.createElement("img",{src:"/images/".concat(a),alt:n})),r.a.createElement("div",{className:"book_container"},r.a.createElement("div",{className:"book_header"},r.a.createElement("h2",null,n)),r.a.createElement("div",{className:"book_items"},r.a.createElement("div",{className:"book_author"},o),r.a.createElement("div",{className:"book_bubble"},r.a.createElement("strong",null,"Price")," ",l),r.a.createElement("div",{className:"book_bubble"},r.a.createElement("strong",null,"Pages")," ",s),r.a.createElement("div",{className:"book_bubble rating"},r.a.createElement("strong",null,"Rating")," ",c),r.a.createElement("p",{className:"book_review"},this.count(i,u)))))}}]),t}(n.Component),R=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).renderItems=function(e){return e.list?e.list.map(function(e){return r.a.createElement(B,Object.assign({},e,{key:e._id,overflow:!0}))}):null},a.loadMore=function(){var e=a.props.books.list.length;a.props.dispatch(A(7,e,"",a.props.books.list))},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(A(7,0))}},{key:"render",value:function(){return r.a.createElement("div",null,this.renderItems(this.props.books),r.a.createElement("div",{onClick:this.loadMore,className:"loadmore"},"Load More"))}}]),t}(n.Component);var P=Object(c.b)(function(e){return{books:e.books}})(R),U=function(){return r.a.createElement("div",null,r.a.createElement(P,null))},T=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).renderBook=function(e){return e.book?r.a.createElement("div",{className:"br_container"},r.a.createElement("div",{className:"br_image"},r.a.createElement("img",{src:"/images/".concat(e.book.cover),alt:e.book.name})),r.a.createElement("div",{className:"br_header"},r.a.createElement("h2",null,e.book.name),r.a.createElement("h5",null,e.book.author),r.a.createElement("div",{className:"br_reviewer"},r.a.createElement("span",null,"Review by :")," ",e.reviewer.name," ",e.reviewer.lastname)),r.a.createElement("div",{className:"br_review"},e.book.review),r.a.createElement("div",{className:"br_box"},r.a.createElement("div",{className:"left"},r.a.createElement("div",null,r.a.createElement("span",null,"Pages:")," ",e.book.pages),r.a.createElement("div",null,r.a.createElement("span",null,"Price:")," ",e.book.price)),r.a.createElement("div",{className:"right"},r.a.createElement("span",null,"Rating:")," ",r.a.createElement("div",null,e.book.rating," / 5")))):null},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch(function(e){var t=C.a.get("/api/getBook?id=".concat(e));return function(e){t.then(function(t){var a=t.data;C.a.get("/api/reviewer?id=".concat(a.ownerId)).then(function(t){var n=t.data;e({type:"GET_BOOK_W_REV",payload:{book:a,reviewer:n}})})})}}(this.props.match.params.id))}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK_W_REV",payload:{book:{},reviewer:{}}})}},{key:"render",value:function(){var e=this.props.books;return r.a.createElement("div",null,this.renderBook(e))}}]),t}(n.Component);var W=Object(c.b)(function(e){return{books:e.books}})(T),L=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={email:"",password:"",error:"",success:!1},a.submitForm=function(e){e.preventDefault(),a.props.dispatch(function(e){var t=e.email,a=e.password;return{type:"USER_LOGIN",payload:C.a.post("/api/login",{email:t,password:a}).then(function(e){return e.data})}}(a.state))},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillReceiveProps",value:function(e,t){e.user.login.isAuth&&this.props.history.push("/user")}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"rl_container"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Log in"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"email",placeholder:"Enter your mail",value:this.state.email,onChange:this.handleInputEmail})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"password",placeholder:"Enter your password",value:this.state.password,onChange:this.handleInputPassword})),r.a.createElement("button",{type:"submit"},"Log in"),r.a.createElement("div",{className:"error"},e.login?r.a.createElement("div",null,e.login.message):null)))}}]),t}(n.Component);var K=Object(c.b)(function(e){return{user:e.user}})(L),G=function(e,t){var a=function(a){function n(){var e,t;Object(v.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(f.a)(this,(e=Object(b.a)(n)).call.apply(e,[this].concat(r)))).state={loading:!0},t}return Object(g.a)(n,a),Object(E.a)(n,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"USER_AUTH",payload:C.a.get("/api/auth").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e,a){this.setState({loading:!1}),e.user.login.isAuth?!1===t&&this.props.history.push("user"):t&&this.props.history.push("/login")}},{key:"render",value:function(){return this.state.loading?r.a.createElement("div",{className:"loader"},"Loading..."):r.a.createElement(e,Object.assign({},this.props,{user:this.props.user}))}}]),n}(n.Component);return Object(c.b)(function(e){return{user:e.user}})(a)},M=function(e){var t=e.user.login;return r.a.createElement("div",{className:"user_container"},r.a.createElement("div",{className:"avatar"},r.a.createElement("img",{src:"/images/avatar.png",alt:"avatar"})),r.a.createElement("div",{className:"nfo"},r.a.createElement("div",null,r.a.createElement("span",null,"Name:")," ",t.name),r.a.createElement("div",null,r.a.createElement("span",null,"Lastname:")," ",t.lastname),r.a.createElement("div",null,r.a.createElement("span",null,"Email:")," ",t.email)))},F=a(2),H=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={formData:{name:"",author:"",cover:"",review:"",pages:"",price:"",rating:""}},a.handleInput=function(e,t){var n=Object(F.a)({},a.state.formData);n[t]=e.target.value,a.setState({formData:n})},a.handleImage=function(e){var t=Object(F.a)({},a.state.formData);t.cover=e.target.files[0].name,a.setState({formData:t})},a.showNewBook=function(e){return e.post?r.a.createElement("div",{className:"conf_link"},"Okay!!! ",r.a.createElement(k.a,{to:"/books/".concat(e.bookId)},"Click to see the Post")):null},a.submitForm=function(e){var t;e.preventDefault(),a.props.dispatch((t=Object(F.a)({},a.state.formData,{ownerId:a.props.user.login.id,price:"".concat(a.state.formData.price,"$")}),{type:"ADD_BOOK",payload:C.a.post("/api/book",t).then(function(e){return e.data})}))},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_NEW_BOOK",payload:{}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"rl_container article"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Add a review"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter name",value:this.state.formData.name,onChange:function(t){return e.handleInput(t,"name")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter author",value:this.state.formData.author,onChange:function(t){return e.handleInput(t,"author")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(t){return e.handleImage(t)}})),this.state.formData.cover?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{style:{width:"200px"},src:"/images/".concat(this.state.formData.cover),alt:this.state.formData.author})):null,r.a.createElement("textarea",{value:this.state.formData.review,onChange:function(t){return e.handleInput(t,"review")},rows:"10"}),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"number",placeholder:"Enter pages",value:this.state.formData.pages,onChange:function(t){return e.handleInput(t,"pages")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter price",value:this.state.formData.price,onChange:function(t){return e.handleInput(t,"price")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"number",placeholder:"Enter rating",value:this.state.formData.rating,onChange:function(t){return e.handleInput(t,"rating")}})),this.props.books.newBook?this.showNewBook(this.props.books.newBook):null,r.a.createElement("button",{type:"submit"},"Add review")))}}]),t}(n.Component);var z=Object(c.b)(function(e){return{books:e.books}})(H),V=a(42),Y=a.n(V),J=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).showUserPosts=function(e){return e.userPosts?e.userPosts.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("td",null,r.a.createElement(k.a,{to:"/user/edit-post/".concat(e._id)},e.name)),r.a.createElement("td",null,e.author),r.a.createElement("td",null,Y()(e.createAt).format("MM/DD/YY")))}):null},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e;this.props.dispatch((e=this.props.user.login.id,{type:"GET_USER_POSTS",payload:C.a.get("/api/user_posts?user=".concat(e)).then(function(e){return e.data})}))}},{key:"render",value:function(){var e=this.props.user;return r.a.createElement("div",{className:"user_posts"},r.a.createElement("h4",null,"Your reviews"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Author"),r.a.createElement("th",null,"Date"))),r.a.createElement("tbody",null,this.showUserPosts(e))))}}]),t}(n.Component);var $=Object(c.b)(function(e){return{user:e.user}})(J),q=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(r)))).state={formData:{_id:a.props.match.params.id,name:"",author:"",cover:"",review:"",pages:"",price:"",rating:""}},a.handleInput=function(e,t){var n=Object(F.a)({},a.state.formData);n[t]=e.target.value,a.setState({formData:n})},a.handleImage=function(e){var t=Object(F.a)({},a.state.formData);t.cover=e.target.files[0].name,a.setState({formData:t})},a.submitForm=function(e){var t;e.preventDefault(),a.props.dispatch((t=a.state.formData,{type:"UPDATE_BOOK",payload:C.a.post("/api/book_update",t).then(function(e){return e.data})}))},a.deletePost=function(){var e;a.props.dispatch((e=a.props.match.params.id,{type:"DELETE_BOOK",payload:C.a.delete("/api/book_delete?id=".concat(e)).then(function(e){return e.data})}))},a.redirectUser=function(){setTimeout(function(){a.props.history.push("/user/user-reviews")},1e3)},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){var e;this.props.dispatch((e=this.props.match.params.id,{type:"GET_BOOK",payload:C.a.get("/api/getBook?id=".concat(e)).then(function(e){return e.data})}))}},{key:"componentWillReceiveProps",value:function(e){var t=e.books.book;this.setState({formData:{_id:t._id,name:t.name,author:t.author,cover:t.cover,review:t.review,pages:t.pages,price:t.price,rating:t.rating}})}},{key:"componentWillUnmount",value:function(){this.props.dispatch({type:"CLEAR_BOOK",payload:{book:null,updateBook:!1,postDeleted:!1}})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"rl_container article"},this.props.books.postDeleted?r.a.createElement("div",{className:"red_tag"},"Post deleted.",this.redirectUser()):null,r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Edit review"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter name",value:this.state.formData.name,onChange:function(t){return e.handleInput(t,"name")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter author",value:this.state.formData.author,onChange:function(t){return e.handleInput(t,"author")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"file",accept:"image/*",onChange:function(t){return e.handleImage(t)}})),this.state.formData.cover?r.a.createElement("div",{style:{textAlign:"center"}},r.a.createElement("img",{style:{width:"200px"},src:"/images/".concat(this.state.formData.cover),alt:this.state.formData.author})):null,r.a.createElement("textarea",{value:this.state.formData.review,onChange:function(t){return e.handleInput(t,"review")},rows:"10"}),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"number",placeholder:"Enter pages",value:this.state.formData.pages,onChange:function(t){return e.handleInput(t,"pages")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"Enter price",value:this.state.formData.price,onChange:function(t){return e.handleInput(t,"price")}})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"number",placeholder:"Enter rating",value:this.state.formData.rating,onChange:function(t){return e.handleInput(t,"rating")}})),this.props.books.updateBook?r.a.createElement("div",{className:"edit_confirm"},"Post updated,",r.a.createElement(k.a,{to:"/books/".concat(this.props.books.book._id)},"click here to see the post")):null,r.a.createElement("button",{type:"submit"},"Edit review"),r.a.createElement("div",{className:"delete_post"},r.a.createElement("div",{className:"button",onClick:this.deletePost},"Delete review"))))}}]),t}(n.PureComponent);var Q=Object(c.b)(function(e){return{books:e.books}})(q),X=function(e){function t(){var e,a;Object(v.a)(this,t);for(var n=arguments.length,o=new Array(n),l=0;l<n;l++)o[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(b.a)(t)).call.apply(e,[this].concat(o)))).state={name:"",lastname:"",email:"",password:"",error:""},a.handleInputEmail=function(e){a.setState({email:e.target.value})},a.handleInputPassword=function(e){a.setState({password:e.target.value})},a.handleInputName=function(e){a.setState({name:e.target.value})},a.handleInputLastname=function(e){a.setState({lastname:e.target.value})},a.submitForm=function(e){e.preventDefault(),a.setState({error:""}),a.props.dispatch(function(e,t){var a=C.a.post("/api/register",e);return function(e){a.then(function(a){var n=a.data,r=n.success?[].concat(Object(S.a)(t),[n.user]):t,o={success:n.success,users:r};e({type:"USER_REGISTER",payload:o})})}}({name:a.state.name,lastname:a.state.lastname,email:a.state.email,password:a.state.password},a.props.user.users))},a.showUsers=function(e){return e.users?e.users.map(function(e){return r.a.createElement("tr",{key:e._id},r.a.createElement("th",null,e.name),r.a.createElement("th",null,e.lastname),r.a.createElement("th",null,e.email))}):null},a}return Object(g.a)(t,e),Object(E.a)(t,[{key:"componentWillMount",value:function(){this.props.dispatch({type:"GET_USERS",payload:C.a.get("/api/users").then(function(e){return e.data})})}},{key:"componentWillReceiveProps",value:function(e,t){!1===e.user.register?this.setState({error:"Error try again."}):this.setState({name:"",lastname:"",email:"",password:""})}},{key:"render",value:function(){return r.a.createElement("div",{className:"rl_container"},r.a.createElement("form",{onSubmit:this.submitForm},r.a.createElement("h2",null,"Add user"),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"enter name",value:this.state.name,onChange:this.handleInputName})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"text",placeholder:"enter last name",value:this.state.lastname,onChange:this.handleInputLastname})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"email",placeholder:"enter email",value:this.state.email,onChange:this.handleInputEmail})),r.a.createElement("div",{className:"form_element"},r.a.createElement("input",{type:"password",placeholder:"enter password",value:this.state.password,onChange:this.handleInputPassword})),r.a.createElement("button",{type:"submit"},"Add user"),r.a.createElement("div",{className:"error"},this.state.error)),r.a.createElement("div",{className:"current_users"},r.a.createElement("h4",null,"Current users"),r.a.createElement("table",null,r.a.createElement("thead",null,r.a.createElement("tr",null,r.a.createElement("th",null,"Name"),r.a.createElement("th",null,"Lastname"),r.a.createElement("th",null,"Email"))),r.a.createElement("tbody",null,this.showUsers(this.props.user)))))}}]),t}(n.PureComponent);var Z=Object(c.b)(function(e){return{user:e.user}})(X),ee=function(e){return C.a.get("/api/logout").then(function(){setTimeout(function(){e.history.push("/")},2e3)}),r.a.createElement("div",{className:"logout_container"},r.a.createElement("h1",null,"Sorry to see you go :("))},te=function(){return r.a.createElement(I,null,r.a.createElement(d.a,null,r.a.createElement(h.a,{path:"/",exact:!0,component:G(U,null)}),r.a.createElement(h.a,{path:"/user",exact:!0,component:G(M,!0)}),r.a.createElement(h.a,{path:"/user/logout",exact:!0,component:G(ee,!0)}),r.a.createElement(h.a,{path:"/login",exact:!0,component:G(K,!1)}),r.a.createElement(h.a,{path:"/user/register",exact:!0,component:G(Z,!0)}),r.a.createElement(h.a,{path:"/user/add",exact:!0,component:G(z,!0)}),r.a.createElement(h.a,{path:"/user/edit-post/:id",exact:!0,component:G(Q,!0)}),r.a.createElement(h.a,{path:"/user/user-reviews",exact:!0,component:G($,null)}),r.a.createElement(h.a,{path:"/books/:id",exact:!0,component:G(W,null)})))},ae=Object(i.c)({books:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_BOOKS":return Object(F.a)({},e,{list:t.payload});case"GET_BOOK":return Object(F.a)({},e,{book:t.payload});case"GET_BOOK_W_REV":case"CLEAR_BOOK_W_REV":return Object(F.a)({},e,{book:t.payload.book,reviewer:t.payload.reviewer});case"ADD_BOOK":case"CLEAR_NEW_BOOK":return Object(F.a)({},e,{newBook:t.payload});case"UPDATE_BOOK":return Object(F.a)({},e,{updateBook:t.payload.success,book:t.payload.doc});case"DELETE_BOOK":return Object(F.a)({},e,{postDeleted:t.payload});case"CLEAR_BOOK":return Object(F.a)({},e,{updateBook:t.payload.updateBook,postDeleted:t.payload.postDeleted,book:t.payload.book});default:return e}},user:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"USER_LOGIN":case"USER_AUTH":return Object(F.a)({},e,{login:t.payload});case"GET_USER_POSTS":return Object(F.a)({},e,{userPosts:t.payload});case"GET_USERS":return Object(F.a)({},e,{users:t.payload});case"USER_REGISTER":return Object(F.a)({},e,{users:t.payload.users,register:t.payload.success});default:return e}}}),ne=Object(i.a)(m.a,p.a)(i.d);l.a.render(r.a.createElement(c.a,{store:ne(ae)},r.a.createElement(s.a,null,r.a.createElement(te,null))),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.ff1329cc.chunk.js.map