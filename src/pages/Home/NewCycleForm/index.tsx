import { FormContainer, MinutesAmount, TaskInput } from "./styles";
import { useContext } from "react";
import { useFormContext } from "react-hook-form";
import { CyclesContext } from "../../../contexts/CycleContext";

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext);
  const { register } = useFormContext();

  return (
    <FormContainer>
      <label htmlFor="project-name-input">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="project-name-input"
        placeholder="Dê um nome para o seu projeto"
        disabled={!!activeCycle}
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
