let darkMode = localStorage.getItem("darkMode");
if (darkMode === null){
    darkMode = "light";
}
const body = document.querySelector("body");
const metaTheme = document.querySelector("meta[name = 'theme-color']");

body.setAttribute("data-theme", darkMode);

if (darkMode == "dark") {
    metaTheme.setAttribute("content", "#1a1a1a");
} else {
    metaTheme.setAttribute("content", "#fff");
}

const post = document.querySelectorAll(".post");
post.forEach(element => {
    element.addEventListener("dblclick", () => {
        dblTapToLike(element);
    });
});

//Function to like a post on double tap
const dblTapToLike = (element) => {
    let heart = element.querySelector(".like-anim");
    heart.style.transform = "scale(0.85)";
    heart.style.display = "block";
    setTimeout(function () {
        // heart.style.transform = "scale(0)";
        heart.style.display = "none";
    }, 1000);

    let likeBtn = element.querySelector(".like-btn .fa");
    let counter = element.querySelector(".n-count");
    counterValue = parseInt(counter.innerHTML);

    if (likeBtn.classList.contains("fa-heart-o")) {
        likeBtn.classList.replace("fa-heart-o", "fa-heart");
        likeBtn.parentElement.classList.add("active");
        counter.innerHTML = counterValue + 1;
    }
}

const postLike = document.querySelectorAll(".post .like-btn .fa");
postLike.forEach(element => {
    element.addEventListener("click", () => {
        likePost(element);
    });
});

//Function to like a post by clicking the like button
function likePost(element){
    element.parentElement.classList.toggle("active");
    if (element.classList.contains("fa-heart")) {
        element.classList.replace("fa-heart", "fa-heart-o");
    } else
    if (element.classList.contains("fa-heart-o")) {
        element.classList.replace("fa-heart-o", "fa-heart");
    }
}

const shareBtn = document.querySelectorAll(".share-btn").forEach(element => {
    element.addEventListener("click", () => {            
        let dragMenu = document.querySelector(".drag-menu");
        dragMenu.classList.toggle("closed");
    });
});

const bookmarkBtn = document.querySelectorAll(".post .p-extopt-r");
bookmarkBtn.forEach(element => {

        element.addEventListener("click", () => {
        let bookmarkIcon = element.querySelector(".fa");
        let savedLater = document.querySelector(".saved-ltr");
        savedLater.style.display = "block";

        element.classList.add("bkmrks-anim");
        if (bookmarkIcon.classList.contains("fa-bookmark-o")) {
            bookmarkIcon.classList.replace("fa-bookmark-o", "fa-bookmark");
            savedLater.innerHTML = "Post saved to bookmarks";
        } else
            if (bookmarkIcon.classList.contains("fa-bookmark")) {
                bookmarkIcon.classList.replace("fa-bookmark", "fa-bookmark-o");
                savedLater.innerHTML = "Post removed from bookmarks";
            }
        setTimeout(function () {
            element.classList.remove("bkmrks-anim");
        }, 300);
        setTimeout(function () {
            savedLater.style.display = "none";
        }, 1000);

    });
});

const notificationBell = document.querySelector(".header .noti-bell");
notificationBell.addEventListener("click", () => {
    let notificationBlock = document.querySelector(".header .ntfnbl");
    let state = notificationBlock.style.display;

    if (state === "none"){
        notificationBlock.style.display = "block";
        notificationBell.classList.add("active");
    } else {
        notificationBell.classList.remove("active");
        notificationBlock.style.display = "none";
    }
});

//Following someone directly from notifications
const funBtn = document.querySelector(".header .actns.cnf");
funBtn.addEventListener("click", function () {
    funBtn.classList.remove("cnf");
    funBtn.innerHTML = "Following";
});

