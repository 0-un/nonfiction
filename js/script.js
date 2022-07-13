$(function () {

    // 캐러셀 플러그인 실행
    $('.bxslider').bxSlider({
        auto: true,
        autoHover: true,
        controls: false,
    })

});


// 스크롤 탑 버튼 설정:페이드인,페이드아웃
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $('#gototop').fadeIn(); //display block을 시킴
    }
    else {
        $('#gototop').fadeOut();
    }
})

// 탑 스크롤 돌리기
var rotate = 0; //몇도로 돌아갈 것인가
var before_y = $(window).scrollTop;

$(window).scroll(function () {
    if (before_y > $(window).scrollTop()) {
        //before_y가 +인 경우에 2도씩 돌아간다
        // 이전값과 비교하여 범위 설정
        rotate += 2; // rotate = rotate+2 2도씩 돌아간다
        before_y = $(window).scrollTop();
    }
    else {
        rotate -= 2;  //rotate = rotate-2
        before_y = $(window).scrollTop();
    }

    $('#gototop').css({ //transform : rotate 조절
        transform: 'rotate(' + rotate + 'deg)',
        display: 'flex'
        //display block으로 되어있어서 flex가 안먹어서 위치가 이동됨 -> flex를 다시 넣어준다
    })
})


//모바일 슬라이드

// 전체 메뉴를 오른쪽으로 슬라이드하여서 보여준다.

function ShowMenu() {
    var left_x = -100; //현재 메뉴의 %위치 초기값
    var left_gap = 3; //한번 움직일때마다 몇 % 움직이는지?
    var move_menu = function () {
        $('#slide').css("left", left_x + "%"); //#slide left 위치 지정
        left_x = left_x + left_gap; // left_gap 만큼 움직임 지정, 점점 plus
        if (left_x > 0) { // 목표지점 :0 , 0보다 크면 기본 값 0으로 세팅하고 애니메이션 진행X
            $('#slide').css("left", "0");
        }
        else {
            setTimeout(move_menu, 10);
            //setTimeout : 0.01초 후 move_menu 함수(재귀함수) 실행
            // 멈추는 조건 : left_x>0
        }
    }
    move_menu(); //처음 호출
}

// 전체 메뉴를 왼쪽으로 슬라이드하여서 닫는다.
function HideMenu() {
    var left_x = 0;
    var left_gap = 3;
    var move_menu = function () {
        $('#slide').css("left", left_x + "%");
        left_x = left_x - left_gap;
        if (left_x < -100) {
            $('#slide').css("left", "-100%");
        }
        else {
            setTimeout(move_menu, 10);
        }
    }
    move_menu();
}

//서브메뉴 슬라이딩

$(function () {
    var toggle1 = $('#click_menu');
    var toggle2 = $('#click_menu2');
    var menu1 = $('.sub_menu1');
    var menu2 = $('.sub_menu2');

    //$(”이벤트 대상”).이벤트종류(function(){});
    $(toggle1).on('click', function (e) {
        //toggle을 클릭했을 때 이벤트 발생
        e.preventDefault();
        // 이벤트 버블링을 막기 위한 코드
        //이벤트 버블링 : 버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상
        menu1.slideToggle();
        // 효과 메서드, slideUp(), slideDown()  효과 동시 적용
    })
    $(toggle2).on('click', function (e) {
        //toggle을 클릭했을 때 이벤트 발생
        e.preventDefault();
        // 이벤트 버블링을 막기 위한 코드
        //이벤트 버블링 : 버튼을 감싸고 있는 wrapper에도 이벤트가 작동되는 현상
        menu2.slideToggle();
        // 효과 메서드, slideUp(), slideDown()  효과 동시 적용
    })
});




