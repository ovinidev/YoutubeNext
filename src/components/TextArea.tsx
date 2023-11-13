import { ChangeEvent } from "react";

interface TextAreaProps {
  onChangeToken: (e: ChangeEvent<HTMLTextAreaElement>) => void;
}

export function TextArea({ onChangeToken }: TextAreaProps) {
  return (
    <textarea
      onChange={(e: ChangeEvent<HTMLTextAreaElement>) => onChangeToken(e)}
      placeholder="Insira o token aqui"
      className="h-44 w-full resize-none bg-slate-100 p-1 text-slate-900 placeholder:text-slate-600 sm:h-[16rem] sm:w-[35rem]"
    />
  );
}
