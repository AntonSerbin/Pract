//задания на уровень
let taskName = "";
const pauseAfterTask = 30; //sec пауза после уровня на подумать

const tasks = [
 	task1 = {task:``,
			// secTask: 45,
			video:"./video/01",
			secAnswer:1,
			answer:""
		},
 	task2 = {task:``,
 			// secTask: 2,
			video:"./video/02",
			secAnswer:1,
			answer:""
}
,
 	task3 = {task:``,
			// secTask: 5,
			video:"./video/03",
			secAnswer:1,
			answer:""
}
]			


function durationVideo(link,idx) {
  var x = document.createElement("VIDEO");
    if (x.canPlayType("video/mp4")) {
      x.setAttribute("src",link+".mp4");
    } else {
      x.setAttribute("src",link+".avi");
    }
 x.onloadedmetadata = function() {
	tasks[idx]["duration"]=Math.round(x.duration);
 } ;
};

tasks.forEach((item,i)=>{durationVideo(item.video,i)});

