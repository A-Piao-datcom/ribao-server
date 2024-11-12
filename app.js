const express = require('express');
const path = require('path');
const cors = require('cors');
const app = express();
const port = 3000
app.listen(port,()=>{
	console.log("HTTP服务启动了...")
	console.log("http://127.0.0.1:"+port)
	console.log("http://localhost:"+port)
	console.log("http://192.168.33.33:"+port)
})
app.use(cors());
//静态资源目录
//http://localhost:3000/imgs/user.jpg
//http://127.0.0.1:3000/imgs/user.jpg
//http://192.168.33.33:3000/imgs/user.jpg
app.use(express.static(path.join(__dirname, 'public')));



//上述代码搭建一个web服务，存放静态资源

