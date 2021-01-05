function radianToDegree(radianNum){

    let radian = Number(radianNum);
    let degree = radian * 180 / Math.PI;
    console.log(degree.toFixed(0));

}

radianToDegree("3.1416");