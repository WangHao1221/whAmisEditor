/**
 * 该文件是将npm run build 的文件压缩成.zip格式
 */

 const fs = require('fs');
 const path = require('path');
 const archiver = require('archiver');
 //生成archiver对象，打包类型为zip
 const archive = archiver('zip');
 //创建一最终打包文件的输出流
 const output = fs.createWriteStream(path.join(__dirname + '../../../' + 'TestAmisWHWeb.zip'));
 
 // 打包出错时，抛出异常
 archive.on('error', function (err) {
     throw err;
 });
 
 //将打包对象与输出流关联
 archive.pipe(output);
 
 //将被打包文件的流添加进archiver对象中
 archive.directory(path.join(__dirname + '../../../' + 'testAmisWeb/'), 'TestAmisWHWeb')
 
 //打包
 archive.finalize();
