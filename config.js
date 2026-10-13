/* Настройки публичной части. Таймер будет включён после согласования длительности.
   Не храните здесь ключи ответов, пароль преподавателя или секреты. */
window.EXAM_CONFIG = {
  endpoint: "https://script.google.com/macros/s/AKfycbz0AtsnzG_a_2Hjq-7AD0X_CV0PwE_zj7Z9mCEjjLlTjQNa1iONBPhgI1MwnArcRK_rbQ/exec",
  timeLimitMinutes: 0,
  maxViolations: 3,
  grades: [{min:90,grade:5},{min:75,grade:4},{min:60,grade:3},{min:0,grade:2}]
};
