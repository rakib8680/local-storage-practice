

const counter = () => {
    const numString = document.getElementById('number').innerText;
    const num = parseInt(numString);
    addNewNum(num)
};

const addNewNum = num => {
    let newNum = num + 1
    document.getElementById('number').innerText = newNum
    console.log(newNum)
}