import React, { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link, useNavigate, useParams } from 'react-router-dom'
import './App.css'

function Header() {
  return (
    <header className="bg-gradient-to-r from-blue-900 to-purple-900 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">AI-Архитектор для промышленных проектов</h1>
        <Link to="/settings" className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded">
          ⚙️ Настройки API
        </Link>
      </div>
      <div className="container mx-auto mt-2">
        <div className="bg-gray-700 rounded-full h-2">
          <div className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full" style={{ width: '15%' }}></div>
        </div>
      </div>
    </header>
  )
}

function Sidebar({ modules, currentModule, setCurrentModule }) {
  return (
    <aside className="w-80 bg-gray-800 text-white p-6 min-h-screen">
      <h2 className="text-xl font-bold mb-6">Модули курса</h2>
      {modules.map(module => (
        <div 
          key={module.id}
          className={`p-4 mb-4 rounded cursor-pointer transition-colors ${
            module.id === currentModule ? 'bg-blue-600' : 'bg-gray-700 hover:bg-gray-600'
          } ${module.status === 'locked' ? 'opacity-50 cursor-not-allowed' : ''}`}
          onClick={() => module.status !== 'locked' && setCurrentModule(module.id)}
        >
          <div className="font-semibold">{module.title}</div>
          <div className="text-sm text-gray-300 mt-1">{module.description}</div>
          <div className="text-xs text-gray-400 mt-2 flex gap-4">
            <span>{module.lessons} уроков</span>
            <span>{module.tasks} задач</span>
            <span>{module.projects} проектов</span>
          </div>
        </div>
      ))}
    </aside>
  )
}

