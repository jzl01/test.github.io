
var pic = document.querySelector('.pic');
var lis = document.querySelector('.lis');
var leftarrowhead = document.querySelector('.left');
var rightarrowhead = document.querySelector('.right');
var box = document.querySelector('.box');
 
var index = 0;
 
 
//形成小圆圈li
for (var i = 0; i < pic.children.length; i++) {
    var li = document.createElement('li');
    lis.appendChild(li);
 
    //顺便设置li的索引
    li.setAttribute('index', i);
}
lis.children[0].className = 'selected';
 
 
 
 
var pictureWidth = box.offsetWidth;   //获取图片宽度
//设置li的点击效果
for (var j = 0; j < lis.children.length; j++) {
    lis.children[j].onclick = function () {
        for (var i = 0; i < lis.children.length; i++) {
            lis.children[i].className = '';
        }
        index = this.getAttribute('index'); 
        this.className = 'selected';
        animate(pic, -index * pictureWidth);
    }
}
 
 
 
var flag = true;
 
//克隆第一张图片放最后
var first = pic.children[0].cloneNode(true);
pic.appendChild(first);
 
 
 
//设置箭头的移动
//左箭头
leftarrowhead.addEventListener('click', function () {
    if (flag) {
        flag = false;
 
        //当移动到最左边时，立即跳到最后一张图片
        if (index == 0) {
            pic.style.left = -lis.children.length * pictureWidth + 'px';
            index = 5;
        }
        index--;
        //节流阀，当动画运行完毕，再释放flag，从而可放开下一次点击箭头效果
        animate(pic, -index * pictureWidth, function () {
            flag = true;
        });
 
        for (var i = 0; i < lis.children.length; i++) {
            lis.children[i].className = '';
        }
        lis.children[index].className = 'selected';
    }
})
 
 
//右箭头
rightarrowhead.addEventListener('click', function () {
    if (flag) {
        flag = false;
 
        if (index == lis.children.length) {
            pic.style.left = 0;
            index = 0;
        }
        index++;
        animate(pic, -index * pictureWidth, function () {
            flag = true;
        });
 
        for (var i = 0; i < lis.children.length; i++) {
            lis.children[i].className = '';
        }
        if (index == lis.children.length) {
            lis.children[0].className = 'selected';
        }
        else {
            lis.children[index].className = 'selected';
        }
    }
 
})
 
 
 
 
//设置自动轮播（相当于点右箭头），时间间隔2秒
var timer = setInterval(function () {
    rightarrowhead.click();
}, 2000);
 
 
 
 
var left = document.querySelector('.left');
var right = document.querySelector('.right');
 
//设置箭头是否显示
box.addEventListener('mouseenter', function () {
    left.style.display = 'block';
    right.style.display = 'block';
    clearInterval(timer);
})
 
box.addEventListener('mouseleave', function () {
    left.style.display = 'none';
    right.style.display = 'none';
    timer = setInterval(function () {
        rightarrowhead.click();
    }, 2000);
})