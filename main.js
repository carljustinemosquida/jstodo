function post() {

    if(!document.getElementById('todo').value == '') {
        var item = document.getElementById('todo').value;

        if(localStorage.getItem('todos') == null){
            localStorage.setItem('todos',JSON.stringify({'items' : []}));
        } 
        
        var x = localStorage.getItem('todos');
        var jsonx = JSON.parse(x);

        jsonx.items[jsonx.items.length] = item;

        localStorage.setItem('todos',JSON.stringify(jsonx));

        document.getElementById('todo').value = '';

        document.getElementById('todos').innerHTML ='';
        fetch();
    } else{
        alert("Please write something first!")
    }
}

function fetch(){
    var x = JSON.parse(localStorage.getItem('todos'));

    for (let i=0; i<x.items.length; i++){
        document.getElementById('todos').innerHTML += '<div class="list">'
                                                    + '<input id="item_'+ i+'"class="inputs" type="text" maxlength="150" value="'
                                                    + x.items[i]                                            
                                                    + '"></input>'
                                                    + '&nbsp;&nbsp;&nbsp;'
                                                    + '<button class="blue"  onclick="updateItem('+ i +')">Update</button> &nbsp;&nbsp;'
                                                    + '<button class="red" onclick="deleteItem('+ i +')">Delete</button>'
                                                    + '</div><br>'; 
    }
}

function clearall(){
    alert("Delete All");
    localStorage.setItem('todos', JSON.stringify({'items' : []}));
    document.getElementById('todos').innerHTML ='';
     fetch();
}

function deleteItem(position){
    var x = JSON.parse(localStorage.getItem('todos'));

    x.items.splice(position, 1);

    localStorage.setItem('todos',JSON.stringify(x));
    
    document.getElementById('todos').innerHTML ='';
    fetch();
}

function updateItem(position){
    var x = JSON.parse(localStorage.getItem('todos'));

    var itemx = document.getElementById('item_' + position).value;

    x.items[position] = itemx;

    alert(itemx + '  updated successfully');

    localStorage.setItem('todos',JSON.stringify(x));

    document.getElementById('todos').innerHTML ='';
    fetch();
}