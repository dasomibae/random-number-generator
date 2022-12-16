window.addEventListener('load', randomeNum, false);

function randomeNum() {
    document.getElementById("generate").addEventListener("click", func, false);

    function func(event) {
        event.preventDefault();

        let min = parseInt(document.getElementById("min").value);
        let max = parseInt(document.getElementById("max").value);
        let quantity = parseInt(document.getElementById("quantity").value);
        let numArray = new Array;
        let randomNum;
        let overlap;

        if (min > max) {
            alert("The min number is greater than max number \rPlease enter correct number");
            let tempNum = min;
            min = max;
            max = tempNum;
        }

        let rangeNum = max + 1 - min;

        if (rangeNum < quantity) {
            alert("The number entered is greater than the max number \renter correct number.");
            quantity = rangeNum;
        }

        else if (quantity <= 0) {
            alert("Enter a number greater than or equal to 1");
        }

        while (quantity > 0) {
            randomNum = Math.floor(Math.random(1) * (max + 1 - min)) + min;

            overlap = false;
            for (let a in numArray) {
                if (numArray[a] == randomNum) {
                    overlap = true;
                    break;
                }
            }
            if (!overlap) {
                numArray.push(randomNum);
                quantity--;
            }
        }

        numArray.sort(function (left, right) {
            return left - right;
        });

        document.getElementById("result").innerHTML = numArray.join(", ")
    }
}
