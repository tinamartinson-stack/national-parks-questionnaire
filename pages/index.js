import React, { useState, useEffect } from 'react';
 
const ParksQuestionnaire = () => {
  const [section, setSection] = useState(0);
  const [responses, setResponses] = useState({});
  const [savedAt, setSavedAt] = useState(null);
  const [mounted, setMounted] = useState(false);
 
  const sections = [
    {
      id: 'motivation',
      title: 'Trip Motivation & Timing',
      questions: [
        {
          id: 'q1_1',
          text: "What's drawing you to National Parks?",
          type: 'checkbox',
          options: ['Iconic destinations', 'Specific natural features', 'Hiking/trails', 'Scenic driving', 'Photography', 'Family bonding', 'Solo retreat', 'Camping/backcountry', 'Other']
        },
        {
          id: 'q1_2',
          text: 'How much time do you have?',
          type: 'radio',
          options: ['2-3 days', 'Full week', '10-14 days', '2+ weeks', 'Ongoing trips']
        },
        {
          id: 'q1_3',
          text: 'When are you hoping to go?',
          type: 'text',
          placeholder: 'Months/dates'
        },
        {
          id: 'q1_4',
          text: 'How many people?',
          type: 'radio',
          options: ['Solo', '2 people', '3-4 people', '5+ people']
        }
      ]
    },
    {
      id: 'experience',
      title: 'Hiking Experience',
      questions: [
        {
          id: 'q2_1',
          text: 'Describe a hike you\'ve done recently',
          type: 'textarea',
          placeholder: 'What was it? How long? How did you feel?'
        },
        {
          id: 'q2_2',
          text: 'What distance is realistic for you in one day?',
          type: 'radio',
          options: ['Under 2 mi', '2-4 mi', '4-6 mi', '6-8 mi', '8-10 mi', '10-15 mi', '15+ mi']
        },
        {
          id: 'q2_3',
          text: 'On a 6-mile hike, what concerns you most?',
          type: 'checkbox',
          options: ['Joints/knees', 'Altitude/cardio', 'Endurance', 'Uneven terrain', 'Exposure/heights', 'Heat/sun', 'Nothing']
        },
        {
          id: 'q2_4',
          text: 'Have you hiked above 10,000 feet?',
          type: 'radio',
          options: ['No', 'Yes, felt fine', 'Yes, had altitude effects']
        }
      ]
    },
    {
      id: 'physical',
      title: 'Health & Limitations',
      questions: [
        {
          id: 'q3_1',
          text: 'Current injuries or limitations?',
          type: 'text',
          placeholder: 'Leave blank if none'
        },
        {
          id: 'q3_2',
          text: 'Terrain types to avoid?',
          type: 'textarea',
          placeholder: 'e.g., steep descents, scrambling'
        },
        {
          id: 'q3_3',
          text: 'How do you perform on descents?',
          type: 'radio',
          options: ['Better on descents', 'Same difficulty', 'Much harder on descents']
        },
        {
          id: 'q3_4',
          text: 'Conditions affecting hiking?',
          type: 'text',
          placeholder: 'e.g., asthma, diabetes, medication timing'
        }
      ]
    },
    {
      id: 'equipment',
      title: 'Gear & Equipment',
      questions: [
        {
          id: 'q4_1',
          text: 'Hiking boots situation?',
          type: 'radio',
          options: ['Yes, broken in', 'Yes, unsure', 'No', 'Using other shoes']
        },
        {
          id: 'q4_2',
          text: 'What backpack do you have?',
          type: 'radio',
          options: ['None', 'Day pack (<25L)', 'Mid-size (25-40L)', 'Multi-day (40L+)']
        },
        {
          id: 'q4_3',
          text: 'Tent/shelter situation?',
          type: 'radio',
          options: ['Own one', 'Have access', 'Need to borrow', 'Not needed']
        },
        {
          id: 'q4_4',
          text: 'Your gear attitude?',
          type: 'radio',
          options: ['Have most of it', 'Happy to rent', 'Want to invest', 'Cheapest option']
        }
      ]
    },
    {
      id: 'risk',
      title: 'Adventure & Risk',
      questions: [
        {
          id: 'q5_1',
          text: 'Steep descent with loose rock?',
          type: 'radio',
          options: ['Turn around', 'Do it slowly, nervous', 'Do it fine', 'No concern']
        },
        {
          id: 'q5_2',
          text: 'Drop-off next to trail?',
          type: 'radio',
          options: ['Avoid if possible', 'Stay far from edge', 'Walk normally', 'No issue']
        },
        {
          id: 'q5_3',
          text: 'Waist-deep river crossing?',
          type: 'radio',
          options: ['Not without guide', 'If others do it', 'With a plan', 'No problem']
        },
        {
          id: 'q5_4',
          text: 'Things go wrong—your response?',
          type: 'radio',
          options: ['Turn back immediately', 'Shorten, keep going', 'Power through', 'Depends']
        }
      ]
    },
    {
      id: 'practical',
      title: 'Practical Constraints',
      questions: [
        {
          id: 'q6_1',
          text: 'Budget for this trip?',
          type: 'radio',
          options: ['Under $500', '$500-$1k', '$1k-$2k', '$2k-$3.5k', '$3.5k+', 'Flexible']
        },
        {
          id: 'q6_2',
          text: 'Hiking days per week?',
          type: 'radio',
          options: ['1-2 days', '3-4 days', '5-6 days', 'Daily']
        },
        {
          id: 'q6_3',
          text: 'Driving comfort?',
          type: 'radio',
          options: ['Prefer not to drive', '2-4 hrs/day OK', '4-6 hrs/day fine', 'Flexible']
        },
        {
          id: 'q6_4',
          text: 'Parks you must visit?',
          type: 'textarea',
          placeholder: 'e.g., Zion, Grand Canyon'
        }
      ]
    },
    {
      id: 'synthesis',
      title: 'What Matters Most',
      questions: [
        {
          id: 'q7_1',
          text: 'What would make this trip worth it?',
          type: 'textarea',
          placeholder: 'What are you actually optimizing for?'
        },
        {
          id: 'q7_2',
          text: 'What would make you regret this?',
          type: 'textarea',
          placeholder: 'The deal-breaker'
        }
      ]
    }
  ];
 
  // Load responses from localStorage (client-side only)
  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem('parksResponses');
    if (saved) {
      try {
        setResponses(JSON.parse(saved));
      } catch (e) {
        console.error('Failed to load saved responses', e);
      }
    }
  }, []);
 
  // Auto-save to localStorage
  useEffect(() => {
    if (mounted) {
      localStorage.setItem('parksResponses', JSON.stringify(responses));
      setSavedAt(new Date());
    }
  }, [responses, mounted]);
 
  const handleCheckbox = (id, option) => {
    const current = responses[id] || [];
    if (current.includes(option)) {
      setResponses({ ...responses, [id]: current.filter(v => v !== option) });
    } else {
      setResponses({ ...responses, [id]: [...current, option] });
    }
  };
 
  const handleRadio = (id, option) => {
    setResponses({ ...responses, [id]: option });
  };
 
  const handleText = (id, value) => {
    setResponses({ ...responses, [id]: value });
  };
 
  const handleExport = () => {
    const text = sections.map(sec => {
      const content = sec.questions.map(q => {
        const ans = responses[q.id];
        return `${q.text}\n→ ${Array.isArray(ans) ? ans.join(', ') : ans || '(not answered)'}`;
      }).join('\n\n');
      return `${sec.title}\n${'='.repeat(sec.title.length)}\n${content}`;
    }).join('\n\n');
 
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'national-parks-questionnaire.txt';
    a.click();
    URL.revokeObjectURL(url);
  };
 
  const currentSection = sections[section];
  const isLastSection = section === sections.length - 1;
  const progress = Math.round(((section + 1) / sections.length) * 100);
 
  return (
    <div style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif', maxWidth: '100%', backgroundColor: '#f5f5f5', minHeight: '100vh' }}>
      <div style={{ paddingTop: '1.5rem', paddingBottom: '8rem', paddingLeft: '1rem', paddingRight: '1rem' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '1.5rem' }}>
          <h1 style={{ fontSize: '20px', fontWeight: 500, margin: '0 0 12px 0', color: '#1a1a1a' }}>
            National Parks Itinerary
          </h1>
          <div style={{ fontSize: '13px', color: '#666', marginBottom: '8px' }}>
            {section + 1} of {sections.length}
          </div>
          <div style={{ width: '100%', height: '4px', backgroundColor: '#e0e0e0', borderRadius: '2px', overflow: 'hidden' }}>
            <div style={{ height: '100%', width: `${progress}%`, backgroundColor: '#2563eb', transition: 'width 0.3s' }}></div>
          </div>
        </div>
 
        {/* Section Title */}
        <h2 style={{ fontSize: '18px', fontWeight: 500, margin: '2rem 0 1.5rem 0', color: '#1a1a1a' }}>
          {currentSection.title}
        </h2>
 
        {/* Questions */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          {currentSection.questions.map(q => (
            <div key={q.id} style={{ borderBottom: '1px solid #e0e0e0', paddingBottom: '1.25rem' }}>
              <label style={{ display: 'block', fontSize: '15px', fontWeight: 500, marginBottom: '8px', color: '#1a1a1a' }}>
                {q.text}
              </label>
 
              {q.type === 'radio' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {q.options.map(opt => (
                    <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '8px', borderRadius: '6px', userSelect: 'none' }}>
                      <input
                        type="radio"
                        name={q.id}
                        value={opt}
                        checked={responses[q.id] === opt}
                        onChange={() => handleRadio(q.id, opt)}
                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '14px', color: '#333' }}>{opt}</span>
                    </label>
                  ))}
                </div>
              )}
 
              {q.type === 'checkbox' && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  {q.options.map(opt => (
                    <label key={opt} style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', padding: '8px', borderRadius: '6px', userSelect: 'none' }}>
                      <input
                        type="checkbox"
                        checked={(responses[q.id] || []).includes(opt)}
                        onChange={() => handleCheckbox(q.id, opt)}
                        style={{ width: '20px', height: '20px', cursor: 'pointer' }}
                      />
                      <span style={{ fontSize: '14px', color: '#333' }}>{opt}</span>
                    </label>
                  ))}
                </div>
              )}
 
              {q.type === 'text' && (
                <input
                  type="text"
                  placeholder={q.placeholder}
                  value={responses[q.id] || ''}
                  onChange={(e) => handleText(q.id, e.target.value)}
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d0d0d0', fontSize: '14px', fontFamily: 'inherit', boxSizing: 'border-box' }}
                />
              )}
 
              {q.type === 'textarea' && (
                <textarea
                  placeholder={q.placeholder}
                  value={responses[q.id] || ''}
                  onChange={(e) => handleText(q.id, e.target.value)}
                  rows="4"
                  style={{ width: '100%', padding: '10px', borderRadius: '6px', border: '1px solid #d0d0d0', fontSize: '14px', fontFamily: 'inherit', resize: 'vertical', boxSizing: 'border-box' }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
 
      {/* Footer Navigation */}
      <div style={{ position: 'fixed', bottom: 0, left: 0, right: 0, backgroundColor: '#fff', borderTop: '1px solid #e0e0e0', padding: '1rem', display: 'flex', gap: '8px' }}>
        <button
          onClick={() => setSection(Math.max(0, section - 1))}
          disabled={section === 0}
          style={{
            flex: 1,
            padding: '12px',
            backgroundColor: '#f0f0f0',
            border: '1px solid #d0d0d0',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 500,
            cursor: section === 0 ? 'default' : 'pointer',
            opacity: section === 0 ? 0.5 : 1,
            color: '#333'
          }}
        >
          Back
        </button>
        {isLastSection ? (
          <button
            onClick={handleExport}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: '#2563eb',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              color: '#fff'
            }}
          >
            Export Responses
          </button>
        ) : (
          <button
            onClick={() => setSection(Math.min(sections.length - 1, section + 1))}
            style={{
              flex: 1,
              padding: '12px',
              backgroundColor: '#2563eb',
              border: 'none',
              borderRadius: '6px',
              fontSize: '14px',
              fontWeight: 500,
              cursor: 'pointer',
              color: '#fff'
            }}
          >
            Next
          </button>
        )}
      </div>
 
      {/* Auto-save indicator */}
      {mounted && savedAt && (
        <div style={{ position: 'fixed', top: '1rem', right: '1rem', fontSize: '11px', color: '#999', textAlign: 'right' }}>
          Saved {savedAt.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
        </div>
      )}
    </div>
  );
};
 
export default ParksQuestionnaire;
 

