"use client";
import { Container } from "@/components/Container";
import { DisplayInput } from "@/components/Input/DisplayInput";
import { Footer } from "@/components/Footer";
import { IconArrow } from "@/components/Icon";
import { Input } from "@/components/Input";
import { useState } from "react";
import { calculateAge } from "@/functions/AgeCalculator";
import { isDateValid } from "@/functions/DateValid";

export default function Home() {
  // Object that stores the IDs of date fields.
  const fieldIds = {
    day: "day",
    month: "month",
    year: "year",
  };

  // State that stores the values of date fields.
  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
  });

  // State that stores the calculated age.
  const [age, setAge] = useState({
    years: "--",
    months: "--",
    days: "--",
  });

  // State that stores error messages for date fields.
  const [errors, setErrors] = useState({
    day: "",
    month: "",
    year: "",
  });

  // State that indicates whether date fields are required.
  const [required, setRequired] = useState({
    day: false,
    month: false,
    year: false,
  });

  // Handles form submission, validates fields, and calculates age.
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const { day, month, year } = formData;
    const currentYear = new Date().getFullYear();

    // Check if any field is empty
    if (!day || !month || !year) {
      setErrors({
        day: day ? "" : "Must fill all fields",
        month: month ? "" : "Must fill all fields",
        year: year ? "" : "Must fill all fields",
      });
      setRequired({
        day: true,
        month: true,
        year: true,
      });
      return;
    }

    const dayNumber = parseInt(day, 10);
    const monthNumber = parseInt(month, 10);
    const yearNumber = parseInt(year, 10);

    if (dayNumber < 1 || dayNumber > 31) {
      return;
    }

    if (monthNumber < 1 || monthNumber > 12) {
      return;
    }

    if (yearNumber > currentYear) {
      return;
    }
    const isValidDate = isDateValid(yearNumber, monthNumber, dayNumber);

    if (!isValidDate) {
      setErrors({
        ...errors,
        day: "Invalid date",
        month: "",
        year: "",
      });
      return;
    }

    // Calculate age
    const calculatedAge = calculateAge(new Date(`${year}-${month}-${day}`));

    // Update age state
    setAge(calculatedAge);

    resetForm();
  }

  // Updates the formData state when the user changes a field's value.
  function handleInputChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;
    if (value === "") {
      resetForm();
    }

    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear the error
    });
  }

  // Clears all form fields.
  function resetForm() {
    setFormData({
      day: "",
      month: "",
      year: "",
    });

    setRequired({
      day: false,
      month: false,
      year: false,
    });
  }

  return (
    <Container>
      <main className="rounded-t-3xl rounded-bl-3xl rounded-br-[30%] bg-white p-6 md:w-3/5 ">
        <form
          action=""
          id="yearForm"
          className="flex flex-col"
          onSubmit={handleSubmit}
        >
          <Input.Root>
            <Input.Label textFor={fieldIds.day} text="Day" data-required={true}>
              <Input.Field
                placeholder="DD"
                id={fieldIds.day}
                name={fieldIds.day}
                max={31}
                value={formData.day}
                onChange={handleInputChange}
                required={required.day}
              />
              <Input.Error text="Must be a valid day" error={errors.day} />
            </Input.Label>
            <Input.Label textFor={fieldIds.month} text="Month">
              <Input.Field
                placeholder="MM"
                id={fieldIds.month}
                name={fieldIds.month}
                max={12}
                value={formData.month}
                onChange={handleInputChange}
                required={required.month}
              />
              <Input.Error text="Must be a valid month" error={errors.month} />
            </Input.Label>
            <Input.Label textFor={fieldIds.year} text="Year">
              <Input.Field
                placeholder="YYYY"
                id={fieldIds.year}
                name={fieldIds.year}
                max={new Date().getFullYear()}
                value={formData.year}
                onChange={handleInputChange}
                required={required.year}
              />
              <Input.Error text="Must be in the past" error={errors.year} />
            </Input.Label>
          </Input.Root>
          <div className="my-16 flex w-full items-center justify-center border-b-2 md:justify-end">
            <button
              type="submit"
              className="absolute flex h-16 w-16 items-center justify-center rounded-full bg-violet-500 hover:bg-neutral-900"
            >
              <span className="sr-only">Button</span>
              <IconArrow width={32} />
            </button>
          </div>
        </form>
        <div className="text-6xl font-extrabold italic">
          <DisplayInput text="years">{age.years.padStart(2, "0")}</DisplayInput>
          <DisplayInput text="months">
            {age.months.padStart(2, "0")}
          </DisplayInput>
          <DisplayInput text="days">{age.days.padStart(2, "0")}</DisplayInput>
        </div>
      </main>
      <Footer />
    </Container>
  );
}
