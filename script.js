// Global Variables
let currentQuestion = 0;
let score = 0;
let selectedAnswer = null;

// Quiz Questions Data
const quizQuestions = [
    {
        question: "What is the fundamental technique of defining key positions in time to create smooth motion?",
        options: [
            "Procedural Animation",
            "Keyframe Animation", 
            "Motion Capture",
            "Stop Motion"
        ],
        correct: 1
    },
    {
        question: "Which animation technique uses algorithm-driven methods to create complex movements automatically?",
        options: [
            "2D Animation",
            "Motion Capture",
            "Procedural Animation",
            "Traditional Animation"
        ],
        correct: 2
    },
    {
        question: "What is the main difference between VFX and SFX?",
        options: [
            "VFX are cheaper to produce",
            "SFX are created digitally, VFX are practical",
            "VFX are digital effects, SFX are practical effects",
            "There is no difference"
        ],
        correct: 2
    },
    {
        question: "Which technique smoothly transforms one image or shape into another?",
        options: [
            "Morphing",
            "Tweening",
            "Rotoscoping",
            "Compositing"
        ],
        correct: 0
    },
    {
        question: "What does VR stand for in computer animation?",
        options: [
            "Visual Reality",
            "Virtual Rendering",
            "Virtual Reality",
            "Visual Rendering"
        ],
        correct: 2
    },
    {
        question: "Which technology overlays digital information onto the real world?",
        options: [
            "Virtual Reality (VR)",
            "Augmented Reality (AR)",
            "Mixed Reality (MR)",
            "Extended Reality (XR)"
        ],
        correct: 1
    },
    {
        question: "What captures real-world movement and applies it to digital characters?",
        options: [
            "Keyframe Animation",
            "Stop Motion",
            "Motion Capture",
            "Rotoscoping"
        ],
        correct: 2
    },
    // --------- Added new questions for a total of 15 ----------
    {
        question: "What term describes the process of combining multiple images into a single final image?",
        options: [
            "Compositing",
            "Motion Capture",
            "Keying",
            "Morphing"
        ],
        correct: 0
    },
    {
        question: "Which animation process involves manually drawing or painting each frame?",
        options: [
            "Procedural Animation",
            "Traditional Animation",
            "Stop Motion",
            "Motion Graphics"
        ],
        correct: 1
    },
    {
        question: "In 3D animation, what does rigging refer to?",
        options: [
            "Lighting the scene",
            "Texturing an object",
            "Creating a skeleton for movement",
            "Rendering images"
        ],
        correct: 2
    },
    {
        question: "Which of the following is usually used for facial animation?",
        options: [
            "Camera mapping",
            "Blend shapes",
            "Alpha masking",
            "Wireframing"
        ],
        correct: 1
    },
    {
        question: "Which digital effect creates the illusion of depth by moving background layers slower than foreground layers?",
        options: [
            "Rotoscoping",
            "Parallax scrolling",
            "Morphing",
            "Tweening"
        ],
        correct: 1
    },
    {
        question: "What technique is used to extract an object from its background based on color?",
        options: [
            "Keying",
            "Compositing",
            "Tweening",
            "Mapping"
        ],
        correct: 0
    },
    {
        question: "In particle systems, what typically controls the shape and behavior of the effect?",
        options: [
            "Shaders",
            "Emitters",
            "Textures",
            "Bones"
        ],
        correct: 1
    },
    {
        question: "Which type of animation records real actors to drive digital performances?",
        options: [
            "Cel animation",
            "Motion Capture",
            "Cutout Animation",
            "Animated GIF"
        ],
        correct: 1
    }
];

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    setupAnimationObserver();
    setupMorphingSlider();
    prepareQuizScoreboard(); // Prepare scoreboard on DOMContentLoaded
});

// Initialize Website
function initializeWebsite() {
    // Add loading animation
    document.body.classList.add('loaded');
    // Initialize particles animation
    createParticles();
    // Setup smooth scrolling for navigation links
    setupSmoothScrolling();
}

