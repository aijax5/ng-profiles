
profiles.service('editProfile', function() {
    this.profilesList=JSON.parse(localStorage.getItem("users") || "[]");
    this.index=null;
    this.getter = function () {
        if(this.index===null)
            alert("INDEX NULL");
        return this.profilesList[this.index];
    };
    this.setter=function(index){
        this.index=index;
    };
    this.writeBack= function(){
        localStorage.setItem("users", JSON.stringify(this.profilesList));    }
  });