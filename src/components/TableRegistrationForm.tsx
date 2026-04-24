import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  fullName: string;
  phone: string;
  company: string;
  position: string;
  email: string;
};

type SubmitResult = "success" | "error";

function TableRegistrationForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    mode: "onBlur",
    reValidateMode: "onChange",
    defaultValues: {
      fullName: "",
      phone: "",
      company: "",
      position: "",
      email: "",
    },
  });

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [submitResult, setSubmitResult] = useState<SubmitResult>("success");

  const onSubmit = async () => {

    await new Promise((resolve) => window.setTimeout(resolve, 700));
    const isSuccess = Math.random() >= 0.5;

    setSubmitResult(isSuccess ? "success" : "error");
    setIsModalOpen(true);

    if (isSuccess) {
      reset();
    }
  };

  return (
    <form
      id="registration-form"
      className="w-full min-[90rem]:w-[744px] flex flex-col items-center justify-center gap-6 min-[90rem]:gap-16 p-4 md:p-6 min-[90rem]:p-12 dark-blue-gradient-element relative"
      noValidate
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="w-full flex flex-col md:grid md:grid-cols-2 items-start justify-center gap-4 min-[90rem]:gap-6">
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label
            htmlFor="fullName"
            className="text-white text-[10px] md:text-xs min-[90rem]:text-base font-normal"
          >
            ФИО*
          </label>
          <input
            id="fullName"
            className="input-element"
            type="text"
            placeholder="Иванов Иван Иванович"
            aria-invalid={Boolean(errors.fullName)}
            {...register("fullName", {
              required: "Поле обязательно для заполнения",
              validate: (value) => {
                const trimmed = value.trim();
                const fullNameRegex = /^[A-Za-zА-Яа-яЁё\-\s]{6,}$/;
                if (!fullNameRegex.test(trimmed) || trimmed.split(/\s+/).length < 2) {
                  return "Введите ФИО корректно";
                }
                return true;
              },
            })}
          />
          {errors.fullName && (
            <p className="text-red-400 text-[10px] md:text-xs font-normal">
              {errors.fullName.message}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label htmlFor="phone" className="text-white text-[10px] md:text-xs min-[90rem]:text-base font-normal">
            Телефон*
          </label>
          <input
            id="phone"
            className="input-element"
            type="text"
            placeholder="+7 (987) 654-32-10"
            aria-invalid={Boolean(errors.phone)}
            {...register("phone", {
              required: "Поле обязательно для заполнения",
              validate: (value) => {
                const digitsCount = value.trim().replace(/\D/g, "").length;
                if (digitsCount < 11 || digitsCount > 11) {
                  return "Введите корректный номер телефона";
                }
                return true;
              },
            })}
          />
          {errors.phone && (
            <p className="text-red-400 text-[10px] md:text-xs font-normal">
              {errors.phone.message}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label
            htmlFor="company"
            className="text-white text-[10px] md:text-xs min-[90rem]:text-base font-normal"
          >
            Компания*
          </label>
          <input
            id="company"
            className="input-element"
            type="text"
            placeholder="Название компании"
            aria-invalid={Boolean(errors.company)}
            {...register("company", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
            })}
          />
          {errors.company && (
            <p className="text-red-400 text-[10px] md:text-xs font-normal">
              {errors.company.message}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label
            htmlFor="position"
            className="text-white text-[10px] md:text-xs min-[90rem]:text-base font-normal"
          >
            Должность*
          </label>
          <input
            id="position"
            className="input-element"
            type="text"
            placeholder="Руководитель отдела..."
            aria-invalid={Boolean(errors.position)}
            {...register("position", {
              required: "Поле обязательно для заполнения",
              minLength: {
                value: 2,
                message: "Минимум 2 символа",
              },
            })}
          />
          {errors.position && (
            <p className="text-red-400 text-[10px] md:text-xs font-normal">
              {errors.position.message}
            </p>
          )}
        </div>
        <div className="w-full flex flex-col items-start justify-center gap-2">
          <label htmlFor="email" className="text-white text-[10px] md:text-xs min-[90rem]:text-base font-normal">
            Email*
          </label>
          <input
            id="email"
            className="input-element"
            type="text"
            placeholder="example@company.com"
            aria-invalid={Boolean(errors.email)}
            {...register("email", {
              required: "Поле обязательно для заполнения",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "Введите корректный email",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-400 text-[10px] md:text-xs font-normal">
              {errors.email.message}
            </p>
          )}
        </div>
      </div>

      <div id="button-container" className="flex flex-col w-full gap-2">
        <button
          className="bg-(image:--blue-gradient) light-blue-button-hover w-full py-3 px-6 rounded-lg flex items-center justify-center cursor-pointer"
          type="submit"
        >
          <p className="text-white text-xs md:text-base min-[90rem]:text-lg font-normal">
            Запросить приглашение
          </p>
        </button>
        <p className="text-white/30 text-[8px] md:text-xs min-[90rem]:text-sm font-normal text-center">
          Нажимая кнопку, вы соглашаетесь с{" "}
          <span className="underline cursor-pointer">
            политикой обработки персональных данных.
          </span>
        </p>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm px-4">
          <div className="w-full max-w-[320px] md:max-w-[400px] min-[90rem]:w-[500px] rounded-lg bg-(--blue-dark) p-4 border border-(--blue) flex flex-col items-start justify-center gap-4 min-[90rem]:gap-6">
            <h3 className="text-white text-sm md:text-base min-[90rem]:text-lg font-semibold">
              {submitResult === "success" ? "Заявка успешно отправлена" : "Ошибка отправки"}
            </h3>
            <p className="text-white text-[10px] md:text-xs min-[90rem]:text-sm font-normal">
              {submitResult === "success"
                ? "Заявка на участие в круглом столе отправлена. Мы свяжемся с вами в ближайшее время."
                : "Не удалось отправить данные. Попробуйте снова через несколько секунд."}
            </p>
            <button
              type="button"
              className="w-full rounded-lg py-2 text-xs md:text-base min-[90rem]:text-lg font-normal text-white bg-(image:--blue-gradient) light-blue-button-hover cursor-pointer"
              onClick={() => setIsModalOpen(false)}
            >
              Понятно
            </button>
          </div>
        </div>
      )}
    </form>
  );
}

export default TableRegistrationForm;
