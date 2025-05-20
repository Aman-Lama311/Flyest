import Select from "react-select";
import countries from "@/static-data/countries";

// Map for Select options with flag emojis
const countryOptions = countries.map((country) => ({
  value: country.name,
  label: (
    <div className="flex items-center gap-2">
      <span className={`fi fi-${country.code.toLowerCase()}`} />
      <span>{country.name}</span>
    </div>
  ),
  code: country.code
}));
