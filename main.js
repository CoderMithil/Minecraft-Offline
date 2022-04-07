function addUser()
{
    var numbers1 = 123456;
    var numbers2 = 102030;
    var numbers3 = 654321;
    var numbers4 = 302010;
    var numbers5 = 605040;
   
    if(Password.value.match(numbers1))
    {
    window.location = "minecraft.html";
    alert("YOU HAVE BEEN SUCCESFULY LOGGED IN MITHIL! Press OK to be redirected to the Minecraft Game.")
    }
    if(Password.value.match(numbers2))
    {
    window.location = "minecraft.html";
    alert("YOU HAVE BEEN SUCCESFULY LOGGED IN DARSH! Press OK to be redirected to the Minecraft Game.")
    }
    if(Password.value.match(numbers3))
    {
    window.location = "minecraft.html";
    alert("YOU HAVE BEEN SUCCESFULY LOGGED IN VINAY! Press OK to be redirected to the Minecraft Game.")
    }
    if(Password.value.match(numbers4))
    {
    window.location = "minecraft.html";
    alert("YOU HAVE BEEN SUCCESFULY LOGGED IN DHARA! Press OK to be redirected to the Minecraft Game.")
    }
    if(Password.value.match(numbers5))
    {
    window.location = "minecraft.html";
    alert("YOU HAVE BEEN SUCCESFULY LOGGED IN USER! Press OK to be redirected to the Minecraft Game.")
    }
    
}

function forgot()
{
    window.location = "forgot.html"
    alert("Press OK to be redirected to the Forgot Password page.")
}

function signUp()
{
    window.location = "signup.html"
}

function create()
{
        window.location = "create.html";
        
      };

function back()
{
    window.location = "index.html"
}