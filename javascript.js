function answer(id){

    let ans = id.replace('q', 'a')
    let img = id.replace('q', 'i')

    const answer = document.getElementById(`${ans}`);
    const arrow = document.getElementById(`${img}`)
    if (answer.style.display === "none"){
        answer.style.display = "block"
        arrow.style.transform = "rotate(180deg)"

    } else {
        answer.style.display = "none"
    }
}