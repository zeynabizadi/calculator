function data(val) {
    calc.display.value+=val;// به اضافه و مساوی که پشت هم عدد هارو جمع کنه و نشون بده
}
function ac(){
    calc.display.value=" "; //وقتی روی این تابع کلیک شد مقدار را روی خالی بزاره
}
function c(){
    calc.display.value=calc.display.value.slice(0,-1);
}
function equal(){
    calc.display.value=eval(calc.display.value);
}