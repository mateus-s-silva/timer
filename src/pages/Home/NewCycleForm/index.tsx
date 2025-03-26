import { useForm } from "react-hook-form";
import { FormContainer, MinutesAmount, TaskInput } from "./styles";
import { zodResolver } from "@hookform/resolvers/zod";
import * as zod from "zod";

export function NewCycleForm() {
  const newCycleFormValidationSchema = zod.object({
    task: zod.string().min(1, "Informe o nome da tarefa"),
    minutesAmount: zod.number().min(1).max(60),
  });

  type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>;

  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      minutesAmount: 0,
      task: "",
    },
  });
  return (
    <FormContainer>
      <label htmlFor="project-name-input">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="project-name-input"
        placeholder="Dê um nome para o seu projeto"
        {...register("task")}
      />
      <label htmlFor="minutes-input">durante</label>
      <MinutesAmount
        type="number"
        id="minutes-input"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        {...register("minutesAmount", { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  );
}
