## flex容器父元素
|  容器父元素| *加粗的是default*||
|--|--|
|flex-direction| **row** <br> row-reverse <br> column  <br>column-reverse | *排列方向, 类似 float:left 的效果*|
|flex-wrap| **nowrap**<br> wrap<br> wrap-reverse | 是否可以换行|
|flex-flow| `<flex-direction> <flex-wrap>` |方向和换行的简写,例如 row nowrap|
|justify-content| **flex-start** <br>flex-end <br>center<br> space-between <br>space-around |主轴(横向的轴)对齐方式 ![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071010.png)|
|align-items| flex-start <br>flex-end <br>center<br> baseline<br> **stretch**| 交叉轴(竖轴)对齐方式|
|align-content|flex-start <br>flex-end <br>center <br>space-between <br>space-around <br>**stretch**| 多根轴线对齐方式, 若只有1根轴线则不起作用 ![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071012.png)|

## flex 布局思路:
>布局内容数量?

- 单行
	- 确定方向从左到右还是从上到下?设置 flex-direction
	- 间隔样式?设置justify-content
	- 设置交叉轴对齐方式 align-items
- 多行
	- 执行单行思考过程
	- 设置允许换行 flex-wrap
	- 设置align-content
	
## item \ 子元素 \ 项目

|item 子元素| |
|--------|--|
| order |  定义项目的排列顺序。数值越小，排列越靠前,默认为0|
| flex-grow | 定义项目的放大比例，默认为0，即如果存在剩余空间，也不放大。**如果所有项目的flex-grow属性都为1**，则它们将等分剩余空间（如果有的话）。**如果一个项目的flex-grow属性为2**，其他项目都为1，则前者占据的剩余空间将比其他项多一倍。|
| flex-shrink | 定义了项目的缩小比例，默认为1，即如果空间不足，该项目将缩小。**如果所有项目的flex-shrink属性都为1**，当空间不足时，都将等比例缩小。**如果一个项目的flex-shrink属性为0**，其他项目都为1，则空间不足时，前者不缩小。|
| flex-basis | 定义了在分配多余空间之前，项目占据的主轴空间（main size）。浏览器根据这个属性，计算主轴是否有多余空间。它的默认值为auto，即项目的本来大小。它可以设为跟width或height属性一样的值（比如350px），则项目将占据固定空间。|
|flex| flex属性是flex-grow, flex-shrink 和 flex-basis的简写, 该属性有两个快捷值：`auto` ~~(1 1 auto)~~ 和 `none` ~~(0 0 auto)~~ |
|**align-self** <br><br> auto <br><br> flex-start <br><br> flex-end <br><br> center <br><br> baseline <br><br> stretch;|align-self属性允许单个项目有与其他项目不一样的对齐方式，可覆盖align-items属性。默认值为auto，表示继承父元素的align-items属性，如果没有父元素，则等同于stretch。![](http://www.ruanyifeng.com/blogimg/asset/2015/bg2015071016.png)|

## 优点
flex 布局方便一点 ,不用对每个 item 设置 `style.left` 和 `style.top`