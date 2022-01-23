var Body = {
    setBackgroundColor : function(color) {
        document.querySelector('body').style.backgroundColor = color;
    },

    setColor : function(color) {
        document.querySelector('body').style.color = color;
    }
}
// Object vs Class (??)

function nightDayHandler(self) {
    var target = document.querySelector('body');
    var all = document.querySelectorAll('a, li');
    if(self.value === 'night') {
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = 'day';
        for(var i =0; i<all.length; i++) {
            all[i].style.color = 'salmon';
        }
    } else {
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = 'night';
        for(var i =0; i<all.length; i++) {
            all[i].style.color = 'rgb(241, 88, 71)';
        }
    }
}