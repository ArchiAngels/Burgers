
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
