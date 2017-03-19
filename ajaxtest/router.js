/**
 * 使用范例
 */


/**
 * 发送 GET 请求， 无参数
 * GET /hello
 * 返回响应数据
 */
app.get('/hello', function(req, res) {
	res.send({
		status: 0,
		msg: "hello 饥人谷"
	});
});


/**
 * 发送 GET 请求, 有参数
 * GET /user/100
 * query = { name: 'ruoyu', age: 28 }
 */
app.get('/user/:uid', function(req, res) {
	console.log(req.params.uid); //100
	console.log(req.query.name); // 'ruoyu'
	res.send({
		status: 1,
		errorMsg: "请先注册"
	});
});


/**
 * 发送 POST 请求， 有参数
 * POST /comment
 * query = { comment: "这是评论内容" }
 */




/**
 * 页面路由，从模板渲染页面渲染页面, 
 * htttp://localhost:8080/user
 * 支持 ejs, jade 模板
 */
app.get('/user', function(req, res) {
	res.render('user.ejs', {
		username: '饥人谷'
	});
});
app.get('/login', function(req, res) {
	var username=req.query.username;
	var password=req.query.password;
	var datas;
	if(username==="xiaomin2g"&&password==="abcd1234"){
		datas="登陆成功";
	}else{
		datas="用户名或密码错误";
	}
	res.send(datas);
});

app.get('/loadmore',function(req,res){
	var newsIndex=req.query.index;
	var len=req.query.length;
	var data=[];
	for(var i=0;i<len;i++){
		data.push('新闻'+ (parseInt(newsIndex)+i) );
	}
	res.send(data);
})