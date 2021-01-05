function aquarium(_length, _width, _height, _percent){
    let length = Number(_length);
    let width = Number(_width);
    let height = Number(_height);
    let percent = Number(_percent);

    let volume = length * width * height;
    let volumeWater = volume * 0.001;
    percent = percent * 0.01;
    let result = volumeWater * (1-percent);

    console.log(result);

}

aquarium("85", "75", "47", "17");