//Like the comment from notifications
const notiReplyLike = document.querySelectorAll(".ntnpsopt .fa");
notiReplyLike.forEach(element => {

    element.addEventListener("click", () => {
        if (element.classList.contains("fa-heart-o")){
            element.classList.replace("fa-heart-o", "fa-heart");
            element.parentElement.classList.add("nrc-fly-hrts");
            element.parentElement.classList.add("active");
            setTimeout(function () {
                element.parentElement.classList.remove("nrc-fly-hrts");
            }, 1500);
        } else
        if (element.classList.contains("fa-heart")){
            element.classList.replace("fa-heart", "fa-heart-o");
            element.parentElement.classList.remove("active");
        }
    });

});

//Epxand the caption
const captionExpand = document.querySelectorAll(".post #lm-pc");
captionExpand.forEach(element => {
    element.addEventListener("click", () => {
        let shownCaption = element.parentElement.querySelector(".capt-shwn");
        let fullCaption = element.parentElement.querySelector(".hMorCpt");
        element.style.display = "none";
        shownCaption.insertAdjacentHTML('afterend', fullCaption.innerHTML);
        // shownCaption.innerHTML += fullCaption.innerHTML;
        fullCaption.remove();
    });
});

/*-------MODALS POPUP */
const optionCircle = document.querySelectorAll(".post .post-ext-opt");
optionCircle.forEach(element => {
    element.addEventListener("click", () => {
        let container = document.querySelector(".container");
        let optionList = document.querySelector(".modals #modal-opt ul");
        let cancelOpt = document.querySelector(".modals #close-modal-opt");

        container.classList.add("modalActive-blurbg");
        element.classList.add("active");
        optionList.style.display = "block";
        
        cancelOpt.addEventListener("click", function () {
            container.classList.remove("modalActive-blurbg");
            element.classList.remove("active");
            optionList.style.display = "none";
        });
    });
});

/*------STORIES JS-------*/
const storyM = document.querySelectorAll(".story");
storyM.forEach(element => {
    element.addEventListener("click", () => {
    let storyListItem = document.querySelector(".stories-modal .str-wrapC li");
        storyListItem.style.display = "block";
        setTimeout(() => {
            storyListItem.style.display = "none";
        }, 3500);
    });
});

const closeStoryBtn = document.querySelector(".clsstrml");
closeStoryBtn.addEventListener("click", function () {
    let storyListItemCls = document.querySelector(".stories-modal .str-wrapC li");
    storyListItemCls.style.display = "none";
});

const loggedAccount = document.querySelector(".navbar .lgdinac .fa");
loggedAccount.addEventListener("click", function(){
    let loggedAccountBlock = document.querySelector(".navbar .lprcrw");
    let popup = document.querySelector(".navbar .lgdinac .lgext");

    if (popup.style.display === "block"){
        loggedAccount.style.transform = "rotate(0deg)";
        loggedAccountBlock.classList.remove("active");
        popup.style.display = "none";
    } else{
        loggedAccount.style.transform = "rotate(180deg)";        
        loggedAccountBlock.classList.add("active");
        popup.style.display = "block";
    }

});
// let goBack = document.querySelector(".hst-gb .fa-angle-left");
// goBack.addEventListener("click", function(e){
//     e.preventDefault();
//     window.history.go(-1);
// });

const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {

    let container = document.querySelector(".container");
    container.classList.add("modalActive-blurbg");

    let contentBox = document.querySelector(".add-content");
    contentBox.parentElement.style.display = "block";
    
    const closeAlertBtn = document.getElementById("close-alert");
    closeAlertBtn.addEventListener("click", () => {
        let alertBox = document.querySelector(".add-box");
        alertBox.style.display = "none";
        container.classList.remove("modalActive-blurbg");
    });
});

let closeMessagebtn = document.getElementById("close-msg");
closeMessagebtn.addEventListener("click", () => {
    let msgBox = document.querySelector(".alert-boxes .msg-box");
    msgBox.style.display = "none";
});

const storyOptionLabel = document.querySelector(".smsms .option-label");
storyOptionLabel.addEventListener("click", () => {
    let optionBox = storyOptionLabel.parentElement.querySelector(".option-box");
    let cancelBtn = optionBox.querySelector(".action");

    optionBox.style.display = "block";
    cancelBtn.addEventListener("click", () => {
        optionBox.style.display="none";
    });
});
