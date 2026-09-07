/* ========================================
   나를 알아봄
   MBTI 스타일 성격 테스트

   결과 유형
   1. 🚀 도전하는 리더
   2. 🎨 창의적인 아이디어맨
   3. 🤝 따뜻한 공감러
   4. 🔎 꼼꼼한 분석가
======================================== */


/* ========================================
   질문 데이터
======================================== */

const questions = [

    {
        type: "O / X",
        emoji: "⏰",
        question: "나는 약속 시간보다 일찍 도착하는 편이다.",
        answers: [
            {
                text: "⭕ O. 항상 일찍 도착해!",
                type: "leader"
            },
            {
                text: "❌ X. 시간 맞춰서 가는 편이야.",
                type: "creative"
            }
        ]
    },

    {
        type: "이지선다",
        emoji: "🏠",
        question: "갑자기 오늘 일정이 모두 취소됐다! 나는?",
        answers: [
            {
                text: "😎 오히려 좋아! 집에서 편하게 쉰다.",
                type: "analyst"
            },
            {
                text: "🎉 친구에게 연락해서 새로운 약속을 잡는다.",
                type: "leader"
            }
        ]
    },

    {
        type: "밸런스 게임",
        emoji: "🍕",
        question: "평생 하나만 먹을 수 있다면?",
        answers: [
            {
                text: "🍗 치킨만 먹기",
                type: "creative"
            },
            {
                text: "🍕 피자만 먹기",
                type: "empathy"
            }
        ]
    },

    {
        type: "상황 선택",
        emoji: "📚",
        question: "시험이 일주일 남았다. 나는 어떻게 공부할까?",
        answers: [
            {
                text: "📋 계획표를 만들어 차근차근 공부한다.",
                type: "analyst"
            },
            {
                text: "🔥 일단 시작하고 그때그때 필요한 것을 공부한다.",
                type: "leader"
            }
        ]
    },

    {
        type: "O / X",
        emoji: "👥",
        question: "처음 만난 사람에게 먼저 말을 걸 수 있다.",
        answers: [
            {
                text: "⭕ O. 먼저 말 거는 것도 어렵지 않아!",
                type: "leader"
            },
            {
                text: "❌ X. 상대방이 먼저 말해주면 좋겠어.",
                type: "analyst"
            }
        ]
    },

    {
        type: "상황 선택",
        emoji: "💡",
        question: "친구들과 새로운 프로젝트를 시작한다면?",
        answers: [
            {
                text: "🚀 내가 먼저 아이디어를 내고 시작한다.",
                type: "creative"
            },
            {
                text: "🔎 자료를 조사하고 실현 가능한지 확인한다.",
                type: "analyst"
            }
        ]
    },

    {
        type: "이지선다",
        emoji: "😢",
        question: "친구가 힘든 일이 있다고 이야기한다면?",
        answers: [
            {
                text: "🤝 먼저 공감하고 이야기를 들어준다.",
                type: "empathy"
            },
            {
                text: "💡 해결 방법을 같이 찾아준다.",
                type: "analyst"
            }
        ]
    },

    {
        type: "밸런스 게임",
        emoji: "✈️",
        question: "여행을 간다면 어떤 스타일?",
        answers: [
            {
                text: "🗺️ 계획표를 완벽하게 만든다.",
                type: "analyst"
            },
            {
                text: "🎒 아무 계획 없이 떠난다.",
                type: "creative"
            }
        ]
    },

    {
        type: "O / X",
        emoji: "🏆",
        question: "경쟁 상황에서는 반드시 이기고 싶다.",
        answers: [
            {
                text: "⭕ O. 승부욕이 강한 편이야!",
                type: "leader"
            },
            {
                text: "❌ X. 즐기는 게 더 중요해.",
                type: "empathy"
            }
        ]
    },

    {
        type: "이지선다",
        emoji: "🎁",
        question: "갑자기 100만 원이 생긴다면?",
        answers: [
            {
                text: "🛍️ 평소 사고 싶었던 것을 바로 산다.",
                type: "creative"
            },
            {
                text: "🏦 일단 저축하고 필요한 곳에 쓴다.",
                type: "analyst"
            }
        ]
    }

];


