
app.get('/loadmore',function(req,res){
	var newsIndex=req.query.index;
	var len=req.query.length;
	var data=[];
	for(var i=0;i<len;i++){
		data.push('新闻'+ (parseInt(newsIndex)+i) );
	}
	res.send(data);
})
