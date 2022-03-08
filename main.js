function login(){
    window.location="let's_chat_room.html";
    user_name= document.getElementById("user_id_login").value;
    localStorage.setItem("user_id",user_name);
    
}