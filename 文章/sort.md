# 手撕排序算法(上)

## 冒泡排序

### 介绍

**冒泡排序**是最经典的排序算法之一，由于排序过程中元素会慢慢上浮，像冒泡一样，由此得名冒泡排序。

### 原理

1,升序排序情况下，由数组头部开始，相邻两个元素依次比较，若前一个元素大于后一个，则两元素交换位置

2,再数组中所有元素都进行一次比较后，则完成了一次循环，此时最大的元素已经冒泡到了数组末端

3,再重复对除被冒泡到末端以外的元素进行1,2的操作，直到所有元素都完成了冒泡

4,排序结束

### 特点

冒泡排序是一种**原地算法**，即不需要开辟额外空间，在数组内部即可完成排序。

冒泡排序是**稳定**的排序方法

冒泡排序的时间复杂度为**O(n^2)**


### 实现

```

			var bublesort = function(arr){
				for(let i=arr.length - 1;i >= 0;i--)
				{
					for(let j=0;j < i;j++)
					{
						if(arr[j] > arr[j+1])
						{
							let tmp = arr[j]
							arr[j] = arr[j+1]
							arr[j+1] = tmp
						}
					}
				}
				return arr
			}


```

### 优化

1, 若该数组本来有序，则不需要进入循环，此时时间复杂度应为 **O(1)**。但是貌似js的循环机制的问题，我测最小的时间复杂度也有O(n)，目前还不知道原因，等有机会再好好研究研究。

可以初始化一个bool值，当一次循环结束bool依然为true时，即可判断数组已经有序，直接返回

```
			var bublesort = function(arr){
				for(let i=arr.length - 1;i >= 0;i--)
				{
					let isSorted = true
					for(let j=0;j < i;j++)
					{
						if(arr[j] > arr[j+1])
						{
							let tmp = arr[j]
							arr[j] = arr[j+1]
							arr[j+1] = tmp
							isSorted = false
						}
					}
					if(isSorted)
					{
						return arr
					}
				}
			}
```

2,若数组后半部分本来就有序，则可以通过记录最后一次交换位置的索引值来优化循环的长度

```
			var bublesort = function(arr){
				for(let i=arr.length - 1;i >= 0;i--)
				{
	                let lastIndex = -1
					for(let j=0;j < i;j++)
					{
						if(arr[j] > arr[j+1])
						{
							lastIndex = j+1
							let tmp = arr[j]
							arr[j] = arr[j+1]
							arr[j+1] = tmp	
						}
					}
					if(lastIndex<0)
					return arr
					i = lastIndex
				}
				return arr
			}

```




## 选择排序

### 介绍

**选择排序**是一种简单直观的排序算法,

### 特点

1,选择排序是一种**不稳定**的排序算法

2，选择排序的时间复杂度为O(n^2)

### 原理

1，对待排序数列进行一次循环，找出其中最大的元素

2，将最大元素与末尾的元素进行交换

3，对除开末尾的剩余元素再次进行1，2操作

4，重复以上操作，直到所有元素都有序

### 实现

```
			var selectionSort = function(arr){
				for(let i=arr.length - 1;i >= 0;i--)
				{
			        let maxIndex = 0
					for(let j=1;j <= i;j++)
					{
						if(arr[j] >= arr[maxIndex])
						{
							maxIndex = j
							
						}
					}
					let tmp = arr[i]
					arr[i] = arr[maxIndex]
					arr[maxIndex] = tmp	
				}
				return arr
			}
			
```

## 堆排序

### 介绍

**堆排序**可以看作是一种特殊的**选择排序**。借助于堆这个数据结构的特性，对于大顶堆，堆顶总是最大的元素，堆底总是最小的元素。只需要将堆顶的根节点和末尾元素进行交换，再将剩下的元素重新构建一个堆，重复交换操作，就可完成排序。

### 特点

堆排序的基本思想是：将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。将其与末尾元素进行交换，此时末尾就为最大值。然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了

堆是一种**完全二叉树**，大顶堆：每个结点的值都大于或等于其左右孩子结点的值。小顶堆：每个结点的值都小于或等于其左右孩子结点的值

### 步骤

1，将一个无序数组构建成一个大顶堆

2，将堆顶元素与末尾元素交换，使末尾元素最大

3，继续调整堆，让剩下元素满足堆的定义

4，将新的堆的头尾元素交换，此时得到第二大元素

5，以此类推，直到整个序列有序

### 实现

```
			// 建堆函数
			var heapify =(arr,root,n) => {												
				let left = root*2+1,right = root*2+2;
				let max = root				
				if(root >= n)
				return
            
			if(left < n && arr[left] > arr[max])
			{
				max = left
			}
			if(right < n && arr[right] > arr[max])
			{
			    max = right
	       }
		   
		   if(max !== root)
		   {
			   swap(arr,root,max)
			   // 若交换元素，则递归判断该元素的子节点
			   heapify(arr,max,n)
		   }             
			}
			// 交换元素
			var swap = (arr,root,max) => {
				let tmp = arr[root]
				arr[root] = arr[max]
				arr[max] = tmp
			}
			// 初始化堆
			var buildheap = (arr,length) => {
				for(let i=Math.floor(length/2);i>=0;i--)
				{
					heapify(arr,i,length)
				}
			}
			// 堆排序
			var heapsort = (arr,length) => {
				buildheap(arr,length)
				for(let i = length-1;i>0;i--)
				{
					swap(arr,i,0)
					 heapify(arr,0,i)
				}
			}
			heapsort(arr,arr.length)
```

## 插入排序

### 介绍

插入排序是一种**稳定**排序算法，类似于打扑克牌中摸牌组牌的原理。从数组中一次取出一个数和前面的比较，将其插入合适的位置。

### 原理

1，从数组的第二个数开始，与前面的数进行比较，若小于前面的数，则两数交换位置

2，对交换位置后较小的数，再与前一位进行比较，若小于，则交换位置

3，重复以上步骤，直到遇到大于或等于前一位的数，则停止

4，再取出第三个数（即第一步的下一个数），重复以上步骤，直到数列有序

### 实现

```
			var insertSort = (arr) => {
				for(let begin=1;begin<arr.length;begin++)
				{
					let count = begin
					while( count > 0 && arr[count] < arr[count-1])
					{
						let tmp = arr[count]
						arr[count] = arr[count-1]
						arr[count-1] = tmp
						count--
					}
				}
				return arr
			}
```
### 优化

对于每一次比对，若是一个`逆序对`，都需要完成一次交换操作，若该数列逆序对很多，则交换操作也很多，加大了性能损耗。

可以通过**挪动**的方式优化，即每次比对不需要交换，直接将元素后移，将需要插入的元素保存起来，最后直接插入最后一个比较的位置上即可。

```
			var insertSort = (arr) => {
				for(let begin=1;begin<arr.length;begin++)
				{
					let count = begin
					let tmp = arr[begin]
					while( count > 0 && tmp < arr[count-1])
					{
						arr[count] = arr[count-1]
						count--
					}
					arr[count] = tmp
				}
				return arr
			}
```

> 虽然都要经过两次循环，但是用赋值操作代替了交换操作，会更加优化一些。