// Setup Event Listeners
function setupEventListeners() {
    // Navigation scroll effect
    window.addEventListener('scroll', handleNavScroll);

    // Window resize handler
    window.addEventListener('resize', handleResize);

    // Setup concept card interactions
    setupConceptCards();

    // Setup interactive demos
    setupInteractiveDemos();
}

// Navigation Scroll Effect
function handleNavScroll() {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(10, 10, 15, 0.98)';
        navbar.style.backdropFilter = 'blur(20px)';
    } else {
        navbar.style.background = 'rgba(10, 10, 15, 0.95)';
        navbar.style.backdropFilter = 'blur(10px)';
    }
}

// Smooth Scrolling Setup
function setupSmoothScrolling() {
    const links = document.querySelectorAll('a[href^="#"]');
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Scroll to Section Function
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Animation Observer Setup
function setupAnimationObserver() {
    const animatedElements = document.querySelectorAll('[data-aos]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('aos-animate');
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });

    animatedElements.forEach(el => observer.observe(el));
}

// Create Particles Animation
function createParticles() {
    const particles = document.querySelector('.particles');
    if (!particles) return;
    // Additional particles can be created here if needed
    // The CSS animation handles the basic particle movement
}

// Setup Concept Cards Interactions
function setupConceptCards() {
    const conceptCards = document.querySelectorAll('.concept-card');
    conceptCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-15px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(-10px) scale(1)';
        });
    });
}

// Setup Interactive Demos
function setupInteractiveDemos() {
    // VFX/SFX Demo Interaction
    const vfxDemo = document.querySelector('.vfx-demo');
    const sfxDemo = document.querySelector('.sfx-demo');

    if (vfxDemo) {
        vfxDemo.addEventListener('click', function() {
            this.style.animation = 'vfxGlow 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = 'vfxGlow 2s ease-in-out infinite';
            }, 500);
        });
    }

    if (sfxDemo) {
        sfxDemo.addEventListener('click', function() {
            this.style.animation = 'sfxExplosion 0.5s ease-in-out';
            setTimeout(() => {
                this.style.animation = 'sfxExplosion 2s ease-in-out infinite';
            }, 500);
        });
    }

    // VR/AR Demo Interactions
    const vrHeadset = document.querySelector('.vr-headset');
    const arOverlay = document.querySelector('.ar-overlay');

    if (vrHeadset) {
        vrHeadset.addEventListener('click', function() {
            this.style.transform = 'scale(1.1) rotateY(10deg)';
            setTimeout(() => {
                this.style.transform = 'scale(1) rotateY(0deg)';
            }, 300);
        });
    }

    if (arOverlay) {
        arOverlay.addEventListener('click', function() {
            this.style.borderColor = '#FF6B9D';
            setTimeout(() => {
                this.style.borderColor = 'var(--primary-color)';
            }, 500);
        });
    }
}

// Morphing Slider Setup
function setupMorphingSlider() {
    const morphSlider = document.getElementById('morphSlider');
    const shapeA = document.querySelector('.shape-a');
    const shapeB = document.querySelector('.shape-b');

    if (morphSlider && shapeA && shapeB) {
        morphSlider.addEventListener('input', function() {
            const value = this.value;
            const progress = value / 100;

            // Animate opacity
            shapeA.style.opacity = 1 - progress;
            shapeB.style.opacity = progress;

            // Animate shape transformation
            const aRadius = 50 - (progress * 40); // 50% to 10%
            const bRadius = 10 + (progress * 40); // 10% to 50%

            shapeA.style.borderRadius = aRadius + '%';
            shapeB.style.borderRadius = bRadius + 'px';

            // Animate colors
            const rA = 74 + (progress * (255 - 74));
            const gA = 144 + (progress * (107 - 144));
            const bA = 226 + (progress * (157 - 226));

            shapeA.style.background = `rgb(${rA}, ${gA}, ${bA})`;

            // Animate position
            shapeA.style.transform = `scale(${1 - progress * 0.3}) rotate(${progress * 180}deg)`;
            shapeB.style.transform = `scale(${progress}) rotate(${(1 - progress) * 180}deg)`;
        });
    }
}