/* ========================================
   결과 데이터
======================================== */

const results = {

    leader: {
        emoji: "🚀",
        title: "도전하는 리더",
        description:
            "새로운 일에 적극적으로 도전하고 사람들을 이끄는 것을 좋아하는 당신!",
        keywords: [
            "도전정신",
            "리더십",
            "행동파",
            "추진력"
        ],
        features: [
            "새로운 일을 시작하는 것을 두려워하지 않아요.",
            "목표가 생기면 빠르게 행동으로 옮겨요.",
            "친구들 사이에서 자연스럽게 리더 역할을 맡는 경우가 많아요.",
            "경쟁 상황에서 강한 집중력을 발휘해요."
        ]
    },

    creative: {
        emoji: "🎨",
        title: "창의적인 아이디어맨",
        description:
            "새로운 생각과 재미있는 아이디어가 끊임없이 떠오르는 자유로운 사람!",
        keywords: [
            "창의력",
            "자유로움",
            "호기심",
            "아이디어"
        ],
        features: [
            "평범한 방법보다 새로운 방법을 찾는 것을 좋아해요.",
            "새로운 경험과 재미있는 활동에 관심이 많아요.",
            "자유롭게 생각할 수 있는 환경에서 능력을 발휘해요.",
            "갑작스러운 변화에도 비교적 잘 적응하는 편이에요."
        ]
    },

    empathy: {
        emoji: "🤝",
        title: "따뜻한 공감러",
        description:
            "다른 사람의 마음을 잘 이해하고 주변 사람들에게 따뜻한 에너지를 주는 사람!",
        keywords: [
            "공감능력",
            "친화력",
            "배려",
            "따뜻함"
        ],
        features: [
            "다른 사람의 감정에 관심이 많아요.",
            "친구가 힘들어하면 먼저 다가가는 편이에요.",
            "함께하는 활동에서 큰 즐거움을 느껴요.",
            "주변 사람들에게 편안한 분위기를 만들어줘요."
        ]
    },

    analyst: {
        emoji: "🔎",
        title: "꼼꼼한 분석가",
        description:
            "논리적으로 생각하고 계획을 세워 차근차근 문제를 해결하는 사람!",
        keywords: [
            "논리적",
            "계획적",
            "꼼꼼함",
            "분석력"
        ],
        features: [
            "일을 시작하기 전에 계획을 세우는 편이에요.",
            "문제를 해결할 때 원인부터 꼼꼼하게 살펴봐요.",
            "감정보다는 논리적인 판단을 중요하게 생각해요.",
            "맡은 일은 끝까지 책임지고 완성하려고 해요."
        ]
    }

};


/* ========================================
   변수
======================================== */

let currentQuestion = 0;

let scores = {
    leader: 0,
    creative: 0,
    empathy: 0,
    analyst: 0
};


/* ========================================
   HTML 요소 가져오기
======================================== */

const startScreen =
    document.getElementById("start-screen");

const quizScreen =
    document.getElementById("quiz-screen");

const loadingScreen =
    document.getElementById("loading-screen");

const resultScreen =
    document.getElementById("result-screen");

const startBtn =
    document.getElementById("start-btn");

const questionNumber =
    document.getElementById("question-number");

const questionType =
    document.getElementById("question-type");

const questionEmoji =
    document.getElementById("question-emoji");

const questionText =
    document.getElementById("question-text");

const answerButtons =
    document.getElementById("answer-buttons");

const progressBar =
    document.getElementById("progress-bar");

const resultEmoji =
    document.getElementById("result-emoji");

const resultTitle =
    document.getElementById("result-title");

const resultDescription =
    document.getElementById("result-description");

const resultKeywords =
    document.getElementById("result-keywords");

const resultFeatures =
    document.getElementById("result-features");

const shareBtn =
    document.getElementById("share-btn");

const restartBtn =
    document.getElementById("restart-btn");


