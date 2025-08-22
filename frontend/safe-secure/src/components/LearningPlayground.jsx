import React, { useState } from 'react';

const LearningPlayground = () => {
  const [currentExercise, setCurrentExercise] = useState(0);
  const [userAnswers, setUserAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);

  const exercises = [
    {
      id: 1,
      type: 'phishing-email',
      title: 'Phishing Email Detection',
      description: 'Analyze this email and identify suspicious elements',
      email: {
        from: 'security@bankofamerica.secure.com',
        subject: 'URGENT: Your account has been suspended',
        body: `Dear Valued Customer,

We have detected suspicious activity on your Bank of America account. Your account has been temporarily suspended for security reasons.

To restore access to your account, please click the link below and verify your identity:

https://bankofamerica-secure.verify-now.com/login

This is a security measure to protect your funds. Please act immediately to avoid permanent account closure.

Best regards,
Bank of America Security Team`,
        timestamp: '2 minutes ago'
      },
      suspiciousElements: [
        { id: 'sender', text: 'Suspicious sender address', correct: true, explanation: 'The sender address uses a subdomain that doesn\'t match Bank of America\'s official domain.' },
        { id: 'urgency', text: 'Creates sense of urgency', correct: true, explanation: 'The email uses urgent language like "URGENT" and "act immediately" to pressure you.' },
        { id: 'link', text: 'Suspicious link', correct: true, explanation: 'The link goes to a domain that is not Bank of America\'s official website.' },
        { id: 'grammar', text: 'Poor grammar', correct: false, explanation: 'This email actually has decent grammar, which makes it more convincing.' },
        { id: 'logo', text: 'Missing company logo', correct: false, explanation: 'Many legitimate emails don\'t include logos, so this isn\'t necessarily suspicious.' }
      ]
    },
    {
      id: 2,
      type: 'password-strength',
      title: 'Password Strength Assessment',
      description: 'Evaluate the strength of these passwords',
      passwords: [
        { password: 'password123', strength: 'weak', explanation: 'Common word with simple numbers' },
        { password: 'P@ssw0rd!', strength: 'medium', explanation: 'Uses special characters but predictable pattern' },
        { password: 'Tr0ub4dor&3', strength: 'strong', explanation: 'Complex with uppercase, lowercase, numbers, and symbols' },
        { password: 'correcthorsebatterystaple', strength: 'strong', explanation: 'Long passphrase with random words' }
      ]
    },
    {
      id: 3,
      type: 'social-engineering',
      title: 'Social Engineering Awareness',
      description: 'Identify social engineering tactics in these scenarios',
      scenarios: [
        {
          scenario: 'Someone calls claiming to be from IT support and asks for your password to "fix" your computer.',
          tactic: 'Pretexting',
          correct: true,
          explanation: 'The caller creates a false scenario to gain your trust and access to your password.'
        },
        {
          scenario: 'A colleague asks you to hold the door open for them as they follow you into a secure building.',
          tactic: 'Tailgating',
          correct: true,
          explanation: 'Following someone through a secure entrance without proper authorization.'
        },
        {
          scenario: 'You receive an email from your boss asking you to purchase gift cards for a client.',
          tactic: 'Phishing',
          correct: true,
          explanation: 'Impersonating authority to manipulate you into taking action.'
        }
      ]
    }
  ];

  const handleAnswerSelect = (exerciseId, elementId, isSelected) => {
    setUserAnswers(prev => ({
      ...prev,
      [exerciseId]: {
        ...prev[exerciseId],
        [elementId]: isSelected
      }
    }));
  };

  const calculateScore = () => {
    let totalScore = 0;
    let totalQuestions = 0;

    exercises.forEach(exercise => {
      if (exercise.type === 'phishing-email') {
        exercise.suspiciousElements.forEach(element => {
          totalQuestions++;
          const userAnswer = userAnswers[exercise.id]?.[element.id];
          if (userAnswer === element.correct) {
            totalScore++;
          }
        });
      } else if (exercise.type === 'social-engineering') {
        exercise.scenarios.forEach(scenario => {
          totalQuestions++;
          const userAnswer = userAnswers[exercise.id]?.[scenario.tactic];
          if (userAnswer === scenario.correct) {
            totalScore++;
          }
        });
      }
    });

    return { score: totalScore, total: totalQuestions };
  };

  const handleSubmit = () => {
    const { score: calculatedScore, total } = calculateScore();
    setScore(calculatedScore);
    setShowResults(true);
  };

  const handleNextExercise = () => {
    if (currentExercise < exercises.length - 1) {
      setCurrentExercise(currentExercise + 1);
      setShowResults(false);
    }
  };

  const handlePreviousExercise = () => {
    if (currentExercise > 0) {
      setCurrentExercise(currentExercise - 1);
      setShowResults(false);
    }
  };

  const renderPhishingExercise = (exercise) => {
    return (
      <div className="space-y-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <div className="border-b pb-4 mb-4">
            <div className="flex justify-between items-start">
              <div>
                <p className="text-sm text-gray-600">From: {exercise.email.from}</p>
                <p className="text-sm text-gray-600">Subject: {exercise.email.subject}</p>
                <p className="text-xs text-gray-500 mt-1">{exercise.email.timestamp}</p>
              </div>
            </div>
          </div>
          <div className="whitespace-pre-line text-gray-800">{exercise.email.body}</div>
        </div>

        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Identify Suspicious Elements:</h3>
          <div className="space-y-3">
            {exercise.suspiciousElements.map((element) => (
              <label key={element.id} className="flex items-center space-x-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={userAnswers[exercise.id]?.[element.id] || false}
                  onChange={(e) => handleAnswerSelect(exercise.id, element.id, e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-gray-700">{element.text}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderPasswordExercise = (exercise) => {
    return (
      <div className="space-y-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Password Strength Analysis:</h3>
          <div className="space-y-4">
            {exercise.passwords.map((pwd, index) => (
              <div key={index} className="border rounded p-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="font-mono text-sm">{pwd.password}</span>
                  <span className={`px-2 py-1 rounded text-xs font-semibold ${
                    pwd.strength === 'weak' ? 'bg-red-100 text-red-800' :
                    pwd.strength === 'medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-green-100 text-green-800'
                  }`}>
                    {pwd.strength.toUpperCase()}
                  </span>
                </div>
                <p className="text-sm text-gray-600">{pwd.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderSocialEngineeringExercise = (exercise) => {
    return (
      <div className="space-y-6">
        <div className="bg-white border rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Social Engineering Scenarios:</h3>
          <div className="space-y-4">
            {exercise.scenarios.map((scenario, index) => (
              <div key={index} className="border rounded p-4">
                <p className="text-gray-800 mb-3">{scenario.scenario}</p>
                <div className="space-y-2">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name={`scenario-${index}`}
                      checked={userAnswers[exercise.id]?.[scenario.tactic] === true}
                      onChange={() => handleAnswerSelect(exercise.id, scenario.tactic, true)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="text-gray-700">This is a social engineering tactic</span>
                  </label>
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="radio"
                      name={`scenario-${index}`}
                      checked={userAnswers[exercise.id]?.[scenario.tactic] === false}
                      onChange={() => handleAnswerSelect(exercise.id, scenario.tactic, false)}
                      className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
                    />
                    <span className="text-gray-700">This is legitimate</span>
                  </label>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderResults = () => {
    const { score: calculatedScore, total } = calculateScore();
    const percentage = Math.round((calculatedScore / total) * 100);

    return (
      <div className="bg-white border rounded-lg p-6 shadow-sm">
        <h3 className="text-2xl font-bold text-center mb-4">Exercise Results</h3>
        <div className="text-center mb-6">
          <div className="text-4xl font-bold text-blue-600 mb-2">{percentage}%</div>
          <p className="text-gray-600">You got {calculatedScore} out of {total} questions correct!</p>
        </div>
        
        <div className="space-y-4">
          {exercises[currentExercise].suspiciousElements?.map((element) => (
            <div key={element.id} className="border rounded p-3">
              <div className="flex items-center justify-between mb-2">
                <span className="font-medium">{element.text}</span>
                <span className={`px-2 py-1 rounded text-xs font-semibold ${
                  userAnswers[exercises[currentExercise].id]?.[element.id] === element.correct
                    ? 'bg-green-100 text-green-800'
                    : 'bg-red-100 text-red-800'
                }`}>
                  {userAnswers[exercises[currentExercise].id]?.[element.id] === element.correct ? 'Correct' : 'Incorrect'}
                </span>
              </div>
              <p className="text-sm text-gray-600">{element.explanation}</p>
            </div>
          ))}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Learning Playground
          </h1>
          <p className="text-xl text-gray-600">
            Practice identifying cybersecurity threats in a safe environment
          </p>
        </div>

        {/* Progress Bar */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Exercise {currentExercise + 1} of {exercises.length}</h2>
            <div className="flex space-x-2">
              <button
                onClick={handlePreviousExercise}
                disabled={currentExercise === 0}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Previous
              </button>
              <button
                onClick={handleNextExercise}
                disabled={currentExercise === exercises.length - 1}
                className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 border border-gray-300 rounded-md hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Next
              </button>
            </div>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${((currentExercise + 1) / exercises.length) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Exercise Content */}
        <div className="mb-8">
          <div className="bg-white border rounded-lg p-6 shadow-sm mb-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {exercises[currentExercise].title}
            </h2>
            <p className="text-gray-600 mb-6">
              {exercises[currentExercise].description}
            </p>

            {showResults ? (
              renderResults()
            ) : (
              <div>
                {exercises[currentExercise].type === 'phishing-email' && renderPhishingExercise(exercises[currentExercise])}
                {exercises[currentExercise].type === 'password-strength' && renderPasswordExercise(exercises[currentExercise])}
                {exercises[currentExercise].type === 'social-engineering' && renderSocialEngineeringExercise(exercises[currentExercise])}
              </div>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center space-x-4">
          {!showResults && exercises[currentExercise].type !== 'password-strength' && (
            <button
              onClick={handleSubmit}
              className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Submit Answers
            </button>
          )}
          {showResults && (
            <button
              onClick={() => setShowResults(false)}
              className="px-6 py-3 bg-gray-600 text-white font-semibold rounded-lg hover:bg-gray-700 transition-colors duration-200"
            >
              Try Again
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default LearningPlayground;
