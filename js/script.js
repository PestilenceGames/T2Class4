let displayLine = "";

function display(input, clear = false)
{
    if (!clear) 
        displayLine += input;
    else
        displayLine = input;

    console.log(displayLine);
    document.getElementById('result').value = displayLine;
}

function ClearScreen()
{
    displayLine = "";
    display("");
}

function Calculate()
{
    let sum = eval(displayLine);
    display(sum, true);
}