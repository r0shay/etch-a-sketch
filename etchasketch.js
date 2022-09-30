function foo()
{
    
    var div = document.createElement("div");
    div.id = "grid";
    document.body.append(div);
    var btn = document.createElement("button");
    btn.innerHTML = "Clear";
    document.body.append(btn);
    /*var rows = prompt("Enter no of rows and columns. Eg: 16 for 16*16 grid");
    var cols = rows;
    const grid = document.querySelector(".grid");*/
  
    /*
    var container = document.getElementById("grid");
    var cell = document.createElement("div");
    cell.innerHTML = "TEXT";
    document.body.append(cell);*/
    function createRows(rows,cols)
    {
            for(j = 0; j< (rows*cols);j++)
            {
                var div2 = document.createElement("div");
                div2.id = "squares"
                grid.append(div2);
                div2.addEventListener("mouseover", e => e.target.classList.add('my-color-class'))
            }    
    }
    function clear()
    {
        var grid = document.getElementById("grid");
        while (grid.firstChild) {
            grid.removeChild(grid.lastChild);
        }
        createRows(16, 16);
    }
    
    createRows(16,16);
    btn.addEventListener('click', clear)

}