export default function About() {
  return (
    <section className="bg-white py-24 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <img
            src="https://cdn.poehali.dev/projects/dd000423-5073-4d14-a309-ed584cc58066/bucket/28bbbd45-2a83-48be-8226-f2fac15a3bb5.jpg"
            alt="Коновалова Виктория Владимировна"
            className="w-full aspect-[3/4] object-cover"
          />
          <div className="absolute bottom-0 left-0 bg-black text-white px-6 py-4">
            <span className="text-3xl font-bold">5</span>
            <span className="text-sm ml-1">лет опыта</span>
          </div>
        </div>

        <div>
          <p className="uppercase text-xs tracking-widest text-neutral-500 mb-4">Преподаватель</p>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6 leading-tight">
            Коновалова<br />Виктория Владимировна
          </h2>
          <p className="text-neutral-600 text-lg leading-relaxed mb-8">
            Научу рисовать залипательные портреты гуашью — с нуля, в своём темпе, с удовольствием. За 5 лет практики и преподавания я выработала понятную систему, которая работает даже для тех, кто никогда не держал кисть.
          </p>

          <ul className="flex flex-col gap-4">
            {[
              "Более 200 учеников прошли курс",
              "Техника гуаши от базы до сложных портретов",
              "Живая обратная связь на каждом этапе",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-neutral-700">
                <span className="w-1.5 h-1.5 rounded-full bg-black mt-2 shrink-0"></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}