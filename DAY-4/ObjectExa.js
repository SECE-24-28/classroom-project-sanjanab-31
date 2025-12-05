let student=[{sna:"Praveen", age:19, sma:90, fee:true},
            {sna:"Ajith", age:18, sma:98, fee:true},
            {sna:"Kumar", age:20, sma:85, fee:false},
]

let res= student.some((stu)=>
{
    return stu.fee == false
})
console.log(res)