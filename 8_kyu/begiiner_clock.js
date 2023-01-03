function past_1(h, m, s){
    let minute = 60000;
    let hour = 3600000;
    let second = 1000;

    return (h * hour) + (m * minute) + (s * second); 
}

past = (h, m, s) => (h * 3600000) + (m * 60000) + (s * 1000);

console.log(past(0, 1, 1));