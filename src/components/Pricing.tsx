export default function Pricing() {
  return (
    <div className="min-h-screen bg-neutral-50 flex items-center justify-center px-6 py-24">
      <div className="max-w-2xl w-full">
        <p className="uppercase text-sm tracking-wide text-neutral-500 mb-4 text-center">Стоимость</p>
        <h2 className="text-4xl md:text-5xl font-bold text-neutral-900 text-center mb-16 leading-tight">
          Один курс —<br />всё включено
        </h2>

        <div className="bg-white border border-neutral-200 p-10 flex flex-col items-center text-center">
          <span className="uppercase text-xs tracking-widest text-neutral-500 mb-6">Полный курс</span>
          <div className="flex items-end gap-2 mb-2">
            <span className="text-6xl font-bold text-neutral-900">4 900</span>
            <span className="text-2xl text-neutral-500 mb-2">₽</span>
          </div>
          <p className="text-neutral-500 text-sm mb-10">единоразовый платёж · доступ навсегда</p>

          <ul className="text-left w-full flex flex-col gap-4 mb-10">
            {[
              "20+ видеоуроков в удобном темпе",
              "Разбор пропорций и анатомии лица",
              "Техники смешивания и нанесения гуаши",
              "Обратная связь от преподавателя",
              "Закрытое сообщество учеников",
              "Список материалов и инструментов",
            ].map((item) => (
              <li key={item} className="flex items-center gap-3 text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>

          <button className="bg-black text-white px-10 py-4 text-sm uppercase tracking-wide w-full hover:bg-neutral-800 transition-colors duration-300 cursor-pointer">
            Записаться на курс
          </button>
        </div>

        <p className="text-center text-neutral-400 text-sm mt-6">
          Есть вопросы? Напишите нам — ответим в течение дня
        </p>
      </div>
    </div>
  );
}
