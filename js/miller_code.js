//NavBar側邊開合功能



//tab mother 按鈕開合功能
function openCitymother(TargetID, ImageID) {

    console.log('123456');
    var x = document.getElementById(TargetID).style.display;
    if (x == "none") {

        document.getElementById(TargetID).style.display = "block";
        document.getElementById(ImageID).className = "foldeda";
    } else {

        document.getElementById(TargetID).style.display = "None";
        document.getElementById(ImageID).className = "unfoldeda";
    }


}

function openCitymotherChild(TargetIDClassGroup, TargetID, TargetSpanID) {

    var i, tabcontent, imggp, IsSame;

    IsSame = false;
    tabcontent = document.getElementsByClassName(TargetIDClassGroup);
    for (i = 0; i < tabcontent.length; i++) {
        if (tabcontent[i].style.display == "block") {
            if (tabcontent[i].id == TargetID) {
                // console.log('IsSame');
                IsSame = true;
            }
        }
        tabcontent[i].style.display = "none";
    }
    // document.getElementById(TargetID).style.display = "block";

    imggp = document.getElementsByClassName("foldedb");
    for (i = 0; i < imggp.length; i++) {
        imggp[i].className = "unfoldedb"
    }
    if (IsSame == false) {
        //console.log('LALALALALA');
        document.getElementById(TargetID).style.display = "block";
        document.getElementById(TargetSpanID).className = "foldedb"

    }

}
// Get the element with id="defaultOpen" and click on it
//document.getElementById("defaultOpen").click(裡面沒東西會出錯所以關掉);
//end of tab mother

//on scroll 
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        document.getElementById("goTop").style.display = "block";
    } else {
        document.getElementById("goTop").style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}