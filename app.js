const getBox = document.querySelector(".box");


drag(getBox);

function drag(ele){

    let getCx,getCy,setCx,setCy;

    ele.onmousedown = mouseDown;

    function mouseDown(e){

        getCx = e.clientX;
        getCy = e.clientY;

        document.onmousemove = mouseMove;
        document.onmouseup = mouseUp;

        function mouseMove(e){

           setCx = getCx - e.clientX;
           setCy = getCy - e.clientY;


           getCx = e.clientX;
           getCy = e.clientY;

           const btnLeft = ele.offsetLeft;
           const btnTop = ele.offsetTop;

            ele.style.left = `${btnLeft-setCx}px`;
            ele.style.top = `${btnTop-setCy}px`;


        };

        function mouseUp(){
            document.onmousemove = null;
            document.onmouseup = null;
        };

    };

};