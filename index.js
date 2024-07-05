let data=document.getElementById('data');



async function calldata(){
    //error handling

    try{
        const res=await fetch('https://hubmainback.hubit.com.np/courses',{
            method:'get'
        });
        console.log(res)
        const data1=await res.json()
        console.log(data1)
        data1.result.map((val,i)=>{
            let image=`https://hubmainback.hubit.com.np/public/${val.image}`
            data.innerHTML+=`<div class="max-w-sm rounded overflow-hidden shadow-lg bg-white p-4">
        <img class="w-full h-60 object-cover" src="${image}" alt="Product Image">
        <div class="px-6 py-4">
            <div class="font-bold text-xl mb-2">${val.title}</div>
            <p class="text-gray-700 text-base">
                ${val.description}
            </p>
            <div class="mt-4">
                <span class="text-2xl font-bold text-green-500">${val.duration}</span>
            </div>
        </div>
        
    </div>
            `
        })
    }
        catch (error){
            console.log(error);
        }
    }
    
calldata()