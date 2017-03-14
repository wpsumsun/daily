<script>
    var Car = (function(){
        var speed = 0;
        function setSpeed(s){
                speed = s
        }
        function getSpeed(){
            return speed
        }
        function accelerate(){
            speed+=10;
        }
        function decelerate(){
            speed-=10;
        }
        function getStatus(){
            if(speed>0){
                return "running"
            }else{
                return "stop"
            }
        }
        return {
                setSpeed: setSpeed,
        }
    })()
    Car.setSpeed(30);
    Car.getSpeed(); //30
    Car.accelerate();
    Car.getSpeed(); //40;
    Car.decelerate();
    Car.decelerate();
    Car.getSpeed(); //20
    Car.getStatus(); // 'running';
    Car.decelerate();
    Car.decelerate();
    Car.getStatus();  //'stop';
    //Car.speed;  //error
</script>