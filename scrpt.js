function getHistory() {
    return document.getElementById('history-val').innerText;
}

function printHistory(num) {
    return document.getElementById('history-val').innerText = num;
}

function getOutput() {
    return document.getElementById('output-val').innerText;
}



function printOutput(num) {
    return document.getElementById('output-val').innerText = getFormattedNum(num);
}



function getFormattedNum(num) {
    if (num == "-") {
        return "";
    }
    var n = Number(num);
    var value = n.toLocaleString("en");
    return value;
}

function getReverseFormat(num) {
    return Number(num.replace(/,/g, ''));
}
var oper = document.getElementsByClassName('operator');
for (i = 0; i < oper.length; i++) {
    oper[i].addEventListener('click', function () {
        if (this.id == "C") {
            printHistory("");
            printOutput("");
        }
        else if (this.id == "CE") {
            var output = getReverseFormat(getOutput()).toString();
            if (output) {
                output = output.substring(0, output.length - 1);
                printOutput(output);
            }
        }
        else {
            var output = getOutput();
            var history = getHistory();
            if (output != "") {
                output = getReverseFormat(output);
                history = history + output;
                if (this.id == "=") {
                    var result = eval(history);
                    printOutput(result);
                    printHistory("");
                }
                else {
                    history = history + this.id;
                    printHistory(history);
                    printOutput("");
                }
            }
        }
    })
}


var number = document.getElementsByClassName('number');

for (j = 0; j < number.length; j++) {

    number[j].addEventListener('click', function () {

        var output = getReverseFormat(getOutput());

        if (output != NaN) {

            output += this.id;

            printOutput(output);

        }

    })

}