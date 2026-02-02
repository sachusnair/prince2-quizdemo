const QUESTION_BANK = [
  {
    id: "q1",
    text: "Which PRINCE2 principle requires that a project have continued business justification?",
    options: {
      A: "Continued Business Justification",
      B: "Defined Roles and Responsibilities",
      C: "Learn from Experience",
      D: "Manage by Stages",
    },
    correct: "A",
    rationale:
      "Projects must remain desirable, viable, and achievable throughout their lifecycle with ongoing justification.",
    wrongRationales: {
      B: "Roles clarify accountability but do not address the business case.",
      C: "Learning helps improve delivery but does not confirm justification.",
      D: "Stage boundaries control the plan but do not ensure justification.",
    },
    topic: "Business Case",
    source: "questions-set-1.pdf",
    ambiguous: false,
  },
  {
    id: "q2",
    text: "Which PRINCE2 theme focuses on how the project will be financed and monitored for value?",
    options: {
      A: "Plans",
      B: "Business Case",
      C: "Risk",
      D: "Progress",
    },
    correct: "B",
    rationale:
      "The Business Case theme establishes the reasons for the project and how benefits and costs are managed.",
    wrongRationales: {
      A: "Plans describe how to deliver products, not why they are worthwhile.",
      C: "Risk addresses uncertainty rather than value justification.",
      D: "Progress monitors performance but does not justify the investment.",
    },
    topic: "Business Case",
    source: "questions-set-2.pdf",
    ambiguous: false,
  },
  {
    id: "q3",
    text: "In PRINCE2, who is responsible for the day-to-day management of the project?",
    options: {
      A: "Project Executive",
      B: "Project Manager",
      C: "Senior User",
      D: "Project Assurance",
    },
    correct: "B",
    rationale:
      "The Project Manager runs the project on behalf of the Project Board and handles daily control.",
    wrongRationales: {
      A: "The Executive chairs the Project Board and owns the Business Case.",
      C: "Senior User represents user needs but does not manage the project daily.",
      D: "Project Assurance provides independent oversight.",
    },
    topic: "Organization",
    source: "questions-set-1.pdf",
    ambiguous: false,
  },
  {
    id: "q4",
    text: "Which management product is used to record and monitor project issues and requests for change?",
    options: {
      A: "Issue Register",
      B: "Risk Register",
      C: "Quality Register",
      D: "Daily Log",
    },
    correct: "A",
    rationale:
      "The Issue Register captures issues, including change requests, and tracks their status.",
    wrongRationales: {
      B: "The Risk Register records threats and opportunities rather than issues.",
      C: "The Quality Register logs quality activities and results.",
      D: "The Daily Log is a temporary record used when there is no Issue Register.",
    },
    topic: "Change",
    source: "questions-set-3.pdf",
    ambiguous: false,
  },
  {
    id: "q5",
    text: "When should the Project Board make a decision to authorize the next stage?",
    options: {
      A: "At the end of each management stage",
      B: "At project initiation",
      C: "After benefits have been realized",
      D: "During daily stand-ups",
    },
    correct: "A",
    rationale:
      "PRINCE2 requires a stage boundary review so the Project Board can authorize the next stage.",
    wrongRationales: {
      B: "Initiation authorizes the project, not each stage.",
      C: "Benefits are realized after delivery, not before authorizing the next stage.",
      D: "Daily stand-ups are not part of PRINCE2 governance.",
    },
    topic: "Progress",
    source: "questions-set-2.pdf",
    ambiguous: false,
  },
  {
    id: "q6",
    text: "An answer key lists option B, while a rationale PDF lists option C for the same question. How should this be treated?",
    options: {
      A: "Mark as incorrect if the learner chooses B",
      B: "Mark as incorrect if the learner chooses C",
      C: "Flag as ambiguous and show both interpretations",
      D: "Remove the question from the bank",
    },
    correct: "C",
    rationale:
      "Conflicting sources indicate ambiguity; both interpretations should be shown and the learner is not penalized.",
    wrongRationales: {
      A: "Conflicts should not penalize learners.",
      B: "Conflicts should not penalize learners.",
      D: "Ambiguous questions should remain with full traceability.",
    },
    topic: "Quality",
    source: "questions-set-1.pdf + answers-set-2.pdf",
    ambiguous: true,
    ambiguousNotes:
      "Source PDFs disagree on the correct answer (B vs C). Both interpretations are shown during review.",
  },
  {
    id: "q7",
    text: "Which PRINCE2 principle allows tailoring based on project size, complexity, and risk?",
    options: {
      A: "Tailor to Suit the Project",
      B: "Focus on Products",
      C: "Manage by Exception",
      D: "Defined Roles and Responsibilities",
    },
    correct: "A",
    rationale:
      "The tailoring principle ensures the method is adapted to match the environment and project needs.",
    wrongRationales: {
      B: "Product focus ensures clear deliverables, not tailoring decisions.",
      C: "Manage by exception sets tolerances rather than tailoring.",
      D: "Roles ensure clarity, not tailoring.",
    },
    topic: "Principles",
    source: "questions-set-3.pdf",
    ambiguous: false,
  },
  {
    id: "q8",
    text: "Which PRINCE2 document defines the project's response to risk?",
    options: {
      A: "Risk Management Approach",
      B: "Business Case",
      C: "Communication Management Approach",
      D: "Project Brief",
    },
    correct: "A",
    rationale:
      "The Risk Management Approach describes how risk will be managed and responded to.",
    wrongRationales: {
      B: "Business Case justifies the project rather than defining risk responses.",
      C: "Communications focus on information flow, not risk responses.",
      D: "The Project Brief outlines the project but not detailed risk responses.",
    },
    topic: "Risk",
    source: "answers-set-1.pdf",
    ambiguous: false,
  },
  {
    id: "q9",
    text: "Which process is responsible for establishing the project board and project manager?",
    options: {
      A: "Starting up a Project",
      B: "Directing a Project",
      C: "Initiating a Project",
      D: "Managing Stage Boundaries",
    },
    correct: "A",
    rationale:
      "Starting up a Project ensures that the project team structure is in place.",
    wrongRationales: {
      B: "Directing a Project is ongoing governance, not initial team setup.",
      C: "Initiating a Project builds on the initial team already established.",
      D: "Managing Stage Boundaries focuses on reviews between stages.",
    },
    topic: "Processes",
    source: "questions-set-2.pdf",
    ambiguous: false,
  },
  {
    id: "q10",
    text: "Which management product provides a summary of forecast vs actual progress?",
    options: {
      A: "Checkpoint Report",
      B: "End Stage Report",
      C: "Highlight Report",
      D: "Product Status Account",
    },
    correct: "C",
    rationale:
      "Highlight Reports summarize progress against plan for the Project Board.",
    wrongRationales: {
      A: "Checkpoint Reports are for the Team Manager's reporting.",
      B: "End Stage Reports are produced at stage boundaries.",
      D: "Product Status Accounts summarize product status, not progress.",
    },
    topic: "Progress",
    source: "answers-set-3.pdf",
    ambiguous: false,
  },
];