// =========================
// Quiz Functions & SCOREBOARD ENHANCEMENT
// =========================
function startQuiz() {
    document.getElementById('quiz-start').classList.remove('active');
    document.getElementById('quiz-questions').classList.add('active');

    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;

    showQuestion();
}

function showQuestion() {
    const question = quizQuestions[currentQuestion];
    const questionText = document.getElementById('question-text');
    const optionsContainer = document.getElementById('options-container');
    const progressFill = document.querySelector('.progress-fill');
    const currentQ = document.getElementById('current-q');
    const totalQ = document.getElementById('total-q');
    const nextBtn = document.getElementById('next-btn');

    // Update progress
    const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
    progressFill.style.width = progress + '%';
    currentQ.textContent = currentQuestion + 1;
    totalQ.textContent = quizQuestions.length;

    // Show question
    questionText.textContent = question.question;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Create new options
    question.options.forEach((option, index) => {
        const optionElement = document.createElement('div');
        optionElement.className = 'option';
        optionElement.textContent = option;
        optionElement.addEventListener('click', () => selectOption(index, optionElement));
        optionsContainer.appendChild(optionElement);
    });

    // Reset next button
    nextBtn.disabled = true;
    selectedAnswer = null;

    // Add entrance animation
    optionsContainer.style.animation = 'slideIn 0.5s ease-out';
}

function selectOption(index, element) {
    // Remove previous selection
    const allOptions = document.querySelectorAll('.option');
    allOptions.forEach(opt => opt.classList.remove('selected'));

    // Select new option
    element.classList.add('selected');
    selectedAnswer = index;

    // Enable next button
    document.getElementById('next-btn').disabled = false;

    // Add selection animation
    element.style.transform = 'scale(1.02)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 200);
}

function nextQuestion() {
    if (selectedAnswer === null) return;

    const question = quizQuestions[currentQuestion];
    const allOptions = document.querySelectorAll('.option');

    // Show correct/incorrect answers
    allOptions.forEach((option, index) => {
        if (index === question.correct) {
            option.classList.add('correct');
        } else if (index === selectedAnswer && selectedAnswer !== question.correct) {
            option.classList.add('incorrect');
        }
    });

    // Check if answer is correct
    if (selectedAnswer === question.correct) {
        score++;
        // Add success animation
        allOptions[selectedAnswer].style.animation = 'pulse 0.6s ease-in-out';
    }

    setTimeout(() => {
        currentQuestion++;

        if (currentQuestion < quizQuestions.length) {
            showQuestion();
        } else {
            showResults();
        }
    }, 1500);
}

function showResults() {
    document.getElementById('quiz-questions').classList.remove('active');
    document.getElementById('quiz-results').classList.add('active');

    const finalScore = document.getElementById('final-score');
    const resultsTitle = document.getElementById('results-title');
    const resultsMessage = document.getElementById('results-message');

    finalScore.textContent = score;

    // Animate score counting
    animateScore(score);

    // Determine performance message
    const percentage = (score / quizQuestions.length) * 100;

    let congrats = "";
    let emoji = "👏";
    if (percentage >= 85) {
        resultsTitle.textContent = "Outstanding! 🌟";
        resultsMessage.textContent = "You're an Animation Expert! You have excellent knowledge of computer animation concepts and techniques.";
        congrats = "Congratulations!";
        emoji = "🥇";
    } else if (percentage >= 70) {
        resultsTitle.textContent = "Great Job! 🎉";
        resultsMessage.textContent = "You have a solid understanding of animation fundamentals. Keep exploring to become an expert!";
        congrats = "Well done!";
        emoji = "🎉";
    } else if (percentage >= 50) {
        resultsTitle.textContent = "Good Effort! 👍";
        resultsMessage.textContent = "You're on the right track! Review the concepts and try again to improve your knowledge.";
        congrats = "Good effort!";
        emoji = "👍";
    } else {
        resultsTitle.textContent = "Keep Learning! 📚";
        resultsMessage.textContent = "Animation is a complex field. Take some time to review the concepts and try the quiz again!";
        congrats = "Keep Going!";
        emoji = "💪";
    }

    // Show the scoreboard
    showScoreboard(score, quizQuestions.length, percentage, congrats, emoji);
}

