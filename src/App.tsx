import "./App.css";
import Button from "./components/Button";
import ThemeCard from "./components/ThemeCard";
import linesImg from "/images/lines.svg";
import linesTabletImg from "/images/lines-tablet.svg";
import linesDesktop1Img from "/images/lines-desktop1.svg";
import linesDesktop2Img from "/images/lines-desktop2.svg";
import linesDesktop3Img from "/images/lines-desktop3.svg";
import logoImg from "/images/logo.svg";
import menuImg from "/images/menu.svg";
import stackImg from "/images/stack.png";
import securityImg from "/images/security.png";
import documentImg from "/images/document.png";
import cybersecurityImg from "/images/cyber-security.png";
import meetingRoomImg from "/images/meeting-room.png";
import ListItem from "./components/ListItem";
import lectoryImg from "/images/podium.png";
import pointItemImg from "/images/point-item.svg";
import ProgramItemText from "./components/ProgramItemText";
import TableRegistrationForm from "./components/TableRegistrationForm";
import arrowDownImg from "/images/arrow-down.png";
import { useEffect, useState } from "react";
import LecturerCard from "./components/LecturerCard";
import lecturer1Img from "/images/filippov-pavel.png";
import lecturer2Img from "/images/dmitriev-roman.png";
import lecturer3Img from "/images/pyhalov-vitaliy.png";
import lecturer4Img from "/images/grigorischenko-aleksandr.png";
import LectoryRegistrationForm from "./components/LectoryRegistrationForm";

