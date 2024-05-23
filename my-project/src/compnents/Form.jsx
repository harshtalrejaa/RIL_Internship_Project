import React, { useState } from 'react';

const InputTypes = {
  TEXT: 'text',
  EMAIL: 'email',
  NUMBER: 'number',
  SELECT: 'select',
  CHECKBOX: 'checkbox',
};

const FormField = ({ label, type, options, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value);
  };

  switch (type) {
    case InputTypes.SELECT:
      return (
        <div>
          <label htmlFor={label}>{label}</label>
          <select id={label} onChange={handleChange}>
            {options.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>
      );
    case InputTypes.CHECKBOX:
      return (
        <div>
          <input type={type} id={label} onChange={handleChange} />
          <label htmlFor={label}>{label}</label>
        </div>
      );
    default:
      return (
        <div>
          <label htmlFor={label}>{label}</label>
          <input type={type} id={label} onChange={handleChange} />
        </div>
      );
  }
};

const Form = () => {
  const [formData, setFormData] = useState({});
  const [fields, setFields] = useState([]);

  const handleFieldChange = (value, field) => {
    setFormData({ ...formData, [field]: value });
  };

  const addField = (type, label, options = []) => {
    setFields([...fields, { type, label, options }]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Submitted:', formData);
    // Implement form submission logic here (e.g., send to backend)
  };

  return (
    <div>
      <h2>Form Builder</h2>
      <button onClick={() => addField(InputTypes.TEXT, 'Name')}>
        Add Text Field
      </button>
      <button onClick={() => addField(InputTypes.EMAIL, 'Email')}>
        Add Email Field
      </button>
      <button onClick={() => addField(InputTypes.NUMBER, 'Age')}>
        Add Number Field
      </button>
      <button onClick={() => addField(InputTypes.SELECT, 'Country', ['US', 'UK', 'India'])}>
        Add Select Field
      </button>
      <button onClick={() => addField(InputTypes.CHECKBOX, 'Agree to Terms')}>
        Add Checkbox Field
      </button>
      <form onSubmit={handleSubmit}>
        {fields.map((field) => (
          <FormField
            key={field.label}
            label={field.label}
            type={field.type}
            options={field.options}
            onChange={(value) => handleFieldChange(value, field.label)}
          />
        ))}
        <button type="submit">Submit Form</button>
      </form>
    </div>
  );
};

export default Form;