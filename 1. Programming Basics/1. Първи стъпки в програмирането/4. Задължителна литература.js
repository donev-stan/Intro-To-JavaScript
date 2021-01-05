function readingTime(numPages, hourPages, days){

    let pagesCount = Number(numPages);
    let pagesHour = Number(hourPages);
    let daysCount = Number(days);

    let redingTimeTotal = pagesCount / pagesHour; // общо вр за четене на книга
    let answer = redingTimeTotal / daysCount;

    console.log(answer);

}
readingTime("212", "20", "2");