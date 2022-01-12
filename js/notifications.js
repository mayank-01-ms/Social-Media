//Function to send a flying heart animation in notification block
const replyLikeAnimation = (element) => {
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
}

//Follow Back someone directly from notifications
const followBack = (element) => {
    element.classList.remove("cnf");
    element.innerHTML = "Following";
}

//Function to delete a follow request