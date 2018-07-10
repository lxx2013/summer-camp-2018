# Node.js笔记

### 可以使用下划线`_`获取上一个**表达式的运算结果**：
```bash
$ node
> var x = 10
undefined
> var y = 20
undefined
> x + y
30
> var sum = _
undefined
> console.log(sum)
30
```
### 文件读写


### 回调函数

在文件读取完成后，我们将文件内容作为回调函数的参数返回。这样在执行代码时就没有阻塞或等待文件 I/O 操作。这就大大提高了 Node.js 的性能，可以处理大量的并发请求

#### 阻塞代码实例
```js
var fs = require("fs");

var data = fs.readFileSync('data.json');

console.log(data.toString().replace(/\n|\t/g,''));
```

#### 非阻塞代码实例

```js
var fs = require("fs");

fs.readFile('data.json', function (err, data) {
    if (err) return console.error(err);
    console.log(data.toString().replace(/\n|\t/g,''));
});

```

### 事件循环