function App() {
  const [isFirstDayOpened, setIsFirstDayOpened] = useState<boolean>(false);
  const [isFirstDayMounted, setIsFirstDayMounted] = useState<boolean>(false);
  const [isSecondDayOpened, setIsSecondDayOpened] = useState<boolean>(false);
  const [isSecondDayMounted, setIsSecondDayMounted] = useState<boolean>(false);
  const [isThirdDayOpened, setIsThirdDayOpened] = useState<boolean>(false);
  const [isThirdDayMounted, setIsThirdDayMounted] = useState<boolean>(false);
  const lectures = [
    {
      id: 1,
      day: 1,
      imgSrc: lecturer4Img,
      time: "11:00-12:00",
      theme:
        "Вертикальное импортозамещение:\nПуть к технологической безопасности сетей связи",
      description:
        "Александр Григорищенко,\nруководитель продуктового офиса NGN/IMS\nНТЦ ПРОТЕЙ.",
    },
    {
      id: 2,
      day: 1,
      imgSrc: lecturer2Img,
      time: "12:00-13:00",
      theme: "Экосистема Унифицированных Коммуникаций ПРОТЕЙ",
      description: "Роман Дмитриев, Пресейл-менеджер\nПРОТЕЙ Технологии",
    },
    {
      id: 3,
      day: 1,
      imgSrc: lecturer1Img,
      time: "12:00-13:00",
      theme:
        "Единая среда реагирования: как связь управляет инцидентами в ERP и системах безопасности",
      description:
        "Павел Филлипов, Руководитель группы продуктового маркетинга\nПРОТЕЙ Технологии",
    },
    {
      id: 4,
      day: 1,
      imgSrc: lecturer2Img,
      time: "16:00-17:00",
      theme:
        "Управление инфраструктурой\nв распределенных сетях: котроль сотен объектов из одной точки",
      description: "Роман Дмитриев, Пресейл-менеджер\nПРОТЕЙ Технологии",
    },
    {
      id: 5,
      day: 2,
      imgSrc: lecturer1Img,
      time: "11:00-12:00",
      theme:
        "Выделенные сети pLTE на объектах КИИ. Надежная транспортная среда для взаимодействия людей и координации устройств",
      description:
        "Кочетков Игорь, руководитель направления частных сетей\nНТЦ ПРОТЕЙ",
    },
    {
      id: 6,
      day: 2,
      imgSrc: lecturer4Img,
      time: "12:00-13:00",
      theme:
        "Технологии профессиональной радиосвязи\nдля критической связи в экстренных ситуациях",
      description:
        "Александр Григорищенко, руководитель продуктового офиса NGN/IMS\nНТЦ ПРОТЕЙ",
    },
    {
      id: 7,
      day: 2,
      imgSrc: lecturer1Img,
      time: "12:00-13:00",
      theme:
        "Системы оперативно-диспетчерской связи и управления: зонтичная система мониторинга",
      description:
        "Павел Филлипов, руководитель группы продуктового маркетинга\nПРОТЕЙ Технологии",
    },
    {
      id: 8,
      day: 2,
      imgSrc: lecturer1Img,
      time: "16:00-17:00",
      theme: "Тактическая система связи и оперативного реагирования «Метель»",
      description: "Олег Федоровских, руководитель проектного офиса\nПРОТЕЙ СТ",
    },
    {
      id: 9,
      day: 3,
      imgSrc: lecturer3Img,
      time: "11:00-12:00",
      theme:
        "Надежная корпоративная сеть телефонной связи - что нужно\nи как создать?",
      description: "Пыхалов Виталий, Менеджер продуктов\nПРОТЕЙ Технологии",
    },
    {
      id: 10,
      day: 3,
      imgSrc: lecturer1Img,
      time: "12:00-13:00",
      theme:
        "Стратегия обеспечения высокой доступности\nи надёжности информационных систем",
      description: "Олег Федоровских, руководитель проектного офиса\nПРОТЕЙ СТ",
    },
    {
      id: 11,
      day: 3,
      imgSrc: lecturer1Img,
      time: "12:00-13:00",
      theme: "Неизвестно, будет ли",
      description: "123\n123",
    },
    {
      id: 12,
      day: 3,
      imgSrc: lecturer1Img,
      time: "16:00-17:00",
      theme: "Неизвестно, будет ли",
      description: "123\n123",
    },
  ];
  const [selectedLectures, setSelectedLectures] = useState<
    { id: number; day: number }[]
  >([]);
  const [isMenuOpened, setIsMenuOpened] = useState<boolean>(false);

  useEffect(() => {
    const timeoutIds: number[] = [];
    const dayStates = [
      {
        isOpened: isFirstDayOpened,
        isMounted: isFirstDayMounted,
        setMounted: setIsFirstDayMounted,
      },
      {
        isOpened: isSecondDayOpened,
        isMounted: isSecondDayMounted,
        setMounted: setIsSecondDayMounted,
      },
      {
        isOpened: isThirdDayOpened,
        isMounted: isThirdDayMounted,
        setMounted: setIsThirdDayMounted,
      },
    ];

    dayStates.forEach(({ isOpened, isMounted, setMounted }) => {
      if (!isOpened && isMounted) {
        const timeoutId = window.setTimeout(() => {
          setMounted(false);
        }, 400);
        timeoutIds.push(timeoutId);
      }
    });

    return () => {
      timeoutIds.forEach((timeoutId) => window.clearTimeout(timeoutId));
    };
  }, [
    isFirstDayOpened,
    isFirstDayMounted,
    isSecondDayOpened,
    isSecondDayMounted,
    isThirdDayOpened,
    isThirdDayMounted,
  ]);

  const handleLectureClick = (id: number, day: number) => {
    if (
      selectedLectures.some(
        (selectedLecture) =>
          selectedLecture.id === id && selectedLecture.day === day,
      )
    ) {
      setSelectedLectures(
        selectedLectures.filter(
          (selectedLecture) =>
            selectedLecture.id !== id || selectedLecture.day !== day,
        ),
      );
    } else {
      setSelectedLectures([...selectedLectures, { id: id, day: day }]);
    }
  };

  const handleDayClick = (day: 1 | 2 | 3) => {
    const isOpenedByDay = {
      1: isFirstDayOpened,
      2: isSecondDayOpened,
      3: isThirdDayOpened,
    } as const;

    const setOpenedByDay = {
      1: setIsFirstDayOpened,
      2: setIsSecondDayOpened,
      3: setIsThirdDayOpened,
    } as const;

    const setMountedByDay = {
      1: setIsFirstDayMounted,
      2: setIsSecondDayMounted,
      3: setIsThirdDayMounted,
    } as const;

    if (isOpenedByDay[day]) {
      setOpenedByDay[day](false);
      return;
    }

    setMountedByDay[day](true);
    window.requestAnimationFrame(() => {
      setOpenedByDay[day](true);
    });
  };

  return (
    <div className="w-full flex flex-col items-center justify-center relative">
      <div className="w-full flex flex-col items-center justify-center gap-26 md:gap-40 min-[90rem]:gap-60 px-[21px] py-[26px] bg-(--blue-dark) md:px-[70px] md:py-[50px] min-[90rem]:px-[138px] min-[90rem]:py-[60px]">
        <img
          className="object-cover absolute top-0 left-0 w-full visible md:hidden"
          src={linesImg}
          alt="lines"
        />
        <img
          className="object-cover absolute top-0 left-0 w-full hidden md:block min-[90rem]:hidden z-0"
          src={linesTabletImg}
          alt="lines"
        />
        <img
          className="object-cover absolute top-0 left-0 w-full hidden min-[90rem]:block z-0"
          src={linesDesktop1Img}
          alt="lines"
        />

        <div
          id="headerAndContent"
          className="w-full flex flex-col items-center justify-center min-[90rem]:items-start gap-15 md:gap-28 min-[90rem]:gap-60 z-10"
        >
          <div id="header" className="flex items-center justify-between w-full">
            <img src={logoImg} alt="logo" />
            <div className="relative">
              <img
                className="block md:hidden"
                src={menuImg}
                alt="menu"
                onClick={() => setIsMenuOpened(!isMenuOpened)}
              />
              <div id="menu-container" className="hidden md:block">
                <menu
                  id="menu"
                  className="flex items-center justify-center gap-6"
                >
                  <li className="text-white text-sm min-[90rem]:text-base font-normal leading-tight">
                    <a href="#themes">О мероприятии</a>
                  </li>
                  <li className="text-white text-sm min-[90rem]:text-base font-normal leading-tight">
                    <a href="#participation_formats">Форматы</a>
                  </li>
                  <li className="text-white text-sm min-[90rem]:text-base font-normal leading-tight">
                    <a href="#table_program">Круглый стол</a>
                  </li>
                  <li className="text-white text-sm min-[90rem]:text-base font-normal leading-tight">
                    <a href="#lectories-registration">Лекторий</a>
                  </li>
                </menu>
              </div>
              <menu
                id="menu-mobile"
                className={`flex flex-col items-end justify-center gap-2 p-2 dark-blue-gradient-element backdrop-blur-[10.5px] absolute translate-y-1/4 ${isMenuOpened ? "block" : "hidden"} top-0 right-0 w-max`}
              >
                <li
                  onClick={() => setIsMenuOpened(false)}
                  className="text-white text-sm font-normal leading-tight"
                >
                  <a href="#themes">О мероприятии</a>
                </li>
                <li
                  onClick={() => setIsMenuOpened(false)}
                  className="text-white text-sm font-normal leading-tight"
                >
                  <a href="#participation_formats">Форматы</a>
                </li>
                <li
                  onClick={() => setIsMenuOpened(false)}
                  className="text-white text-sm font-normal leading-tight"
                >
                  <a href="#table_program">Круглый стол</a>
                </li>
                <li
                  onClick={() => setIsMenuOpened(false)}
                  className="text-white text-sm font-normal leading-tight"
                >
                  <a href="#lectories-registration">Лекторий</a>
                </li>
              </menu>
            </div>
          </div>
          <div
            id="about"
            className="w-full min-[90rem]:w-[840px] flex flex-col items-start justify-center gap-4 md:gap-6"
          >
            <div
              id="main-info"
              className="flex items-center justify-left gap-2 md:gap-6"
            >
              <div
                id="main-info-title"
                className="h-[17px] flex items-center justify-left gap-2"
              >
                <div className="w-px h-full bg-(--blue)" />
                <p className="text-white text-xs md:text-base min-[90rem]:text-lg font-normal">
                  «Связь-2026»
                </p>
              </div>
              <div
                id="main-info-date"
                className="h-[17px] flex items-center justify-left gap-2"
              >
                <div className="w-px h-full bg-(--blue)" />
                <p className="text-white text-xs md:text-base min-[90rem]:text-lg font-normal">
                  9-11 апреля
                </p>
              </div>
              <div
                id="main-info-location"
                className="h-[17px] flex items-center justify-left gap-2"
              >
                <div className="w-px h-full bg-(--blue)" />
                <p className="text-white text-xs md:text-base min-[90rem]:text-lg font-normal">
                  Зал «Немчинов»
                </p>
              </div>
            </div>
            <h1 className="text-white text-2xl md:text-[44px] min-[90rem]:text-[56px] font-bold w-min leading-7.5 md:leading-12 min-[90rem]:leading-14">
              Импортозамещение или{" "}
              <span className="blue-gradient-text">локализация</span>
            </h1>
            <div
              id="description_container"
              className="w-full flex flex-col items-start justify-center gap-2"
            >
              <h2 className="text-white text-sm md:text-xl min-[90rem]:text-2xl font-semibold leading-4.5 md:leading-6 min-[90rem]:leading-7">
                Стратегия повышения контролируемости и управляемости ИТ-решений
                для государства и КИИ — какой путь выбрать?
              </h2>
              <p className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal leading-3 md:leading-4 min-[90rem]:leading-5">
                Закрытая дискуссия и практический лекторий для ИТ и
                телекоммуникационной отраслей
              </p>
            </div>
            <div
              id="button_container"
              className="w-full flex flex-col md:flex-row items-center justify-center min-[90rem]:justify-start gap-2 md:gap-6"
            >
              <Button
                text="Участвовать в круглом столе"
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("table_program")?.offsetTop,
                    behavior: "smooth",
                  });
                }}
                color="light"
                isFullWidth={false}
              />
              <Button
                text="Зарегистрироваться на лекторий"
                onClick={() => {
                  window.scrollTo({
                    top: document.getElementById("lectories-registration")
                      ?.offsetTop,
                    behavior: "smooth",
                  });
                }}
                color="dark"
                isFullWidth={false}
              />
            </div>
          </div>
        </div>

        <div
          id="themes"
          className="w-full flex flex-col items-start justify-center gap-8 min-[90rem]:gap-20"
        >
          <div
            id="texts"
            className="flex flex-col items-start justify-center gap-2"
          >
            <h2 className="text-white font-semibold text-base md:text-[32px] min-[90rem]:text-[40px]">
              Точка выбора для отрасли ИТ
            </h2>
            <p className="text-white text-xs md:text-base min-[90rem]:text-lg font-normal md:leading-5 min-[90rem]:leading-7 min-[90rem]:w-[613px] leading-4.5">
              <span className="min-[90rem]:font-semibold min-[90rem]:text-2xl min-[90rem]:leading-12">
                Перед отраслью стоит практический вопрос: <br />
              </span>
              Как обеспечить реальную управляемость инфраструктуры и
              устойчивость КИИ, а не формальное соответствие требованиям?
            </p>
          </div>

          <div
            id="themes-list"
            className="w-full flex flex-col md:grid md:grid-cols-2 items-center justify-center gap-4 min-[90rem]:gap-6"
          >
            <ThemeCard
              title="Контролируемость архитектуры"
              description="Полный цикл разработки и производства как фактор управляемости"
              imgSrc={stackImg}
            />
            <ThemeCard
              title="Устойчивость КИИ"
              description="Способность инфраструктуры противостоять сложным и продолжительным угрозам"
              imgSrc={securityImg}
            />
            <ThemeCard
              title="Требования регуляторов"
              description="Соответствие нормативной базе без компромиссов"
              imgSrc={documentImg}
            />
            <ThemeCard
              title="Информационная безопасность"
              description="Безопасная разработка, аудит и мониторинг защищённости"
              imgSrc={cybersecurityImg}
            />
          </div>
        </div>

        <div
          id="participation_formats"
          className="w-full flex flex-col items-center justify-center gap-8 md:gap-11"
        >
          <div
            id="texts"
            className="flex flex-col items-center justify-center gap-2 md:gap-4"
          >
            <h2 className="text-white font-semibold text-base md:text-[32px] min-[90rem]:text-[40px]">
              Форматы участия
            </h2>
            <p className="text-white text-xs md:text-base min-[90rem]:text-lg font-normal md:leading-5 min-[90rem]:leading-7">
              Выберите подходящий формат взаимодействия
            </p>
          </div>
          <div
            id="content-containers"
            className="flex flex-col md:flex-row gap-2 min-[90rem]:gap-6"
          >
            <div
              id="container"
              className="dark-blue-gradient-element dark-blue-hover-shadow w-full p-4 md:p-6 min-[90rem]:p-12 flex flex-col items-center justify-between gap-6"
            >
              <div
                id="description"
                className="flex flex-col items-start justify-center gap-3"
              >
                <div
                  id="image-container"
                  className="p-2 flex items-center justify-center dark-blue-gradient-element relative"
                >
                  <img src={meetingRoomImg} alt="meeting room" />
                </div>
                <div id="title" className="flex flex-col gap-2">
                  <h3 className="text-white text-sm md:text-xl min-[90rem]:text-2xl md:leading-6 min-[90rem]:leading-8 font-semibold">
                    Круглый стол
                  </h3>
                  <p className="text-(--blue) text-[10px] md:text-sm min-[90rem]:text-base md:leading-4.5 min-[90rem]:leading-6 font-normal">
                    СТРАТЕГИЧЕСКАЯ ДИСКУССИЯ
                  </p>
                </div>
                <p
                  id="detailed-description"
                  className="text-white text-[10px] md:text-sm min-[90rem]:text-base md:leading-4 min-[90rem]:leading-6 font-normal md:tracking-[-0.01em]"
                >
                  Профессиональный диалог производителей, потребителей и
                  регуляторов о реальной
                  <br />
                  управляемости ИТ-инфраструктуры
                </p>
                <div
                  id="list"
                  className="flex flex-col items-start justify-center gap-4"
                >
                  <ListItem text="Прямой диалог с регуляторами" />
                  <ListItem text="Обсуждение стратегии отрасли" />
                  <ListItem text="Нетворкинг высокого уровня" />
                  <ListItem text="Камерный формат (до 50 участников)" />
                </div>
              </div>
              <Button
                text="Запросить приглашение"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  window.scrollTo({
                    top: document.getElementById("table-registration")
                      ?.offsetTop,
                    behavior: "smooth",
                  });
                }}
                color="light"
              />
            </div>
            <div
              id="container"
              className="dark-blue-gradient-element dark-blue-hover-shadow w-full p-4 md:p-6 min-[90rem]:p-12 flex flex-col items-center justify-between gap-6"
            >
              <div
                id="description"
                className="flex flex-col items-start justify-center gap-3"
              >
                <div
                  id="image-container"
                  className="p-2 flex items-center justify-center dark-blue-gradient-element relative"
                >
                  <img src={lectoryImg} alt="lectory" />
                </div>
                <div id="title" className="flex flex-col gap-2">
                  <h3 className="text-white text-sm md:text-xl min-[90rem]:text-2xl md:leading-6 min-[90rem]:leading-8 font-semibold">
                    Открытый лекторий
                  </h3>
                  <p className="text-(--blue) text-[10px] md:text-sm min-[90rem]:text-base md:leading-4.5 min-[90rem]:leading-6 font-normal">
                    ТЕХНОЛОГИИ И ПРАКТИКА
                  </p>
                </div>
                <p
                  id="detailed-description"
                  className="text-white text-[10px] md:text-sm min-[90rem]:text-base md:leading-4 min-[90rem]:leading-6 font-normal md:tracking-[-0.01em]"
                >
                  Серия практических докладов о безопасной разработке,
                  российских ПАК и внедрении технологических решений
                </p>
                <div
                  id="list"
                  className="flex flex-col items-start justify-center gap-4"
                >
                  <ListItem text="10+ экспертных докладов" />
                  <ListItem text="Разбор реальных кейсов" />
                  <ListItem text="Технические демонстрации" />
                  <ListItem text="Ответы на вопросы" />
                </div>
              </div>
              <Button
                text="Выбрать лекции"
                onClick={(e: React.MouseEvent<HTMLButtonElement>) => {
                  e.stopPropagation();
                  window.scrollTo({
                    top: document.getElementById("lectories-registration")
                      ?.offsetTop,
                    behavior: "smooth",
                  });
                }}
                color="dark"
              />
            </div>
          </div>
        </div>

        <div
          id="table_program"
          className="w-full flex flex-col justify-center items-start gap-6 min-[90rem]:gap-12 min-[90rem]:relative"
        >
          <img
            className="hidden min-[90rem]:block z-0 absolute -top-1/5 right-0 w-2/3 -mr-[138px]"
            src={linesDesktop2Img}
            alt="lines"
          />
          <div
            id="title"
            className="w-full flex flex-col items-start justify-center gap-2 md:gap-6 relative z-10"
          >
            <h1 className="text-white text-2xl md:text-[32px] min-[90rem]:text-[40px] font-bold md:font-semibold leading-7.5 md:leading-10 min-[90rem]:leading-14">
              Программа <br className="block min-[90rem]:hidden" /> круглого
              стола
            </h1>
            <p className="text-white text-xs md:text-base min-[90rem]:text-lg font-normal min-[90rem]:leading-7">
              Ключевые векторы дискуссии
            </p>
            <div
              id="note"
              className="top-0 right-0 -translate-y-1/2 md:translate-y-0 dark-blue-gradient-element absolute py-2 px-4"
            >
              <p className="text-white text-[10px] md:text-sm min-[90rem]:text-base md:leading-4.5 min-[90rem]:leading-6 font-normal">
                Дискуссионный формат
                <br />с экспертами отрасли
              </p>
            </div>
          </div>
          <div
            id="programm-list"
            className="w-full flex items-start justify-start relative gap-6 min-[90rem]:gap-10 z-10"
          >
            <div
              id="svgs"
              className="w-12 shrink-0 flex flex-col items-center justify-center -ml-[21px] min-[90rem]:ml-0 md:mt-6"
            >
              <img
                className="w-full aspect-square"
                src={pointItemImg}
                alt="point item"
              />
              <div className="h-[108px] min-[90rem]:h-[184px] w-px bg-(--blue)" />
              <img
                className="w-full aspect-square"
                src={pointItemImg}
                alt="point item"
              />
              <div className="h-[125px] min-[90rem]:h-[208px] w-px bg-(--blue)" />
              <img
                className="w-full aspect-square"
                src={pointItemImg}
                alt="point item"
              />
              <div className="h-[108px] min-[90rem]:h-[184px] w-px bg-(--blue)" />
              <img
                className="w-full aspect-square"
                src={pointItemImg}
                alt="point item"
              />
              <div className="h-[91px] min-[90rem]:h-[177px] w-px bg-(--blue)" />
              <img
                className="w-full aspect-square"
                src={pointItemImg}
                alt="point item"
              />
              <div className="h-[142px] min-[90rem]:h-[232px] w-px bg-(--blue)" />
              <img
                className="w-full aspect-square"
                src={pointItemImg}
                alt="point item"
              />
            </div>
            <div
              id="programm-items"
              className="w-[276px] md:w-full min-[90rem]:w-[685px] flex flex-col items-start justify-center gap-6 min-[90rem]:gap-12"
            >
              <ProgramItemText
                category="ПРОИЗВОДИТЕЛИ"
                title="Разработка ПО и производство"
                description="Почему разработка в производстве важна? Как выполнить требования регуляторов по отечественному производству: от микроэлектроники до конструктива. Как обеспечить реальную контролируемость? Как отличить псевдо-производство, от реального?"
              />
              <ProgramItemText
                category="ПРОИЗВОДИТЕЛИ"
                title="Разработка ПО"
                description="Почему важна безопасная разработка ПО? Написание кода без использования Open-Source Software (OSS) и правильное использование инструментов на основе искусственного интеллекта. Комплексный аудит ИБ, тестирование на проникновение, оценка защищённости, мониторинг защищённости корпоративных систем."
              />
              <ProgramItemText
                category="ПОТРЕБИТЕЛИ"
                title="Потребители В2В"
                description="Важность вопроса технологической безопасности. Является ли ключевым приоритетом реальная устойчивость к кибератакам, способность противостоять сложным и продолжительным угрозам? Инструменты для защиты инфраструктуры."
              />
              <ProgramItemText
                category="ПОТРЕБИТЕЛИ"
                title="Потребители В2G"
                description="Какие основные требования к сетям и инфраструктуре органов государственной власти (ОГВ)? Важность обеспечения безопасности инфраструктуры ОГВ и принимаемые меры по их развитию."
              />
              <ProgramItemText
                category="РЕГУЛЯТОРЫ"
                title="Регулятор в сфере создания"
                description="Какие меры предпринимает Минпромторг для обеспечения безопасности данных и бесперебойной работы систем ОГВ и объектов КИИ? Организация перехода на российские ПАК, проверка актуальности и достоверности категорирования объектов КИИ. Меры поддержки отечественных производителей и потребителей при внедрении ими российских решений на своей ИТ-инфраструктуре."
              />
              <ProgramItemText
                category="РЕГУЛЯТОРЫ"
                title="Регулятор в сфере ИБ"
                description="Как участникам круглого стола обеспечить безопасность информации, оказывающей существенное влияние на безопасность государства в информационной сфере: актуальные требования. Повышение устойчивости КИИ и контроль за соблюдением требований регулятора. Сертификация средств защиты информации и аттестации информационных систем. Приоритеты."
              />
            </div>
          </div>
        </div>

        <div
          id="table-registration"
          className="w-full flex flex-col items-center justify-center gap-4 md:gap-10 min-[90rem]:gap-16"
        >
          <div
            id="title"
            className="flex flex-col items-center justify-center gap-2 md:gap-4"
          >
            <h2 className="text-white font-semibold text-base md:text-[32px] min-[90rem]:text-[40px] text-center">
              Регистрация на круглый стол
            </h2>
            <p className="text-white text-xs md:text-base min-[90rem]:text-lg font-normal text-center min-[90rem]:leading-7">
              Для участия в закрытой дискуссии
              <br />
              необходимо заполнить информацию о себе
            </p>
          </div>
          <TableRegistrationForm />
        </div>

        <div
          id="lectories-registration"
          className="w-full flex flex-col min-[90rem]:flex-row items-start justify-center gap-12 min-[90rem]:gap-6 min-[90rem]:relative z-0"
        >
          <img src={linesDesktop3Img} alt="lines" className="-left-[138px] bottom-1/3 absolute translate-y-1/2 hidden min-[90rem]:block" />
          <div
            id="textsAndLectoriesList"
            className="min-[90rem]:w-full flex flex-col items-start justify-center gap-6 z-10"
          >
            <div
              id="texts"
              className="w-full flex flex-col items-start justify-center gap-2 md:gap-6"
            >
              <h2 className="text-white font-semibold text-base md:text-[32px] min-[90rem]:text-[40px]">
                Программа лектория
              </h2>
              <p className="text-white text-xs md:text-base min-[90rem]:text-lg md:leading-5.5 min-[90rem]:leading-7 font-normal">
                Выберите интересующие вас темы и составьте{" "}
                <br className="hidden min-[90rem]:block" /> индивидуальное
                расписание. Регистрация доступна{" "}
                <br className="hidden min-[90rem]:block" /> на каждое событие
                отдельно.
              </p>
            </div>
            <div
              id="days-list"
              className="w-full flex flex-col items-start justify-center gap-6"
            >
              <div
                id="day-item"
                className={`w-full flex flex-col items-start justify-center transition-all duration-400 ${isFirstDayOpened ? "gap-2 md:gap-4" : "gap-1 md:gap-2"}`}
              >
                <div
                  onClick={() => handleDayClick(1)}
                  className="w-full flex items-center justify-start gap-2.5 cursor-pointer"
                >
                  <p className="text-white text-xs md:text-xl min-[90rem]:text-2xl font-semibold">
                    7 апреля
                  </p>
                  <img
                    src={arrowDownImg}
                    alt="arrow down"
                    className={`${isFirstDayOpened ? "rotate-180" : ""} transition-rotate duration-300 md:w-6 md:h-6`}
                  />
                </div>
                {isFirstDayMounted && (
                  <div
                    id="lecturers-list"
                    className={`w-full transition-[max-height,opacity,transform] duration-400 ease-in-out ${
                      isFirstDayOpened
                        ? "max-h-[1200px] opacity-100 pointer-events-auto"
                        : "max-h-0 opacity-0 pointer-events-none"
                    }`}
                  >
                    <div className="w-full flex flex-col items-center justify-center gap-2">
                      {lectures
                        .filter((lecture) => lecture.day === 1)
                        .map((lecture) => (
                          <LecturerCard
                            onClick={() =>
                              handleLectureClick(lecture.id, lecture.day)
                            }
                            key={lecture.id}
                            isSelected={selectedLectures.some(
                              (selectedLecture) =>
                                selectedLecture.id === lecture.id &&
                                selectedLecture.day === lecture.day,
                            )}
                            imgSrc={lecture.imgSrc}
                            time={lecture.time}
                            theme={lecture.theme}
                            description={lecture.description}
                          />
                        ))}
                    </div>
                  </div>
                )}
                <div
                  id="line"
                  className="w-full h-px bg-(image:--blue-gradient)"
                />
              </div>
            </div>
            <div
              id="day-item"
              className={`w-full flex flex-col items-start justify-center transition-all duration-400 ${isSecondDayOpened ? "gap-2 md:gap-4" : "gap-1 md:gap-2"}`}
            >
              <div
                onClick={() => handleDayClick(2)}
                className="w-full flex items-center justify-start gap-2.5 cursor-pointer"
              >
                <p className="text-white text-xs md:text-xl min-[90rem]:text-2xl font-semibold">
                  8 апреля
                </p>
                <img
                  src={arrowDownImg}
                  alt="arrow down"
                  className={`${isSecondDayOpened ? "rotate-180" : ""} transition-rotate duration-300 md:w-6 md:h-6`}
                />
              </div>
              {isSecondDayMounted && (
                <div
                  id="lecturers-list"
                  className={`w-full overflow-visible transition-[max-height,opacity,transform] duration-400 ease-in-out ${
                    isSecondDayOpened
                      ? "max-h-[1200px] opacity-100 pointer-events-auto"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="w-full flex flex-col items-center justify-center gap-2">
                    {lectures
                      .filter((lecture) => lecture.day === 2)
                      .map((lecture) => (
                        <LecturerCard
                          onClick={() =>
                            handleLectureClick(lecture.id, lecture.day)
                          }
                          key={lecture.id}
                          isSelected={selectedLectures.some(
                            (selectedLecture) =>
                              selectedLecture.id === lecture.id &&
                              selectedLecture.day === lecture.day,
                          )}
                          imgSrc={lecture.imgSrc}
                          time={lecture.time}
                          theme={lecture.theme}
                          description={lecture.description}
                        />
                      ))}
                  </div>
                </div>
              )}
              <div
                id="line"
                className="w-full h-px bg-(image:--blue-gradient)"
              />
            </div>
            <div
              id="day-item"
              className={`w-full flex flex-col items-start justify-center transition-all duration-400 ${isThirdDayOpened ? "gap-2 md:gap-4" : "gap-1 md:gap-2"}`}
            >
              <div
                onClick={() => handleDayClick(3)}
                className="w-full flex items-center justify-start gap-2.5 cursor-pointer"
              >
                <p className="text-white text-xs md:text-xl min-[90rem]:text-2xl font-semibold">
                  9 апреля
                </p>
                <img
                  src={arrowDownImg}
                  alt="arrow down"
                  className={`${isThirdDayOpened ? "rotate-180" : ""} transition-rotate duration-300 md:w-6 md:h-6`}
                />
              </div>
              {isThirdDayMounted && (
                <div
                  id="lecturers-list"
                  className={`w-full overflow-visible transition-[max-height,opacity,transform] duration-400 ease-in-out ${
                    isThirdDayOpened
                      ? "max-h-[1200px] opacity-100 pointer-events-auto"
                      : "max-h-0 opacity-0 pointer-events-none"
                  }`}
                >
                  <div className="w-full flex flex-col items-center justify-center gap-2">
                    {lectures
                      .filter((lecture) => lecture.day === 3)
                      .map((lecture) => (
                        <LecturerCard
                          onClick={() =>
                            handleLectureClick(lecture.id, lecture.day)
                          }
                          key={lecture.id}
                          isSelected={selectedLectures.some(
                            (selectedLecture) =>
                              selectedLecture.id === lecture.id &&
                              selectedLecture.day === lecture.day,
                          )}
                          imgSrc={lecture.imgSrc}
                          time={lecture.time}
                          theme={lecture.theme}
                          description={lecture.description}
                        />
                      ))}
                  </div>
                </div>
              )}
              <div
                id="line"
                className="w-full h-px bg-(image:--blue-gradient)"
              />
            </div>
          </div>
          <div
            id="registration"
            className="w-full min-[90rem]:w-[360px] flex flex-col items-center justify-center gap-6 md:gap-10 z-10"
          >
            <h2 className="text-white font-semibold text-base md:text-[32px] min-[90rem]:text-[40px] min-[90rem]:leading-12">
              Регистрация <br className="hidden min-[90rem]:block" /> на
              лекторий
            </h2>
            <LectoryRegistrationForm selectedLectures={selectedLectures} />
          </div>
        </div>
      </div>
      <div
        id="footer"
        className="w-full absolute left-0 bottom-0 translate-y-[140%] bg-[#0C1B2B] flex flex-col min-[90rem]:flex-row items-start justify-center gap-6 px-16 py-12 md:px-18 md:py-14 min-[90rem]:px-[138px] min-[90rem]:py-20 min-[90rem]:justify-between z-10"
      >
        <img
          src={logoImg}
          className="w-[115px] min-[90rem]:w-[168px] h-[31.5px] min-[90rem]:h-[46px]"
          alt="logo"
        />
        <div
          id="links"
          className="w-full min-[90rem]:w-auto flex flex-col md:flex-row items-start justify-center gap-4 md:justify-between min-[90rem]:justify-center min-[90rem]:gap-[115px]"
        >
          <div
            id="about-company"
            className="flex flex-col items-start justify-center gap-2 min-[90rem]:gap-4"
          >
            <h2 className="text-white text-xs md:text-sm min-[90rem]:text-base font-bold leading-6">
              О компании
            </h2>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <a
                href="#"
                className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal"
              >
                НТЦ ПРОТЕЙ
              </a>
              <a
                href="#"
                className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal"
              >
                ПРОТЕЙ Технологии
              </a>
            </div>
          </div>
          <div
            id="contacts"
            className="flex flex-col items-start justify-center gap-2 min-[90rem]:gap-4"
          >
            <h2 className="text-white text-xs md:text-sm min-[90rem]:text-base font-bold leading-6">
              Контакты
            </h2>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <p className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal">
                sales@protei@ru
              </p>
              <p className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal">
                +7 (812) 449-47-27
              </p>
            </div>
          </div>
          <div
            id="social-networks"
            className="flex flex-col items-start justify-center gap-2 min-[90rem]:gap-4"
          >
            <h2 className="text-white text-xs md:text-sm min-[90rem]:text-base font-bold leading-6">
              Социальные сети
            </h2>
            <div className="w-full flex flex-col items-start justify-center gap-2">
              <a
                href="#"
                className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal"
              >
                Telegram
              </a>
              <a
                href="#"
                className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal"
              >
                ВКонтакте
              </a>
              <a
                href="#"
                className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal"
              >
                MAX
              </a>
              <a
                href="#"
                className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal"
              >
                YouTube
              </a>
              <a
                href="#"
                className="text-white text-[10px] md:text-sm min-[90rem]:text-base font-normal"
              >
                RuTube
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
