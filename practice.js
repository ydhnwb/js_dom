const input = ["0001", "Roman Alamsyah ", "Bandar Lampung", "21/05/1989", "Membaca"];

function spliceData(data) {
    data.splice(1, 1, "Roman Alamsyah Elsharawy")
    data.splice(2, 1, "Provinsi Bandar Lampung")
    data.splice(4, 1, "Pria", "SMA Metro")
    return data
}

function numberToMonthName(data) {
    let month = data[3].split("/")[1]
    switch (month) {
        case '01':
            month = "January";
            break;
        case '05':
            month = "May";
            break;
        default:
            month = "Belum hehe";
    }
    return month
}

function minTwoDigits(n) {
    return (n < 10 ? '0' : '') + n;
}

function splitAMonth(data) {
    let months = data[3].split("/")
    let newarray = months.map(function(el) {
        return parseInt(el)
    })
    newarray = newarray.sort((a,b)=>b-a)
    newarray = newarray.map(minTwoDigits)
    str = newarray.join([separator = '-'])
    console.log(newarray)
    return str
}

function maximumLengthOfName(data){
    data[1] = "Roman Alamsyah Elsharawy" 
    return data[1].slice(0,15)
}

// function joinArr(data){
//     date = data[3].split("/")
//     str = date.join([separator = '-'])
//     return 
// }

console.log(spliceData([...input]))
console.log(numberToMonthName([...input]))
console.log(splitAMonth([...input]))
console.log(maximumLengthOfName([...input]))