function Dashboard({ modules }) {
  const navigate = useNavigate()
  
  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">AI-Архитектор для промышленных проектов</h1>
          <p className="text-xl text-gray-300 mb-8">
            Изучите создание AI-систем для реального производства: от анализа данных до внедрения решений
          </p>
          
          <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto">
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-blue-400">1420</div>
              <div className="text-gray-300">Часов обучения</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-purple-400">17</div>
              <div className="text-gray-300">Модулей</div>
            </div>
            <div className="bg-gray-800 p-6 rounded-lg">
              <div className="text-3xl font-bold text-green-400">45</div>
              <div className="text-gray-300">Практических проектов</div>
            </div>
          </div>
        </div>

        {/* Основные модули */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-6">🎓 Основная программа</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.filter(m => m.id <= 7).map(module => (
              <div key={module.id} className="bg-gray-800 rounded-lg p-6 border border-gray-700">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {module.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                      <p className="text-gray-400 text-sm">{module.duration}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{module.description}</p>
                
                <div className="flex justify-between items-center">
                  {module.unlocked ? (
                    <button 
                      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
                      onClick={() => navigate(`/module/${module.id}`)}
                    >
                      Начать изучение
                    </button>
                  ) : (
                    <span className="text-gray-500 flex items-center gap-2">
                      🔒 Заблокировано
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Специализированные модули */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-white mb-4">🔬 Специализация: Промышленные измерительные системы</h2>
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mb-6">
            <p className="text-orange-300">
              ⚡ <strong>Дополнительные модули</strong> для работы с измерительными приборами, российским ПО и промышленной автоматизацией
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.filter(m => m.id > 7).map(module => (
              <div key={module.id} className="bg-gray-800 rounded-lg p-6 border border-orange-500/30 relative">
                {module.isNew && (
                  <div className="absolute -top-2 -right-2 bg-orange-500 text-white text-xs px-2 py-1 rounded-full">
                    НОВЫЙ
                  </div>
                )}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                      {module.id}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-white">{module.title}</h3>
                      <p className="text-gray-400 text-sm">{module.duration}</p>
                    </div>
                  </div>
                </div>
                
                <p className="text-gray-300 mb-4">{module.description}</p>
                
                <div className="flex justify-between items-center">
                  {module.unlocked ? (
                    <button 
                      className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white px-6 py-2 rounded-lg transition-colors"
                      onClick={() => navigate(`/module/${module.id}`)}
                    >
                      Начать изучение
                    </button>
                  ) : (
                    <span className="text-gray-500 flex items-center gap-2">
                      🔒 Заблокировано
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function ModuleView() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const [activeSubmodule, setActiveSubmodule] = useState(1)
  const [completedLessons, setCompletedLessons] = useState([])

  const isLessonCompleted = (lessonId) => completedLessons.includes(lessonId)

  if (moduleId === '11') {
    const submodules = [
      {
        id: 1,
        title: "Отечественные СУБД и платформы",
        lessons: [
          { id: 1, title: "PostgreSQL Pro и отечественные СУБД", duration: "85 мин", type: "theory" },
          { id: 2, title: "Российские облачные платформы", duration: "80 мин", type: "theory" },
          { id: 3, title: "Практика: Развертывание на отечественной инфраструктуре", duration: "150 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Российские AI-платформы",
        lessons: [
          { id: 4, title: "Платформа Сбера и Яндекса для ML", duration: "90 мин", type: "theory" },
          { id: 5, title: "Отечественные фреймворки и библиотеки", duration: "85 мин", type: "theory" },
          { id: 6, title: "Практика: Создание модели на российских платформах", duration: "160 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Требования безопасности",
        lessons: [
          { id: 7, title: "Законодательство и стандарты безопасности", duration: "75 мин", type: "theory" },
          { id: 8, title: "Сертификация и соответствие требованиям", duration: "80 мин", type: "theory" },
          { id: 9, title: "Практика: Аудит безопасности AI-системы", duration: "140 мин", type: "practice" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 11: Российская архитектура и импортозамещение
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите отечественные технологии и требования для создания AI-систем в России
          </p>
          
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mb-6">
            <p className="text-purple-300">
              🇷🇺 <strong>Импортозамещение в AI:</strong> Освойте российские технологии и платформы для создания AI-систем. Изучите требования законодательства и стандарты безопасности для работы в российских корпорациях.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">3</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-pink-400">60</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-indigo-400">9</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">3</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-purple-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            Изучить
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '10') {
    const submodules = [
      {
        id: 1,
        title: "Real-time архитектура",
        lessons: [
          { id: 1, title: "Принципы систем реального времени", duration: "90 мин", type: "theory" },
          { id: 2, title: "Архитектура высокопроизводительных систем", duration: "85 мин", type: "theory" },
          { id: 3, title: "Практика: Проектирование RT-системы", duration: "160 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Потоковая обработка данных",
        lessons: [
          { id: 4, title: "Apache Kafka и потоковые архитектуры", duration: "95 мин", type: "theory" },
          { id: 5, title: "Stream processing для AI", duration: "90 мин", type: "theory" },
          { id: 6, title: "Практика: Система потоковой аналитики", duration: "180 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Big Data для промышленности",
        lessons: [
          { id: 7, title: "Распределенные вычисления и Spark", duration: "100 мин", type: "theory" },
          { id: 8, title: "Хранение и обработка больших данных", duration: "95 мин", type: "theory" },
          { id: 9, title: "Практика: Big Data пайплайн для производства", duration: "200 мин", type: "practice" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 10: Системы реального времени и Big Data
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите архитектуру высокопроизводительных систем и обработку больших данных в промышленности
          </p>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
            <p className="text-red-300">
              ⚡ <strong>Высокопроизводительные системы:</strong> Освойте создание систем реального времени и обработку больших объемов данных. Эти навыки критически важны для современных промышленных AI-систем с высокими требованиями к производительности.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">4</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400">80</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-400">9</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">4</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-red-600 to-orange-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-red-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            Изучить
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '9') {
    const submodules = [
      {
        id: 1,
        title: "Основы DSP для AI",
        lessons: [
          { id: 1, title: "Дискретные сигналы и цифровая фильтрация", duration: "85 мин", type: "theory" },
          { id: 2, title: "Преобразование Фурье и спектральный анализ", duration: "90 мин", type: "theory" },
          { id: 3, title: "Практика: Анализ сигналов измерительных приборов", duration: "150 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Обработка данных приборов",
        lessons: [
          { id: 4, title: "Шумоподавление и восстановление сигналов", duration: "80 мин", type: "theory" },
          { id: 5, title: "Извлечение признаков из временных рядов", duration: "85 мин", type: "theory" },
          { id: 6, title: "Практика: Предобработка данных для ML", duration: "140 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "AI для анализа сигналов",
        lessons: [
          { id: 7, title: "Нейронные сети для обработки временных рядов", duration: "95 мин", type: "theory" },
          { id: 8, title: "Детекция аномалий в сигналах", duration: "90 мин", type: "theory" },
          { id: 9, title: "Практика: AI-система анализа вибраций", duration: "160 мин", type: "practice" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 9: Цифровая обработка сигналов для AI
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Освойте методы цифровой обработки сигналов и их применение в AI-системах для промышленности
          </p>
          
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
            <p className="text-blue-300">
              📊 <strong>DSP + AI для промышленности:</strong> Изучите современные методы обработки сигналов от измерительных приборов и создания AI-систем для анализа данных в реальном времени. Критически важно для диагностики оборудования.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">5</div>
              <div className="text-gray-300">Недель</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-cyan-400">100</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">9</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">5</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-blue-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            Изучить
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '8') {
    const submodules = [
      {
        id: 1,
        title: "SCPI протокол и команды",
        lessons: [
          { id: 1, title: "Основы SCPI: синтаксис и структура команд", duration: "60 мин", type: "theory" },
          { id: 2, title: "Команды для LCR-метров: измерение импеданса", duration: "75 мин", type: "theory" },
          { id: 3, title: "Команды для осциллографов: захват и анализ сигналов", duration: "75 мин", type: "theory" },
          { id: 4, title: "Практика: Программирование базовых измерений", duration: "120 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Интерфейсы связи и драйверы",
        lessons: [
          { id: 5, title: "USB/LAN/GPIB интерфейсы: особенности и применение", duration: "90 мин", type: "theory" },
          { id: 6, title: "PyVISA: универсальная библиотека для приборов", duration: "90 мин", type: "theory" },
          { id: 7, title: "Обработка ошибок и тайм-аутов", duration: "60 мин", type: "theory" },
          { id: 8, title: "Практика: Создание драйвера для измерительного прибора", duration: "150 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Синхронизация и автоматизация",
        lessons: [
          { id: 9, title: "Триггеры и события в измерительных системах", duration: "75 мин", type: "theory" },
          { id: 10, title: "Буферизация данных и управление памятью", duration: "75 мин", type: "theory" },
          { id: 11, title: "Многопоточность в измерительных приложениях", duration: "90 мин", type: "theory" },
          { id: 12, title: "Финальный проект: Автоматизированная измерительная система", duration: "180 мин", type: "project" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 8: Программирование измерительных приборов
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите программирование измерительных приборов через SCPI протокол и создание автоматизированных измерительных систем
          </p>
          
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mb-6">
            <p className="text-orange-300">
              🔬 <strong>Практическая направленность:</strong> Этот модуль даст вам навыки для работы с любыми измерительными приборами - от простых мультиметров до сложных анализаторов спектра. Вы научитесь создавать AI-системы, которые могут управлять оборудованием и анализировать данные в реальном времени.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400">4</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">80</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">12</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">4</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-orange-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 
                                              lesson.type === 'practice' ? 'Практика' : 'Проект'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            {lesson.type === 'project' ? 'Начать проект' : 'Изучить'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '13') {
    const submodules = [
      {
        id: 1,
        title: "Лидерство в AI-проектах",
        lessons: [
          { id: 1, title: "Управление междисциплинарными командами", duration: "85 мин", type: "theory" },
          { id: 2, title: "Планирование и координация AI-проектов", duration: "90 мин", type: "theory" },
          { id: 3, title: "Практика: Ведение AI-проекта", duration: "150 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Техническое руководство",
        lessons: [
          { id: 4, title: "Архитектурные решения и технический долг", duration: "80 мин", type: "theory" },
          { id: 5, title: "Code review и стандарты разработки", duration: "75 мин", type: "theory" },
          { id: 6, title: "Практика: Техническое планирование", duration: "140 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Презентация и коммуникации",
        lessons: [
          { id: 7, title: "Презентация технических решений руководству", duration: "85 мин", type: "theory" },
          { id: 8, title: "Коммуникация с заказчиками и стейкхолдерами", duration: "80 мин", type: "theory" },
          { id: 9, title: "Практика: Защита AI-проекта", duration: "120 мин", type: "practice" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 13: Управление командой и коммуникации
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Развивайте навыки лидерства и управления техническими командами в AI-проектах
          </p>
          
          <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-lg p-4 mb-6">
            <p className="text-indigo-300">
              👥 <strong>Лидерство AI-архитектора:</strong> Освойте навыки управления командами, планирования проектов и презентации технических решений. Эти soft skills критически важны для карьерного роста до позиции ведущего AI-архитектора.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-indigo-400">3</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">60</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-pink-400">9</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">3</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-indigo-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-indigo-600 hover:bg-indigo-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            Изучить
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '12') {
    const submodules = [
      {
        id: 1,
        title: "Низкоуровневое программирование",
        lessons: [
          { id: 1, title: "Программирование микроконтроллеров для AI", duration: "100 мин", type: "theory" },
          { id: 2, title: "Оптимизация кода для встраиваемых систем", duration: "95 мин", type: "theory" },
          { id: 3, title: "Практика: AI на микроконтроллере", duration: "180 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Протоколы и интерфейсы",
        lessons: [
          { id: 4, title: "Промышленные протоколы связи", duration: "90 мин", type: "theory" },
          { id: 5, title: "Интеграция с PLC и SCADA системами", duration: "95 мин", type: "theory" },
          { id: 6, title: "Практика: Подключение AI к промышленной сети", duration: "170 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Системная архитектура",
        lessons: [
          { id: 7, title: "Архитектура гибридных систем", duration: "85 мин", type: "theory" },
          { id: 8, title: "Отказоустойчивость и резервирование", duration: "90 мин", type: "theory" },
          { id: 9, title: "Практика: Проектирование надежной AI-системы", duration: "160 мин", type: "practice" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 12: Интеграция аппаратного и программного обеспечения
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите интеграцию AI-систем с промышленным оборудованием и создание гибридных решений
          </p>
          
          <div className="bg-teal-900/20 border border-teal-500/30 rounded-lg p-4 mb-6">
            <p className="text-teal-300">
              🔧 <strong>Hardware + Software интеграция:</strong> Освойте создание AI-систем, интегрированных с промышленным оборудованием. Изучите низкоуровневое программирование и протоколы для надежной работы в производственной среде.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-teal-400">4</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-cyan-400">80</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">9</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">4</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-teal-600 to-cyan-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-teal-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            Изучить
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '11') {
    const submodules = [
      {
        id: 1,
        title: "Отечественные СУБД",
        lessons: [
          { id: 1, title: "Postgres Pro: расширенные возможности для AI", duration: "90 мин", type: "theory" },
          { id: 2, title: "Ред База Данных: промышленные решения", duration: "75 мин", type: "theory" },
          { id: 3, title: "Временные ряды в российских СУБД", duration: "90 мин", type: "theory" },
          { id: 4, title: "Практика: Развертывание AI-системы на Postgres Pro", duration: "120 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Российские AI-платформы",
        lessons: [
          { id: 5, title: "Yandex DataSphere: облачные ML-решения", duration: "75 мин", type: "theory" },
          { id: 6, title: "Сбер ИИ-решения для бизнеса: корпоративные AI-сервисы", duration: "75 мин", type: "theory" },
          { id: 7, title: "VK Cloud AI: доступные решения для бизнеса", duration: "60 мин", type: "theory" },
          { id: 8, title: "Практика: Миграция модели на российскую платформу", duration: "150 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Безопасность и соответствие",
        lessons: [
          { id: 9, title: "Требования ФСТЭК для AI-систем", duration: "60 мин", type: "theory" },
          { id: 10, title: "Криптографическая защита данных", duration: "75 мин", type: "theory" },
          { id: 11, title: "Аудит и логирование в промышленных системах", duration: "60 мин", type: "theory" },
          { id: 12, title: "Проект: Сертификация AI-системы по российским стандартам", duration: "180 мин", type: "project" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 11: Российская архитектура и импортозамещение
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Освойте работу с отечественными технологиями и требования российского законодательства для AI-систем
          </p>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
            <p className="text-red-300">
              🇷🇺 <strong>Импортозамещение:</strong> Изучите российские аналоги зарубежных решений и требования для работы в критически важных отраслях. Этот модуль обязателен для работы в государственных и стратегических компаниях.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">3</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">60</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">9</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">3</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-red-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 
                                              lesson.type === 'practice' ? 'Практика' : 'Проект'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            {lesson.type === 'project' ? 'Начать проект' : 'Изучить'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '13') {
    const submodules = [
      {
        id: 1,
        title: "Лидерство в AI-проектах",
        lessons: [
          { id: 1, title: "Роль AI-архитектора в команде: от технического эксперта к лидеру", duration: "90 мин", type: "theory" },
          { id: 2, title: "Управление междисциплинарными командами: инженеры, аналитики, бизнес", duration: "75 мин", type: "theory" },
          { id: 3, title: "Принятие технических решений в условиях неопределенности", duration: "90 мин", type: "theory" },
          { id: 4, title: "Практика: Симуляция руководства AI-проектом", duration: "120 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Коммуникации и презентации",
        lessons: [
          { id: 5, title: "Презентация технических решений нетехническим стейкхолдерам", duration: "90 мин", type: "theory" },
          { id: 6, title: "Визуализация AI-архитектуры и результатов", duration: "75 мин", type: "theory" },
          { id: 7, title: "Управление ожиданиями заказчиков и руководства", duration: "60 мин", type: "theory" },
          { id: 8, title: "Практика: Защита AI-проекта перед советом директоров", duration: "150 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Управление проектами и процессами",
        lessons: [
          { id: 9, title: "Agile/Scrum для AI-разработки: особенности и адаптация", duration: "75 мин", type: "theory" },
          { id: 10, title: "Планирование и контроль AI-проектов: риски и митигация", duration: "90 мин", type: "theory" },
          { id: 11, title: "Построение процессов MLOps в команде", duration: "75 мин", type: "theory" },
          { id: 12, title: "Финальный проект: Управление внедрением AI-системы на производстве", duration: "180 мин", type: "project" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 13: Управление командой и коммуникации
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Освойте навыки лидерства, управления техническими командами и эффективной коммуникации для успешной работы AI-архитектором
          </p>
          
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
            <p className="text-blue-300">
              👥 <strong>Лидерские навыки:</strong> AI-архитектор - это не только технический эксперт, но и лидер команды. Этот модуль научит вас руководить проектами, управлять людьми и эффективно коммуницировать с разными уровнями организации.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">3</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">60</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">9</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">3</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-blue-600 to-blue-700 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-blue-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 
                                              lesson.type === 'practice' ? 'Практика' : 'Проект'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            {lesson.type === 'project' ? 'Начать проект' : 'Изучить'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '14') {
    const submodules = [
      {
        id: 1,
        title: "Основы безопасности в атомной промышленности",
        lessons: [
          { id: 1, title: "Принципы ядерной безопасности и культура безопасности", duration: "120 мин", type: "theory" },
          { id: 2, title: "Радиационная защита и дозиметрический контроль", duration: "90 мин", type: "theory" },
          { id: 3, title: "Системы физической защиты АЭС", duration: "75 мин", type: "theory" },
          { id: 4, title: "Практика: Анализ систем безопасности АЭС", duration: "150 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "AI для мониторинга и диагностики",
        lessons: [
          { id: 5, title: "Мониторинг состояния реакторного оборудования с помощью AI", duration: "105 мин", type: "theory" },
          { id: 6, title: "Предиктивная диагностика критически важных систем", duration: "120 мин", type: "theory" },
          { id: 7, title: "Обработка данных с датчиков радиационного контроля", duration: "90 мин", type: "theory" },
          { id: 8, title: "Практика: Создание системы раннего предупреждения", duration: "180 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Стандарты качества и сертификация",
        lessons: [
          { id: 9, title: "Стандарты МАГАТЭ для AI-систем на АЭС", duration: "90 мин", type: "theory" },
          { id: 10, title: "Требования Ростехнадзора к автоматизированным системам", duration: "75 мин", type: "theory" },
          { id: 11, title: "Процедуры верификации и валидации AI-моделей", duration: "105 мин", type: "theory" },
          { id: 12, title: "Практика: Подготовка документации для сертификации", duration: "150 мин", type: "practice" }
        ]
      },
      {
        id: 4,
        title: "Радиационная стойкость и надежность",
        lessons: [
          { id: 13, title: "Влияние радиации на электронные компоненты AI-систем", duration: "90 мин", type: "theory" },
          { id: 14, title: "Проектирование отказоустойчивых AI-архитектур", duration: "120 мин", type: "theory" },
          { id: 15, title: "Финальный проект: AI-система для управления безопасностью АЭС", duration: "240 мин", type: "project" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 14: AI-системы в атомной промышленности
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите специфику применения искусственного интеллекта в атомной энергетике с учетом строжайших требований безопасности и надежности
          </p>
          
          <div className="bg-red-900/20 border border-red-500/30 rounded-lg p-4 mb-6">
            <p className="text-red-300">
              ⚛️ <strong>Критическая важность:</strong> AI-системы в атомной промышленности требуют максимального уровня безопасности, надежности и соответствия международным стандартам. Этот модуль научит вас создавать AI-решения для самых ответственных применений.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">5</div>
              <div className="text-gray-300">Недель</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">120</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">15</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">6</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-2 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-3 rounded-lg transition-colors text-sm ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-red-600 to-red-700 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-red-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 
                                              lesson.type === 'practice' ? 'Практика' : 'Проект'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            {lesson.type === 'project' ? 'Начать проект' : 'Изучить'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '4') {
    const submodules = [
      {
        id: 1,
        title: "Обработка изображений",
        lessons: [
          { id: 1, title: "Основы цифровой обработки изображений в производстве", duration: "85 мин", type: "theory" },
          { id: 2, title: "Фильтрация и улучшение качества изображений", duration: "75 мин", type: "theory" },
          { id: 3, title: "Практика: Предобработка изображений продукции", duration: "120 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Детекция и сегментация объектов",
        lessons: [
          { id: 4, title: "Алгоритмы детекции объектов (YOLO, R-CNN)", duration: "95 мин", type: "theory" },
          { id: 5, title: "Семантическая сегментация для промышленности", duration: "90 мин", type: "theory" },
          { id: 6, title: "Практика: Детекция дефектов на производстве", duration: "150 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Промышленное машинное зрение",
        lessons: [
          { id: 7, title: "Системы технического зрения на конвейере", duration: "80 мин", type: "theory" },
          { id: 8, title: "Калибровка камер и 3D-реконструкция", duration: "85 мин", type: "theory" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 4: Computer Vision
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите компьютерное зрение для промышленных применений: от обработки изображений до систем контроля качества
          </p>
          
          <div className="bg-cyan-900/20 border border-cyan-500/30 rounded-lg p-4 mb-6">
            <p className="text-cyan-300">
              👁️ <strong>Машинное зрение в производстве:</strong> Освойте технологии компьютерного зрения для автоматического контроля качества, детекции дефектов и мониторинга производственных процессов в реальном времени.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-cyan-400">4</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">80</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">8</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">3</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-cyan-600 to-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-cyan-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-cyan-600 hover:bg-cyan-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            Изучить
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '7') {
    const submodules = [
      {
        id: 1,
        title: "Планирование проекта",
        lessons: [
          { id: 1, title: "Анализ требований и техническое задание", duration: "90 мин", type: "theory" },
          { id: 2, title: "Архитектура AI-системы для производства", duration: "95 мин", type: "theory" },
          { id: 3, title: "Выбор технологий и планирование ресурсов", duration: "85 мин", type: "theory" }
        ]
      },
      {
        id: 2,
        title: "Реализация системы",
        lessons: [
          { id: 4, title: "Разработка модулей сбора и обработки данных", duration: "180 мин", type: "practice" },
          { id: 5, title: "Создание и обучение ML-моделей", duration: "200 мин", type: "practice" },
          { id: 6, title: "Интеграция с производственными системами", duration: "160 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Тестирование и развертывание",
        lessons: [
          { id: 7, title: "Тестирование системы в промышленных условиях", duration: "140 мин", type: "practice" },
          { id: 8, title: "Развертывание и мониторинг", duration: "120 мин", type: "practice" },
          { id: 9, title: "Презентация результатов и защита проекта", duration: "90 мин", type: "practice" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 7: Финальный проект
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Создайте полноценную AI-систему для промышленного применения от планирования до развертывания
          </p>
          
          <div className="bg-yellow-900/20 border border-yellow-500/30 rounded-lg p-4 mb-6">
            <p className="text-yellow-300">
              🎯 <strong>Итоговый проект AI-архитектора:</strong> Примените все полученные знания для создания реальной AI-системы. Этот проект станет основой вашего портфолио и демонстрацией готовности к работе AI-архитектором в крупной корпорации.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-400">6</div>
              <div className="text-gray-300">Недель</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400">120</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">9</div>
              <div className="text-gray-300">Этапов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">1</div>
              <div className="text-gray-300">Проект</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-yellow-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-yellow-600 hover:bg-yellow-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            {lesson.type === 'theory' ? 'Изучить' : 'Выполнить'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '6') {
    const submodules = [
      {
        id: 1,
        title: "CI/CD для ML",
        lessons: [
          { id: 1, title: "Версионирование моделей и данных", duration: "80 мин", type: "theory" },
          { id: 2, title: "Автоматизация обучения и тестирования моделей", duration: "85 мин", type: "theory" },
          { id: 3, title: "Практика: Настройка CI/CD пайплайна для ML", duration: "140 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Мониторинг и управление моделями",
        lessons: [
          { id: 4, title: "Мониторинг производительности моделей в продакшене", duration: "75 мин", type: "theory" },
          { id: 5, title: "Детекция дрифта данных и модели", duration: "70 мин", type: "theory" },
          { id: 6, title: "Практика: Система мониторинга ML-моделей", duration: "130 мин", type: "practice" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 6: MLOps и развертывание
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите современные практики развертывания и управления ML-моделями в промышленных системах
          </p>
          
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className="text-green-300">
              🚀 <strong>MLOps для промышленности:</strong> Освойте полный цикл разработки и развертывания ML-систем: от версионирования моделей до мониторинга в продакшене. Эти навыки критически важны для надежной работы AI в производстве.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">3</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">60</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">6</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400">3</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-green-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            Изучить
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '5') {
    const submodules = [
      {
        id: 1,
        title: "Предиктивная аналитика",
        lessons: [
          { id: 1, title: "Прогнозирование отказов оборудования", duration: "90 мин", type: "theory" },
          { id: 2, title: "Анализ временных рядов для производства", duration: "85 мин", type: "theory" },
          { id: 3, title: "Практика: Система предсказания поломок", duration: "140 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Контроль качества",
        lessons: [
          { id: 4, title: "AI для автоматического контроля качества", duration: "80 мин", type: "theory" },
          { id: 5, title: "Статистический контроль процессов с AI", duration: "75 мин", type: "theory" },
          { id: 6, title: "Практика: Система контроля качества продукции", duration: "130 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Оптимизация процессов",
        lessons: [
          { id: 7, title: "Оптимизация производственных параметров", duration: "85 мин", type: "theory" },
          { id: 8, title: "Энергоэффективность с помощью AI", duration: "70 мин", type: "theory" },
          { id: 9, title: "Планирование производства с AI", duration: "80 мин", type: "theory" },
          { id: 10, title: "Практика: Оптимизация производственной линии", duration: "160 мин", type: "practice" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 5: Промышленные применения AI
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите практическое применение AI в промышленности: предиктивная аналитика, контроль качества и оптимизация
          </p>
          
          <div className="bg-orange-900/20 border border-orange-500/30 rounded-lg p-4 mb-6">
            <p className="text-orange-300">
              🏭 <strong>Реальные промышленные решения:</strong> Освойте создание AI-систем для предсказания поломок, автоматического контроля качества и оптимизации производственных процессов. Эти навыки критически важны для AI-архитектора.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400">5</div>
              <div className="text-gray-300">Недель</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-red-400">100</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-yellow-400">10</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">5</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-orange-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-orange-600 hover:bg-orange-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => setCompletedLessons([...completedLessons, lesson.id])}
                          >
                            Изучить
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '3') {
    const submodules = [
      {
        id: 1,
        title: "Основы нейронных сетей",
        lessons: [
          { id: 1, title: "Персептрон и многослойные сети для промышленности", duration: "95 мин", type: "theory" },
          { id: 2, title: "Функции активации и их выбор для производственных задач", duration: "70 мин", type: "theory" },
          { id: 3, title: "Обратное распространение ошибки", duration: "85 мин", type: "theory" },
          { id: 4, title: "Практика: Нейросеть для контроля качества", duration: "140 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Сверточные нейронные сети (CNN)",
        lessons: [
          { id: 5, title: "Архитектура CNN для анализа изображений продукции", duration: "90 мин", type: "theory" },
          { id: 6, title: "Слои свертки и пулинга в промышленном контексте", duration: "75 мин", type: "theory" },
          { id: 7, title: "Transfer Learning для промышленных задач", duration: "80 мин", type: "theory" },
          { id: 8, title: "Практика: Детекция дефектов на конвейере", duration: "160 мин", type: "practice" }
        ]
      },
      {
        id: 3,
        title: "Рекуррентные сети и Трансформеры",
        lessons: [
          { id: 9, title: "RNN и LSTM для анализа временных рядов", duration: "85 мин", type: "theory" },
          { id: 10, title: "Архитектура Transformer для промышленных данных", duration: "95 мин", type: "theory" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 3: Глубокое обучение
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите современные архитектуры нейронных сетей и их применение в промышленных системах
          </p>
          
          <div className="bg-purple-900/20 border border-purple-500/30 rounded-lg p-4 mb-6">
            <p className="text-purple-300">
              🧠 <strong>Глубокое обучение в производстве:</strong> Освойте CNN для анализа изображений продукции, RNN для прогнозирования временных рядов и Transformer для обработки сложных промышленных данных. Эти технологии - основа современных AI-систем.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">5</div>
              <div className="text-gray-300">Недель</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-pink-400">100</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">10</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">4</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-purple-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 
                                              lesson.type === 'interactive' ? 'Интерактивная задача' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => {
                              if (lesson.type === 'interactive') {
                                navigate(`/task/3/${lesson.id}`)
                              } else {
                                setCompletedLessons([...completedLessons, lesson.id])
                              }
                            }}
                          >
                            {lesson.type === 'interactive' ? 'Решить' : 'Изучить'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '2') {
    const submodules = [
      {
        id: 1,
        title: "Алгоритмы обучения с учителем",
        lessons: [
          { id: 1, title: "Линейная и логистическая регрессия для промышленности", duration: "90 мин", type: "theory" },
          { id: 2, title: "Деревья решений для диагностики оборудования", duration: "75 мин", type: "theory" },
          { id: 3, title: "Случайный лес для предсказания отказов", duration: "85 мин", type: "theory" },
          { id: 4, title: "Практика: Предсказание качества продукции", duration: "120 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Алгоритмы обучения без учителя",
        lessons: [
          { id: 5, title: "Кластеризация производственных данных", duration: "70 мин", type: "theory" },
          { id: 6, title: "Снижение размерности для анализа сенсоров", duration: "65 мин", type: "theory" },
          { id: 7, title: "Обнаружение аномалий в работе оборудования", duration: "80 мин", type: "theory" },
          { id: 8, title: "Практика: Выявление неисправностей без меток", duration: "135 мин", type: "practice" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 2: Основы машинного обучения
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите фундаментальные алгоритмы машинного обучения и их применение в промышленных задачах
          </p>
          
          <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-4 mb-6">
            <p className="text-green-300">
              🤖 <strong>Практическое применение:</strong> В этом модуле вы освоите основные алгоритмы ML для решения реальных промышленных задач: предсказание качества продукции, диагностика оборудования, обнаружение аномалий и оптимизация процессов.
            </p>
          </div>

          <div className="grid grid-cols-4 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">4</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">80</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">8</div>
              <div className="text-gray-300">Уроков</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-orange-400">3</div>
              <div className="text-gray-300">Проектов</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-green-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 
                                              lesson.type === 'interactive' ? 'Интерактивная задача' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => {
                              if (lesson.type === 'interactive') {
                                navigate(`/task/2/${lesson.id}`)
                              } else {
                                setCompletedLessons([...completedLessons, lesson.id])
                              }
                            }}
                          >
                            {lesson.type === 'interactive' ? 'Решить' : 'Изучить'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  if (moduleId === '1') {
    const submodules = [
      {
        id: 1,
        title: "Линейная алгебра",
        lessons: [
          { id: 1, title: "Векторы и их применение в промышленности", duration: "120 мин", type: "theory" },
          { id: 2, title: "Матрицы для анализа производственных данных", duration: "150 мин", type: "theory" },
          { id: 3, title: "Практика: Анализ данных датчиков", duration: "180 мин", type: "practice" }
        ]
      },
      {
        id: 2,
        title: "Статистика и вероятность",
        lessons: [
          { id: 4, title: "Основы статистики для AI", duration: "50 мин", type: "theory" },
          { id: 5, title: "Вероятностные модели", duration: "55 мин", type: "theory" }
        ]
      }
    ]

    return (
      <div className="flex-1 p-8">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-3xl font-bold text-white mb-4">
            Модуль 1: Математические основы AI
          </h1>
          <p className="text-gray-300 text-lg mb-6">
            Изучите фундаментальные математические концепции, необходимые для понимания алгоритмов машинного обучения
          </p>
          
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4 mb-6">
            <p className="text-blue-300">
              🏭 <strong>Контекст для производства:</strong> В этом модуле вы изучите, как представлять данные с промышленных датчиков в виде векторов и матриц, выполнять операции над ними и использовать для обучения AI-моделей. Эти навыки необходимы для анализа состояния оборудования и предсказания поломок.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-blue-400">4</div>
              <div className="text-gray-300">Недели</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-purple-400">90</div>
              <div className="text-gray-300">Часов</div>
            </div>
            <div className="bg-gray-800 p-4 rounded-lg text-center">
              <div className="text-2xl font-bold text-green-400">6</div>
              <div className="text-gray-300">Уроков</div>
            </div>
          </div>

          <div className="flex gap-4 mb-6">
            {submodules.map(submodule => (
              <button
                key={submodule.id}
                onClick={() => setActiveSubmodule(submodule.id)}
                className={`flex-1 p-4 rounded-lg transition-colors ${
                  activeSubmodule === submodule.id 
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white' 
                    : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                }`}
              >
                {submodule.title}
              </button>
            ))}
          </div>

          {submodules.map(submodule => (
            activeSubmodule === submodule.id && (
              <div key={submodule.id}>
                <h2 className="text-2xl font-semibold text-blue-400 mb-6">
                  {submodule.title}
                </h2>
                
                <div className="space-y-4">
                  {submodule.lessons.map(lesson => (
                    <div key={lesson.id} className="bg-gray-800 border border-gray-700 rounded-lg p-6 flex justify-between items-center">
                      <div>
                        <div className={`text-white font-semibold mb-2 ${
                          isLessonCompleted(lesson.id) ? 'line-through opacity-70' : ''
                        }`}>
                          {lesson.title}
                        </div>
                        <div className="text-gray-400 text-sm">
                          {lesson.duration} • {lesson.type === 'theory' ? 'Теория' : 
                                              lesson.type === 'interactive' ? 'Интерактивная задача' : 'Практика'}
                        </div>
                      </div>
                      <div>
                        {isLessonCompleted(lesson.id) ? (
                          <span className="text-green-400 text-xl">✓</span>
                        ) : (
                          <button 
                            className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors"
                            onClick={() => {
                              if (lesson.type === 'interactive') {
                                navigate(`/task/1/${lesson.id}`)
                              } else {
                                setCompletedLessons([...completedLessons, lesson.id])
                              }
                            }}
                          >
                            {lesson.type === 'interactive' ? 'Решить' : 'Изучить'}
                          </button>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          ))}
        </div>

        <div className="max-w-4xl mx-auto mt-8 pt-8 border-t border-gray-700">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="flex-1 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Модуль {moduleId}</h1>
        <p className="text-gray-300 mb-6">Содержимое модуля {moduleId} будет добавлено позже.</p>
        <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
          ← Назад к дашборду
        </Link>
      </div>
    </div>
  )
}

function InteractiveTask() {
  const { moduleId } = useParams()
  const navigate = useNavigate()
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [selectedAnswer, setSelectedAnswer] = useState(null)
  const [score, setScore] = useState(0)
  const [showExplanation, setShowExplanation] = useState(false)

  const questions = [
    {
      question: "Что такое вектор в контексте AI для промышленности?",
      options: [
        "A. Просто список чисел без практического применения",
        "B. Набор чисел, описывающий состояние системы (например, [температура, давление, скорость])",
        "C. Только математическая абстракция",
        "D. Графическая стрелка на экране"
      ],
      correct: 1,
      explanation: "Правильно! В промышленности вектор - это набор чисел, описывающий состояние системы. Например, датчики на заводе передают данные в виде векторов: [время, температура, давление, вибрация]. AI анализирует эти векторы для принятия решений."
    },
    {
      question: "Зачем нужно сложение векторов на производстве?",
      options: [
        "A. Для красивых графиков",
        "B. Только для математических расчетов",
        "C. Для объединения данных с разных датчиков и анализа общего состояния оборудования",
        "D. Это не нужно в реальной работе"
      ],
      correct: 2,
      explanation: "Верно! Сложение векторов позволяет объединять данные с разных источников. Например, вектор от датчика температуры + вектор от датчика вибрации = общая картина состояния станка."
    },
    {
      question: "Как расстояние между векторами помогает в промышленности?",
      options: [
        "A. Никак не помогает",
        "B. Только для академических исследований", 
        "C. Помогает AI определить, насколько похожи два состояния оборудования и предсказать поломки",
        "D. Используется только в компьютерных играх"
      ],
      correct: 2,
      explanation: "Отлично! Расстояние между векторами показывает, насколько различаются состояния оборудования. Если текущий вектор далеко от 'нормального' - возможна поломка. Это основа предиктивной аналитики!"
    }
  ]

  const handleAnswerSelect = (answerIndex) => {
    setSelectedAnswer(answerIndex)
    setShowExplanation(true)
    if (answerIndex === questions[currentQuestion].correct) {
      setScore(score + 1)
    }
  }

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setSelectedAnswer(null)
      setShowExplanation(false)
    } else {
      navigate(`/module/${moduleId}`)
    }
  }

  return (
    <div className="flex-1 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-white mb-4">Интерактивная задача: Векторные операции</h1>
          <div className="bg-blue-900/20 border border-blue-500/30 rounded-lg p-4">
            <p className="text-blue-300">
              🎯 <strong>Цель:</strong> Понять, как векторы применяются в реальной промышленности для анализа данных и принятия решений AI-системами.
            </p>
          </div>
        </div>

        <div className="bg-gray-800 border border-gray-700 rounded-lg p-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <span className="text-gray-400">
                Вопрос {currentQuestion + 1} из {questions.length}
              </span>
              <span className="text-gray-400">
                Счет: {score}/{questions.length}
              </span>
            </div>
            
            <div className="bg-gray-700 rounded-full h-2 mb-6">
              <div 
                className="bg-gradient-to-r from-blue-500 to-purple-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
              />
            </div>
          </div>

          <h2 className="text-xl font-semibold text-white mb-6">
            {questions[currentQuestion].question}
          </h2>

          <div className="space-y-3 mb-6">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => !showExplanation && handleAnswerSelect(index)}
                disabled={showExplanation}
                className={`w-full p-4 text-left rounded-lg border transition-all ${
                  showExplanation 
                    ? (index === questions[currentQuestion].correct 
                        ? 'bg-green-900/20 border-green-500 text-green-300' 
                        : selectedAnswer === index 
                          ? 'bg-red-900/20 border-red-500 text-red-300' 
                          : 'bg-gray-700 border-gray-600 text-gray-300')
                    : selectedAnswer === index 
                      ? 'bg-blue-900/20 border-blue-500 text-blue-300' 
                      : 'bg-gray-700 border-gray-600 text-white hover:bg-gray-600'
                } ${showExplanation ? 'cursor-default' : 'cursor-pointer'}`}
              >
                {option}
              </button>
            ))}
          </div>

          {showExplanation && (
            <div className="bg-green-900/20 border border-green-500/30 rounded-lg p-6 mb-6">
              <h4 className="text-green-400 font-semibold mb-3">💡 Объяснение:</h4>
              <p className="text-gray-300">
                {questions[currentQuestion].explanation}
              </p>
            </div>
          )}

          <div className="flex justify-between items-center">
            <button 
              onClick={() => navigate(`/module/${moduleId}`)}
              className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors"
            >
              ← Назад к модулю
            </button>

            {showExplanation && (
              <button 
                onClick={handleNext}
                className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-2 rounded-lg transition-colors"
              >
                {currentQuestion < questions.length - 1 ? 'Следующий вопрос →' : 'Завершить задачу ✓'}
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function Settings() {
  const [apiKeys, setApiKeys] = useState({
    openai: '',
    claude: '',
    gemini: '',
    grok: ''
  })

  const handleSave = (provider) => {
    alert(`API ключ для ${provider} сохранен!`)
  }

  return (
    <div className="flex-1 p-8">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-white mb-4">Настройки API</h1>
        <p className="text-gray-300 mb-8">
          Настройте API ключи для работы с различными AI-моделями
        </p>

        <div className="space-y-6">
          {Object.entries(apiKeys).map(([provider, key]) => (
            <div key={provider} className="bg-gray-800 border border-gray-700 rounded-lg p-6">
              <h3 className="text-white font-semibold mb-4 capitalize">
                {provider === 'openai' ? 'OpenAI' : 
                 provider === 'claude' ? 'Claude' :
                 provider === 'gemini' ? 'Gemini' : 'Grok'}
              </h3>
              <div className="flex gap-4">
                <input
                  type="password"
                  placeholder={`Введите API ключ для ${provider}`}
                  value={key}
                  onChange={(e) => setApiKeys({...apiKeys, [provider]: e.target.value})}
                  className="flex-1 bg-gray-700 border border-gray-600 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
                />
                <button 
                  onClick={() => handleSave(provider)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg transition-colors"
                >
                  Сохранить
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8">
          <Link to="/" className="bg-gray-700 hover:bg-gray-600 text-white px-6 py-2 rounded-lg transition-colors">
            ← Назад к дашборду
          </Link>
        </div>
      </div>
    </div>
  )
}

function App() {
  const [currentModule, setCurrentModule] = useState(1)

  const modules = [
    {
      id: 1,
      title: "Математические основы AI",
      description: "Линейная алгебра, статистика, теория вероятностей",
      duration: "4 недели • 90 часов",
      lessons: 6,
      tasks: 3,
      projects: 2,
      status: 'available',
      unlocked: true
    },
    {
      id: 2,
      title: "Основы машинного обучения",
      description: "Алгоритмы ML, обучение с учителем и без учителя",
      duration: "4 недели • 80 часов",
      lessons: 8,
      tasks: 5,
      projects: 3,
      status: 'locked',
      unlocked: false
    },
    {
      id: 3,
      title: "Глубокое обучение",
      description: "Нейронные сети, CNN, RNN, трансформеры",
      duration: "5 недель • 100 часов",
      lessons: 10,
      tasks: 6,
      projects: 4,
      status: 'locked',
      unlocked: false
    },
    {
      id: 4,
      title: "Computer Vision",
      description: "Обработка изображений, детекция объектов, сегментация",
      duration: "4 недели • 80 часов",
      lessons: 8,
      tasks: 5,
      projects: 3,
      status: 'locked',
      unlocked: false
    },
    {
      id: 5,
      title: "Промышленные применения AI",
      description: "Предиктивная аналитика, контроль качества, оптимизация",
      duration: "5 недель • 100 часов",
      lessons: 10,
      tasks: 6,
      projects: 5,
      status: 'locked',
      unlocked: false
    },
    {
      id: 6,
      title: "MLOps и развертывание",
      description: "CI/CD для ML, мониторинг моделей, масштабирование",
      duration: "3 недели • 60 часов",
      lessons: 6,
      tasks: 4,
      projects: 3,
      status: 'locked',
      unlocked: false
    },
    {
      id: 7,
      title: "Финальный проект",
      description: "Создание полноценной AI-системы для производства",
      duration: "2 недели • 40 часов",
      lessons: 0,
      tasks: 0,
      projects: 1,
      status: 'locked',
      unlocked: false
    },
    {
      id: 8,
      title: "Программирование измерительных приборов",
      description: "SCPI протокол, интерфейсы USB/LAN/GPIB, синхронизация приборов",
      duration: "4 недели • 80 часов",
      lessons: 12,
      tasks: 8,
      projects: 4,
      status: 'locked',
      unlocked: false,
      isNew: true
    },
    {
      id: 9,
      title: "Цифровая обработка сигналов для AI",
      description: "DSP, спектральный анализ, обработка данных измерительных приборов",
      duration: "5 недель • 100 часов",
      lessons: 15,
      tasks: 10,
      projects: 5,
      status: 'locked',
      unlocked: false,
      isNew: true
    },
    {
      id: 10,
      title: "Системы реального времени и Big Data",
      description: "Real-time архитектура, потоковая обработка, высокопроизводительные вычисления",
      duration: "4 недели • 80 часов",
      lessons: 12,
      tasks: 8,
      projects: 4,
      status: 'locked',
      unlocked: false,
      isNew: true
    },
    {
      id: 11,
      title: "Российская архитектура и импортозамещение",
      description: "Отечественные СУБД, российские AI-платформы, требования безопасности",
      duration: "3 недели • 60 часов",
      lessons: 9,
      tasks: 6,
      projects: 3,
      status: 'locked',
      unlocked: false,
      isNew: true
    },
    {
      id: 12,
      title: "Интеграция аппаратного и программного обеспечения",
      description: "Низкоуровневое программирование, протоколы, системная архитектура",
      duration: "4 недели • 80 часов",
      lessons: 12,
      tasks: 8,
      projects: 4,
      status: 'locked',
      unlocked: false,
      isNew: true
    },
    {
      id: 13,
      title: "Управление командой и коммуникации",
      description: "Лидерство в AI-проектах, управление техническими командами, презентация решений",
      duration: "3 недели • 60 часов",
      lessons: 9,
      tasks: 6,
      projects: 3,
      status: 'locked',
      unlocked: false,
      isNew: true
    },
    {
      id: 14,
      title: "AI-системы в атомной промышленности",
      description: "Безопасность, надежность, радиационная стойкость, стандарты качества для АЭС",
      duration: "5 недель • 120 часов",
      lessons: 15,
      tasks: 10,
      projects: 6,
      status: 'locked',
      unlocked: false,
      isNew: true
    },
    {
      id: 15,
      title: "Этика и право в AI",
      description: "Этические принципы AI, правовое регулирование, GDPR, ответственность за AI-решения",
      duration: "3 недели • 60 часов",
      lessons: 8,
      tasks: 5,
      projects: 2,
      status: 'locked',
      unlocked: false,
      isNew: true
    },
    {
      id: 16,
      title: "Кибербезопасность AI-систем",
      description: "Угрозы для AI, adversarial attacks, защита данных в ML, аудит безопасности",
      duration: "4 недели • 80 часов",
      lessons: 10,
      tasks: 7,
      projects: 3,
      status: 'locked',
      unlocked: false,
      isNew: true
    },
    {
      id: 17,
      title: "Российское законодательство в AI",
      description: "ФЗ о персональных данных, требования Роскомнадзора, отечественные стандарты AI",
      duration: "3 недели • 60 часов",
      lessons: 9,
      tasks: 6,
      projects: 2,
      status: 'locked',
      unlocked: false,
      isNew: true
    }
  ]

  return (
    <Router>
      <div className="min-h-screen bg-gray-900">
        <Header />
        <div className="flex">
          <Sidebar modules={modules} currentModule={currentModule} setCurrentModule={setCurrentModule} />
          <Routes>
            <Route path="/" element={<Dashboard modules={modules} />} />
            <Route path="/module/:moduleId" element={<ModuleView />} />
            <Route path="/task/:moduleId/:taskId" element={<InteractiveTask />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </div>
    </Router>
  )
}

export default App

