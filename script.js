function promo(x){
    if (typeof x!="number"||x==null||x>99999999)return
 let arr=[]
    while(x>0){
    let y=x%10
    x = Math.floor(x / 10);
    arr.unshift(y)
    arr.push(y)
    arr.pop(y)
    }
    if(oddCoupleSort(arr)){
        return 2000
    }
    else if(oddCouple(arr)){
        return 1000
    }
    else 
    {return evenOrOdd(arr) }
}

  
  


function evenOrOdd(arr){

    let arrEven=[]
    arr.forEach((elem)=>{
    if(elem%2==0&&elem!==0){
    arrEven.push(elem)
 }
})
let sumEven=0
if(arrEven.length>0){
sumEven=arrEven.reduce((prev,next)=>prev+next)
}
else{sumEven=0}
let arrOdd=[]
    arr.forEach((elem)=>{
    if(elem%2!=0&&elem!==0){
    arrOdd.push(elem)
 }
})
let sumOdd=0
if(arrOdd.length>0){
sumOdd=arrOdd.reduce((prev,next)=>prev+next)
}
else{sumOdd=0}

if(sumEven>sumOdd){
    return 100
}
else{
    return 0
}
}


function oddCouple(arr){
    let oddCoupleArr=[]
    for (let i=0;i<arr.length;i++){
        if(arr[i]%2!=0&&arr[i+1]%2!=0&&((arr[i+2]%2==0&&arr[i-1]%2==0)||(arr[i+2]%2==0&&arr[i]==arr[0])||(arr[i-1]%2==0&&arr[i]==arr[arr.length-2]))){
            oddCoupleArr.push(arr[i],arr[i+1])
            
            
        }
    }
    if(oddCoupleArr.length>=4){
        return oddCoupleArr
    }
        else {
            return 0
        }
}


function oddCoupleSort(arr){
    let oddCoupleArr=[]
    for (let i=0;i<arr.length;i++){
        if(arr[i]%2!=0&&arr[i+1]%2!=0&&((arr[i+2]%2==0&&arr[i-1]%2==0)||(arr[i+2]%2==0&&arr[i]==arr[0])||(arr[i-1]%2==0&&arr[i]==arr[arr.length-2]))){
            oddCoupleArr.push(arr[i],arr[i+1])
        }
    }
    let oddCoupleArrEven=[]
    let oddCoupleArrOdd=[] 
    if(oddCoupleArr.length>=4){
        for (let i=0;i<oddCoupleArr.length;i++){
        if(oddCoupleArr.indexOf(oddCoupleArr[i])%2==0||oddCoupleArr[i]==oddCoupleArr[0]){
            oddCoupleArrEven.push(oddCoupleArr[i]) 
        }     
    }
        for (let i=0;i<oddCoupleArr.length;i++){
        if(oddCoupleArr.indexOf(oddCoupleArr[i])%2!=0){
            oddCoupleArrOdd.push(oddCoupleArr[i]) 
        }     
    }
}       let sumArrOdd=0
        let sumArrEven=0
    for (let i=0;i<oddCoupleArrOdd.length;i++){        
        sumArrOdd+=oddCoupleArrOdd[i]
        sumArrEven+=oddCoupleArrEven[i]        
    }
    
    if(sumArrOdd<=sumArrEven){
        return 0
    }
    else{
        return oddCoupleArr
    }
}
    