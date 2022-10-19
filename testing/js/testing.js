gsap.registerPlugin(ScrollTrigger);

var $startFrame = { frame: 1 };
var $frameDuration = 200;
var $maxFrame = 53;
var $currFrame = $startFrame.frame;
var $boolDone = false;
var $cyclistImg = $("#cyclistImg");
var $directoryName = "images";
var	$imgPrevix = '/image_0';

let tl = gsap.timeline()

function updateHandler() {


	if ($currFrame <= 54) {
		$("#cyclistImg").attr('src', $directoryName + $imgPrevix + Math.round($currFrame) + '.jpg');

		$currFrame += 0.3;
	}
	else if ($currFrame >= 54) {
		$currFrame = 0;
	}
}

function playLoop() {
		$("#cyclistImg").attr('src', $directoryName + $imgPrevix + $currFrame + '.jpg');
		
		tl.to($startFrame, {
			frame: "53",
			roundProps: "frame",
			delay: $frameDuration,
			scrollTrigger: {
				trigger: '#cyclistImg',
				pin: true,
				markers: false,
				start: "top top",
				end: "+=100000",
				markers: true,
				onUpdate: updateHandler,
			}
		});
	}

