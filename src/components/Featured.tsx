export default function Featured() {
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between lg:items-center min-h-screen px-6 py-12 lg:py-0 bg-white">
      <div className="flex-1 h-[400px] lg:h-[800px] mb-8 lg:mb-0 lg:order-2">
        <img
          src="https://cdn.poehali.dev/projects/dd000423-5073-4d14-a309-ed584cc58066/files/c866cf64-b831-4dd1-b816-2692b4da92e7.jpg"
          alt="Рисование портрета гуашью"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="flex-1 text-left lg:h-[800px] flex flex-col justify-center lg:mr-12 lg:order-1">
        <h3 className="uppercase mb-4 text-sm tracking-wide text-neutral-600">Чему ты научишься</h3>
        <p className="text-2xl lg:text-4xl mb-8 text-neutral-900 leading-tight">
          Передавать характер и эмоции через лицо. Работать с цветом и светотенью гуашью —
          от эскиза до завершённого портрета.
        </p>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
            Пропорции и анатомия лица
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
            Техники смешивания гуаши
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
            Работа со светом и тенью
          </div>
          <div className="flex items-center gap-3 text-neutral-700">
            <span className="w-1.5 h-1.5 rounded-full bg-black shrink-0"></span>
            Создание живого взгляда и мимики
          </div>
        </div>
        <button className="bg-black text-white border border-black px-4 py-2 text-sm transition-all duration-300 hover:bg-white hover:text-black cursor-pointer w-fit uppercase tracking-wide">
          Программа курса
        </button>
      </div>
    </div>
  );
}