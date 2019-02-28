export const getMyDate= function(tmpDate){ 
	/*
		// 1551335972
		console.log(getMyDate(new Date("2006-10-12")))
		日期格式转换为字符串  tmpDate---传入的日期对象
		new Date("10 12,2006 22:19:35"); //字符串传参
		new Date("January 12,2006"); 
		new Date(2006,0,12,22,19,35); 
		new Date(2006,0,12);     数字逗号传参
		new Date(1137075575000); 时间戳传参
		new Date("2006/10/12 22:19:35") 中文字符串
		new Date("2006-10-12")
	*/ 
    console.log(tmpDate);
    var m=tmpDate.getMonth()+1; 
	var d=tmpDate.getDate();         
	if(m.length<2)        
		m="0"+m;          
	if(d.length<2)           
	 	d="0"+d;         
   	return tmpDate.getFullYear()+"/"+m+"/"+d;
}
