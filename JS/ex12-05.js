const year = prompt("태어난 년도를 입력하세요")

let age = 2025-year
console.log("당신의 나이는", age, "세입니다.")
age !=19 || console.log("이제 성인에 접어 드셨군요. 축하합니다.")
age !=19 ||document.write("<h1>당신의 나이는", age, "세입니다. 이제 성인에 접어 드셨군요. 축하합니다.</h1>") 
age >=19 || console.log("당신은 미성년자 입니다. 집으로 가세요")
age >=19 || document.write("<h1>당신의 나이는", age, "세입니다. 당신은 미성년자 입니다. 집으로 가세요</h1>")
age <=19 || console.log("당신은 성인입니다. 건강한 생활을 하세요")
age <=19 ||document.write("<h1>당신의 나이는", age, "세입니다. 당신은 성인입니다. 건강한 생활을 하세요</h1>")