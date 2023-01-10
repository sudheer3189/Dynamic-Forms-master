import { Children, useState } from "react";
import "./App.css";

function App() {
  const [formFields, setFormFields] = useState([
    {
      rule: "rule_1",
      action: [{ action_type: "type_1_1" }, { action_type: "type_1_2" }],
    },
    {
      rule: "rule_2",
      action: [
        { action_type: "type_2_1" },
        { action_type: "type_2_2" },
        { action_type: "type_2_3" },
        { action_type: "type_2_4" },
      ],
    },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const handleActionChange = (action_event, index, act_index) => {
    let data = [...formFields];
    data[index][action_event.target.name] = action_event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log(formFields);
  };

  const addFields = () => {
    let object = {
      rule: "",
      action: [{ action_type: "" }],
    };
    setFormFields([...formFields, object]);
  };

  const addAction = (index) => {
    console.log(index, 41);
    let actionobject = { action_type: "" };
    let data = [...formFields];
    console.log(data, 44);
    let afterPush = data[index]["action"].concat(actionobject);
    data[index]["action"] = afterPush;
    setFormFields(data);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  return (
    <div className="App">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name="rule"
                placeholder="rule"
                onChange={(event) => handleFormChange(event, index)}
                value={form.rule}
              />
              <button onClick={() => removeFields(index)}>Remove Rule</button>
              {form.action.map((act, act_index) => {
                return (
                  <div key={act_index}>
                    <input
                      name="action"
                      placeholder="action"
                      onChange={(action_event) =>
                        handleActionChange(action_event, index, act_index)
                      }
                      value={act.action_type}
                    />
                    <br />
                  </div>
                );
              })}
              <button onClick={() => addAction(index)}>Add Action</button>
            </div>
          );
        })}
        <br />
        <button onClick={addFields}>Add More..</button>
        <br />
        <button onClick={submit}>Submit</button>
      </form>
    </div>
  );
}

export default App;