function animateScore(targetScore) {
    const scoreElement = document.getElementById('final-score');
    let currentScore = 0;
    const duration = 1000;
    const increment = targetScore / (duration / 50);

    const timer = setInterval(() => {
        currentScore += increment;
        if (currentScore >= targetScore) {
            currentScore = targetScore;
            clearInterval(timer);
        }
        scoreElement.textContent = Math.floor(currentScore);
    }, 50);
}

function restartQuiz() {
    document.getElementById('quiz-results').classList.remove('active');
    document.getElementById('scoreboard-container').classList.remove('active');
    document.getElementById('quiz-start').classList.add('active');
    currentQuestion = 0;
    score = 0;
    selectedAnswer = null;
}

// ADDITIONAL: Scoreboard/Congrats UI

function prepareQuizScoreboard() {
    // Only create once
    if (document.getElementById('scoreboard-container')) return;

    const scoreboard = document.createElement('div');
    scoreboard.id = 'scoreboard-container';
    scoreboard.style.display = 'none';
    scoreboard.style.position = 'fixed';
    scoreboard.style.top = '0';
    scoreboard.style.left = '0';
    scoreboard.style.width = '100vw';
    scoreboard.style.height = '100vh';
    scoreboard.style.background = 'rgba(32,36,45,0.96)';
    scoreboard.style.zIndex = '2000';
    scoreboard.style.justifyContent = 'center';
    scoreboard.style.alignItems = 'center';
    scoreboard.style.flexDirection = 'column';
    scoreboard.style.textAlign = 'center';
    scoreboard.style.transition = 'opacity 0.4s';
    scoreboard.style.opacity = '0';
    scoreboard.style.display = 'flex';

    scoreboard.innerHTML = `
        <div id="scoreboard-content" style="background: #22293a; border-radius: 24px; padding: 36px 40px; box-shadow: 0 8px 32px rgba(0,0,0,0.18);">
            <div id="score-emoji" style="font-size:3rem; margin-bottom:10px;"></div>
            <div id="score-congrats" style="font-size:2rem;font-weight:bold;margin-bottom:12px;"></div>
            <div id="score-details" style="font-size:1.2rem; margin-bottom:10px;"></div>
            <div id="score-summary" style="font-size:1.1rem; color:#b0d4fd;margin-bottom:8px"></div>
            <button id="scoreboard-restart" class="quiz-btn" style="margin-top:24px;padding:12px 32px;font-size:1.1rem;">Restart Quiz</button>
        </div>
    `;

    document.body.appendChild(scoreboard);

    // Restart button logic
    document.getElementById('scoreboard-restart').onclick = function() {
        scoreboard.classList.remove('active');
        scoreboard.style.opacity = '0';
        setTimeout(()=>{ scoreboard.style.display='none'; }, 400);
        restartQuiz();
    };
}

