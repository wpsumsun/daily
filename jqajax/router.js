//getNews
app.get('/loadmore',function(req,res){
	var newsIndex=req.query.index;
	var len=req.query.length;
	var data=[];
	for(var i=0;i<len;i++){
		if(i<10){
			data.push('新闻'+ (parseInt(newsIndex)+i) );
		}else{
			data.push('没有更多新闻');
			break
		}
	}
	res.send(data);
})