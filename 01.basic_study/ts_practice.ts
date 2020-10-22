// Type 선언 (interface도 가능)
type Dimensions3 = {
    x: number;  		// 무조건 있어야 되는 항목
    y: number;
    z: number;
    comment?: string;	// ?는 해당 항목이 있어도 되고 없어도 된다는 뜻 (Optional)
};

// Type alias (Intersection types)
type Dimensions4 = Dimensions3 & {
    w: number;  // Dimension3 모든 항목에 추가로 w 항목이 존재
};

// 변수의 구조와 자료형을 명시할 수 있다.
const point1: Dimensions3 = {
    x: 1,
    y: 2,
    z: 3,
};

// 변수의 구조와 자료형을 명시할 수 있다.
const point2: Dimensions4 = {
    x: 1,
    y: 2,
    z: 3,
    w: 4,
};

// 함수의 매개변수와 반환값의 자료형을 명시할 수 있다.
function add(point1: Dimensions3, point2: Dimensions3): Dimensions3 {
    return {
        x: point1.x + point2.x,
        y: point1.y + point2.y,
        z: point1.z + point2.z,
    }
}

add(point1, point1)  // 가능
add(point1, point2)  // 가능 (Dimensions4가 Dimensions3를 포함하기 때문)