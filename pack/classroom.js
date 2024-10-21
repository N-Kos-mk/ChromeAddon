holdId = [
    123456789012,
    987654321098,
];

function deleteContent() {
    liContentAll = document.querySelectorAll("li[data-course-id]");
    liContentAll.forEach(li => {
        const courseId = Number(li.getAttribute('data-course-id'));
        if (!holdId.includes(courseId)){
            li.style.display = "none";
            console.log(`removed class display classId:${courseId}`);
        }
    });
    visibleLiElements = Array.from(liContentAll).filter(li => {
        return li.style.display !== "none";
    });
    if (visibleLiElements.length == holdId.length) {
        clearInterval(timer);
        console.log("拡張機能によって一部のclassroomが非表示になっている");
    }
}

function deleteContent2() {
    aContentAll = document.querySelectorAll("a[data-id]");
    aContentAll.forEach(a => {
        const courseId2 = Number(a.getAttribute('data-id'));
        if (!holdId2.includes(courseId2)){
            a.style.display = "none";
            console.log(`removed class sidebar classId:${courseId2}`);
        }
    });
    visibleAElements = Array.from(aContentAll).filter(a => {
        return a.style.display !== "none";
    });
    if (visibleLiElements.length == holdId.length) {
        clearInterval(timer2);
        console.log("拡張機能によって一部のclassroomが非表示になっている");
    }
}

var timer, timer2;
holdId2 = holdId;
window.onload = function () {
    timer = setInterval(deleteContent, 100);
    timer2 = setInterval(deleteContent2, 100);
}