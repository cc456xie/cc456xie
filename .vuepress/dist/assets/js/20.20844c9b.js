(window.webpackJsonp=window.webpackJsonp||[]).push([[20],{364:function(t,r,a){"use strict";a.r(r);var n=a(42),e=Object(n.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"手撕排序算法-上"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#手撕排序算法-上"}},[t._v("#")]),t._v(" 手撕排序算法(上)")]),t._v(" "),a("h2",{attrs:{id:"冒泡排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#冒泡排序"}},[t._v("#")]),t._v(" 冒泡排序")]),t._v(" "),a("h3",{attrs:{id:"介绍"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[a("strong",[t._v("冒泡排序")]),t._v("是最经典的排序算法之一，由于排序过程中元素会慢慢上浮，像冒泡一样，由此得名冒泡排序。")]),t._v(" "),a("h3",{attrs:{id:"原理"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("1,升序排序情况下，由数组头部开始，相邻两个元素依次比较，若前一个元素大于后一个，则两元素交换位置")]),t._v(" "),a("p",[t._v("2,再数组中所有元素都进行一次比较后，则完成了一次循环，此时最大的元素已经冒泡到了数组末端")]),t._v(" "),a("p",[t._v("3,再重复对除被冒泡到末端以外的元素进行1,2的操作，直到所有元素都完成了冒泡")]),t._v(" "),a("p",[t._v("4,排序结束")]),t._v(" "),a("h3",{attrs:{id:"特点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("p",[t._v("冒泡排序是一种"),a("strong",[t._v("原地算法")]),t._v("，即不需要开辟额外空间，在数组内部即可完成排序。")]),t._v(" "),a("p",[t._v("冒泡排序是"),a("strong",[t._v("稳定")]),t._v("的排序方法")]),t._v(" "),a("p",[t._v("冒泡排序的时间复杂度为"),a("strong",[t._v("O(n^2)")])]),t._v(" "),a("h3",{attrs:{id:"实现"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\n\t\t\tvar bublesort = function(arr){\n\t\t\t\tfor(let i=arr.length - 1;i >= 0;i--)\n\t\t\t\t{\n\t\t\t\t\tfor(let j=0;j < i;j++)\n\t\t\t\t\t{\n\t\t\t\t\t\tif(arr[j] > arr[j+1])\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tlet tmp = arr[j]\n\t\t\t\t\t\t\tarr[j] = arr[j+1]\n\t\t\t\t\t\t\tarr[j+1] = tmp\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn arr\n\t\t\t}\n\n\n")])])]),a("h3",{attrs:{id:"优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),a("p",[t._v("1, 若该数组本来有序，则不需要进入循环，此时时间复杂度应为 "),a("strong",[t._v("O(1)")]),t._v("。但是貌似js的循环机制的问题，我测最小的时间复杂度也有O(n)，目前还不知道原因，等有机会再好好研究研究。")]),t._v(" "),a("p",[t._v("可以初始化一个bool值，当一次循环结束bool依然为true时，即可判断数组已经有序，直接返回")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t\t\tvar bublesort = function(arr){\n\t\t\t\tfor(let i=arr.length - 1;i >= 0;i--)\n\t\t\t\t{\n\t\t\t\t\tlet isSorted = true\n\t\t\t\t\tfor(let j=0;j < i;j++)\n\t\t\t\t\t{\n\t\t\t\t\t\tif(arr[j] > arr[j+1])\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tlet tmp = arr[j]\n\t\t\t\t\t\t\tarr[j] = arr[j+1]\n\t\t\t\t\t\t\tarr[j+1] = tmp\n\t\t\t\t\t\t\tisSorted = false\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif(isSorted)\n\t\t\t\t\t{\n\t\t\t\t\t\treturn arr\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n")])])]),a("p",[t._v("2,若数组后半部分本来就有序，则可以通过记录最后一次交换位置的索引值来优化循环的长度")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t\t\tvar bublesort = function(arr){\n\t\t\t\tfor(let i=arr.length - 1;i >= 0;i--)\n\t\t\t\t{\n\t                let lastIndex = -1\n\t\t\t\t\tfor(let j=0;j < i;j++)\n\t\t\t\t\t{\n\t\t\t\t\t\tif(arr[j] > arr[j+1])\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tlastIndex = j+1\n\t\t\t\t\t\t\tlet tmp = arr[j]\n\t\t\t\t\t\t\tarr[j] = arr[j+1]\n\t\t\t\t\t\t\tarr[j+1] = tmp\t\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tif(lastIndex<0)\n\t\t\t\t\treturn arr\n\t\t\t\t\ti = lastIndex\n\t\t\t\t}\n\t\t\t\treturn arr\n\t\t\t}\n\n")])])]),a("h2",{attrs:{id:"选择排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择排序"}},[t._v("#")]),t._v(" 选择排序")]),t._v(" "),a("h3",{attrs:{id:"介绍-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍-2"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[a("strong",[t._v("选择排序")]),t._v("是一种简单直观的排序算法,")]),t._v(" "),a("h3",{attrs:{id:"特点-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点-2"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("p",[t._v("1,选择排序是一种"),a("strong",[t._v("不稳定")]),t._v("的排序算法")]),t._v(" "),a("p",[t._v("2，选择排序的时间复杂度为O(n^2)")]),t._v(" "),a("h3",{attrs:{id:"原理-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理-2"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("1，对待排序数列进行一次循环，找出其中最大的元素")]),t._v(" "),a("p",[t._v("2，将最大元素与末尾的元素进行交换")]),t._v(" "),a("p",[t._v("3，对除开末尾的剩余元素再次进行1，2操作")]),t._v(" "),a("p",[t._v("4，重复以上操作，直到所有元素都有序")]),t._v(" "),a("h3",{attrs:{id:"实现-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-2"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t\t\tvar selectionSort = function(arr){\n\t\t\t\tfor(let i=arr.length - 1;i >= 0;i--)\n\t\t\t\t{\n\t\t\t        let maxIndex = 0\n\t\t\t\t\tfor(let j=1;j <= i;j++)\n\t\t\t\t\t{\n\t\t\t\t\t\tif(arr[j] >= arr[maxIndex])\n\t\t\t\t\t\t{\n\t\t\t\t\t\t\tmaxIndex = j\n\t\t\t\t\t\t\t\n\t\t\t\t\t\t}\n\t\t\t\t\t}\n\t\t\t\t\tlet tmp = arr[i]\n\t\t\t\t\tarr[i] = arr[maxIndex]\n\t\t\t\t\tarr[maxIndex] = tmp\t\n\t\t\t\t}\n\t\t\t\treturn arr\n\t\t\t}\n\t\t\t\n")])])]),a("h2",{attrs:{id:"堆排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#堆排序"}},[t._v("#")]),t._v(" 堆排序")]),t._v(" "),a("h3",{attrs:{id:"介绍-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍-3"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[a("strong",[t._v("堆排序")]),t._v("可以看作是一种特殊的"),a("strong",[t._v("选择排序")]),t._v("。借助于堆这个数据结构的特性，对于大顶堆，堆顶总是最大的元素，堆底总是最小的元素。只需要将堆顶的根节点和末尾元素进行交换，再将剩下的元素重新构建一个堆，重复交换操作，就可完成排序。")]),t._v(" "),a("h3",{attrs:{id:"特点-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特点-3"}},[t._v("#")]),t._v(" 特点")]),t._v(" "),a("p",[t._v("堆排序的基本思想是：将待排序序列构造成一个大顶堆，此时，整个序列的最大值就是堆顶的根节点。将其与末尾元素进行交换，此时末尾就为最大值。然后将剩余n-1个元素重新构造成一个堆，这样会得到n个元素的次小值。如此反复执行，便能得到一个有序序列了")]),t._v(" "),a("p",[t._v("堆是一种"),a("strong",[t._v("完全二叉树")]),t._v("，大顶堆：每个结点的值都大于或等于其左右孩子结点的值。小顶堆：每个结点的值都小于或等于其左右孩子结点的值")]),t._v(" "),a("h3",{attrs:{id:"步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#步骤"}},[t._v("#")]),t._v(" 步骤")]),t._v(" "),a("p",[t._v("1，将一个无序数组构建成一个大顶堆")]),t._v(" "),a("p",[t._v("2，将堆顶元素与末尾元素交换，使末尾元素最大")]),t._v(" "),a("p",[t._v("3，继续调整堆，让剩下元素满足堆的定义")]),t._v(" "),a("p",[t._v("4，将新的堆的头尾元素交换，此时得到第二大元素")]),t._v(" "),a("p",[t._v("5，以此类推，直到整个序列有序")]),t._v(" "),a("h3",{attrs:{id:"实现-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-3"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t\t\t// 建堆函数\n\t\t\tvar heapify =(arr,root,n) => {\t\t\t\t\t\t\t\t\t\t\t\t\n\t\t\t\tlet left = root*2+1,right = root*2+2;\n\t\t\t\tlet max = root\t\t\t\t\n\t\t\t\tif(root >= n)\n\t\t\t\treturn\n            \n\t\t\tif(left < n && arr[left] > arr[max])\n\t\t\t{\n\t\t\t\tmax = left\n\t\t\t}\n\t\t\tif(right < n && arr[right] > arr[max])\n\t\t\t{\n\t\t\t    max = right\n\t       }\n\t\t   \n\t\t   if(max !== root)\n\t\t   {\n\t\t\t   swap(arr,root,max)\n\t\t\t   // 若交换元素，则递归判断该元素的子节点\n\t\t\t   heapify(arr,max,n)\n\t\t   }             \n\t\t\t}\n\t\t\t// 交换元素\n\t\t\tvar swap = (arr,root,max) => {\n\t\t\t\tlet tmp = arr[root]\n\t\t\t\tarr[root] = arr[max]\n\t\t\t\tarr[max] = tmp\n\t\t\t}\n\t\t\t// 初始化堆\n\t\t\tvar buildheap = (arr,length) => {\n\t\t\t\tfor(let i=Math.floor(length/2);i>=0;i--)\n\t\t\t\t{\n\t\t\t\t\theapify(arr,i,length)\n\t\t\t\t}\n\t\t\t}\n\t\t\t// 堆排序\n\t\t\tvar heapsort = (arr,length) => {\n\t\t\t\tbuildheap(arr,length)\n\t\t\t\tfor(let i = length-1;i>0;i--)\n\t\t\t\t{\n\t\t\t\t\tswap(arr,i,0)\n\t\t\t\t\t heapify(arr,0,i)\n\t\t\t\t}\n\t\t\t}\n\t\t\theapsort(arr,arr.length)\n")])])]),a("h2",{attrs:{id:"插入排序"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#插入排序"}},[t._v("#")]),t._v(" 插入排序")]),t._v(" "),a("h3",{attrs:{id:"介绍-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#介绍-4"}},[t._v("#")]),t._v(" 介绍")]),t._v(" "),a("p",[t._v("插入排序是一种"),a("strong",[t._v("稳定")]),t._v("排序算法，类似于打扑克牌中摸牌组牌的原理。从数组中一次取出一个数和前面的比较，将其插入合适的位置。")]),t._v(" "),a("h3",{attrs:{id:"原理-3"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原理-3"}},[t._v("#")]),t._v(" 原理")]),t._v(" "),a("p",[t._v("1，从数组的第二个数开始，与前面的数进行比较，若小于前面的数，则两数交换位置")]),t._v(" "),a("p",[t._v("2，对交换位置后较小的数，再与前一位进行比较，若小于，则交换位置")]),t._v(" "),a("p",[t._v("3，重复以上步骤，直到遇到大于或等于前一位的数，则停止")]),t._v(" "),a("p",[t._v("4，再取出第三个数（即第一步的下一个数），重复以上步骤，直到数列有序")]),t._v(" "),a("h3",{attrs:{id:"实现-4"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实现-4"}},[t._v("#")]),t._v(" 实现")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t\t\tvar insertSort = (arr) => {\n\t\t\t\tfor(let begin=1;begin<arr.length;begin++)\n\t\t\t\t{\n\t\t\t\t\tlet count = begin\n\t\t\t\t\twhile( count > 0 && arr[count] < arr[count-1])\n\t\t\t\t\t{\n\t\t\t\t\t\tlet tmp = arr[count]\n\t\t\t\t\t\tarr[count] = arr[count-1]\n\t\t\t\t\t\tarr[count-1] = tmp\n\t\t\t\t\t\tcount--\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t\treturn arr\n\t\t\t}\n")])])]),a("h3",{attrs:{id:"优化-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#优化-2"}},[t._v("#")]),t._v(" 优化")]),t._v(" "),a("p",[t._v("对于每一次比对，若是一个"),a("code",[t._v("逆序对")]),t._v("，都需要完成一次交换操作，若该数列逆序对很多，则交换操作也很多，加大了性能损耗。")]),t._v(" "),a("p",[t._v("可以通过"),a("strong",[t._v("挪动")]),t._v("的方式优化，即每次比对不需要交换，直接将元素后移，将需要插入的元素保存起来，最后直接插入最后一个比较的位置上即可。")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("\t\t\tvar insertSort = (arr) => {\n\t\t\t\tfor(let begin=1;begin<arr.length;begin++)\n\t\t\t\t{\n\t\t\t\t\tlet count = begin\n\t\t\t\t\tlet tmp = arr[begin]\n\t\t\t\t\twhile( count > 0 && tmp < arr[count-1])\n\t\t\t\t\t{\n\t\t\t\t\t\tarr[count] = arr[count-1]\n\t\t\t\t\t\tcount--\n\t\t\t\t\t}\n\t\t\t\t\tarr[count] = tmp\n\t\t\t\t}\n\t\t\t\treturn arr\n\t\t\t}\n")])])]),a("blockquote",[a("p",[t._v("虽然都要经过两次循环，但是用赋值操作代替了交换操作，会更加优化一些。")])])])}),[],!1,null,null,null);r.default=e.exports}}]);