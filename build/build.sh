#!/bin/sh

set -x
HOME_PATH=$(pwd)

echo "清空package目录"
rm -rf package
mkdir -p package
PACKAGE_PATH=$HOME_PATH/package

ls -lh

pwd

# 解压项目node环境依赖
unzip ./node_modules.zip  > /dev/null 2>&1

chmod -R 777 ./node_modules

# 开始打包
npm run build
ls -lh ./

mv dist TestAmisWHWeb
tar -czf TestAmisWHWeb.tar.gz TestAmisWHWeb

cp TestAmisWHWeb.tar.gz $PACKAGE_PATH