const state = {
  mode: null,
  questions: [],
  currentIndex: 0,
  selections: {},
  score: { correct: 0, incorrect: 0, attempted: 0, ambiguous: 0 },
  weakTopics: {},
  mixedRevision: false,
  timerId: null,
  remainingSeconds: 0,
};

const sessionStatus = document.getElementById("sessionStatus");
const homeView = document.getElementById("homeView");
const questionView = document.getElementById("questionView");
const summaryView = document.getElementById("summaryView");
const questionText = document.getElementById("questionText");
const questionTopic = document.getElementById("questionTopic");
const questionMeta = document.getElementById("questionMeta");
const optionsList = document.getElementById("optionsList");
const submitAnswer = document.getElementById("submitAnswer");
const nextQuestion = document.getElementById("nextQuestion");
const finishTest = document.getElementById("finishTest");
const feedbackPanel = document.getElementById("feedbackPanel");
const progressIndicator = document.getElementById("progressIndicator");
const summaryTitle = document.getElementById("summaryTitle");
const summaryScore = document.getElementById("summaryScore");
const summaryAccuracy = document.getElementById("summaryAccuracy");
const summaryAttempted = document.getElementById("summaryAttempted");
const summaryWeakTopics = document.getElementById("summaryWeakTopics");
const reviewList = document.getElementById("reviewList");
const returnHome = document.getElementById("returnHome");
const commandInput = document.getElementById("commandInput");
const applyCommand = document.getElementById("applyCommand");
const commandStatus = document.getElementById("commandStatus");

