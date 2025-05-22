const a = [1,2]
const b = [3,4]
// const result = a + b // 안됨 스트링 형식으로 더해짐
const result =[...a, ...b] //
console.log(result, typeof(result),Array.isArray(result))

Number, String, Boolean 