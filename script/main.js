
// Developer Tools
let FatherNode = document.querySelector('.wrap_content');

let arrNode = [];
let count = 0;
let DelChildren = [];
let k;
let LiveArrNode = [];

// Баг или фича
// Что он восстанавливает в том же порядке что и удаляет??

    // window.addEventListener('click', ()=>{
    //     if(LiveArrNode.length != 0 && DelChildren.length == 0 && k == 17){
    //         k = 37;
    //         console.log('Nothing to risen'+', Next Will be deleted'+', \'CTRL\' if Off');
    //     }
    //         else{
    //             if(k == 17 && DelChildren.length != 0 ){
    //                 console.log(DelChildren[count].className + ' Was risen ');
    //                 FatherNode.appendChild(DelChildren[count]);
    //                 LiveArrNode.push(DelChildren[count]);
    //                 DelChildren.shift();
    //                 console.log(DelChildren);
    //             }
    //             else{
    //                 if(FatherNode.children.length == 0){
    //                     console.log('Nothing to delete'+', press \'CTRL\' to risen');
    //                     console.log(DelChildren);
    //                 }
    //                 else{
    //                     if(arrNode.include != FatherNode.children[count]){
    //                         console.log(FatherNode.children[count].className + ' Was removed..');
    //                         DelChildren.push(FatherNode.children[count]);
    //                         FatherNode.children[count].remove();
                            
    //                     }
    //                     else{
    //                         console.log(FatherNode.children[count].className + ' Was saved');
    //                     }
    //                 }
    //             }
    //         }
            
    // })
window.addEventListener('keydown', (event)=>{
    k = event.keyCode;
    console.log(k,'\'CTRL\' is On');
})



let phoneTape = document.querySelector('.wrap_max_content');
let point0,point1,key1,point3,tmp =0,tmp1 =0;
phoneTape.addEventListener('mousemove', ()=>{
    point1 = Number(event.clientX) -575;
    if(key1 == 1){
        if(point0 > point1){
            console.log('Etot green idet v pravo -->');
            point3 = tmp + (point0 -point1);
            phoneTape.scrollLeft = point3;
            console.log(phoneTape.scrollLeft,tmp);
            
        }
        if(point1 > point0){
            console.log('A seichas dolzhen v levo <--');
            point3 = point0 -point1;
            phoneTape.scrollLeft = point3 +tmp;
            // point0 = point1;
        }
    }
})
phoneTape.addEventListener('mousedown', () =>{
    point0 = Number(event.clientX) -575;
    key1 =1;
});
phoneTape.addEventListener('mouseup', () =>{
    // point1 = Number(event.clientX);
    // console.log('mouseuped');
    tmp = phoneTape.scrollLeft;
    key1 =0;
    
});
