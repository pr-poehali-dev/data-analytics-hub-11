const reviews = [
  {
    name: "Анастасия М.",
    tag: "Рисовала впервые",
    text: "Никогда не думала, что смогу нарисовать портрет. После первого урока уже получился узнаваемый образ. Виктория объясняет так, что всё встаёт на своё место.",
    image: "https://cdn.poehali.dev/projects/dd000423-5073-4d14-a309-ed584cc58066/files/2de11827-7041-40cb-b0da-7502aa3036c4.jpg",
  },
  {
    name: "Екатерина Р.",
    tag: "2 месяца на курсе",
    text: "Я рисовала карандашом раньше, но гуашь казалась страшной. Оказалось — это самый залипательный материал. Теперь рисую каждые выходные.",
    image: null,
  },
  {
    name: "Марина С.",
    tag: "Подарила себе на день рождения",
    text: "Брала курс как подарок себе — и не пожалела ни минуты. Очень тёплая атмосфера, живая обратная связь. Уже делаю портрет мамы на её юбилей.",
    image: null,
  },
];

export default function Reviews() {
  return (
    <section className="bg-neutral-50 py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Отзывы</p>
        <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-16 leading-tight">
          Что говорят<br />ученики
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((r) => (
            <div key={r.name} className="bg-white border border-neutral-200 flex flex-col">
              {r.image && (
                <img
                  src={r.image}
                  alt="Работа ученика"
                  className="w-full aspect-[4/3] object-cover"
                />
              )}
              <div className="p-6 flex flex-col gap-4 flex-1">
                <p className="text-neutral-700 leading-relaxed flex-1">«{r.text}»</p>
                <div>
                  <p className="font-bold text-neutral-900">{r.name}</p>
                  <p className="text-xs text-neutral-500 uppercase tracking-wide mt-1">{r.tag}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