function shuffle(array) {
  const copy = [...array];
  for (let i = copy.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

function resetSession() {
  state.mode = null;
  state.questions = [];
  state.currentIndex = 0;
  state.selections = {};
  state.score = { correct: 0, incorrect: 0, attempted: 0, ambiguous: 0 };
  state.weakTopics = {};
  state.remainingSeconds = 0;
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
}

function updateSessionStatus() {
  const score = state.score;
  const accuracy = score.attempted ? Math.round((score.correct / score.attempted) * 100) : 0;
  sessionStatus.innerHTML = `
    <strong>Session metrics</strong><br />
    Attempted: ${score.attempted} | Correct: ${score.correct} | Incorrect: ${score.incorrect}<br />
    Accuracy: ${accuracy}% | Ambiguous: ${score.ambiguous}
  `;
}

function setView(view) {
  homeView.classList.add("hidden");
  questionView.classList.add("hidden");
  summaryView.classList.add("hidden");
  view.classList.remove("hidden");
}

function buildQuestions() {
  const totalQuestions = state.mode === "mock" ? 60 : 20;
  const available = state.mixedRevision ? QUESTION_BANK : QUESTION_BANK.filter((q) => !q.used);
  let selection = available;
  if (available.length > totalQuestions) {
    selection = shuffle(available).slice(0, totalQuestions);
  } else if (available.length === 0) {
    QUESTION_BANK.forEach((q) => {
      q.used = false;
    });
    selection = shuffle(QUESTION_BANK).slice(0, totalQuestions);
  }

  selection.forEach((q) => {
    q.used = true;
  });

  state.questions = shuffle(selection);
}

function renderQuestion() {
  const question = state.questions[state.currentIndex];
  if (!question) {
    finishSession();
    return;
  }

  const currentNumber = state.currentIndex + 1;
  const total = state.questions.length;
  const sourceText = question.source ? `Source: ${question.source}` : "Source: (not set)";
  questionMeta.textContent = `${sourceText} · Question ${currentNumber} of ${total}`;
  questionText.textContent = question.text;
  questionTopic.textContent = `Topic: ${question.topic || "Uncategorized"}`;
  progressIndicator.textContent =
    state.mode === "mock"
      ? `Mock Test · ${formatTime(state.remainingSeconds)}`
      : `Daily Practice · ${currentNumber}/${total}`;

  optionsList.innerHTML = "";
  Object.entries(question.options).forEach(([key, value]) => {
    const option = document.createElement("label");
    option.className = "option";
    option.innerHTML = `
      <input type="radio" name="option" value="${key}" />
      <div>
        <strong>${key}.</strong> ${value}
      </div>
    `;
    option.querySelector("input").addEventListener("change", () => {
      submitAnswer.disabled = false;
    });
    optionsList.appendChild(option);
  });

  submitAnswer.disabled = true;
  feedbackPanel.classList.add("hidden");
  feedbackPanel.classList.remove("correct", "incorrect");
  nextQuestion.classList.add("hidden");
  finishTest.classList.add("hidden");
}

function gradeQuestion(selection) {
  const question = state.questions[state.currentIndex];
  const isCorrect = selection === question.correct;
  const isAmbiguous = Boolean(question.ambiguous);

  state.selections[question.id] = selection;

  if (isAmbiguous) {
    state.score.ambiguous += 1;
  } else {
    state.score.attempted += 1;
    if (isCorrect) {
      state.score.correct += 1;
    } else {
      state.score.incorrect += 1;
      const topic = question.topic || "Uncategorized";
      state.weakTopics[topic] = (state.weakTopics[topic] || 0) + 1;
    }
  }

  updateSessionStatus();

  return { isCorrect, isAmbiguous };
}

function renderFeedback(selectionResult) {
  const question = state.questions[state.currentIndex];
  const { isCorrect, isAmbiguous } = selectionResult;
  feedbackPanel.classList.remove("hidden");
  feedbackPanel.classList.toggle("correct", isCorrect && !isAmbiguous);
  feedbackPanel.classList.toggle("incorrect", !isCorrect && !isAmbiguous);

  const learnerChoice = state.selections[question.id];
  const correctAnswer = question.correct;

  const wrongDetails = Object.entries(question.wrongRationales || {})
    .map(([key, explanation]) => `<li><strong>${key}.</strong> ${explanation}</li>`)
    .join("");

  const ambiguousNote = question.ambiguous
    ? `<p><strong>Ambiguous question:</strong> ${question.ambiguousNotes}</p>
       <p>Both interpretations are shown during review and the score is unchanged.</p>`
    : "";

  const feedbackHeader = isAmbiguous
    ? "Ambiguous question - not scored"
    : isCorrect
      ? "✅ Correct"
      : "❌ Incorrect";

  feedbackPanel.innerHTML = `
    <h3>${feedbackHeader}</h3>
    <p><strong>Your answer:</strong> ${learnerChoice}</p>
    <p><strong>Correct answer:</strong> ${correctAnswer}</p>
    <p><strong>Explanation:</strong> ${question.rationale}</p>
    ${ambiguousNote}
    <div>
      <strong>Why other options are wrong:</strong>
      <ul>${wrongDetails}</ul>
    </div>
  `;
}

function showNextControls() {
  const isLastQuestion = state.currentIndex === state.questions.length - 1;
  if (state.mode === "mock") {
    if (isLastQuestion) {
      finishTest.classList.remove("hidden");
    } else {
      nextQuestion.classList.remove("hidden");
    }
  } else {
    nextQuestion.classList.toggle("hidden", isLastQuestion);
    finishTest.classList.toggle("hidden", !isLastQuestion);
  }
}

function handleSubmit() {
  const selected = document.querySelector("input[name='option']:checked");
  if (!selected) return;

  const result = gradeQuestion(selected.value);

  if (state.mode === "practice") {
    renderFeedback(result);
  }

  submitAnswer.disabled = true;
  showNextControls();
}

function handleNext() {
  state.currentIndex += 1;
  if (state.mode === "mock") {
    renderQuestion();
  } else {
    renderQuestion();
  }
}

function formatTime(seconds) {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${String(mins).padStart(2, "0")}:${String(secs).padStart(2, "0")}`;
}

function startTimer() {
  if (state.mode !== "mock") return;
  state.remainingSeconds = 60 * 60;
  progressIndicator.textContent = `Mock Test · ${formatTime(state.remainingSeconds)}`;
  state.timerId = setInterval(() => {
    state.remainingSeconds -= 1;
    if (state.remainingSeconds <= 0) {
      clearInterval(state.timerId);
      state.timerId = null;
      finishSession();
    }
    progressIndicator.textContent = `Mock Test · ${formatTime(state.remainingSeconds)}`;
  }, 1000);
}

function finishSession() {
  if (state.timerId) {
    clearInterval(state.timerId);
    state.timerId = null;
  }
  buildSummary();
  setView(summaryView);
}

function buildSummary() {
  const attempted = state.score.attempted;
  const accuracy = attempted ? Math.round((state.score.correct / attempted) * 100) : 0;
  const scoreText = `${state.score.correct} / ${attempted}`;

  if (state.mode === "mock") {
    summaryTitle.textContent = accuracy >= 60 ? "PASSED" : "FAILED";
  } else {
    summaryTitle.textContent = "Daily Practice Summary";
  }

  summaryScore.textContent = scoreText;
  summaryAccuracy.textContent = `${accuracy}%`;
  summaryAttempted.textContent = `${attempted} (Ambiguous: ${state.score.ambiguous})`;

  const weakTopics = Object.entries(state.weakTopics)
    .sort((a, b) => b[1] - a[1])
    .map(([topic, count]) => `${topic} (${count})`);

  summaryWeakTopics.innerHTML = weakTopics.length
    ? `<ul>${weakTopics.map((topic) => `<li>${topic}</li>`).join("")}</ul>`
    : "Great work! No weak topics this session.";

  reviewList.innerHTML = "";
  state.questions.forEach((question, index) => {
    const learnerChoice = state.selections[question.id];
    const isCorrect = learnerChoice === question.correct;
    const reviewItem = document.createElement("div");
    reviewItem.className = "review-item";
    reviewItem.innerHTML = `
      <div class="review-meta">Question ${index + 1} · ${question.topic || "Uncategorized"}</div>
      <h3>${question.text}</h3>
      <p><strong>Your answer:</strong> ${learnerChoice || "Not answered"}</p>
      <p><strong>Correct answer:</strong> ${question.correct}</p>
      <p><strong>Rationale:</strong> ${question.rationale}</p>
      ${
        question.ambiguous
          ? `<p><strong>Ambiguous:</strong> ${question.ambiguousNotes}</p>`
          : `<p><strong>Result:</strong> ${isCorrect ? "Correct" : "Incorrect"}</p>`
      }
    `;
    reviewList.appendChild(reviewItem);
  });
}

function startSession(mode) {
  resetSession();
  state.mode = mode;
  buildQuestions();
  updateSessionStatus();
  setView(questionView);
  renderQuestion();
  if (mode === "mock") {
    startTimer();
  }
}

function applyCommandOverride() {
  const command = commandInput.value.trim().toLowerCase();
  if (command === "mixed revision") {
    state.mixedRevision = true;
    commandStatus.innerHTML = "Mixed revision is currently <strong>enabled</strong>.";
  } else if (command) {
    state.mixedRevision = false;
    commandStatus.innerHTML =
      "Unknown command. Mixed revision remains <strong>disabled</strong>.";
  } else {
    state.mixedRevision = false;
    commandStatus.innerHTML = "Mixed revision is currently <strong>disabled</strong>.";
  }
  commandInput.value = "";
}

submitAnswer.addEventListener("click", handleSubmit);
nextQuestion.addEventListener("click", () => {
  feedbackPanel.classList.add("hidden");
  state.currentIndex += 1;
  renderQuestion();
});
finishTest.addEventListener("click", finishSession);
returnHome.addEventListener("click", () => {
  resetSession();
  updateSessionStatus();
  setView(homeView);
});
applyCommand.addEventListener("click", applyCommandOverride);

Array.from(document.querySelectorAll(".mode-card")).forEach((button) => {
  button.addEventListener("click", () => {
    const mode = button.dataset.mode;
    startSession(mode);
  });
});

updateSessionStatus();
