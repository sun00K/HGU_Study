
Data = [{
    title: "물리학 스터디 모집합니다!",
    content: "앙 선우띠...",
    user: "경식",
    RorQ : "R"
},
{
    title: "수학 스터디 모집합니다!",
    content: "수학천재이신가요?",
    user: "선우",
    RorQ : "Q"
},
{
    title: "C언어 스터디 모집합니다!",
    content: "C언어 천재이신가요?",
    user: "진우",
    RorQ : "Q"
},
]

function makeHTML(Data){
    
    // code that dived the data 1.recruit 2. ques
    Data_recruit = []
    Data_question = []
    Data.forEach(function(item) {
        if (item.RorQ === "R"){
            Data_recruit.push(item)
        } else{
            Data_question.push(item)
        }
    });
    // mapping data and create html
    let recruit_box = document.querySelector('#recruit');
    let question_box = document.querySelector('#question');
    
    recruit_box.innerHTML = Data_recruit.map((item) => returnHTML(item)).join('')
    question_box.innerHTML = Data_question.map((item) => returnHTML(item)).join('')
}

function returnHTML(item){
    let TITLE = item.title;
    let CONTENT = item.content;
    let USER = item.user;
    
    return `<div class="recruit_list">
    <h4>${TITLE}</h4>
    <p>${CONTENT}</p><span>${USER}</span>
    </div>`;
}


makeHTML(Data)


// < js 공부 할 것들 >
// recruit,question 올리기 , +버튼 만들기 => 금방함


// <나중에,,,>
// 검색버튼?? how?
// 수정하기?? how?