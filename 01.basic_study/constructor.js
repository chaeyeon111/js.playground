//Object literal 방식 -> 오브젝트 정리하는 가장 심플한 방법
//key, value 값으로 이루어진

//속성은 dot notation으로 접근 가능

// 만약 이 함수를 하나 더 복사한다면...

// 만약 메소드에 버그가 있는 경우라면 여러 곳에서 각각의 객체 메소드를 수정 해야한다. 이 경우 두 메소드를 수정해야 하겠지..!
// 하지만 만약 객체가 10개 이상의 메소드가 있다면 버그가 발생한 경우 더욱 수정하기 힘들 것이다.
const circle = {
    //property: 값을 가지고 있어야 할 때
    radius :1,

    //property
    location :{
        x:1,
        y:1
    },

    //method
    draw: function (){ //method: 로직을 사용해야 할 때        console.log("draw");
    }
}

//Factories& Constructor


// Factory Function
//createCircle 함수를 만들고 객체를 return 해주었다. 인자로 radius를 받을 수 있음
function createCircle(radius){
    return{
        radius,
        draw : function(){
            console.log('draw')
        }
    };
}

const circle = createCircle(1);

//Constructor Function

//무조건 대문자로 시작

//property 지정하기 위해서 this operator 사

function Circle(radius){
    //이 코드를 실행시키고 있는 객체 가르키는 역할
    //메모리에 빈 객체를 가지고 있고 this를 해당 빈 객체를 가리키게 한 후
    // dot notation을 사용해서 객체에 여러 property들을 정한다.
    this.radius = radius;
    this.draw = function(){
        console.log('draw');
    }
    // return this; 자동으로 this 객체가 리턴 되기 떄문에 쓰지 않아도됨
}
// 객체 만들기
const another = new Circle(1);