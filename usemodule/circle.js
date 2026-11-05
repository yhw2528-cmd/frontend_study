const PI = 3.141592;
function getArea(radius) {
    return PI * radius * radius;
}

function getCircumference(radius) { // 원의 둘레
    return 2 * PI * radius;
}
export default {
    PI, 
    getArea, 
    getCircumference
};