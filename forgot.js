function back(){
    window.location = "index.html";
}

function enter()
{
    var mithil = 111;
    var dad = 112;
    var darsh = 113;
    var mum = 114;
    if(username.value.match(mithil))
    {
    window.location = "mithil.html";
    alert("Finding your password... Press OK.")
    }
    if(username.value.match(dad))
    {
    window.location = "vinay.html";
    alert("Finding your password... Press OK.")
    }
    if(username.value.match(darsh))
    {
    window.location = "darsh.html";
    alert("Finding your password... Press OK.")
    }
    if(username.value.match(mum))
    {
    window.location = "dhara.html";
    alert("Finding your password... Press OK.")
    }
    
}

function find()
{
    window.location = "ID.html"
    
}