function getNum() {
    const promise = new Promise((resolve) => {
        setTimeout(() => {
            let num = new Date().getTime().toString().slice(-5);
            resolve(String.fromCharCode(+num));
        }, 50);
    });
    return promise;
}

async function getRandomChinese(length) {
    res = '';
    for (let index = 0; index < length; index++) {
        res += await getNum();
    }
    return res;
}

getRandomChinese(5).then(i => console.log(i));