/* ========================================
   화면 전환 함수
======================================== */

function showScreen(screen) {

    document.querySelectorAll(".screen")
        .forEach(element => {
            element.classList.remove("active");
        });

    screen.classList.add("active");
}


/* ========================================
   테스트 시작
======================================== */

startBtn.addEventListener("click", () => {

    currentQuestion = 0;

    scores = {
        leader: 0,
        creative: 0,
        empathy: 0,
        analyst: 0
    };

    showScreen(quizScreen);

    showQuestion();

});


/* ========================================
   질문 표시
======================================== */

function showQuestion() {

    const question =
        questions[currentQuestion];

    const questionIndex =
        currentQuestion + 1;

    questionNumber.textContent =
        `${questionIndex} / ${questions.length}`;

    questionType.textContent =
        question.type;

    questionEmoji.textContent =
        question.emoji;

    questionText.textContent =
        question.question;

    const progress =
        (questionIndex / questions.length) * 100;

    progressBar.style.width =
        `${progress}%`;


    // 기존 버튼 제거
    answerButtons.innerHTML = "";


    // 새로운 답변 버튼 생성
    question.answers.forEach((answer) => {

        const button =
            document.createElement("button");

        button.className =
            "answer-btn";

        button.textContent =
            answer.text;

        button.addEventListener(
            "click",
            () => selectAnswer(answer.type)
        );

        answerButtons.appendChild(button);

    });

}


/* ========================================
   답변 선택
======================================== */

function selectAnswer(type) {

    scores[type]++;

    currentQuestion++;


    if (currentQuestion < questions.length) {

        // 다음 질문으로 이동
        showQuestion();

    } else {

        // 모든 질문 완료
        showLoading();

    }

}


/* ========================================
   결과 분석 화면
======================================== */

function showLoading() {

    showScreen(loadingScreen);

    setTimeout(() => {

        calculateResult();

    }, 1800);

}


/* ========================================
   결과 계산
======================================== */

function calculateResult() {

    let resultType = "leader";

    let highestScore = scores.leader;


    for (const type in scores) {

        if (scores[type] > highestScore) {

            highestScore =
                scores[type];

            resultType =
                type;
        }

    }


    showResult(resultType);

}


/* ========================================
   결과 화면 표시
======================================== */

function showResult(type) {

    const result =
        results[type];

    resultEmoji.textContent =
        result.emoji;

    resultTitle.textContent =
        result.title;

    resultDescription.textContent =
        result.description;


    // 키워드
    resultKeywords.innerHTML = "";

    result.keywords.forEach(keyword => {

        const span =
            document.createElement("span");

        span.className =
            "keyword";

        span.textContent =
            keyword;

        resultKeywords.appendChild(span);

    });


    // 특징
    resultFeatures.innerHTML = "";

    result.features.forEach(feature => {

        const li =
            document.createElement("li");

        li.textContent =
            feature;

        resultFeatures.appendChild(li);

    });


    showScreen(resultScreen);

}


/* ========================================
   결과 공유
======================================== */

shareBtn.addEventListener("click", async () => {

    const shareText =
        `🔍 나를 알아봄 성격 테스트 결과\n\n` +
        `나는 "${resultTitle.textContent}" 유형이에요! 🎉\n\n` +
        `너도 한번 테스트해봐!`;


    if (navigator.share) {

        try {

            await navigator.share({
                title: "나를 알아봄",
                text: shareText
            });

        } catch (error) {

            console.log(
                "공유가 취소되었습니다."
            );

        }

    } else {

        try {

            await navigator.clipboard.writeText(
                shareText
            );

            alert(
                "결과가 클립보드에 복사되었습니다! 📋"
            );

        } catch (error) {

            alert(
                "공유 기능을 사용할 수 없습니다."
            );

        }

    }

});


/* ========================================
   다시 테스트
======================================== */

restartBtn.addEventListener("click", () => {

    currentQuestion = 0;

    scores = {
        leader: 0,
        creative: 0,
        empathy: 0,
        analyst: 0
    };

    showScreen(startScreen);

});