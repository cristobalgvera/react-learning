interface IButton {
  message: string;
  extraClasses?: string;
}

export default function Button({ message, extraClasses }: IButton) {
  const defaultClasses =
    "rounded-full py-2 px-3 uppercase text-xs font-bold cursor-pointer tracking-wider";
  return <div className={`${defaultClasses} ${extraClasses}`}>{message}</div>;
}
