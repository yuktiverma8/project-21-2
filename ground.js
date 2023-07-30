class Ground {
    constructor(x,y,w,h){
        var options ={
            isStatic : true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)
        World.add(world,this.body)
    
        display()
    }
    
}