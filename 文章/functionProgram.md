# 函数式编程从入门到出家

## 什么是函数式编程

`函数式编程`(Function Program)是一种编程范式或者编程风格，与其类似的还有`面向对象编程`。

* `面向对象`的含义是：把现实世界的事物抽象成面向对象世界的类和对象。通过`封装`,`继承`和`多态`来掩饰事物与事物之间的联系。  
* 而`函数式编程`则是把现实世界的`事物`与`事物`之间的联系抽象成到程序世界
   * 程序的本质：根据输入通过某种运算得到相应的输出，程序开发过程中会涉及很多有输入输出的函数
   * **函数式编程中的函数不是指程序中的函数（方法）**,而是数学中的映射关系，如：y = sin(x)，x和y的关系就是函数
   * `纯函数`：**相同的输入总会得到相同的输出**
 
```
// 非函数式
let a = 1
let b = 2
let c = a + b
console.log(c)


//函数式
function add(a,b){
return a + b
}
let c = add(1,2)
console.log(c)
```
## 重要概念

### **函数是一等公民**

* 函数可以存在`变量`中
* 函数可以作为参数
* 函数可以作为返回值

* 将函数赋给变量：

```

let func = function(){
    console.log('first-class function')
}
func()

```

### 高阶函数

#### 什么是高阶函数


**高阶函数**:

* 可以把函数作为参数传给另一个函数
* 可以把函数作为另一个函数的返回结果

函数作为参数：
```
function forEach(array,fn){
    for(let i=0;i<array.length;i++){
        fn(array[i])
    }
}

function filter(array,fn){
    let res = []
    for(let i=0;i<array.length;i++){
       if(fn(array[i]))
       {
           res.push(array[i])
       }
    }
    return res
}
```
上面代码中将*fn*函数作为参数传给了*forEach*和*filter*函数，所以forEach函数是一个高阶函数。

函数作为返回值：
```
function makeFunction(){
    let msg = 'hello world'
    return function(){
        console.log(msg)
    }
}

//once函数,fn函数只会执行一次
function once(fn){
    let done = false
    return function (){
        if(!done)
        {
            done = true
            fn.apply(this,arguments)
        }
    }
}
//上面的once函数运用了`闭包`，将`done`存储在闭包里，所以无论调用了多少次once，fn只会执行一次
```
**闭包**

* `闭包`：函数和其周围的状态捆绑在一起形成闭包。
* 可以在另一个作用域中调用一个函数的内部函数并且访问这个函数的内部成员

```
function out(){
    let msg = 'hello world'
    return function(){
        console.log(msg)
    }
}

const fn = out()
fn()  //hello world
```
由于外层函数被外部引用，所以外层函数执行完后不会被销毁，其内部变量可以保存