function showScoreboard(score, total, percentage, congrats, emoji) {
    const scoreboard = document.getElementById('scoreboard-container');
    if (!scoreboard) return;

    // Fill content
    document.getElementById('score-emoji').textContent = emoji;
    document.getElementById('score-congrats').textContent = congrats;
    document.getElementById('score-details').innerHTML = `Your Score: <b>${score}</b> / ${total} (${Math.round(percentage)}%)`;
    let summary = '';
    if (percentage >= 85) {
        summary = "Amazing! You really know your animation stuff! 🏆";
    } else if (percentage >= 70) {
        summary = "You did fantastic! Keep animating!";
    } else if (percentage >= 50) {
        summary = "Solid try. Review and try for a higher score!";
    } else {
        summary = "Don't worry! Study more and try again!";
    }
    document.getElementById('score-summary').textContent = summary;

    // Show UI
    scoreboard.style.display = 'flex';
    setTimeout(() => {
        scoreboard.classList.add('active');
        scoreboard.style.opacity = '1';
    }, 50);
}

// Handle Window Resize
function handleResize() {
    // Adjust animations and layouts on resize
    const particles = document.querySelector('.particles');
    if (particles) {
        // Recalculate particle animation if needed
    }
}

// Utility Functions
function addGlowEffect(element) {
    element.classList.add('glow');
    setTimeout(() => {
        element.classList.remove('glow');
    }, 1000);
}

function showTooltip(element, message) {
    const tooltip = document.createElement('div');
    tooltip.className = 'tooltip';
    tooltip.textContent = message;
    tooltip.style.cssText = `
        position: absolute;
        top: -40px;
        left: 50%;
        transform: translateX(-50%);
        background: var(--surface-color);
        color: var(--text-primary);
        padding: 8px 12px;
        border-radius: 6px;
        font-size: 0.9rem;
        white-space: nowrap;
        z-index: 1000;
        border: 1px solid rgba(74, 144, 226, 0.3);
        animation: fadeIn 0.3s ease-out;
    `;

    element.style.position = 'relative';
    element.appendChild(tooltip);

    setTimeout(() => {
        if (tooltip.parentNode) {
            tooltip.remove();
        }
    }, 2000);
}

// Advanced Animation Functions
function createRippleEffect(element, event) {
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;

    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        border-radius: 50%;
        background: rgba(74, 144, 226, 0.3);
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
    `;

    element.appendChild(ripple);

    setTimeout(() => {
        ripple.remove();
    }, 600);
}

// Add ripple effect CSS animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            transform: scale(2);
            opacity: 0;
        }
    }

    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }

    .tooltip {
        pointer-events: none;
    }

    .option {
        position: relative;
        overflow: hidden;
    }
    #scoreboard-container {
        backdrop-filter: blur(15px);
        animation: fadeIn 0.5s;
        user-select:none;
    }
    #scoreboard-content {
        animation: popIn 0.4s cubic-bezier(.4,1.4,.6,1.0);
    }
    @keyframes popIn {
        0% { transform: scale(.6); opacity:0;}
        60% { transform: scale(1.1);}
        100% { transform: scale(1.0); opacity:1;}
    }
`;
document.head.appendChild(style);

// Enhanced Interactive Features
document.addEventListener('DOMContentLoaded', function() {
    // Add click ripple effects to buttons
    const buttons = document.querySelectorAll('.cta-button, .quiz-btn, .option');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(this, e);
        });
    });

    // Add hover effects to cards
    const cards = document.querySelectorAll('.concept-card, .example-card, .app-card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-10px) scale(1.02)';
        });

        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add interactive hover effects to demo elements
    const demoElements = document.querySelectorAll('.vfx-demo, .sfx-demo, .vr-headset, .ar-overlay');
    demoElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            addGlowEffect(this);
        });
    });
});

// Performance Optimization
let ticking = false;

function updateOnScroll() {
    handleNavScroll();
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateOnScroll);
        ticking = true;
    }
}

// Replace the simple scroll listener with optimized version
window.removeEventListener('scroll', handleNavScroll);
window.addEventListener('scroll', requestTick);

// Initialize everything when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeWebsite);
} else {
    initializeWebsite();
}